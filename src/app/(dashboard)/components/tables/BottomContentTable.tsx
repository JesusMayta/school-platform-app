'use client';

import {
    Button,
    Pagination
} from '@heroui/react';
import { useTableController } from '../../hooks';
import { GeneralTextEnums } from '@/enums';

interface Props {
    aboutTableStatusMessage: string;
    totalPages: number;
};

export const BottomContentTable = ({ aboutTableStatusMessage, totalPages }: Props) => {

    const {
        page,

        handleChangeNextPage,
        handleChangePreviousPage,
        setPage
    } = useTableController();

    return (
        <section
            className="flex items-center justify-between px-2 py-2"
        >
            <span
                className="w-[30%] text-small text-fontText-200 font-semibold"
            >
                {aboutTableStatusMessage}
            </span>
            <Pagination
                isCompact
                showControls
                color="secondary"
                className="cursor-pointer"
                page={page}
                total={totalPages}
                onChange={setPage}
            />
            <div className="hidden sm:flex w-[30%] justify-end gap-2">
                <Button
                    isDisabled={totalPages === 1}
                    size="sm"
                    variant="faded"
                    onPress={handleChangePreviousPage}
                >
                    <span className="font-semibold">
                        {GeneralTextEnums.PREVIOUS}
                    </span>
                </Button>
                <Button
                    isDisabled={totalPages === 1}
                    size="sm"
                    variant="shadow"
                    color="secondary"
                    onPress={() => handleChangeNextPage(totalPages)}
                >
                    <p className=" font-semibold">
                        {GeneralTextEnums.NEXT}
                    </p>
                </Button>
            </div>
        </section>
    );
};
