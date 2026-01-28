export const TEAM_BADGES = {
    América: '/america.svg',
    Atlético: '/atletico.svg',
    Cruzeiro: '/cruzeiro.svg',
} as const;

export type TeamBadge = keyof typeof TEAM_BADGES;

export const isTeamBadge = (badge: unknown): badge is TeamBadge =>
    typeof badge === 'string' && badge in TEAM_BADGES;

export const normalizeBadge = (badge: string) =>
    badge
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();

export const resolveTeamBadge = (badge?: string | null): TeamBadge | null => {
    if (!badge) return null;

    if (isTeamBadge(badge)) return badge;

    const normalized = normalizeBadge(badge);
    if (normalized.includes('america')) return 'América';
    if (normalized.includes('atletico')) return 'Atlético';
    if (normalized.includes('cruzeiro')) return 'Cruzeiro';

    return null;
};

export const getTeamBadgeSvg = (badge?: string | null) => {
    const key = resolveTeamBadge(badge);
    return key ? TEAM_BADGES[key] : null;
};

