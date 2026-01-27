'use client';

import { FaFlutter } from 'react-icons/fa6';
import Link from 'next/link';
import { GeneralTextEnums } from '@/enums';

export const Header = () => (
    <header>
        <div className="container flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row">
            <Link
                href="/auth/login"
                className="flex items-center mb-4 font-bold transition-transform duration-500 md:mb-0 hover:scale-105"
            >
                <FaFlutter
                    size={25}
                    className="text-primary"
                />
                <span
                    className="ml-3 text-lg text-fontText-200"
                >
                    {GeneralTextEnums.APP_NAME}
                </span>
            </Link>
        </div>
    </header>
);

