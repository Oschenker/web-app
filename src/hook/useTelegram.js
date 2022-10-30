const tgw = window.Telegram.WebApp;

export function useTelegram() {
    
    const onClose = () => {
        tgw.close()
    }

    const onToggleButton = () => {
        if(tgw.MainButton.isVisible) {
            tgw.MainButton.hide();
        }
        else {
            tgw.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tgw,
        user: tgw.initDataUnsafe?.user,
    }
}