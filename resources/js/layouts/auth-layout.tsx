import AuthHeroLayout from '@/layouts/auth/auth-hero-layout';
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({
    children,
    title,
    description,
    variant = 'simple',
    backgroundImage,
    ...props
}: {
    children: React.ReactNode;
    title: string;
    description: string;
    variant?: 'simple' | 'hero';
    backgroundImage?: string;
}) {
    const Layout = variant === 'hero' ? AuthHeroLayout : AuthLayoutTemplate;

    return (
        <Layout
            title={title}
            description={description}
            backgroundImage={backgroundImage}
            {...props}
        >
            {children}
        </Layout>
    );
}
