import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export default function TextLink({ className = '', children, ...props }: LinkProps) {
    return (
        <Link
            className={cn(
                'no-underline text-sm text-[var(--custom-black)]',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
