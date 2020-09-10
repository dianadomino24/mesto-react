import React from 'react';

function Main() {

    function handleEditAvatarClick () {
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened')
    }

    function handleEditProfileClick () {
        document.querySelector('.popup_type_edit-profile').classList.add('popup_opened')
    }

    function handleAddPlaceClick () {
        document.querySelector('.popup_type_add-place').classList.add('popup_opened')
    }


    return (
        <main className="content page__content section">
                        <section className="profile section">
                            <div className="profile__image" onClick={handleEditAvatarClick}></div>
                            <div className="profile__info">
                                <div className="profile__name-wrap">
                                    <h1 className="profile__name"></h1>
                                    <button
                                        className="link profile__edit-button" 
                                        onClick={handleEditProfileClick}                                     
                                    ></button>
                                </div>
                                <p className="profile__job"></p>
                            </div>
                            <button
                                className="link profile__add-button"  
                                onClick={handleAddPlaceClick}                          
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