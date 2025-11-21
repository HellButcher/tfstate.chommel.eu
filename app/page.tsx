import { auth } from '@/auth';
import SignIn from '@/components/SignIn';
import SignOut from '@/components/SignOut';

export default async function Page() {
	const session = await auth();
	const user = session?.user?.email;

	return (
		<section>
			<h1>Home</h1>
			<div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
		</section>
	);
}
