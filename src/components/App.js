import React, { useEffect, useState } from 'react'
import api from '../utils/Api'
import Card from './Card'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'


function App() {
    //состояние попапов
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

    // данные пользователя
    const [userAvatar, setUserAvatar] = useState()
    const [userName, setUserName] = useState('Жак Ив Кусто')
    const [userDescription, setUserInfo] = useState('Мореплаватель')
    
    // массив карточек мест
    const [cards, setCards] = useState([]);

    const [currentUserId, setCurrentUserId] = useState()

    // устанавливает данные пользователя
    function setUserData(userData) {
        setUserAvatar(userData.avatar)
        setUserName(userData.name)
        setUserInfo(userData.about)
    }

    // открывают попапы
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    // закрывает все попапы меняя их состояние 
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
    }

    // при монтировании компонента будет совершать запрос в API за пользовательскими данными
    useEffect(() => {
        api.getItems('users/me')
            .then((userData) => {
                setCurrentUserId(userData._id)
                // отображает данные пользователья в профиле
                setUserData(userData)})
            .catch((err) => {
                console.log(err)
            })
        }, []);
    
    // при монтировании компонента будет совершать запрос в API за карточками мест
    useEffect(() => {
        api.getItems('cards')
            .then((serverCards) => {
                const items = serverCards.map(item => ({
                    name: item.name,
                    link: item.link,
                    _id: item._id,
                    likes: item.likes,
                    owner: item.owner,
                }))
                setCards(items);
                })
            .catch((err) => {
                console.log(err)
            })
        }, []);
    
    return (
        <div className="App">
            <div className="page">
                <div className="page__container">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        userAvatar={userAvatar}
                        userName={userName}
                        userDescription={userDescription}
                        cards={cards}
                        currentUserId={currentUserId}
                    />
                    <Footer />
                    <PopupWithForm
                        title="Редактировать профиль"
                        name="edit-profile"
                        buttonText="Сохранить"
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
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
                        onClose={closeAllPopups}
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
                        onClose={closeAllPopups}
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
                        onClose={closeAllPopups}
                        children={<></>}
                    />

                    <ImagePopup />
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
