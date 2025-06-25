import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '',
    }
]

const AdminDashboard = () => {
    

    return (
        <AppLayout breadcrumbs={breadcrumbs} backBtnClassName="hidden" isAdmin={true}>
            <></>
        </AppLayout>
    )
}

export default AdminDashboard;