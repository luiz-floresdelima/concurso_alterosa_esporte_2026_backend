import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Painel geral',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Leads',
        href: '/leads',
        icon: Users,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <div className="flex h-full flex-col bg-slate-950 text-slate-100">
                <SidebarHeader className="border-b border-slate-800/70 px-4 py-5">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
                                <Link href={dashboard()} prefetch>
                                    <AppLogo />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent className="px-2 py-4">
                    <NavMain items={mainNavItems} />
                </SidebarContent>

                <SidebarFooter className="border-t border-slate-800/70 px-2 pb-4 pt-3">
                    <NavUser />
                </SidebarFooter>
            </div>
        </Sidebar>
    );
}
