import Navbar from '@/components/dashboard/NavBar';
import SideBar from '@/components/dashboard/SideBar';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />

			<div className='flex'>
				<SideBar />
				<div className='w-full pl-6 pr-10 py-4'>{children}</div>
			</div>
		</>
	);
}
