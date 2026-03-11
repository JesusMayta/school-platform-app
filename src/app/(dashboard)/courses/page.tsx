import type { Metadata } from 'next';
import { TableCourses } from './components';
import { CoursesEnums } from './enums/CoursesEnums';
import prisma from '@/lib/prisma';
import { CourseInterface } from '@/interfaces';

export const metadata: Metadata = {
    title: 'Listado de cursos',
    description: 'Página para la gestion de cursos de la plataforma.',
};

export default async function CoursesPage() {

    const courses = await prisma.course.findMany();

    return (
        <main className="px-3">
            <h1 className="text-3xl font-bold">
                {CoursesEnums.TITLE_COURSES}
            </h1>

            <section className="mt-12">
                <TableCourses
                    courses={courses as CourseInterface[]}
                />
            </section>
        </main>
    );
};