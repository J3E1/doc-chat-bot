import ProjectList from '@/components/ProjectList';
import { Button } from '@/components/ui/button';

export default function BotsPage() {
	return (
		<>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold'>My chat bots</h2>
				<Button>Create new Chatbot</Button>
			</div>
			<ProjectList />
		</>
	);
}
