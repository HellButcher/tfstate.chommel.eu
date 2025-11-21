import { Button } from 'antd';
import { signIn } from '@/auth';

export default function SignIn() {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('github');
			}}
		>
			<Button type="primary" htmlType="submit">
				Sign in with GitHub
			</Button>
		</form>
	);
}
