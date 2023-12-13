'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from './ui/use-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Props = {
	mode: 'register' | 'login';
};
export default function AuthForm({ mode }: Props) {
	const formSchema = z
		.object({
			email: z.string().email(),
			password: z.string(),
			confirmPassword: z.string().optional(),
		})
		.refine(
			data => {
				if (mode === 'register') return data.password === data.confirmPassword;
				return data.confirmPassword === '';
			},
			{
				message: "Passwords don't match",
				path: ['confirmPassword'],
			}
		);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
			email: '',
		},
	});
	const { toast } = useToast();
	const router = useRouter();

	async function submitHandler(values: z.infer<typeof formSchema>) {
		console.log('🚀 ~ file: AuthForm.tsx:47 ~ submitHandler ~ values:', values);
		try {
			if (mode === 'register') {
				const registerUser = await fetch('/api/register', {
					method: 'POST',
					body: JSON.stringify({
						email: values.email,
						password: values.password,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (!registerUser?.ok)
					throw new Error(
						((await registerUser.json()) as { message: string }).message
					);
			}
			const res = await signIn('credentials', {
				email: values.email,
				password: values.password,
				redirect: false,
			});

			if (!res?.ok && res?.error) throw new Error(res.error);

			router.push('/');

			toast({
				title:
					mode === 'register'
						? 'Registered successfully!'
						: 'Logged in successfully!',
				variant: 'primary',
			});
		} catch (error) {
			console.log('🚀 ~ file: AuthForm.tsx:63 ~ submitHandler ~ error:', error);

			if (error instanceof Error)
				toast({
					variant: 'destructive',
					title: 'Uh oh! Something went wrong.',
					description: error.message,
				});
		}
	}

	return (
		<div className='h-screen flex flex-col justify-center'>
			<Card className='w-[350px] mx-auto shadow-sm rounded-xl bg-background/75 backdrop-blur-2xl backdrop-saturate-200'>
				<CardHeader>
					<CardTitle className='text-center'>
						{mode === 'register' ? 'Register' : 'Login'}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(submitHandler)}
							className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Email' type='email' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Password'
												type='password'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{mode === 'register' && (
								<FormField
									control={form.control}
									name='confirmPassword'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder='Re-enter the Password'
													type='password'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}
							<Button className='w-full' type='submit'>
								{mode === 'register' ? 'Register' : 'Login'}
							</Button>
							<div className='text-center text-primary underline-offset-4 hover:underline'>
								<Label>
									{mode === 'register' ? (
										<Link href='/sign-in'>
											Already have an account? Sign-In
										</Link>
									) : (
										<Link href='/register'>
											Don&apos;t have an account? Register
										</Link>
									)}
								</Label>
							</div>
							<div className='text-center text-muted-foreground'>
								<Label>
									<Link href='/' className='group'>
										<ArrowLeft className='inline h-4 group-hover:-translate-x-2 transition-all' />
										Back to home
									</Link>
								</Label>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
