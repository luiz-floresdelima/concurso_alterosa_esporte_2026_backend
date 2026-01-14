import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const title =
        breadcrumbs.length > 0
            ? breadcrumbs[breadcrumbs.length - 1]?.title
            : 'Dashboard';

    return (
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-slate-200/70 bg-white/80 px-6 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4 dark:border-slate-800/70 dark:bg-slate-950/80">
            <div className="flex items-center gap-3">
                <SidebarTrigger className="-ml-1 border border-slate-200/70 bg-white/90 text-slate-700 shadow-sm hover:bg-white dark:border-slate-800/70 dark:bg-slate-900/80 dark:text-slate-200" />
                <div className="leading-tight">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Painel
                    </p>
                    <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="ml-auto hidden items-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:flex">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-600 dark:text-emerald-300">
                    Ao vivo
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                    Temporada 2026
                </span>
            </div>
        </header>
    );
}
