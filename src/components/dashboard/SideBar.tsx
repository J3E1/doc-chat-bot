'use client';
import { DollarSign, FolderCog, Settings, UserRoundCog } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sideNavLinks = [
	{
		title: 'Projects',
		icon: <FolderCog />,
		href: '/app/bots',
	},
	{
		title: 'Subscriptions',
		icon: <DollarSign />,
		href: '/app/subscriptions',
	},
	{
		title: 'Settings',
		icon: <Settings />,
		href: '/app/settings',
	},
	{
		title: 'Profile',
		icon: <UserRoundCog />,
		href: '/app/profile',
	},
];

export default function SideBar() {
	const pathName = usePathname();

	return (
		<aside className='fixed top-14 z-30 pt-4 border-r hidden h-[calc(100vh-3.5rem-1px)] w-60 max-w-1/5 shrink-0 md:sticky md:block'>
			<div className='w-full'>
				{sideNavLinks.map(item => (
					<Button
						key={item.href}
						asChild
						variant={'link'}
						className={`mb-1 rounded-md pl-10 py-2 font-semibold flex gap-2 w-full justify-start hover:no-underline ${
							!pathName.includes(item.href) ? 'text-foreground' : 'text-primary'
						}`}>
						<Link href={item.href}>
							{item.icon} <span>{item.title}</span>
						</Link>
					</Button>
				))}
			</div>
		</aside>
	);
}
