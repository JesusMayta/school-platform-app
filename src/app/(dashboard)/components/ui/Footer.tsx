import { FaFlutter } from 'react-icons/fa6';
import { GeneralTextEnums } from '@/enums';

export const Footer = () => (
    <footer
        className="w-full px-6 pt-4 pb-2 border-t select-none border-primary-300"
    >
        <div
            className="flex items-center mb-1"
        >
            <div
                className="flex items-center gap-2 text-fontText-100/50"
            >
                <FaFlutter
                    size={15}
                    className="text-primary-300"
                />
                <span
                    className="text-xs font-semibold"
                >
                    {GeneralTextEnums.APP_NAME}
                </span>
            </div>

            <div
                className="flex items-center gap-2 border-l border-primary-300 ms-3 ps-3"
            >
                <div
                    className="bg-green-600 rounded-full size-2"
                />
                <span
                    className="text-xs text-fontText-100/70"
                >
                    {GeneralTextEnums.ALL_SYSTEM_OPERATIVE}
                </span>
            </div>
        </div>
        <span
            className="text-xs text-fontText-100/70"
        >
            © {new Date().getFullYear()} {GeneralTextEnums.AUTHOR}. All rights reserved.
        </span>
    </footer>
);

