import React from "react";
import Button from "../button/button";

const Header = () => {
    const tgw = window.Telegram.WebApp;
    const onClose = () => {
        tgw.close()
    }

    return(
        <div className={'header'}>
            <button>Close</button>
            <span className={'Username'}>
                {tgw.initDataUnsafe?.User?.username}
            </span>
        </div>
    );
};

export default Header;