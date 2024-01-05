import BotSideBar from '@/components/bot/BotSideBar';
import ChatSessions from '@/components/bot/ChatSessions';
import Customize from '@/components/bot/Customize';
import DataSources from '@/components/bot/DataSources';
import Integration from '@/components/bot/Integration';
import PlayGround from '@/components/bot/PlayGround';
import Settings from '@/components/bot/Settings';

export default function BotPage({
	params,
	searchParams,
}: {
	params: { botId: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const content =
		searchParams?.step === 'data-sources' ? (
			<DataSources />
		) : searchParams?.step === 'conversations' ? (
			<ChatSessions />
		) : searchParams?.step === 'integrations' ? (
			<Integration />
		) : searchParams?.step === 'appearance' ? (
			<Customize />
		) : searchParams?.step === 'settings' ? (
			<Settings />
		) : (
			<PlayGround />
		);

	return (
		<div className='flex'>
			<BotSideBar
				botId={params.botId}
				searchParam={searchParams?.step as string}
			/>
			<div className='w-full pl-6 pr-10 py-4'>{content}</div>
		</div>
	);
}
