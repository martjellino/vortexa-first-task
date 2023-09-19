"use client"
import { useState } from 'react'
import { Button } from '@/components/SharedUI/Button'
import { Input } from '@/components/SharedUI/Input'
import Cookies from 'js-cookie'


export const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }
    
    const handleSubmitLogin = async () => {
        const { email, password } = loginData
        const res = await fetch(`https://eventmakers-api.vercel.app/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identity: { email }, password }),
        })
        const { token, record } = await res.json()
        Cookies.set("em-token", JSON.stringify(token))
        Cookies.set("em-record", JSON.stringify(record))
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
                <Button onClick={handleSubmitLogin} />
            </div>
            <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Don't have account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up
                </a>
            </label>
        </div>
    )
}
