'use client'

import { Button } from "@/components/SharedUI/Button";
import { Input } from "@/components/SharedUI/Input";
import { CheckBox } from "@/components/SharedUI/CheckBox";
import { useState } from "react";
import Link from "next/link";

export const Register = () => {

	const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleSubmitRegister = async () => {
        // const { name, email, password } = registerData
	
        // const res = await fetch("https://eventmakers-api.vercel.app/api/auth/register", {
        //     method: "POST",
		// 	headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ name, email, password }),
        // });
        // const data = await res.json();
		// console.log(data)
		console.log(registerData)
    }	

	return (
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create Account for Party Everyday!</h1>
				<div>
					<Input label="Name" type="name" name="name" placeholder="Full Name" onChange={handleChange}/>	
					<Input label="Your email" type="email" name="email" placeholder="youremail@.com" onChange={handleChange}/>
					<Input label="Password" type="password" name="password" placeholder="Password" onChange={handleChange}/>
					<div className="flex gap-1">
						<CheckBox id="" label="I accept the " type="checkbox" />
						<Link href="#" className="block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
							Terms and Conditions
						</Link>
					</div>

					<Button onClick={handleSubmitRegister}>Submit</Button>
				</div>

				<label className="text-sm font-medium text-gray-900 dark:text-gray-300">
					Already have account?
					<Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">
						Login
					</Link>
				</label>
			</div>
	);
};
