import React, { useState, useEffect } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function Main(props) {
    const currentUserData = React.useContext(CurrentUserContext)
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

    // // при монтировании компонента будет совершать запрос в API за пользовательскими данными и карточками
    // useEffect(() => {
    //     Promise.all([api.getItems('users/me'), api.getItems('cards')])
    //         .then((values) => {
    //             const [userData, serverCards] = values
    //             // setCurrentUserId(userData._id)
    //             // отображает данные пользователья в профиле
    //             // setUserData(userData)

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

    // // для проверки, есть ли в списке картинки, если нет, то делает видимой надпись о пустом списке
    // //в placesList всегда есть минимум 1 элемент - надпись о пустом списке
    // function check() {
    //     const placesList = document.querySelector('.places__list')
    //     return (placesList.children.length === 1? "places__empty-list places__empty-list_visible" : "places__empty-list")
    // }

    return (
        <main className="content page__content section">
            <section className="profile section">
                <div
                    className="profile__image"
                    onClick={props.onEditAvatar}
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
                            onClick={props.onEditProfile}
                        />
                    </div>
                    <p className="profile__job">{currentUserData.about}</p>
                </div>
                <button
                    className="link profile__add-button"
                    onClick={props.onAddPlace}
                />
            </section>
            <section className="places section">
                <ul className="places__list">
                    <li className="places__empty-list">Нет добавленных мест</li>
                    {props.cards.map((card) => (
                        <Card
                            key={card._id}
                            onCardClick={props.handleCardClick}
                            card={card}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                            {...card}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main
