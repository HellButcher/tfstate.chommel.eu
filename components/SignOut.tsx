import { Button, Form } from 'antd';
import { signOut } from '@/auth';

export default function SignOut({ children }: { children: React.ReactNode }) {
	return (
		<Form
			onFinish={async () => {
				'use server';
				await signOut();
			}}
		>
			<p>{children}</p>
			<Button danger htmlType="submit">
				Sign out
			</Button>
		</Form>
	);
}
