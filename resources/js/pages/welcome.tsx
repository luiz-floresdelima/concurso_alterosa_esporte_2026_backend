import { dashboard, login } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Bem-vindo">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative min-h-screen overflow-hidden text-white">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
                        style={{ backgroundImage: "url('/images/bg.webp')" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/70 to-black/95" />
                    <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <img
                            src="/images/AE_logo.png"
                            alt="Logo do Cliente"
                            className="h-14"
                        />

                        <div className="space-y-4">
                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Concurso Alterosa Esporte 2026
                            </h1>
                            <p className="text-base text-white/80 sm:text-lg">
                                Centralize inscrições, avaliações e resultados
                                em um painel feito para o ritmo do esporte.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/70 lg:justify-start">
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                                Fluxo ágil
                            </span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                                Dados confiaveis
                            </span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                                Time sincronizado
                            </span>
                        </div>
                    </div>

                    <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/90 p-8 text-neutral-900 shadow-2xl backdrop-blur-xl dark:bg-neutral-950/70 dark:text-white">
                        <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
                            Acesse sua conta para continuar o gerenciamento do
                            concurso.
                        </p>

                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="block w-full rounded-md bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                            >
                                Ir para o Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="mb-3 block w-full rounded-md bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                                >
                                    Entrar
                                </Link>

                                {/* {canRegister && (
                                    <Link
                                        href={register()}
                                        className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-center text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                    >
                                        Criar conta
                                    </Link>
                                )} */}
                            </>
                        )}

                        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
                            Ambiente oficial do concurso. Suporte disponivel em
                            horario comercial.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
