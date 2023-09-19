import { Button } from "@/components/SharedUI/Button";
import { Input } from "@/components/SharedUI/Input";

import React from "react";

export const Login = () => {
	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login for Party</h1>
			<form action="#">
				<Input label="Email" type="email" name="email" placeholder="youremail@.com" />
				<Input label="Password" type="password" name="password" placeholder="Password" />
				<Button>Submit</Button>
			</form>

			<label className="text-sm font-medium text-gray-900 dark:text-gray-300">
				Don't have account?
				<a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
					Sign Up
				</a>
			</label>
		</div>
	);
};
