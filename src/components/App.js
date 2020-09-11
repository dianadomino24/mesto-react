import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
        false
    )
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
        false
    )

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    return (
        <div className="App">
            <div className="page">
                <div className="page__container">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                    />
                    <Footer />
                    <PopupWithForm
                        title="Редактировать профиль"
                        name="edit-profile"
                        buttonText="Сохранить"
                        isOpen={isEditProfilePopupOpen}
                        children={
                            <>
                                <label className="popup__label">
                                    <input
                                        type="text"
                                        name="profile-name"
                                        placeholder="Имя"
                                        id="profile-name"
                                        className="input popup__input popup__input_type_name"
                                        required
                                        minLength="2"
                                        maxLength="40"
                                    />
                                    <span className="popup__input-error js-popup__input-error_type_profile"></span>
                                </label>
                                <label className="popup__label">
                                    <input
                                        type="text"
                                        name="profile-job"
                                        id="profile-job"
                                        placeholder="Род деятельности"
                                        className="input popup__input popup__input_type_job"
                                        required
                                        minLength="2"
                                        maxLength="200"
                                    />
                                    <span className="popup__input-error js-popup__input-error_type_profile"></span>
                                </label>
                            </>
                        }
                    />

                    <PopupWithForm
                        title="Новое место"
                        name="add-place"
                        buttonText="Создать"
                        isOpen={isAddPlacePopupOpen}
                        children={
                            <>
                                <label className="popup__label">
                                    <input
                                        type="text"
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
                                        name="place-pic"
                                        id="place-pic"
                                        placeholder="Ссылка на картинку"
                                        className="input popup__input popup__input_type_place-pic"
                                        required
                                    />
                                    <span className="popup__input-error"></span>
                                </label>
                            </>
                        }
                    />

                    <PopupWithForm
                        title="Обновить аватар"
                        name="edit-avatar"
                        buttonText="Сохранить"
                        isOpen={isEditAvatarPopupOpen}
                        children={
                            <>
                                <label className="popup__label">
                                    <input
                                        type="url"
                                        name="avatar"
                                        id="avatar"
                                        placeholder="Ссылка на картинку"
                                        className="input popup__input popup__input_type_avatar"
                                        required
                                    />
                                    <span className="popup__input-error"></span>
                                </label>
                            </>
                        }
                    />

                    <PopupWithForm
                        title="Вы уверены?"
                        name="card-delete"
                        buttonText="Да"
                        isOpen={false}
                        children={<></>}
                    />

                    <section className="popup popup_type_picture-zoom">
                        <div className="popup__container-pic-zoom">
                            <button className="link popup__close-button"></button>
                            <figure className="picture-zoom">
                                <img
                                    src="#"
                                    alt="Фото карточки"
                                    className="picture-zoom__img"
                                />
                                <p className="picture-zoom__title"></p>
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default App
