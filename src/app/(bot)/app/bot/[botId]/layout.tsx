import BotSideBar from '@/components/bot/BotSideBar';
import Navbar from '@/components/dashboard/NavBar';
import SideBar from '@/components/dashboard/SideBar';

export default function DashboardLayout({
	children,
	params,
	searchParams,
}: {
	children: React.ReactNode;
	params: { botId: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	return (
		<>
			<Navbar type='bot' />

			{children}
		</>
	);
}
