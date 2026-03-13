"use client";

import { Button, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthSchema, AuthSchemaForm } from "@/lib/schema/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/auth/authSlice";

export default function LoginUI() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const redirectTo = searchParams.get("redirectTo");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm<AuthSchemaForm>({
    resolver: zodResolver(AuthSchema),
    // defaultValues: specify default values for form inputs
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: AuthSchemaForm) => {
    dispatch(login(data))
      .unwrap()
      .then(
        () => {
          if (redirectTo) {
            router.push(redirectTo);
          } else {
            router.push("/");
          }
        },
        (err) => {
          console.log("Login failed1 ", err);
        },
      )
      .catch((error) => {
        console.log("Login Error ", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
