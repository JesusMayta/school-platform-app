import type { Metadata } from 'next';
import { HeroProvider } from '@/providers';
import { montserratFont } from '@/config';
import { GeneralTextEnums } from '@/enums';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - School Platform App',
    default: 'Home - School Platform App'
  },
  description: GeneralTextEnums.DESCRIPTION_APP,
};

interface Props {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {

  return (
    <html
      lang="es"
      className="dark"
    >
      <body
        className={`${montserratFont.className} antialiased`}
      >
        <HeroProvider>
          {children}
        </HeroProvider>
      </body>
    </html>
  );
};
