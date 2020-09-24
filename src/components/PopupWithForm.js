import React from 'react'

function PopupWithForm(props) {
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            // очистит форму от введенного в инпут текста
            document.querySelector(`.popup__form_type_${props.name}`).reset()
            props.onClose()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            document.querySelector(`.popup__form_type_${props.name}`).reset()
            props.onClose()
        }
    }
    function close() {
        document.querySelector(`.popup__form_type_${props.name}`).reset()
        props.onClose()
    }
    function handleSubmit(e) {
        props.onSubmit(e)
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
                <button className="link popup__close-button" onClick={close} />
                <form
                    className={`popup__form popup__form_type_${props.name}`}
                    noValidate
                    name={props.name}
                    onSubmit={handleSubmit}
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
