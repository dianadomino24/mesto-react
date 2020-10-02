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
import AddPlacePopup from './AddPlacePopup'
import { cleanInputErrors } from './FormValidator'

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
    // для попапа с полноразмерной картинкой
    const [selectedCard, setSelectedCard] = useState()

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
        //убирает уведомления об ошибках от предыдущих инпутов
        cleanInputErrors()

        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard()
    }

    // при монтировании компонента будет совершать запрос в API за пользовательскими данными и карточками
    useEffect(() => {
        Promise.all([api.getItems('users/me'), api.getItems('cards')])
            .then((values) => {
                const [userData, serverCards] = values
                // отображает данные пользователья в профиле
                setCurrentUser(userData)

                // отоьразит карточки с сервера
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

    // варианты замены текста кнопок при ожидании загрузки
    const loadingText = 'Сохранение...'
    const defaultSaveText = 'Сохранить'
    const defaultCreateText = 'Создать'
    // const defaultYesText = 'Да'
    // заменит текст кнопок при ожидании процесса загрузки данных на сервер
    function renderLoading(isLoading, button, text) {
        if (isLoading) {
            button.textContent = loadingText
        } else {
            button.textContent = text
        }
    }
    function handleCardLike(card) {
        // проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id)

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
                const newCards = cards.map((c) =>
                    c._id === card._id ? newCard : c
                )
                // Обновляем стейт
                setCards(newCards)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // удаляет карточку
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
    // обновляет профиль
    function handleUpdateUser(userData) {
        const profileSubmitButton = document.querySelector(
            '.popup__save-button_type_edit-profile'
        )
        // ожидание загрузки
        renderLoading(true, profileSubmitButton, defaultSaveText)

        api.changeItem(
            {
                name: userData.name.trim(),
                about: userData.about.trim(),
            },
            'users/me'
        )
            .then((res) => {
                //установим новые данные профиля в разметке
                setCurrentUser(res)
            })
            .then(() => {
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(false, profileSubmitButton, defaultSaveText)
            })
    }

    function handleUpdateAvatar(userData) {
        const avatarSubmitButton = document.querySelector(
            '.popup__save-button_type_edit-avatar'
        )
        // до получения ответа от сервера покажет пользователю надпись о процессе загрузки
        renderLoading(true, avatarSubmitButton, defaultSaveText)

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
            .finally(() => {
                renderLoading(false, avatarSubmitButton, defaultSaveText)
            })
    }
    // добавит новую карточку места
    function handleAddPlaceSubmit(newCard) {
        const placeSubmitButton = document.querySelector(
            '.popup__save-button_type_add-place'
        )
        // до получения ответа от сервера покажет пользователю надпись о процессе загрузки
        renderLoading(true, placeSubmitButton, defaultCreateText)

        api.createItem(newCard, 'cards')
            // создаст ее в разметке
            .then((newCard) => {
                setCards([newCard, ...cards])
            })
            .then(() => {
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(false, placeSubmitButton, defaultCreateText)
            })
    }

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

                        <AddPlacePopup
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}
                            onAddPlace={handleAddPlaceSubmit}
                        />

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
