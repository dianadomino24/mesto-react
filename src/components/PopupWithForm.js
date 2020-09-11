import React from 'react'

function PopupWithForm({ title, name, buttonText, isOpen, children, ...rest }) {
    return (
        <section
            className={`popup popup_type_${name} ${
                isOpen ? 'popup_opened' : ''
            }`}
        >
            <div className="popup__container">
                <button className="link popup__close-button"></button>
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
