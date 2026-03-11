import { LiaBookSolid } from 'react-icons/lia';
import {
    LuNotebookPen,
    LuUsers
} from 'react-icons/lu';
import {
    TbSchool,
    TbSmartHome
} from 'react-icons/tb';
import { GoPeople } from 'react-icons/go';
import { CiCalendarDate } from 'react-icons/ci';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';

interface SideProps {
    id: number;
    title: string;
    tooltip: string;
    Icon: IconType;
    path: string;
};

type Props = {
    [key: string]: SideProps[]
};

const samePathsToAllUsers = [
    {
        id: 1,
        title: 'Inicio',
        tooltip: 'Inicio',
        Icon: TbSmartHome,
        path: '/'
    },
];

export const SidebarItems: Props = {
    STUDENT: [
        ...samePathsToAllUsers,
        {
            id: 2,
            title: 'Mis cursos',
            tooltip: 'Mis cursos',
            Icon: LiaBookSolid,
            path: '/myCourses'
        },
        {
            id: 3,
            title: 'Calendario',
            tooltip: 'Calendario',
            Icon: CiCalendarDate,
            path: '/calendar',
        },
        {
            id: 4,
            title: 'Chats',
            tooltip: 'Chats',
            Icon: IoChatbubbleEllipsesOutline,
            path: '/chats',
        },
        {
            id: 5,
            title: 'Calificaciones',
            tooltip: 'Calificaciones',
            Icon: LuNotebookPen,
            path: '/calificaciones'
        },
        {
            id: 6,
            title: 'Compañeros',
            tooltip: 'Compañeros',
            Icon: GoPeople,
            path: '/classmates',
        }
    ],
    ADMIN: [
        ...samePathsToAllUsers,
        {
            id: 2,
            title: 'Usuarios',
            tooltip: 'Listado de usuarios',
            Icon: LuUsers,
            path: '/users'
        }, {
            id: 3,
            title: 'Cursos',
            tooltip: 'Listado de cursos',
            Icon: LiaBookSolid,
            path: '/courses'
        },
        {
            id: 4,
            title: 'Matricular alumnos',
            tooltip: 'Matricular alumnos',
            Icon: TbSchool,
            path: '/classmates',
        }
    ],
    TEACHER: [
        ...samePathsToAllUsers
    ]
};