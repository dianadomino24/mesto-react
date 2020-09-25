import React from 'react'
import { formSelectorsObj } from '../utils/utils'
import { FormValidator } from './FormValidator'

function PopupWithForm(props) {
    function formValidate() {
        if (props.isOpen) {
            const currentForm = document.querySelector(
                `.popup__form_type_${props.name}`
            )
            // будет валидировать форму
            const formValidator = new FormValidator(
                formSelectorsObj,
                currentForm
            )
            formValidator.enableValidation()
            return !formValidator.hasInvalidInput()
        }
    }
    formValidate()

    // очистит форму от введенного в инпут текста, ошибок валидации и закроет попап
    function closeReset() {
        document.querySelector(`.popup__form_type_${props.name}`).reset()
        props.onClose()
    }
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            closeReset()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            closeReset()
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formValidate()) {
            props.onSubmit(e)
            document.querySelector(`.popup__form_type_${props.name}`).reset()
        }
    }
    // проверяет нажатие esc
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
                    onClick={closeReset}
                />
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
                            className={`link popup__save-button popup__save-button_type_${props.name}`}
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
