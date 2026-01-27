import type { IconType } from 'react-icons';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter
} from 'react-icons/fa6';
import type { UrlObject } from 'url';

interface Props {
    id: number;
    href: UrlObject | __next_route_internal_types__.RouteImpl<string>;
    Icon: IconType;
};

export const footerLinks: Props[] = [
    {
        id: 1,
        href: '/',
        Icon: FaFacebookF,
    },
    {
        id: 2,
        Icon: FaInstagram,
        href: '/',
    },
    {
        id: 3,
        Icon: FaXTwitter,
        href: '/',
    },
    {
        id: 4,
        Icon: FaLinkedinIn,
        href: '/',
    }
];