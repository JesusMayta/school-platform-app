'use server';

import prisma from '@/lib/prisma';

export const getAllCourses = async () => {

    try {
        const [courses, totalCourses] = await prisma.$transaction([
            prisma.course.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            prisma.course.count(),
        ]);

        return {
            courses,
            totalCourses
        };
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [[], 0];
    }
};