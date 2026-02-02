import {
    Prisma,
    PrismaClient
} from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter
});

const salt = bcrypt.genSaltSync();
const hash = bcrypt.hashSync('12345678', salt);

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Emma',
        lastName: 'Antonella',
        email: 'emma.antonela@gmail.com',
        code: '1630105',
        password: hash,
        role: 'STUDENT',
    }, {
        name: 'Sebastian',
        lastName: 'Mayta',
        email: 'cipor@gmail.com',
        code: '1630106',
        password: hash,
        role: 'ADMIN',
    }, {
        name: 'Gaby',
        lastName: 'Pacori',
        email: 'gaby.pacori@gmail.com',
        code: '1630107',
        password: hash,
        role: 'TEACHER',
    }
];

export async function main() {
    for (const onlyUser of userData) {
        await prisma.user.create({ data: onlyUser });
    }
};

main();