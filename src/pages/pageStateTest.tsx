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

	const handleSignup = async (e: React.FormEvent<HTMLButtonElement>) => {
		// Prevent form's default submit behavior
		e.preventDefault();

		try {
			setIsProcessing(true);
			console.log(JSON.stringify(signupForm, null, 2));
			// Simulate processing (e.g., sending form data to a server)
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setIsProcessing(false);

			// Reset form after processing
			const _signupForm = structuredClone(initialSignupForm);
			setSignupForm(_signupForm);
		} catch (error) {
			console.error('Error during signup', error);
			setIsProcessing(false);
		}
	};

	const handleFieldChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// Update the signupForm state based on the field
		setSignupForm((prevForm) => ({
			...prevForm,
			data: {
				...prevForm.data,
				[fieldName]: value
			}
		}));
	};

	return (
		<form className="general">
			<fieldset>
				<legend>Create Account</legend>

				<div className="row">
					<label>Email:</label>
					<input
						disabled={isProcessing}
						type="email"
						value={signupForm.data.email}
						onChange={(e) => handleFieldChange('email', e)}
					/>
				</div>

				<div className="row">
					<label>Password:</label>
					<input
						disabled={isProcessing}
						type="password"
						value={signupForm.data.password}
						onChange={(e) => handleFieldChange('password', e)}
					/>
				</div>

				<div className="buttonArea">
					<button
						disabled={
							isProcessing ||
							(signupForm.data.email.trim() === '' || signupForm.data.password.trim() === '')
						}
						onClick={handleSignup}
					>
						Create
					</button>
				</div>
			</fieldset>
		</form>
	);
};
