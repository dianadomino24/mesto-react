import React from 'react'

function Main({ onEditProfile, onAddPlace, onEditAvatar, ...rest }) {
    return (
        <main className="content page__content section">
            <section className="profile section">
                <div className="profile__image" onClick={onEditAvatar}></div>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name"></h1>
                        <button
                            className="link profile__edit-button"
                            onClick={onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__job"></p>
                </div>
                <button
                    className="link profile__add-button"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="places section">
                <ul className="places__list">
                    <li className="places__empty-list">Нет добавленных мест</li>
                </ul>
            </section>
        </main>
    )
}

export default Main
