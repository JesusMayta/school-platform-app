'use client';

import { HeroUIProvider } from '@heroui/react'

interface Props {
    children: React.ReactNode
};

export const HeroProvider = ({ children }: Props) => (
    <HeroUIProvider>
        {children}
    </HeroUIProvider>
);
