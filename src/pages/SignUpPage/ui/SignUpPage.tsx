import { WithProtection } from 'features/auth/guard';
import { SignUpForm } from 'features/auth/sign-up';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
