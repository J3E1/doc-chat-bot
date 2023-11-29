import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

import { ArrowRight, Activity } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import ThemeButton from './ThemeButton';

const Navbar = () => {
	// const { getUser } = getKindeServerSession();
	// const user = getUser();

	return (
		<nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-foreground/40 bg-background/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between '>
					<Link href='/' className='flex z-40 font-semibold gap-1'>
						<span>pinn.</span>
					</Link>

					{/* <MobileNav isAuth={!!user} /> */}

					<div className='hidden items-center space-x-4 sm:flex'>
						{/* {!user ? (
							<>
								<Link
									href='/pricing'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}>
									Pricing
								</Link>
								<LoginLink
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}>
									Sign in
								</LoginLink>
								<RegisterLink
									className={buttonVariants({
										size: 'sm',
									})}>
									Get started <ArrowRight className='ml-1.5 h-5 w-5' />
								</RegisterLink>
							</>
						) : (
							<>
								<Link
									href='/dashboard'
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}>
									Dashboard
								</Link>

								<UserAccountNav
									name={
										!user.given_name || !user.family_name
											? 'Your Account'
											: `${user.given_name} ${user.family_name}`
									}
									email={user.email ?? ''}
									imageUrl={user.picture ?? ''}
								/>
							</>
						)} */}

						<Button asChild variant='ghost' size={'sm'}>
							<Link href='/pricing'>Pricing</Link>
						</Button>
						{/* <ThemeButton /> */}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
