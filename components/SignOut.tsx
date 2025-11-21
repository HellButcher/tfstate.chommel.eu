import { Button } from 'antd';
import { signOut } from '@/auth';

export default function SignOut({ children }: { children: React.ReactNode }) {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
			style={{ display: 'flex', alignItems: 'center', gap: 8 }}
		>
			<span style={{ fontWeight: 500 }}>{children}</span>
			<Button danger htmlType="submit">
				Sign out
			</Button>
		</form>
	);
}
