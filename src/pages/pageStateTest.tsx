import { useState } from "react";

type SignupForm = {
	data: {
		email: string;
		password: string;
	}
}

const initialSignupForm = {
	data: {
		email: '',
		password: ''
	}
}

export const PageStateTest = () => {
	const [signupForm, setSignupForm] = useState<SignupForm>(initialSignupForm);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleSignup = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		
		console.log('in here');
		try {
			setIsProcessing(true);
			console.log(JSON.stringify(signupForm, null, 2));
			setIsProcessing(false);
			const _signupForm = structuredClone(initialSignupForm);
			setSignupForm(_signupForm)
		} catch (error) {
			console.error('Error during signup', error)
		}
	}

	const handleFieldChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		switch (fieldName) {
			case 'email':
				signupForm.data.email = value;
				break;
			case 'password':
				signupForm.data.password = value;
				break;
		}
		const _signupForm = structuredClone(signupForm);
		setSignupForm(_signupForm);
	}

	return (
		<form className="general">
			<fieldset>
				<legend>Create Account</legend>


				<div className="row">
					<label>Email:</label>
					<input disabled={isProcessing} type="text" value={signupForm.data.email} onChange={(e) => handleFieldChange('email', e)} />
				</div>


				<div className="row">
					<label>Password:</label>
					<input disabled={isProcessing} type="password" value={signupForm.data.password} onChange={(e) => handleFieldChange('password', e)} />
				</div>


				<div className="buttonArea">
					<button type="button" disabled={isProcessing || (signupForm.data.email.trim() === '' || signupForm.data.password.trim() === '')} onClick={(e) => handleSignup(e)}>Create</button>
				</div>
			</fieldset>
		</form>
	)
}