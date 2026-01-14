export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white shadow-sm">
                <span className="text-xs font-semibold tracking-[0.2em]">
                    AE
                </span>
            </div>
            <div className="ml-2 grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-slate-900 dark:text-slate-50">
                    Alterosa Esporte
                </span>
                <span className="truncate text-xs text-slate-500 dark:text-slate-400">
                    Concurso 2026
                </span>
            </div>
        </>
    );
}
