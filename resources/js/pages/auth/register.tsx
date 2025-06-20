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

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Finalize sua conta e aproveite todos os recursos" span="Crie sua conta agora mesmo.">
            <Head title="Barberly - Registrar" />
            <FormLayout className='gap-[24px]' onSubmit={submit}>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Digite seu nome"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="Digite seu e-mail"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Digite sua senha"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="password_confirmation">Confirme sua senha</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Digite sua senha novamente"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                </div>

                <div className='flex justify-end items-center gap-[24px]'>
                    <TextLink href={route('login')} tabIndex={6}>
                        Já tem conta?
                    </TextLink>

                    <Button type='submit' tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Criar conta
                    </Button>
                </div>
            </FormLayout>
        </AuthLayout>
    );
}
