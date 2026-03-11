export interface CourseInterface {
    id: string;
    name: string;
    description: string;
    code: string;
    startTime: Date;
    endTime: Date;
    period: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
    actions: string;
};