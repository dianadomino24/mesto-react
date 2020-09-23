import React from 'react'

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <li className="places__item">
            <figure className="place">
                {/* проверит, моя ли карточка и отключит кнопку удаления у чужих */}
                <button
                    className={
                        props.owner._id === props.currentUserId
                            ? 'link place__delete-button'
                            : 'link place__delete-button place__delete-button_disabled'
                    }
                />
                <img
                    src={props.link}
                    alt={props.name}
                    className="place__image"
                    onClick={handleClick}
                />
                <div className="place__wrapper">
                    <h2 className="place__name">{props.name} </h2>
                    <button className="place__like-button-container">
                        {/* проверит, залайкана ли мной ранее карточка*/}
                        <div
                            className={
                                props.owner._id === props.currentUserId
                                    ? 'place__like-button place__like-button_active'
                                    : 'place__like-button'
                            }
                        ></div>
                        <div className="place__like-counter">
                            {props.likes.length}
                        </div>
                    </button>
                </div>
            </figure>
        </li>
    )
}
