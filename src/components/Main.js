import React, { useState, useEffect } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    // cardsList,
    handleCardClick,
    ...rest
}) {
    const currentUserData = React.useContext(CurrentUserContext)
    const [cards, setCards] = useState([])

    // данные пользователя
    // const [userAvatar, setUserAvatar] = useState()
    // const [userName, setUserName] = useState('Жак Ив Кусто')
    // const [userDescription, setUserInfo] = useState('Мореплаватель')
    // // устанавливает данные пользователя
    // function setUserData(userData) {
    //     setUserAvatar(userData.avatar)
    //     setUserName(userData.name)
    //     setUserInfo(userData.about)
    // }
    // при монтировании компонента будет совершать запрос в API за пользовательскими данными и карточками
    useEffect(() => {
        Promise.all([api.getItems('users/me'), api.getItems('cards')])
            .then((values) => {
                const [userData, serverCards] = values
                // setCurrentUserId(userData._id)
                // отображает данные пользователья в профиле
                // setUserData(userData)

                const items = serverCards.map((item) => ({
                    // key: item._id,
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

    console.log(cards)
    // // для проверки, есть ли в списке картинки, если нет, то делает видимой надпись о пустом списке
    // //в placesList всегда есть минимум 1 элемент - надпись о пустом списке
    // function check() {
    //     const placesList = document.querySelector('.places__list')
    //     return (placesList.children.length === 1? "places__empty-list places__empty-list_visible" : "places__empty-list")
    // }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUserData._id)

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

    // без этого условия выдает ошибку (пытается отрисовать Main до получения данных с сервера)
    if (currentUserData) {
        console.log(cards)
        return (
            <main className="content page__content section">
                <section className="profile section">
                    <div
                        className="profile__image"
                        onClick={onEditAvatar}
                        style={{
                            backgroundImage: `url(${currentUserData.avatar})`,
                        }}
                    ></div>
                    <div className="profile__info">
                        <div className="profile__name-wrap">
                            <h1 className="profile__name">
                                {currentUserData.name}
                            </h1>
                            <button
                                className="link profile__edit-button"
                                onClick={onEditProfile}
                            />
                        </div>
                        <p className="profile__job">{currentUserData.about}</p>
                    </div>
                    <button
                        className="link profile__add-button"
                        onClick={onAddPlace}
                    />
                </section>
                <section className="places section">
                    <ul className="places__list">
                        <li className="places__empty-list">
                            Нет добавленных мест
                        </li>
                        {cards.map((card) => (
                            <Card
                                key={card._id}
                                onCardClick={handleCardClick}
                                card={card}
                                {...card}
                            />
                        ))}
                    </ul>
                </section>
            </main>
        )
    } else return ''
}

export default Main
