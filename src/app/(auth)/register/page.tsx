import AuthForm from '@/components/AuthForm';
import Gradient from '@/components/Gradient';

export default function RegisterPage() {
	return (
		<>
			<Gradient />
			<AuthForm mode='register' />
		</>
	);
}
