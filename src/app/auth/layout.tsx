import {
    Footer,
    Header
} from './components';

interface Props {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <div className="relative w-full overflow-hidden bg-black select-none h-dvh min-h-dvh">

            <div className="absolute inset-0 z-0 bg-radial-[ellipse_80%_60%_at_50%_0%] from-background-200 to-transparent-[70%]" />

            <div className="relative w-full h-full">
                <div className="h-full grid grid-rows-[auto_1fr_auto]">
                    <Header />
                    <section>
                        {children}
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    );
};