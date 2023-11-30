import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import ThemeButton from './ThemeButton';
import AuthButton from './AuthButton';

const Navbar = () => {
	return (
		<nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-foreground/40 bg-background/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between '>
					<Link href='/' className='flex z-40 font-semibold gap-1'>
						<span>pinn.</span>
					</Link>

					{/* <MobileNav isAuth={!!user} /> */}

					<div className='hidden items-center space-x-4 sm:flex'>
						<AuthButton />

						<ThemeButton />
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
