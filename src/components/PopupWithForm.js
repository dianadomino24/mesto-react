import React from 'react'

function PopupWithForm({
    title,
    name,
    buttonText,
    isOpen,
    onClose,
    children,
    ...rest
}) {
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            onClose()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    if (isOpen) {
        window.addEventListener('keydown', (evt) => handleEscClose(evt))
    }

    return (
        <section
            className={`popup popup_type_${name} ${
                isOpen ? 'popup_opened' : ''
            }`}
            onClick={closePopupByClickingOverlay}
        >
            <div className="popup__container">
                <button
                    className="link popup__close-button"
                    onClick={onClose}
                />
                <form
                    className={`popup__form popup__form_type_${name}`}
                    noValidate
                    name={name}
                >
                    <h2 className="popup__title">{title}</h2>
                    <fieldset className="popup__fieldset">
                        {children}
                        <button
                            className="link popup__save-button"
                            autoFocus
                            type="submit"
                        >
                            {buttonText}
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm
