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
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white relative">
    <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={imageSource}
        alt={imageAlt}
    />
    <div className="relative z-10 flex justify-center items-center w-full h-full overflow-auto">
        {children}
    </div>
</div>
  )
}

export default AuthLayout