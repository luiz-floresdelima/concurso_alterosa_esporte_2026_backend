import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { DashboardParticipant, DashboardProps } from '@/types/dashboard';
import { Head, router, usePage } from '@inertiajs/react';
import { useEcho } from '@laravel/echo-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { top_3, participants, count_votes, lastUpdated } = usePage<DashboardProps>().props;
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(lastUpdated ? new Date(lastUpdated as string) : null)
    const totalParticipants = participants?.length ?? 0;
    const formatNumber = (value: number) => new Intl.NumberFormat('pt-BR').format(value);
    const getInitials = (name?: string) =>
        name
            ? name
                .trim()
                .split(/\s+/)
                .slice(0, 2)
                .map((part) => part[0]?.toUpperCase())
                .join('')
            : '??';

    useEcho('votes', '.vote.created', () => {
        console.log('teste')
        router.reload({
            only: ['top_3', 'participants', 'count_votes', 'lastUpdatedAt'],
            onSuccess: () => {
                setLastUpdatedAt(new Date())
            },
        })
    })

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <section className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-50 via-white to-emerald-50 p-6 shadow-sm dark:border-slate-800/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                    <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-amber-300/40 blur-3xl dark:bg-amber-500/20" />
                    <div className="pointer-events-none absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/20" />
                    <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="animate-in fade-in-0 slide-in-from-left-4 duration-700">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/80 dark:text-amber-300/80">
                                Concurso Alterosa Esporte 2026
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50 sm:text-4xl">
                                Panorama do voto popular
                            </h1>
                            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
                                Acompanhe em tempo real os participantes mais votados e a distribuicao geral de votos.
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Total de votos
                                    </p>
                                    <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50">
                                        {formatNumber(count_votes ?? 0)}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Soma geral de todos os participantes
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Participantes
                                    </p>
                                    <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50">
                                        {formatNumber(totalParticipants)}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Total de atletas no painel
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Top 3
                                    </p>
                                    <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-50">
                                        {formatNumber(top_3?.length ?? 0)}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                        Destaques com mais votos
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="animate-in fade-in-0 slide-in-from-right-4 duration-700">
                            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Top 3 do momento
                                        </p>
                                        <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                                            Mais votados
                                        </h2>
                                    </div>
                                    <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
                                        Atualizado às {lastUpdatedAt?.toLocaleTimeString()}
                                    </div>
                                </div>
                                <div className="mt-4 grid gap-3">
                                    {top_3?.length ? (
                                        top_3.map((participant: DashboardParticipant, index: number) => (
                                            <div
                                                key={participant.participant_id}
                                                className="flex items-center gap-4 rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/60"
                                            >
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-semibold text-white">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                                        {participant.name}
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                                        {formatNumber(participant.votes_count ?? 0)} votos
                                                    </p>
                                                </div>
                                                {participant.link_image ? (
                                                    <img
                                                        src={participant.link_image}
                                                        alt={participant.name}
                                                        className="h-12 w-12 rounded-xl object-cover shadow-sm"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                        {getInitials(participant.name)}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="rounded-xl border border-dashed border-slate-200/70 p-6 text-center text-sm text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
                                            Nenhum voto registrado ainda.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Lista completa
                            </p>
                            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50">
                                Participantes
                            </h2>
                        </div>
                        <div className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
                            Ordenado por votos
                        </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
                        <div className="hidden grid-cols-[2fr_1fr_1fr] gap-4 border-b border-slate-200/70 bg-slate-50/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-400 md:grid">
                            <span>Atleta</span>
                            <span>Badge</span>
                            <span className="text-right">Votos</span>
                        </div>
                        <div className="divide-y divide-slate-200/70 dark:divide-slate-800/60">
                            {participants?.length ? (
                                participants.map((participant: DashboardParticipant, index: number) => (
                                    <div
                                        key={participant.participant_id}
                                        className="grid gap-4 px-6 py-4 md:grid-cols-[2fr_1fr_1fr]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                                #{index + 1}
                                            </div>
                                            {participant.link_image ? (
                                                <img
                                                    src={participant.link_image}
                                                    alt={participant.name}
                                                    className="h-11 w-11 rounded-xl object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                    {getInitials(participant.name)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                                                    {participant.name}
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    {participant.link_instagram ?? 'Sem Instagram'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                            {participant.badge ?? 'Sem badge'}
                                        </div>
                                        <div className="flex items-center justify-end text-sm font-semibold text-slate-900 dark:text-slate-50">
                                            {formatNumber(participant.votes_count ?? 0)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                                    Nenhum participante cadastrado.
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
