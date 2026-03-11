'use server';

import { UserSessionInterface } from '@/interfaces';
import prisma from '@/lib/prisma';

export const getAllRecentUsers = async () => {

    try {

        const [] = await prisma.$transaction([
            prisma.user.findMany({
                orderBy: {
                    createdAt: 'desc'
                },
            }),
            prisma.user.count(),
        ]);



    } catch (error) {

    }
};

export const getUsersByRole = async (role: UserSessionInterface['role']) => {

    try {

        const [users, totalUsersByRole] = await prisma.$transaction([
            prisma.user.findMany({
                where: {
                    role
                }
            }),
            prisma.user.count(),
        ]);

        return {
            users,
            totalUsersByRole
        };
    } catch (error) {
        console.error('Error fetching users by role:', error);
        return {
            users: [],
            totalUsersByRole: 0
        };
    }
};