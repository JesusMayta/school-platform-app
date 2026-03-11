import {
    useCallback,
    useState
} from 'react';
import type { Selection } from '@heroui/react';

export const useTableController = (initialVisibleColumns?: string[] | undefined) => {

    const [page, setPage] = useState<number>(1);
    const [filterValue, setFilterValue] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<Selection>('all');
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(initialVisibleColumns));

    const handleSearchChange = useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue('');
        }
    }, []);

    const handleChangeNextPage = useCallback((totalPages: number) => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }, [page]);

    const handleChangePreviousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const handleClear = useCallback(() => {
        setFilterValue('');
        setPage(1);
    }, []);


    const handleRowsPerPageChange = useCallback((value: string) => {
        setRowsPerPage(Number(value));
        setPage(1);
    }, []);

    return {
        //* Props
        filterValue,
        page,
        rowsPerPage,
        statusFilter,
        visibleColumns,

        //* Methods
        handleChangeNextPage,
        handleChangePreviousPage,
        handleClear,
        handleRowsPerPageChange,
        handleSearchChange,
        setPage,
        setStatusFilter,
        setVisibleColumns
    };
}; 
