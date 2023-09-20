"use client";

import { Button } from "@/components/SharedUI/Button";
import { Input } from "@/components/SharedUI/Input";
import { CheckBox } from "@/components/SharedUI/CheckBox";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { isLoading, registerData, handleChange, handleSubmitRegister } = useRegister();

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1>Create Account for Party Everyday!</h1>
      <div>
        <Input value={registerData.name} label="Name" type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <Input value={registerData.email} label="Your email" type="email" name="email" placeholder="your@email.com" onChange={handleChange} />
        <Input value={registerData.password} label="Password" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <div className="flex gap-1">
          <CheckBox id="" label="I accept the " type="checkbox" />
          <Link href="#" className="link">
            Terms and Conditions
          </Link>
        </div>
        <Button isLoading={isLoading} onClick={handleSubmitRegister}>
          Submit
        </Button>
      </div>

      <label>
        Already have account?
        <Link href="#" className="link">
          Login
        </Link>
      </label>
    </div>
  );
};
