import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
    const [cardName, setCardName] = useState('')
    const [cardDescription, setCardDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        props.onAddPlace({
            name: cardName,
            link: cardDescription,
        })
    }

    function handleNameChange(e) {
        setCardName(e.target.value)
    }
    function handleDescibChange(e) {
        setCardDescription(e.target.value)
    }

    return (
        <PopupWithForm
            title="Новое место"
            name="add-place"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    type="text"
                    onChange={handleNameChange}
                    name="place-name"
                    placeholder="Название"
                    id="place-name"
                    className="input popup__input popup__input_type_place-name"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span className="popup__input-error"></span>
            </label>
            <label className="popup__label">
                <input
                    type="url"
                    onChange={handleDescibChange}
                    name="place-pic"
                    id="place-pic"
                    placeholder="Ссылка на картинку"
                    className="input popup__input popup__input_type_place-pic"
                    required
                />
                <span className="popup__input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup