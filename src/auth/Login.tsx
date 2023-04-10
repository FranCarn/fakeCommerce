import { useState } from "react";
import { Api } from "../services/Api";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../helpers/userSchema";

type FormData = {
  username: string;
  password: string;
};

export const Login = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoginError(null);
    const res = await Api("/auth/login", data);
    if (res.data.token) return saveToken(res.data.token);
    setLoginError(res.response.data);
  };

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {loginError && <span>{loginError}</span>}
    </>
  );
};
