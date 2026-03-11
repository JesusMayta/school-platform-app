import { auth } from '@/auth';
import { GeneralTextEnums } from '@/enums';
import { DashboardItems } from './utils';
import { AdminDashboardView } from './views';

export default async function DashboardPage() {

    const session = await auth();

    return (
        <main>
            <h1 className="text-5xl font-bold">
                {GeneralTextEnums.WELCOME},
                <span className="ms-2 text-primary">
                    {session?.user?.name} {session?.user?.lastName || ''}
                </span>
            </h1>

            <p className="text-sm mt-3 text-fontText-300 font-medium">
                {DashboardItems.subtitleByRole[session?.user?.role as keyof typeof DashboardItems.subtitleByRole]}
            </p>

            {session?.user?.role === 'ADMIN' && <AdminDashboardView />}
        </main>
    );
};