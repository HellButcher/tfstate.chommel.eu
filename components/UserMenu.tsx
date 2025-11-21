import { Avatar } from 'antd';
import { auth } from '@/auth';
import SignIn from '@/components/SignIn';
import SignOut from '@/components/SignOut';

export default async function UserMenu() {
	const session = await auth();
	if (!session) return <SignIn />;
	return (
		<div
			style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}
		>
			<Avatar src={session.user?.image} style={{ backgroundColor: '#1677ff' }}>
				{(session.user?.name || session.user?.email || 'U')
					.charAt(0)
					.toUpperCase()}
			</Avatar>
			<SignOut>{session.user?.name || session.user?.email}</SignOut>
		</div>
	);
}
