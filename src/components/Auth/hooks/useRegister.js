import { useState } from "react";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = async () => {
    setIsLoading(true);
    const { name, email, password } = registerData;
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const data = await res.json();
    console.log(data);
    setRegisterData({ name: "", email: "", password: "" });
    setIsLoading(false);
  };

  return { isLoading, registerData, handleChange, handleSubmitRegister };
};
