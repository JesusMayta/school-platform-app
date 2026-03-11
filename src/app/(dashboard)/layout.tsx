import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import {
    Footer,
    Navbar,
    Sidebar
} from './components';
import { Divider } from '@heroui/react';

interface Props {
    children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {

    const session = await auth();

    if (!session?.user) {
        redirect('/auth/login');
    }

    const localeDate = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="relative w-full overflow-hidden h-dvh min-h-dvh bg-background">

            <div
                className="relative z-50 flex w-full h-full"
            >
                <section>
                    <Sidebar
                        userSession={session.user}
                    />
                </section>

                <div className="relative xl:ml-72 ease-soft-spring transition-all duration-200 overflow-y-auto grid grid-rows-[auto_1fr_auto] scrollbar-hide w-full">

                    <header className="relative w-full! h-16">
                        <Navbar
                            userSession={session.user}
                        />

                        <Divider
                            className="absolute bottom-0 h-px bg-accent-gray"
                        />
                    </header>

                    <main className="w-full h-full px-4 py-6 sm:px-8">

                        <p className="mb-3 text-sm text-fontText-300 font-medium">
                            {localeDate.charAt(0).toUpperCase() + localeDate.slice(1)}
                        </p>

                        {children}
                    </main>

                    <Footer />
                </div>

            </div>
        </div>
    );
};