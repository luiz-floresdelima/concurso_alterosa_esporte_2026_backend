import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
    backgroundImage?: string;
}

export default function AuthHeroLayout({
    children,
    title,
    description,
    backgroundImage,
}: PropsWithChildren<AuthLayoutProps>) {
    const imageUrl = backgroundImage ?? '/images/bg.webp';

    return (
        <div className="relative min-h-svh overflow-hidden bg-neutral-950 text-white">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/95" />
                <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-svh items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/90 p-8 text-neutral-900 shadow-2xl backdrop-blur-xl dark:bg-neutral-950/70 dark:text-white">
                    <div className="space-y-2 text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                            Acesso seguro
                        </p>
                        {title && (
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="mt-8">{children}</div>
                </div>
            </div>
        </div>
    );
}
