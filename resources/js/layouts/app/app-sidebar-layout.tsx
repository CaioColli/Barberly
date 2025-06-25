import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

interface AppSidebarLayoutProps {
    breadcrumbs?: PropsWithChildren<BreadcrumbItem[]>;
    backBtnClassName?: string;
    children: React.ReactNode;
    isAdmin?: boolean
}

export default function AppSidebarLayout({ children, breadcrumbs = [], backBtnClassName, isAdmin }: AppSidebarLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden bg-background-primary">
                <AppSidebarHeader breadcrumbs={breadcrumbs} backBtnClassName={backBtnClassName} isAdmin={isAdmin} />
                {children}
            </AppContent>
        </AppShell>
    );
}
