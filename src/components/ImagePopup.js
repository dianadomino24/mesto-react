import React from 'react'

function ImagePopup(props) {
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            props.onClose()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
    }

    if (props.card) {
        window.addEventListener('keydown', (evt) => handleEscClose(evt))

        return (
            <section
                className="popup popup_opened popup_type_picture-zoom"
                onClick={closePopupByClickingOverlay}
            >
                <div className="popup__container-pic-zoom">
                    <button
                        className="link popup__close-button"
                        onClick={props.onClose}
                    />
                    <figure className="picture-zoom">
                        <img
                            src={props.card.link}
                            alt={props.card.name}
                            className="picture-zoom__img"
                        />
                        <p className="picture-zoom__title">{props.card.name}</p>
                    </figure>
                </div>
            </section>
        )
    } else return ''
}

export default ImagePopup
