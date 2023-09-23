"use client"

import { useState } from 'react'
import { Button } from '@/components/SharedUI/Button'
import { Input } from '@/components/SharedUI/Input'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


export const Login = () => {
    const router = useRouter()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmitLogin = async () => {
        toast.loading("try to log in...")
        const { email, password } = loginData
        const res = await fetch("https://eventmakers-api.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await res.json()
        toast.remove()
        toast.success("You are successfully login")
        Cookies.set("token", data.token);
        router.push("/dashboard")
    }
    return (
        <div>
            <div>
                <Input
                    label="email"
                    type="email"
                    name="email"
                    placeholder="youremail@.com"
                    onChange={handleChange}
                />
                <Input
                    label="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <Button onClick={handleSubmitLogin}>Login</Button>
            </div>
            <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Don't have account? <a href="/register" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up
                </a>
            </label>
        </div>
    )
}
