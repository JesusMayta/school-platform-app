import {
    useMemo,
    useState
} from 'react';
import { TableHeaderColumnsCourses, TableStatusOptionsCourses } from '../../utils';
import { CourseInterface } from '@/interfaces';

import type { Selection, SortDescriptor } from '@heroui/react';


const initialCoursesColumns = ['name', 'code', 'isActive', 'actions'];

export const useTableCoursesController = (courses: CourseInterface[]) => {

    const [filterValue, setFilterValue] = useState<string>('');
    const [visibleColumns, setVisibleColumns] = useState<Set<string>>(new Set(initialCoursesColumns));
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: 'name',
        direction: 'ascending',
    });
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const hasSearchFilter = Boolean(filterValue);

    const courseHeaderColumns = useMemo(() => {
        if (visibleColumns.size === TableHeaderColumnsCourses.length) {
            return TableHeaderColumnsCourses;
        }
        return TableHeaderColumnsCourses.filter((column) => visibleColumns.has(column.key));
    }, [visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredCourses = [...courses];

        if (hasSearchFilter) {
            filteredCourses = filteredCourses.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== 'all' && Array.from(statusFilter).length !== TableStatusOptionsCourses.length) {
            filteredCourses = filteredCourses.filter(
                (course) => course.isActive === (statusFilter === 'active')
            );
        }

        return filteredCourses;
    }, [courses, filterValue, statusFilter, hasSearchFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

    const sortedCoursesColumns = useMemo(() => {
        return [...courses].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof CourseInterface];
            const second = b[sortDescriptor.column as keyof CourseInterface];

            if (first! < second!) return sortDescriptor.direction === 'ascending' ? -1 : 1;
            if (first! > second!) return sortDescriptor.direction === 'ascending' ? 1 : -1;
            return 0;
        });
    }, [sortDescriptor, courses]);

    return {
        //* Properties
        courseHeaderColumns,
        sortedCoursesColumns,
        visibleColumns,
        filterValue,
        filteredItems,
        pages,
        statusFilter,
        selectedKeys,
        sortDescriptor,

        //* Methods
        setFilterValue,
        setVisibleColumns,
        setSortDescriptor,
        setStatusFilter,
        setSelectedKeys,
    };
};
