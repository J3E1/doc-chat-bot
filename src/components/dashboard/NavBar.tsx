'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ThemeButton from '../ThemeButton';
import { ArrowLeftIcon } from 'lucide-react';

const Navbar = ({ type }: { type: 'bot' | 'dashboard' }) => {
	const session = useSession();

	return (
		<header
			data-type={type}
			className={`sticky top-0 z-50 w-full border-b data-[type=dashboard]:bg-background data-[type=bot]:bg-primary group`}>
			<div className='flex h-14 items-center justify-between px-10'>
				<Link
					href={type === 'bot' ? '/app/bots' : '/'}
					className='flex z-40 font-semibold group-data-[type=bot]:text-background'>
					{type === 'bot' && <ArrowLeftIcon className='mr-2' />}
					<span>pinn.</span>
				</Link>
				<div className='flex justify-center items-center gap-3 group-data-[type=bot]:text-background'>
					<ThemeButton className='group-data-[type=bot]:hover:bg-primary' />
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
