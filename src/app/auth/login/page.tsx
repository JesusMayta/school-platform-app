import * as motion from 'motion/react-client';
import type { Metadata } from 'next';
import { LoginForm } from '../components';
import { GeneralTextEnums } from '@/enums';
import { LoginEnums } from '../enums';

export const metadata: Metadata = {
    title: 'Iniciar Sesión',
    description: GeneralTextEnums.LOGINPAGE_DESCRIPTION,
};

export default function LoginPage() {

    return (
        <main
            className="flex items-center justify-center w-full h-full"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="flex items-center justify-center w-full h-full"
            >
                <div className="flex flex-col w-full max-w-sm gap-4 rounded-large">
                    <div className="flex flex-col items-center pb-6">
                        <p className="text-4xl font-bold">
                            {LoginEnums.LOG_IN}
                        </p>
                        <p className="mt-2 text-sm text-center text-fontText-200/80">
                            {LoginEnums.LOG_IN_DESCRIPTION}
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </motion.div>
        </main>
    );
};