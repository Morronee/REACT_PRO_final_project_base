import { SignInForm } from 'features/auth/sign-in';
import { WithProtection } from 'features/auth/guard';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
