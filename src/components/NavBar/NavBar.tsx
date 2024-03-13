import React from "react";
import "./NavBar.css";

interface NavBarProps {
    title: string;
}

export const NavBar: React.FC<NavBarProps> = ({ title }) => {
    return (
        <nav className="navbar">
            <h2>{title}</h2>
        </nav>
    );
};
