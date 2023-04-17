import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../helpers/userSchema";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

type FormData = {
  username: string;
  password: string;
};

export const Login = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
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
    navigate("/home");
  };

  useEffect(() => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) navigate("/home");
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.fieldGroup}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="mor_2314"
          />
          {errors.username && (
            <p className={styles.errorLabel}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="83r5^_"
          />
          {errors.password && (
            <p className={styles.errorLabel}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={styles.buttonLogin}>
          Enviar
        </button>
        <div className={styles.footerContainer}>
          {loginError && (
            <p className={styles.error}>{loginError.toUpperCase()}</p>
          )}
        </div>
      </form>
    </>
  );
};
