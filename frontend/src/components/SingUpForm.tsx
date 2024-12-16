import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    nationalId: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    mobile: yup.string().required("Mobile number is required"),
    nationalId: yup.string().required("National ID is required"),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Password did not match"),
});

type FieldKeys =
    | "fullName"
    | "email"
    | "mobile"
    | "nationalId"
    | "password"
    | "confirmPassword";

const SignUpForm: FC = () => {
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            mobile: "",
            email: "",
            nationalId: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            console.log("data", data);

            const response = await fetch("http://127.0.0.1:8000/user/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('response', result);

            if (!response.ok) {
                throw new Error(`Registration failed: ${response.statusText}`);
            }

            console.log("Registration successful", result);

            localStorage.setItem("user", JSON.stringify(result));

            reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="w-[821px] h-[900px] bg-white border-2">
            <div className="flex flex-col items-center w-full mt-12">
                <p>ইতিমধ্যে একটি অ্যাকাউন্ট আছে?</p>
                <p
                    className="text-blue-800 font-medium cursor-pointer"
                    onClick={() => {
                        // navigate("/login");
                    }}
                >
                    লগইন করুন
                </p>
            </div>

            <div className="mt-16 flex flex-col justify-center items-center">
                <h2 className="text-2xl text-black font-semibold">
                    নিবন্ধন করে আপনার যাত্রা শুরু করুন
                </h2>
                <h4 className="text-zinc-500 text-sm font-normal mt-3 leading-3">
                    সহজেই নিবন্ধন করুন এবং আমাদের সেবার সুবিধা নিন
                </h4>
            </div>

            <div className="flex flex-col justify-center items-center mt-6">
                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {[
                        {
                            name: "FullName",
                            key: "fullName",
                            placeholder: "নাম (এনআইডি)",
                        },
                        {
                            name: "Mobile",
                            key: "mobile",
                            placeholder: "মোবাইল",
                        },
                        {
                            name: "Email",
                            key: "email",
                            placeholder: "ইমেইল",
                        },
                        {
                            name: "National ID",
                            key: "nationalId",
                            placeholder: "এনআইডি",
                        },
                    ].map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type={
                                            field.key
                                                .toLocaleLowerCase()
                                                .includes("password")
                                                ? "password"
                                                : field.key === "email"
                                                ? "email"
                                                : "text"
                                        }
                                        customInputClass="w-100 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                        value={value || ""}
                                        handleChange={onChange}
                                        id={`input-${field.key}`}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                    />
                                )}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm">
                                    {errors[field.key]?.message}
                                </p>
                            )}
                        </div>
                    ))}

                    {[
                        {
                            name: "Password",
                            key: "password",
                            placeholder: "পাসওয়ার্ড",
                        },
                        {
                            name: "Confirm Password",
                            key: "confirmPassword",
                            placeholder: "পাসওয়ার্ড নিশ্চিত করুন",
                        },
                    ].map((field) => (
                        <div key={field.key}>
                            <Controller
                                name={field.key as FieldKeys}
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        type="password"
                                        customInputClass="!w-100 border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                                        value={value || ""}
                                        handleChange={onChange}
                                        id={`input-${field.key}`}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                    />
                                )}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm">
                                    {errors[field.key]?.message}
                                </p>
                            )}
                        </div>
                    ))}

                    <Button
                        buttonType="submit"
                        customClass="flex justify-center item-center !bg-primary font-semibold text-sm"
                    >
                        Create Account
                    </Button>
                </form>
            </div>

            <div className="flex justify-center">
                <p className="text-zinc-600 text-sm font-normal mt-14">
                    By continuing you indicate that you read and agreed to the
                    Terms of Use
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;