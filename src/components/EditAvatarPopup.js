import React, { useState, useEffect, useRef, useContext } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditAvatarPopup(props) {
    const currentUser = useContext(CurrentUserContext)
    const avatarInput = useRef({})
    const [avatar, setAvatar] = useState('')

    function handleChange(e) {
        setAvatar(e.target.value)
    }
    function handleSubmit(e) {
        props.onUpdateAvatar({
            avatar: avatarInput.current.value,
        })
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="edit-avatar"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            // formSelector={}
        >
            <label className="popup__label">
                <input
                    ref={avatarInput}
                    onChange={handleChange}
                    type="url"
                    name="avatar"
                    id="avatar"
                    placeholder="Ссылка на картинку"
                    className="input popup__input popup__input_type_avatar"
                    required
                />
                <span className="popup__input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup
