import React from 'react';
import logoPath from '../images/logo.svg'

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
                    <header className="header page__header section">
                        <a href="#" className="logo header__logo">
                            <img
                                className="logo__image"
                                src={logoPath}
                                alt="Логотип проекта Mesto"
                            />
                        </a>
                    </header>
                    <main className="content page__content section">
                        <section className="profile section">
                            <div className="profile__image"></div>
                            <div className="profile__info">
                                <div className="profile__name-wrap">
                                    <h1 className="profile__name"></h1>
                                    <button
                                        className="link profile__edit-button"                                      
                                    ></button>
                                </div>
                                <p className="profile__job"></p>
                            </div>
                            <button
                                className="link profile__add-button"                            
                            ></button>
                        </section>
                        <section className="places section">
                            <ul className="places__list">
                                <li className="places__empty-list">Нет добавленных мест</li>
                            </ul>
                        </section>
                    </main>
                    <footer className="footer section page__footer">
                        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
                    </footer>
                    <section
                        className="popup popup_type_edit-profile"                  
                    >
                        <div className="popup__container">
                            <button className="link popup__close-button"></button>
                            <form
                                className="popup__form popup__form_type_profile"
                                noValidate
                            >
                                <h2 className="popup__title">Редактировать профиль</h2>
                                <fieldset className="popup__fieldset">
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
                                        <span
                                            className="popup__input-error js-popup__input-error_type_profile"
                                        ></span>
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
                                        <span
                                            className="popup__input-error js-popup__input-error_type_profile"
                                        ></span>
                                    </label>
                                    <button
                                        className="link popup__save-button popup__save-button_type_profile"
                                        type="submit"
                                    >
                                        Сохранить
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </section>
                    <section
                        className="popup popup_type_add-place"                    
                    >
                        <div className="popup__container popup__container_type_add-place">
                            <button className="link popup__close-button"></button>
                            <form className="popup__form popup__form_type_place" noValidate>
                                <h2 className="popup__title">Новое место</h2>
                                <fieldset className="popup__fieldset">
                                    <label className="popup__label">
                                        <input
                                            type="text"
                                            name="place-name"
                                            placeholder="Название"
                                            id="place-name"
                                            className="input popup__input popup__input_type_place-name"
                                            required
                                            minLength="1"
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
                                    <button
                                        className="link popup__save-button popup__save-button_type_place"
                                        type="submit"
                                    >
                                        Создать
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </section>
                    <section
                        className="popup popup_type_picture-zoom"                  
                    >
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
                    <section
                        className="popup popup_type_card-delete"                     
                    >
                        <div className="popup__container popup__container_type_card-delete">
                            <button className="link popup__close-button"></button>
                            <form
                                className="popup__form popup__form_type_card-delete"
                                noValidate
                            >
                                <h2 className="popup__title popup__title_type_card-delete">
                                    Вы уверены?
                                </h2>
                                <fieldset className="popup__fieldset">
                                    <button
                                        className="link popup__save-button popup__save-button_type_card-delete"
                                        autoFocus
                                        type="submit"
                                    >
                                        Да
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </section>
                    <section
                        className="popup popup_type_edit-avatar"                    
                    >
                        <div className="popup__container">
                            <button className="link popup__close-button"></button>
                            <form
                                className="popup__form popup__form_type_avatar"
                                noValidate
                            >
                                <h2 className="popup__title">Обновить аватар</h2>
                                <fieldset className="popup__fieldset">
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
                                    <button
                                        className="link popup__save-button popup__save-button_type_avatar"
                                        type="submit"
                                    >
                                        Сохранить
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </section>
                </div>
      </div>
    </div>
  );
}

export default App;
