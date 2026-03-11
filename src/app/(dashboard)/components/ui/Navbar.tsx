'use client';

import { IoMdNotifications } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { TbLogout2 } from 'react-icons/tb';
import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger
} from '@heroui/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GeneralTextEnums } from '@/enums';
import type { UserSessionInterface } from '@/interfaces';

export const Navbar = ({ userSession }: { userSession: UserSessionInterface }) => {

    const pathName = usePathname();

    return (
        <nav
            className="flex items-center justify-between w-full px-6 pt-3.5 select-none text-fontText-100 sm:px-8"
        >
            <p className="text-base font-semibold text-fontText-300">
                {"Inicio"}
            </p>

            <div
                className="flex items-center gap-5"
            >
                <Badge
                    color="danger"
                    content="4"
                    shape="circle"
                    classNames={{
                        badge: "text-xs! font-semibold",
                    }}
                >
                    <Button
                        isIconOnly
                        as={Link}
                        href="#"
                        radius="md"
                        variant="light"
                        className="border focus:outline-none bg-surface border-accent-gray"
                    >
                        <IoMdNotifications
                            size={25}
                            className="text-primary"
                        />
                    </Button>
                </Badge>

                <Dropdown
                    placement="bottom-end"
                >
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform cursor-pointer ring-primary"
                            name={userSession.name}
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu
                        className="text-font!"
                        aria-label="Profile Actions"
                        variant="flat"
                    >
                        <DropdownItem
                            key="profile"
                            className="gap-2 h-14"
                        >
                            <p
                                className="mb-2 text-xs font-semibold">
                                {GeneralTextEnums.EMAIL}:
                            </p>
                            <p className="text-xs font-medium">
                                {userSession.email}
                            </p>
                        </DropdownItem>
                        <DropdownItem
                            key="my_profile"
                            startContent={
                                <GoGear
                                    size={18}
                                />
                            }
                            as={Link}
                            href="/myprofile"
                        >
                            <span
                                className="font-medium"
                            >
                                {GeneralTextEnums.MY_PROFILE}
                            </span>
                        </DropdownItem>
                        <DropdownItem
                            key="logout"
                            color="danger"
                            onClick={() => signOut({ callbackUrl: '/' })}
                            startContent={
                                <TbLogout2
                                    size={18}
                                />
                            }
                        >
                            <span
                                className="font-medium"
                            >
                                {GeneralTextEnums.SIGN_OUT}
                            </span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    );
};
