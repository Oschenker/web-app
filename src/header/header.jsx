import React from "react";
import Button from "./Button/Button";
import "./Header/Header.css";
import { useTelegram } from "./Hook/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;