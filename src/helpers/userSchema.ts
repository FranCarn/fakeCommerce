import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required("Campo obligatorio"),
  password: yup
    .string()
    .required("Campo obligatorio")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});
