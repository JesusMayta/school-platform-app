'use client';

import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import {
    Button,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    User
} from '@heroui/react';
import type { CourseInterface } from '@/interfaces';

interface Props {
    course: CourseInterface,
    columnKey: string | number;
};

export const RenderColumnsCourses = ({ course, columnKey }: Props) => {

    const cellValue = course[columnKey as keyof CourseInterface];

    switch (columnKey) {
        case "name":
            return (
                <User
                    avatarProps={{
                        radius: "lg",
                        src: course.image ?? '/public/images/courseImageDefault.webp'
                    }}
                    description={course.description}
                    name={cellValue as string}
                >
                    {course.name}
                </User>
            );
        case "code":
            return (
                <div className="flex flex-col">
                    <p className="capitalize text-bold text-small">
                        {cellValue as string}
                    </p>
                </div>
            );
        case "isActive":
            return (
                <Chip
                    className="capitalize"
                    color={course.isActive ? "success" : "danger"}
                    size="sm"
                    variant="flat"
                >
                    {course.isActive ? "Activo" : "Terminado"}
                </Chip>
            );
        case "actions":
            return (
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            size="sm"
                            variant="light"
                        >
                            <IoEllipsisVerticalSharp
                                className="text-fontText-200"
                            />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="view">View</DropdownItem>
                        <DropdownItem key="edit">Edit</DropdownItem>
                        <DropdownItem key="delete">Delete</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        default:
            return cellValue;
    }

};
