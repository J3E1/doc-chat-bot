import Link from 'next/link';
import { Button } from '../ui/button';
import {
	CircleEllipsis,
	LucidePuzzle,
	Paintbrush,
	Settings,
	MessageCircle,
	Layers3,
} from 'lucide-react';

export default function BotSideBar({
	botId,
	searchParam,
}: {
	botId: string;
	searchParam: string;
}) {
	const sideNavLinks = [
		{
			title: 'Playground',
			icon: <CircleEllipsis />,
			href: `/app/bot/${botId}`,
		},
		{
			title: 'Data Sources',
			icon: <Layers3 />,
			href: `/app/bot/${botId}?step=data-sources`,
		},
		{
			title: 'Chat Sessions',
			icon: <MessageCircle />,
			href: `/app/bot/${botId}?step=conversations`,
		},
		{
			title: 'Integrations',
			icon: <LucidePuzzle />,
			href: `/app/bot/${botId}?step=integrations`,
		},
		{
			title: 'Customize',
			icon: <Paintbrush />,
			href: `/app/bot/${botId}?step=appearance`,
		},
		{
			title: 'Settings',
			icon: <Settings />,
			href: `/app/bot/${botId}?step=settings`,
		},
	];
	return (
		<aside className='fixed top-14 z-30 pt-4 border-r hidden h-[calc(100vh-3.5rem-1px)] w-60 max-w-1/5 shrink-0 md:sticky md:block bg-foreground/10'>
			<div className='w-full'>
				<h4 className='mb-1 pl-10 py-3 font-semibold uppercase text-primary'>
					Bot Heading
				</h4>
				{sideNavLinks.map(item => {
					const isActive = searchParam
						? item.href.includes(searchParam)
						: item.href === `/app/bot/${botId}`;

					return (
						<Button
							key={item.href}
							asChild
							variant={'link'}
							className={`mb-1 pl-10 py-2 flex gap-2 w-full justify-start hover:no-underline ${
								!isActive
									? 'text-foreground'
									: 'text-primary bg-foreground/5 border-x-4 border-primary'
							}`}>
							<Link href={item.href}>
								{item.icon} <span>{item.title}</span>
							</Link>
						</Button>
					);
				})}
			</div>
		</aside>
	);
}
