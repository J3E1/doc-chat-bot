import AuthForm from '@/components/AuthForm';
import Gradient from '@/components/Gradient';
import { useToast } from '@/components/ui/use-toast';
import { signIn } from 'next-auth/react';
import { z } from 'zod';

export default function SignIn() {
	return (
		<>
			<Gradient />
			<AuthForm mode='login' />
		</>
	);
}
