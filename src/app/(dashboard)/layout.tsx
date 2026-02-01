import { auth } from '@/auth';
import { redirect } from 'next/navigation';

interface Props {
    children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {

    const session = await auth();

    if (!session?.user) {
        redirect('/auth/login');
    }

    return (
        <div>
            {children}
        </div>
    );
};