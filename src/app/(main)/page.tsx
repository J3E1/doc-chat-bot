import Gradient from '@/components/Gradient';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
				<div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-primary/80 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-primary/20 hover:bg-background/50'>
					<p className='text-sm font-semibold text-primary'>
						Pinn is now public!
					</p>
				</div>

				<h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
					Chat with your <span className='text-primary'>documents</span> in
					seconds.
				</h1>
				<p className='mt-5 max-w-prose text-muted-foreground sm:text-lg'>
					Quill allows you to have conversations with any PDF document. Simply
					upload your file and start asking questions right away.
				</p>

				<Button asChild size='lg' className='mt-5 group'>
					<Link href='/app' target='_blank'>
						Get started{' '}
						<ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-2 transition-all' />
					</Link>
				</Button>
			</MaxWidthWrapper>

			{/* value proposition section */}
			<div>
				<div className='relative isolate'>
					<Gradient />

					<div>
						<div className='mx-auto max-w-6xl px-6 lg:px-8'>
							<div className='mt-16 flow-root sm:mt-24'>
								<div className='-m-2 rounded-xl bg-background/50 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									{/* <Image
										src='/dashboard-preview.jpg'
										alt='product preview'
										width={1364}
										height={866}
										quality={100}
										className='rounded-md bg-background p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-foreground/10'
									/> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Feature section */}
			<div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
				<div className='mb-12 px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl sm:text-center'>
						<h2 className='mt-2 font-bold text-4xl  sm:text-5xl'>
							Start chatting in minutes
						</h2>
						<p className='mt-4 text-lg text-muted-foreground'>
							Chatting to your PDF files has never been easier than with Quill.
						</p>
					</div>
				</div>

				{/* steps */}
				<ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 px-6 lg:px-8'>
					<li className='md:flex-1'>
						<div className='flex flex-col space-y-2 border-l-4 border-foreground/20 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
							<span className='text-sm font-medium text-primary'>Step 1</span>
							<span className='text-xl font-semibold'>
								Sign up for an account
							</span>
							<span className='mt-2 text-muted-foreground'>
								Either starting out with a free plan or choose our{' '}
								<Link
									href='/pricing'
									className='text-blue-700 underline underline-offset-2'>
									pro plan
								</Link>
								.
							</span>
						</div>
					</li>
					<li className='md:flex-1'>
						<div className='flex flex-col space-y-2 border-l-4 border-foreground/20 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
							<span className='text-sm font-medium text-primary'>Step 2</span>
							<span className='text-xl font-semibold'>
								Upload your PDF file
							</span>
							<span className='mt-2 text-muted-foreground'>
								We&apos;ll process your file and make it ready for you to chat
								with.
							</span>
						</div>
					</li>
					<li className='md:flex-1'>
						<div className='flex flex-col space-y-2 border-l-4 border-foreground/20 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
							<span className='text-sm font-medium text-primary'>Step 3</span>
							<span className='text-xl font-semibold'>
								Start asking questions
							</span>
							<span className='mt-2 text-muted-foreground'>
								It&apos;s that simple. Try out Quill today - it really takes
								less than a minute.
							</span>
						</div>
					</li>
				</ol>
			</div>

			<div>
				<div className='relative isolate mb-32'>
					<div>
						<div className='mx-auto max-w-6xl px-6 lg:px-8'>
							<div className='mt-16 flow-root sm:mt-24'>
								<div className='-m-2 rounded-xl bg-background/50 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
									{/* <Image
										src='/file-upload-preview.jpg'
										alt='uploading preview'
										width={1419}
										height={732}
										quality={100}
										className='rounded-md bg-background p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-foreground/10'
									/> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
