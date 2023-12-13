import { db } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcrypt';

interface Data {
	message?: string;
	user: {
		id: number;
		email: string;
		password: string;
		name: string | null;
		avatarUrl: string | null;
	};
}

const handler = async (req: NextRequest) => {
	try {
		const body = await req.json();
		const { email, password } = body;

		const foundUser = await db.user.findUnique({ where: { email: email } });

		if (foundUser) throw new Error('User already exists!');

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await db.user.create({
			data: { email, password: hashedPassword },
		});

		return NextResponse.json({ user });
	} catch (error) {
		console.log('🚀 ~ file: route.ts:7 ~ handler ~ error:', error);

		return NextResponse.json(
			{ message: (error as { message: string }).message },
			{ status: 400 }
		);
	}
};

export { handler as POST };
