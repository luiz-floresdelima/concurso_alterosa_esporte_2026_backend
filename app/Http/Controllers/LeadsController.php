<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Illuminate\Http\Response;
use Inertia\Inertia;

class LeadsController extends Controller
{
    public function index()
    {
        return Inertia::render('leads', [
            'leads' => $this->getAllLeads(),
        ]);
    }

    public function getAllLeads()
    {
        return Vote::with('participant')
            ->latest()
            ->get();
    }

    public function exportCSV()
    {
        $leads = $this->getAllLeads();

        $fileName = 'leads.csv';

        $headers = [
            'Content-Type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => "attachment; filename=\"$fileName\"",
        ];

        $columns = ['Votante', 'E-mail', 'Voto', 'CPF', 'Data de criação'];

        $callback = function () use ($columns, $leads) {
            $file = fopen('php://output', 'w');

            fprintf($file, chr(0xEF).chr(0xBB).chr(0xBF));

            fputcsv($file, $columns, ';');

            foreach ($leads as $lead) {
                fputcsv($file, [
                    $lead->name,
                    $lead->email,
                    $lead->participant->name ?? 'Participante não localizado',
                    $lead->cpf,
                    $lead->created_at->format('d/m/Y H:i:s'),
                ], ';');
            }

            fclose($file);
        };

        return response()->stream($callback, Response::HTTP_OK, $headers);

    }
}
