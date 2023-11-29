import { cn } from '@/lib/utils';
import { type HTMLProps } from 'react';
type Props = {} & HTMLProps<HTMLDivElement>;
export default function MaxWidthWrapper({ children, className }: Props) {
	return (
		<div
			className={cn(
				'container mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
				className
			)}>
			{children}
		</div>
	);
}
