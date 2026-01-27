import AppLayout from '@/layouts/app-layout';
import { formatDateToBrazilian } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { LeadVote, LeadsProps } from '@/types/leads';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Leads',
        href: '/leads',
    },
];

export default function Leads() {
    const { leads } = usePage<LeadsProps>().props;
    const formatNumber = (value: number) => new Intl.NumberFormat('pt-BR').format(value);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leads" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <section className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Base de votantes
                            </p>
                            <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                Leads de votacao
                            </h1>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                Informações de cada votante.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200/70 bg-slate-50 px-5 py-3 text-center dark:border-slate-800/60 dark:bg-slate-900">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Total de leads
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                                {formatNumber(leads?.length ?? 0)}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
                    <div className="p-4 flex justify-end">
                        <a href="/api/export/leads" className="btn btn-primary">
                            Exportar CSV
                        </a>
                    </div>
                    <div className="hidden grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 border-b border-slate-200/70 bg-slate-50/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-400 md:grid">
                        <span>Votante</span>
                        <span>Email</span>
                        <span>Voto</span>
                        <span>CPF</span>
                        <span>Data do voto</span>
                    </div>
                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800/60">
                        {leads?.length ? (
                            leads.map((lead: LeadVote) => (
                                <div
                                    key={lead.id}
                                    className="grid gap-4 px-6 py-4 md:grid-cols-[1fr_1fr_1fr_1fr_1fr]"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                            {lead.name}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Lead ativo
                                        </p>
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-300">
                                        {lead.email}
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                        {lead.participant?.name ?? 'Participante nao localizado'}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-300">
                                        {lead.cpf}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-300">
                                        {formatDateToBrazilian(lead.created_at)}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                                Nenhum lead registrado ate o momento.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
