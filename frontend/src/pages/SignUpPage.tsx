import React from "react";

import banner from "../assets/banner.png"
import SignUpForm from "../components/SingUpForm";
import AuthLayout from "../layouts/AuthLayout";

const SignUpPage = (): JSX.Element => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <AuthLayout imageSource={banner}>
                <SignUpForm />
            </AuthLayout>
        </div>
    );
};

export default SignUpPage;
