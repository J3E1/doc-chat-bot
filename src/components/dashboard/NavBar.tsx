'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ThemeButton from '../ThemeButton';

const Navbar = () => {
	const session = useSession();

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='flex h-14 items-center justify-between px-10'>
				<Link href='/' className='flex z-40 font-semibold'>
					<span>pinn.</span>
				</Link>
				<div className='flex justify-center items-center gap-3'>
					<ThemeButton />
					<Button variant={'ghost'} size='icon' className='rounded-full'>
						<Avatar>
							<AvatarImage src={session.data?.user?.image!} />
							<AvatarFallback>{session.data?.user?.name}</AvatarFallback>
						</Avatar>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
