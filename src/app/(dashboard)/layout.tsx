import { redirect } from 'next/navigation';

interface Props {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {

    redirect('/auth/login');

    return (
        <div>
            {children}
        </div>
    );
};