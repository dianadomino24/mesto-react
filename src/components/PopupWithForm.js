import React from 'react'

function PopupWithForm(props) {
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            props.onClose()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
        document.querySelector(`.popup__form_type_${props.name}`).reset()
    }

    if (props.isOpen) {
        window.addEventListener('keydown', (evt) => handleEscClose(evt))
    }

    return (
        <section
            className={`popup popup_type_${props.name} ${
                props.isOpen ? 'popup_opened' : ''
            }`}
            onClick={closePopupByClickingOverlay}
        >
            <div className="popup__container">
                <button
                    className="link popup__close-button"
                    onClick={props.onClose}
                />
                <form
                    className={`popup__form popup__form_type_${props.name}`}
                    noValidate
                    name={props.name}
                    onSubmit={props.onSubmit}
                >
                    <h2 className="popup__title">{props.title}</h2>
                    <fieldset className="popup__fieldset">
                        {props.children}
                        <button
                            className="link popup__save-button"
                            autoFocus
                            type="submit"
                        >
                            {props.buttonText}
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm
