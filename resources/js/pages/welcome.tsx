import { dashboard, login } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import ae_logo from '@/../assets/DA-+POST+(3).png'

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

            <div className="flex min-h-screen items-center justify-center bg-[#FDFDFC] dark:bg-[#0a0a0a]">
                <div className="w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-sm dark:bg-[#161615]">

                    <div className="mb-6 flex justify-center">
                        <img
                            src="/images/AE_logo.png"
                            alt="Logo do Cliente"
                            className="h-25"
                        />
                    </div>

                    <p className="mb-6 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                        Acesse sua conta para continuar
                    </p>

                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="block w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                        >
                            Ir para o Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="mb-3 block w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                            >
                                Entrar
                            </Link>

                            {/* {canRegister && (
                                <Link
                                    href={register()}
                                    className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                >
                                    Criar conta
                                </Link>
                            )} */}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
