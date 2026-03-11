import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import {
    Footer,
    Header
} from './components';

interface Props {
    children: React.ReactNode;
};

export default async function AuthLayout({ children }: Props) {

    const session = await auth();

    if (session?.user) {
        redirect('/');
    }

    return (
        <div className="relative w-full overflow-hidden select-none bg-background h-dvh min-h-dvh">

            <div className="absolute inset-0 z-0 bg-radial-[ellipse_80%_60%_at_50%_0%] from-fontText-300/30 to-transparent-[70%]" />

            <div className="relative w-full h-full">
                <div className="h-full grid grid-rows-[auto_1fr_auto]">
                    <div className="w-full border-b border-accent-gray">
                        <Header />
                    </div>
                    <section>
                        {children}
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    );
};