'use client';

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input
} from '@heroui/react';
import { FaChevronDown } from 'react-icons/fa6';
import { HiPlusSmall } from 'react-icons/hi2';
import { CiSearch } from 'react-icons/ci';
import { useTableController } from '../../hooks';
import type {
    TableColumnsInterface,
    TableOptionsStatusInterface
} from '@/interfaces';
import { TableEnums } from '../../enums';

interface Props {
    statusOptions: TableOptionsStatusInterface[];
    totalElementsMessage: string,
    columns: TableColumnsInterface[],
};

export const TopContentTable = ({ columns, statusOptions, totalElementsMessage }: Props) => {

    const {
        filterValue,
        statusFilter,
        visibleColumns,

        handleClear,
        handleRowsPerPageChange,
        handleSearchChange,
        setStatusFilter,
        setVisibleColumns
    } = useTableController();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-3">
                <Input
                    isClearable
                    variant="faded"
                    className="w-full sm:max-w-[44%]"
                    placeholder={TableEnums.SEARCH_BY}
                    startContent={<CiSearch />}
                    value={filterValue}
                    onClear={handleClear}
                    onValueChange={handleSearchChange}
                />
                <div className="flex gap-3">
                    <Dropdown>
                        <DropdownTrigger
                            className="hidden sm:flex"
                        >
                            <Button
                                endContent={
                                    <FaChevronDown />
                                }
                                variant="solid"
                                color="success"

                            >
                                {TableEnums.STATUS}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={statusFilter}
                            selectionMode="multiple"
                            onSelectionChange={setStatusFilter}
                        >
                            {statusOptions.map(({ id, name }) => (
                                <DropdownItem
                                    key={id}
                                    className="capitalize"
                                >
                                    {name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger className="hidden sm:flex">
                            <Button
                                endContent={
                                    <FaChevronDown />
                                } variant="flat">
                                {TableEnums.COLUMNS}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={visibleColumns}
                            selectionMode="multiple"
                            onSelectionChange={setVisibleColumns}
                        >
                            {columns.map(({ id, name }) => (
                                <DropdownItem
                                    key={id}
                                    className="capitalize"
                                >
                                    {name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Button
                        // color="secondary"
                        className="bg-primary-200 text-background-100 font-semibold"
                        variant="shadow"
                        endContent={<HiPlusSmall size={20} />}
                    >
                        {TableEnums.ADD_NEW}
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                {/* <span className="text-default-400 text-small">Total {users.length} users</span> */}
                <span className="text-default-400 text-small">
                    {totalElementsMessage}
                </span>
                <label className="flex items-center text-default-400 text-small">
                    Rows per page:
                    <select
                        className="bg-transparent outline-solid outline-transparent text-default-400 text-small"
                        onChange={(e) => handleRowsPerPageChange(e.target.value)}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </div>
        </div>
    );
};
