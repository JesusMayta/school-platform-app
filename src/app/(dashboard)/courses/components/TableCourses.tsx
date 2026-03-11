'use client';

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from '@heroui/react';
import type { CourseInterface } from "@/interfaces";
import { BottomContentTable, TopContentTable } from "../../components";
import { TableHeaderColumnsCourses, TableStatusOptionsCourses } from "../../utils";
import { RenderColumnsCourses } from "./RenderColumnsCourses";
import { useTableCoursesController } from '../hooks';

interface Props {
    courses: CourseInterface[];
};

const initialCoursesColumns = ['name', 'code', 'isActive', 'actions'];

export const TableCourses = ({ courses }: Props) => {

    // const [filterValue, setFilterValue] = React.useState("");
    // const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    // const [visibleColumns, setVisibleColumns] = React.useState(new Set([]));
    // const [statusFilter, setStatusFilter] = React.useState("all");
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [sortDescriptor, setSortDescriptor] = React.useState({
    //     column: "age",
    //     direction: "ascending",
    // });
    // const [page, setPage] = React.useState(1);

    const {
        selectedKeys,
        sortDescriptor,
        courseHeaderColumns,
        sortedCoursesColumns,
        filteredItems,
        pages,
        setSelectedKeys,
        setSortDescriptor
    } = useTableCoursesController(courses);

    // const hasSearchFilter = Boolean(filterValue);

    // const headerColumns = React.useMemo(() => {
    //     if (visibleColumns === "all") return columns;

    //     return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    // }, [visibleColumns]);

    // const filteredItems = React.useMemo(() => {
    //     let filteredUsers = [...users];

    //     if (hasSearchFilter) {
    //         filteredUsers = filteredUsers.filter((user) =>
    //             user.name.toLowerCase().includes(filterValue.toLowerCase()),
    //         );
    //     }
    //     if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    //         filteredUsers = filteredUsers.filter((user) =>
    //             Array.from(statusFilter).includes(user.status),
    //         );
    //     }

    //     return filteredUsers;
    // }, [users, filterValue, statusFilter]);

    // const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

    // const items = React.useMemo(() => {
    //     const start = (page - 1) * rowsPerPage;
    //     const end = start + rowsPerPage;

    //     return filteredItems.slice(start, end);
    // }, [page, filteredItems, rowsPerPage]);

    // const sortedItems = React.useMemo(() => {
    //     return [...items].sort((a, b) => {
    //         const first = a[sortDescriptor.column];
    //         const second = b[sortDescriptor.column];
    //         const cmp = first < second ? -1 : first > second ? 1 : 0;

    //         return sortDescriptor.direction === "descending" ? -cmp : cmp;
    //     });
    // }, [sortDescriptor, items]);

    return (
        <Table
            isHeaderSticky
            aria-label="Example table with custom cells, pagination and sorting"
            bottomContent={
                <BottomContentTable
                    totalPages={pages}
                    aboutTableStatusMessage={
                        selectedKeys === 'all'
                            ? "All items selected"
                            : `${selectedKeys.size} of ${filteredItems.length} selected`
                    }
                />
            }
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[382px]",
            }}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={
                <TopContentTable
                    statusOptions={TableStatusOptionsCourses}
                    totalElementsMessage="Total"
                    columns={TableHeaderColumnsCourses}
                    initialVisibleColumns={initialCoursesColumns}
                />
            }
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >
            <TableHeader
                columns={courseHeaderColumns}
            >
                {(column) => (
                    <TableColumn
                        key={column.id}
                        align={column.key === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedCoursesColumns}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) =>
                            <TableCell>
                                {RenderColumnsCourses({ course: item, columnKey })}
                            </TableCell>
                        }
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

