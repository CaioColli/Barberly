import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import clsx from 'clsx';
import { useState } from 'react';

import { IoChevronBack } from "react-icons/io5";

interface SideBarHeaderProps {
    breadcrumbs?: BreadcrumbItemType[];
    backBtnClassName?: string;
    isAdmin?: boolean;
    // React.Dispatch<React.SetStateAction<boolean>>
}

export function AppSidebarHeader({ breadcrumbs = [], backBtnClassName, isAdmin = false }: SideBarHeaderProps) {

    return (
        <header className="flex items-center justify-between w-full p-6">
            <div className='flex items-center gap-2'>
                <IoChevronBack className={clsx('text-2xl', backBtnClassName)} />
                <div className='flex items-center gap-2'>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    {isAdmin && (
                        <span className='text-[var(--custom-orange)]'>
                            Admin
                        </span>
                    )}
                </div>
            </div>

            <SidebarTrigger />
        </header>
    );
}