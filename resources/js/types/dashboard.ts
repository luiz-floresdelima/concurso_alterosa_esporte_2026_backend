import { PageProps } from '@inertiajs/core'

export interface DashboardParticipant {
    participant_id: number;
    name: string;
    badge?: string | null;
    link_image?: string | null;
    link_video?: string | null;
    link_instagram?: string | null;
    votes_count?: number;
}

export interface DashboardProps extends PageProps {
    top_3: DashboardParticipant[];
    participants: DashboardParticipant[];
    count_votes: number;
    votes_last_5m: number;
    votes_last_10m: number;
    votes_last_30m: number;
    lastUpdated: string;
}
