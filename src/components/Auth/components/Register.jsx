import { Button } from "@/components/SharedUI/Button";
import { Input } from "@/components/SharedUI/Input";
import { CheckBox } from "@/components/SharedUI/CheckBox";

export const Register = () => {
	return (
		<>
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create Account for Party Everyday!</h1>
				<form action="#">
					<Input label="Your email" type="email" name="email" placeholder="youremail@.com" />
					<Input label="Password" type="password" name="password" placeholder="Password" />
					<Input label="Confirm password" type="password" name="password" placeholder="Password" />
					<div className="flex gap-1">
						<CheckBox id="" label="I accept the " type="checkbox" />
						<a href="#" className="block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
							Terms and Conditions
						</a>
					</div>

					<Button>Submit</Button>
				</form>

				<label className="text-sm font-medium text-gray-900 dark:text-gray-300">
					Already have account?
					<a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
						Login
					</a>
				</label>
			</div>
		</>
	);
};
