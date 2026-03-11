'use client';

import {
    Divider,
    Listbox,
    ListboxItem,
    User
} from '@heroui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import type { UserSessionInterface } from '@/interfaces';
import { SidebarEnums } from '../../enums';
import { SidebarItems } from '../../utils';
import { FaFlutter } from 'react-icons/fa6';
import { GeneralTextEnums } from '@/enums';

interface Props {
    userSession: UserSessionInterface
};

export const Sidebar = ({ userSession }: Props) => {

    const pathName = usePathname();

    return (
        <aside
            className="fixed flex flex-col h-full duration-300 -translate-x-full -mt-0.5 border-r w-72 max-w-72 scrollbar-hide ease-soft-spring xl:translate-x-0 border-accent-gray bg-surface"
        >
            <div
                className="flex items-center justify-center mt-8"
            >
                <FaFlutter
                    size={25}
                    className="text-primary"
                />
                <Link
                    href="/"
                    className="ml-2 font-bold transition-transform duration-500 ease-in-out hover:scale-105 md:text-lg"
                >
                    {GeneralTextEnums.APP_NAME}
                </Link>
            </div>

            <Divider className="mt-7 bg-accent-gray" />

            <User
                avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
                description={
                    <span
                        className="text-xs font-medium text-primary"
                    >
                        {SidebarEnums[userSession.role as keyof typeof SidebarEnums]}
                    </span>
                }
                name={
                    <span
                        className="text-xs font-semibold"
                    >
                        {userSession.name} {userSession.lastName || ''}
                    </span>
                }
                className="p-5 mx-3 my-8 font-semibold border rounded-xl bg-surface-200 border-accent-gray"
            />

            <Listbox
                variant="faded"
                className="flex justify-between! h-full!"
                itemClasses={{
                    base: "px-3 rounded-sm gap-4 h-12 data-[hover=true]:bg-[linear-gradient(135deg,#C9A84C22,#C9A84C0A)]! data-[hover=true]:border data-[hover=true]:border-primary/10 data-[hover=true]:text-primary-light",
                }}
            >
                {SidebarItems[userSession.role].map(({ id, Icon, title, path }) => {

                    const isActive = pathName === path;

                    return (
                        <ListboxItem
                            key={id}
                            variant="bordered"
                            {...(!isActive && {
                                as: Link,
                                href: path
                            })}
                            className={clsx('focus:bg-[linear-gradient(135deg,#C9A84C22,#C9A84C0A)] py-2 my-0.5 text-text-muted', {
                                ' text-primary-light focus:border-none bg-[linear-gradient(135deg,#C9A84C22,#C9A84C0A)] border border-primary/10': isActive,
                                'cursor-default': isActive
                            })}
                            startContent={
                                <Icon
                                    size={20}
                                />
                            }
                        >
                            <span
                                className="font-semibold"
                            >
                                {title}
                            </span>
                        </ListboxItem>
                    )
                })}
            </Listbox>
        </aside>
    );
};
