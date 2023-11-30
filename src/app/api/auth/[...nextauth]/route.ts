import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
	// adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			name: 'credentials ',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password)
					throw new Error('Invalid credentials');

				// const user = await prisma.user.findUnique({
				// 	where: {
				// 		email: credentials.email,
				// 	},
				// });

				// if (!user) throw new Error('No user found');

				// const isPasswordIncorrect = await bcrypt.compare(
				// 	credentials.password,
				// 	user.hashedPassword!
				// );

				// if (!isPasswordIncorrect) throw new Error('Invalid password');

				return { email: credentials.email, name: 'dog', id: 'ligma' };
			},
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24, //1 day
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
