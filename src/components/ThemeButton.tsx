'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
	const { setTheme, theme, systemTheme } = useTheme();
	console.log('🚀 ~ file: ThemeButton.tsx:8 ~ ThemeButton ~ theme:', theme);

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};
	return (
		<Button variant={'ghost'} size='icon' onClick={toggleTheme}>
			{/* {theme === 'dark' ? (
				<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			) : (
				<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			)} */}
			{/* <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' /> */}
		</Button>
	);
}
