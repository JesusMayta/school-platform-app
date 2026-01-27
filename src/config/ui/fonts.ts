import {
    Montserrat_Alternates,
    Poppins
} from 'next/font/google';

export const montserratFont = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});