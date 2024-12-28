import React from 'react'

interface AuthLayoutProps {
    imageSource?: string;
    imageAlt?: string;
    children?: React.ReactNode;
}
const AuthLayout : React.FC <AuthLayoutProps>= (Props : AuthLayoutProps) => {
    const {
        imageSource,
        imageAlt,
        children
    } = Props;
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-between bg-white relative">
    <div className="w-full md:w-[43%]">
        <img
            className="w-full h-full"
            src={imageSource}
            alt={imageAlt}
        />
    </div>
    <div className="flex justify-center items-center w-full md:w-[57%]">
        {children}
    </div>
</div>
  )
}

export default AuthLayout