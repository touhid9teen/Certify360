import React from "react";
import Header from "../components/Header";
import Wrapper from "../layouts/Wrapper";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
}: MainLayoutProps) => {
    return (
        <div className="flex justify-between gap-x-7">
            
            <div className="overflow-auto flex flex-col w-full h-screen">
                <Header />
                <Wrapper className="pr-7">{children}</Wrapper>
            </div>
        </div>
    );
};

export default MainLayout;
