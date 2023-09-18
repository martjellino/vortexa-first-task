import { Button } from '@/components/SharedUI/Button'
import { Input } from '@/components/SharedUI/Input'


import React from 'react'


export const Login = () => {
    return (
        <div>
            <div>
                <Input
                    label="email"
                    type="email"
                    name="email"
                    placeholder="youremail@.com"
                />
                <Input
                    label="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <Button />
            </div>
            <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Don't have account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Sign Up
                </a>
            </label>
        </div>
    )
}
