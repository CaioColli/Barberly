import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    backBtnClassName?: string;
    isAdmin?: boolean
    backPage?: () => void
}

export default ({ children, breadcrumbs, backBtnClassName, isAdmin, backPage, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} backBtnClassName={backBtnClassName} isAdmin={isAdmin} backPage={backPage} {...props}>
        {children}
    </AppLayoutTemplate>
);
