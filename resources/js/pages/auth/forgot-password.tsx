// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/teste-auth-layout';
import { FormLayout } from '@/layouts/form-layout';
import { Button } from '@/components/ui/teste.button';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout title="Recupere sua senha para continuar aproveitando" span="Recupere sua senha para continuar aproveitando">
            <Head title="Forgot password" />

            <FormLayout onSubmit={submit}>
                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={data.email}
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Digite seu e-mail"
                    />

                    <InputError message={errors.email} />
                </div>

                {status && <div className="text-center text-base text-[var(--custom-orange)] absolute top-[2%] inset-0">{status}</div>}

                <div className='flex justify-end items-center gap-[24px]'>
                    <TextLink href={route('login')} tabIndex={6}>
                        Voltar ao login
                    </TextLink>

                    <Button type='submit' tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Enviar solicitação
                    </Button>
                </div>

            </FormLayout>
        </AuthLayout>
    );
}
