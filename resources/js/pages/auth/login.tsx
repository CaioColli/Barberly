import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/layouts/teste-auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title='Bem vindo de volta! faça seu login para prosseguir' span='Faça login agora mesmo.'>
            <Head title="Barberly - Login" />

            <form className='flex-1 flex flex-col justify-between py-[48px] px-[24px]' onSubmit={submit}>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[8px]">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <div className="">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex gap-[8px] items-center">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={3}
                        />
                        <Label className='text-[var(--custom-black)] text-lg cursor-pointer' htmlFor="remember">Lembrar de mim</Label>
                    </div>
                </div>

                <div className='flex justify-end items-center gap-[24px]'>
                    <TextLink href={route('register')} tabIndex={5}>
                        Criar conta
                    </TextLink>

                    {canResetPassword && (
                        <TextLink href={route('password.request')} tabIndex={6}>
                            Esqueci a senha
                        </TextLink>
                    )}

                    <button type='submit' className='flex items-center gap-[4px] text-[var(--custom-middle-white)] text-xl bg-[var(--custom-black)] py-[8px] px-[16px] rounded-[8px] cursor-pointer' tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Fazer login
                    </button>

                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}
