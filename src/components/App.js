import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
    //состояние попапов
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

    // Данные текущего пользователя будут использованы как контекст (пока не пришли даннные с сервера покажет Жака)
    const [currentUser, setCurrentUser] = useState({
        name: 'Жак Ив Кусто',
        about: 'Мореплаватель',
        avatar:
            'https://kaskad.tv/images/2020/foto_zhak_iv_kusto__-_interesnie_fakti_20190810_2078596433.jpg',
    })

    // // данные пользователя
    // const [userAvatar, setUserAvatar] = useState()
    // const [userName, setUserName] = useState('Жак Ив Кусто')
    // const [userDescription, setUserInfo] = useState('Мореплаватель')

    // // массив карточек мест
    // const [cards, setCards] = useState([])

    // для попапа с полноразмерной картинкой
    const [selectedCard, setSelectedCard] = useState()

    // // устанавливает данные пользователя
    // function setUserData(userData) {
    //     setUserAvatar(userData.avatar)
    //     setUserName(userData.name)
    //     setUserInfo(userData.about)
    // }

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

    //для открытия попапа с увеличенной картинкой
    function handleCardClick(card) {
        setSelectedCard(card)
    }

    // закрывает все попапы меняя их состояние
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard()
    }

    useEffect(() => {
        api.getItems('users/me')
            .then((userData) => {
                setCurrentUser(userData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // при монтировании компонента будет совершать запрос в API за пользовательскими данными
    // useEffect(() => {
    //     api.getItems('users/me')
    //         .then((userData) => {
    //             setCurrentUserId(userData._id)
    //             // отображает данные пользователья в профиле
    //             setUserData(userData)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])
    // // при монтировании компонента будет совершать запрос в API за пользовательскими данными и карточками
    // useEffect(() => {
    //     Promise.all([api.getItems('users/me'), api.getItems('cards')])
    //         .then((values) => {
    //             const [userData, serverCards] = values
    //             setCurrentUserId(userData._id)
    //             // отображает данные пользователья в профиле
    //             setUserData(userData)

    //             const items = serverCards.map((item) => ({
    //                 // key: item._id,
    //                 name: item.name,
    //                 link: item.link,
    //                 _id: item._id,
    //                 likes: item.likes,
    //                 owner: item.owner,
    //             }))
    //             setCards(items)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    // при монтировании компонента будет совершать запрос в API за карточками мест
    // useEffect(() => {
    //     api.getItems('cards')
    //         .then((serverCards) => {
    //             const items = serverCards.map((item) => ({
    //                 name: item.name,
    //                 link: item.link,
    //                 _id: item._id,
    //                 likes: item.likes,
    //                 owner: item.owner,
    //             }))
    //             setCards(items)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    return (
        <div className="App">
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <div className="page__container">
                        <Header />
                        <Main
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            // cardsList={cards}
                            handleCardClick={handleCardClick}
                        />
                        <Footer />
                        <PopupWithForm
                            title="Редактировать профиль"
                            name="edit-profile"
                            buttonText="Сохранить"
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                        >
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
                        </PopupWithForm>

                        <PopupWithForm
                            title="Новое место"
                            name="add-place"
                            buttonText="Создать"
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}
                        >
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
                        </PopupWithForm>

                        <PopupWithForm
                            title="Обновить аватар"
                            name="edit-avatar"
                            buttonText="Сохранить"
                            isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}
                        >
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
                        </PopupWithForm>

                        <PopupWithForm
                            title="Вы уверены?"
                            name="card-delete"
                            buttonText="Да"
                            isOpen={false}
                            onClose={closeAllPopups}
                        ></PopupWithForm>

                        <ImagePopup
                            card={selectedCard}
                            onClose={closeAllPopups}
                        />
                    </div>
                </div>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App
