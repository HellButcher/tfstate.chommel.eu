import { Button, Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { signIn } from '@/auth';

export default function SignIn() {
	return (
		<Form
			onFinish={async () => {
				'use server';
				await signIn('github');
			}}
		>
			<FormItem>
				<Button type="primary" htmlType="submit">
					Sign in with GitHub
				</Button>
			</FormItem>
		</Form>
	);
}
