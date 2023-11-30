import { ReactNode } from 'react';
import ThemeProvider from './theme-provider';
import SessionProvider from './SessionProvider';
import { getServerSession } from 'next-auth';

export default async function Providers({ children }: { children: ReactNode }) {
	const session = await getServerSession();
	return (
		<SessionProvider session={session}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
}
