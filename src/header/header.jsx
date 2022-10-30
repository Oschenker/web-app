import React from "react";
import Button from "./button/button";
import { useTelegram } from "./hook/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()

    return(
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'Username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;