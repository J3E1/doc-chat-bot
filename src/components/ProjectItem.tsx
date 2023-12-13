import { MoreHorizontal } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function ProjectItem() {
	return (
		<Card className='hover:shadow-md hover:cursor-pointer relative'>
			<CardHeader className='py-4'>
				<CardTitle className='text-xl hover:text-primary'>
					Notifications
				</CardTitle>
				<CardDescription>You have 3 unread messages.</CardDescription>
			</CardHeader>
			<Actions />
		</Card>
	);
}

function Actions() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='h-8 w-8 p-0 absolute top-2 right-2'>
					<span className='sr-only'>Open menu</span>
					<MoreHorizontal className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem>Customize</DropdownMenuItem>
				<DropdownMenuItem className='focus:bg-destructive focus:text-destructive-foreground'>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
