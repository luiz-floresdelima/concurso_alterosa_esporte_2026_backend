import { PageProps } from '@inertiajs/core'

export interface LeadVote {
    id: number;
    name: string;
    email: string;
    participant_id: number;
    participant?: {
        participant_id: number;
        name: string;
    } | null;
}

export interface LeadsProps extends PageProps {
    leads: LeadVote[];
}
