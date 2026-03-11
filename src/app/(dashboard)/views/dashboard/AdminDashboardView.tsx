import { getAllCourses } from '@/actions';

export const AdminDashboardView = async () => {

    const requiredAdminData = await Promise.all([
        getAllCourses(),
    ]);
    console.log("🚀 ~ AdminDashboardView ~ requiredAdminData:", requiredAdminData)

    return (
        <div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                {requiredAdminData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-surface border border-accent-gray p-5 overflow-hidden"
                    >

                        <p className="">
                            248
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
};
