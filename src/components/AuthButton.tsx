'use client';
import { Button } from './ui/button';
import Link from 'next/link';
import { signOut, signIn, useSession } from 'next-auth/react';

type Props = {};
export default function AuthButton({}: Props) {
	const session = useSession();

	const logOut = async () => await signOut({ redirect: false });

	const logIn = async () =>
		await signIn('credentials', {
			email: 'email@ligma.com',
			password: '12345',
			redirect: false,
		});

	return (
		<>
			{session.status === 'authenticated' ? (
				<>
					<Button asChild variant='ghost' size={'sm'}>
						<Link href='/dashboard'>Dashboard</Link>
					</Button>
					<Button size={'sm'} onClick={logOut}>
						LogOut
					</Button>
					{/* <UserAccountNav
									name={
										!user.given_name || !user.family_name
											? 'Your Account'
											: `${user.given_name} ${user.family_name}`
									}
									email={user.email ?? ''}
									imageUrl={user.picture ?? ''}
								/> */}
				</>
			) : (
				<>
					<Button asChild variant='ghost' size={'sm'}>
						<Link href='/pricing'>Pricing</Link>
					</Button>
					<Button asChild variant='ghost' size={'sm'}>
						<Link href='/sign-in'>Sign-In</Link>
					</Button>
					<Button asChild size={'sm'}>
						<Link href='/register'>Register</Link>
					</Button>
					{/* <LoginLink
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}>
									Sign in
								</LoginLink>
								<RegisterLink
									className={buttonVariants({
										size: 'sm',
									})}>
									Get started <ArrowRight className='ml-1.5 h-5 w-5' />
								</RegisterLink> */}
				</>
			)}
		</>
	);
}
