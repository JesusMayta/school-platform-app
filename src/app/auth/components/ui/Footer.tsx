'use client';

import { FaFlutter } from 'react-icons/fa6';
import Link from 'next/link';
import { GeneralTextEnums } from '@/enums';
import { footerLinks } from '../../utils';

export const Footer = () => (

    <footer className="text-sm border-t text-fontText-100/80 border-accent-gray">
        <div className="flex flex-col items-center w-full p-5 mx-auto sm:flex-row">
            <div className="flex items-center justify-center font-medium md:justify-start">
                <FaFlutter
                    size={15}
                    className="text-primary-300"
                />
                <span
                    className="ml-3 font-semibold hover:text-primary-300"
                >
                    {GeneralTextEnums.APP_NAME}
                </span>
            </div>
            <p className="mt-4 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary-300 sm:py-2 sm:mt-0 text-fontText-100/80">
                © {new Date().getFullYear()} NextJs —
                <Link
                    href="https://github.com/JesusMayta"
                    className="ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    @JesuScript.-
                </Link>
            </p>
            <span className="inline-flex justify-center gap-3 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                {footerLinks.map(({ id, href, Icon }) => (
                    <Link
                        key={id}
                        href={href}
                        className="hover:text-primary-300"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Icon
                            size={15}
                        />
                    </Link>
                ))}
            </span>
        </div>
    </footer>

);

