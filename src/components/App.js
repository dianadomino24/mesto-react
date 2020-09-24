import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'

function App() {
    //состояние попапов
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

    const [cards, setCards] = useState([])

    const profileAvatarSelector = '.profile__image'
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

    // при монтировании компонента будет совершать запрос в API за карточками мест
    useEffect(() => {
        api.getItems('cards')
            .then((serverCards) => {
                const items = serverCards.map((item) => ({
                    name: item.name,
                    link: item.link,
                    _id: item._id,
                    likes: item.likes,
                    owner: item.owner,
                }))
                setCards(items)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id)

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
            const newCards = cards.map((c) =>
                c._id === card._id ? newCard : c
            )
            // Обновляем стейт
            setCards(newCards)
        })
    }

    function handleCardDelete(card, cardDOMElement) {
        api.deleteItem('cards', card._id)
            .then(() => {
                //вызывает удаление карточки из разметки
                cardDOMElement.remove()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleUpdateUser(userData) {
        api.changeItem(
            {
                name: userData.name.trim(),
                about: userData.about.trim(),
            },
            'users/me'
        )
            .then((res) => {
                //установим новые данные профиля
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleUpdateAvatar(userData) {
        api.changeItem({ avatar: userData.avatar }, 'users/me/avatar')
            .then((res) => {
                //установим новые данные профиля
                setCurrentUser(res)
                // установим новый аватар в разметке
                document.querySelector(
                    profileAvatarSelector
                ).style.backgroundImage = `url('${res.avatar}')`
            })
            .then(() => {
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }
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
                            handleCardClick={handleCardClick}
                            cards={cards}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                        <Footer />
                        <EditProfilePopup
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}
                        />

                        <PopupWithForm
                            title="Новое место"
                            name="add-place"
                            buttonText="Создать"
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}
                            // onSubmit={}
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

                        <EditAvatarPopup
                            isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}
                            onUpdateAvatar={handleUpdateAvatar}
                        />

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
