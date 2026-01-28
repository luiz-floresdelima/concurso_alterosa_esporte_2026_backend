import { getTeamBadgeSvg, resolveTeamBadge, type TeamBadge } from '../constants/badges';
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
    const { participants, count_votes, votes_last_5m, votes_last_10m, votes_last_30m, lastUpdated } =
        usePage<DashboardProps>().props;
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

    const badgeOrder: TeamBadge[] = ['América', 'Atlético', 'Cruzeiro'];
    const badgeColors: Record<TeamBadge, string> = {
        América: 'bg-emerald-500',
        Atlético: 'bg-slate-900 dark:bg-slate-100',
        Cruzeiro: 'bg-blue-600',
    };

    const badgeStats = badgeOrder.map((badge) => {
        let votes = 0;
        let athletes = 0;

        for (const participant of participants ?? []) {
            if (resolveTeamBadge(participant.badge) !== badge) continue;
            votes += participant.votes_count ?? 0;
            athletes += 1;
        }

        const totalVotes = count_votes ?? 0;
        const percent = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;

        return { badge, votes, athletes, percent };
    });

    const topByTeam = badgeOrder.map((badge) => {
        const teamParticipants = (participants ?? [])
            .filter((participant) => resolveTeamBadge(participant.badge) === badge)
            .sort((a, b) => (b.votes_count ?? 0) - (a.votes_count ?? 0))
            .slice(0, 3);

        const totals = badgeStats.find((stat) => stat.badge === badge);

        return {
            badge,
            teamParticipants,
            votes: totals?.votes ?? 0,
            athletes: totals?.athletes ?? 0,
            percent: totals?.percent ?? 0,
        };
    });

    useEcho('votes', '.vote.created', () => {
        console.log('teste')
        router.reload({
            only: [
                'participants',
                'count_votes',
                'votes_last_5m',
                'votes_last_10m',
                'votes_last_30m',
                'lastUpdated',
            ],
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
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

                                <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:col-span-2 dark:border-slate-800/60 dark:bg-slate-900/70">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Votos recentes
                                    </p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                        {[
                                            { label: 'Últimos 5 min', value: votes_last_5m ?? 0 },
                                            { label: 'Últimos 10 min', value: votes_last_10m ?? 0 },
                                            { label: 'Últimos 30 min', value: votes_last_30m ?? 0 },
                                        ].map(({ label, value }) => (
                                            <div
                                                key={label}
                                                className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-3 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40"
                                            >
                                                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    {label}
                                                </p>
                                                <p className="mt-2 text-2xl font-semibold tabular-nums text-slate-900 dark:text-slate-50">
                                                    {formatNumber(value)}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                    Votos contabilizados
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                                        Atualiza automaticamente com novos votos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="animate-in fade-in-0 slide-in-from-right-4 duration-700">
                            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            Distribuição por time
                                        </p>
                                        <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                                            Visão geral
                                        </h2>
                                    </div>
                                    <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
                                        Atualizado às {lastUpdatedAt?.toLocaleTimeString()}
                                    </div>
                                </div>
                                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    {badgeStats.map(({ badge, votes, athletes, percent }) => (
                                        <div
                                            key={badge}
                                            className="rounded-xl border border-slate-200/70 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/40"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex min-w-0 items-center gap-2.5">
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-950 dark:ring-slate-800/60">
                                                        {getTeamBadgeSvg(badge) ? (
                                                            <img
                                                                src={getTeamBadgeSvg(badge) ?? undefined}
                                                                alt={`Brasão ${badge}`}
                                                                className="h-6 w-6 object-contain"
                                                                loading="lazy"
                                                            />
                                                        ) : null}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                                                            {badge}
                                                        </p>
                                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                                            {formatNumber(athletes)} participantes
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-50">
                                                        {formatNumber(votes)}
                                                    </p>
                                                    <p className="text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                                                        {percent.toFixed(1)}%
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/70">
                                                <div
                                                    className={`h-full ${badgeColors[badge]}`}
                                                    style={{ width: `${Math.min(100, percent)}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Top 3 por time
                            </p>
                            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50">
                                Destaques por clube
                            </h2>
                        </div>
                        <div className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
                            Ordenado por votos
                        </div>
                    </div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-3">
                        {topByTeam.map(({ badge, teamParticipants, votes, athletes, percent }) => (
                            <div
                                key={badge}
                                className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800/60 dark:bg-slate-950"
                            >
                                <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 bg-slate-50/70 px-5 py-4 dark:border-slate-800/60 dark:bg-slate-900/40">
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-950 dark:ring-slate-800/60">
                                            {getTeamBadgeSvg(badge) ? (
                                                <img
                                                    src={getTeamBadgeSvg(badge) ?? undefined}
                                                    alt={`Brasão ${badge}`}
                                                    className="h-7 w-7 object-contain"
                                                    loading="lazy"
                                                />
                                            ) : null}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                                                {badge}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {formatNumber(votes)} votos • {percent.toFixed(1)}%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                        {formatNumber(athletes)} participantes
                                    </div>
                                </div>
                                <div className="space-y-2 p-4">
                                    {teamParticipants.length ? (
                                        teamParticipants.map((participant, index) => (
                                            <div
                                                key={participant.participant_id}
                                                className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/50"
                                            >
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-semibold text-white">
                                                    {index + 1}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
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
                                                        className="h-10 w-10 rounded-xl object-cover shadow-sm"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                                                        {getInitials(participant.name)}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="rounded-xl border border-dashed border-slate-200/70 p-6 text-center text-sm text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
                                            Nenhum participante desse time.
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
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
                        <div className="hidden grid-cols-[2fr_1.2fr_0.8fr] gap-4 border-b border-slate-200/70 bg-slate-50/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-400 md:grid">
                            <span>Atleta</span>
                            <span>Badge</span>
                            <span className="text-right">Votos</span>
                        </div>
                        <div className="divide-y divide-slate-200/70 dark:divide-slate-800/60">
                            {participants?.length ? (
                                participants.map((participant: DashboardParticipant, index: number) => (
                                    <div
                                        key={participant.participant_id}
                                        className="group grid gap-4 px-6 py-4 transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-900/40 md:grid-cols-[2fr_1.2fr_0.8fr]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 ring-1 ring-slate-200/70 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700/70">
                                                {index + 1}
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
                                        <div className="min-w-0">
                                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 md:hidden">
                                                Badge
                                            </div>
                                            {(() => {
                                                const badgeSvg = getTeamBadgeSvg(participant.badge);
                                                const badgeLabel = participant.badge ?? 'Sem badge';

                                                return (
                                                    <div className="mt-2 flex min-w-0 items-center gap-3 md:mt-0">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
                                                            {badgeSvg ? (
                                                                <img
                                                                    src={badgeSvg}
                                                                    alt={participant.badge ? `Brasão ${participant.badge}` : 'Brasão do time'}
                                                                    className="h-7 w-7 object-contain"
                                                                    loading="lazy"
                                                                />
                                                            ) : (
                                                                <div className="h-7 w-7 rounded-lg bg-slate-100 dark:bg-slate-800" />
                                                            )}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                                                                {badgeLabel}
                                                            </p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 md:hidden">
                                                                Time do participante
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                        <div className="md:text-right">
                                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 md:hidden">
                                                Votos
                                            </div>
                                            <div className="mt-2 text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-50 md:mt-0">
                                                {formatNumber(participant.votes_count ?? 0)}
                                            </div>
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
