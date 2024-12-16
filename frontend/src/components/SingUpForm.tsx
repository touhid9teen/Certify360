import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
import Button from "../elements/Button";
import InputField from "../elements/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select, { SingleValue } from "react-select";

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
    studentId: yup.string().min(10).max(10).required(),
    graduationYear: yup
        .string()
        .min(4)
        .max(4)
        .required("Graduation Year is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")])
        .required("Password did not match"),
});

type FieldKeys =
    | "fullName" // Name (NID)
    | "email" // Email
    | "mobile" // Mobile number
    | "nationalId" // National ID (NID)
    | "password" // Password
    | "confirmPassword"; // Confirm password

const SignUpForm: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(
        null
    );

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

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        // Store value in localstorage
        localStorage.setItem("user", JSON.stringify(data));
        reset();
        // navigate("/login");
    };

    return (
        <div className="w-[821px] h-[900px] bg-white border-2">
            {/* message top */}
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

            {/* headline */}
            <div className="mt-16 flex flex-col justify-center items-center">
                <h2 className="text-2xl text-black font-semibold">
                    নিবন্ধন করে আপনার যাত্রা শুরু করুন
                </h2>
                <h4 className="text-zinc-500 text-sm font-normal mt-3 leading-3">
                    সহজেই নিবন্ধন করুন এবং আমাদের সেবার সুবিধা নিন
                </h4>
            </div>

            {/* Signup Form */}
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
                                        value={value as string}
                                        handleChange={onChange}
                                        id={value as string}
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
                                        value={value as string}
                                        handleChange={onChange}
                                        id={value as string}
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
