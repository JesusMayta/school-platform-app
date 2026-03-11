type Role = 'STUDENT' | 'ADMIN' | 'TEACHER';

export interface UserSessionInterface {
    id: string,
    email: string,
    code: string,
    name: string,
    lastName: string,
    role: Role,
    createdAt: Date,
    updatedAt: Date,
    isActive: boolean,
    image?: string,
};
