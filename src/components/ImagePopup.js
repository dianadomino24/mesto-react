import React from 'react'

function ImagePopup({ card, onClose }) {
    function close() {
        onClose()
        window.removeEventListener('keydown', handleEscClose)
    }
    //закрывает при нажатии esc
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            close()
        }
    }
    //закрывает попап при нажатии на фон
    function closePopupByClickingOverlay(event) {
        if (event.target === event.currentTarget) {
            close()
        }
    }

    if (card) {
        window.addEventListener('keydown', handleEscClose)

        return (
            <section
                className="popup popup_opened popup_type_picture-zoom"
                onClick={closePopupByClickingOverlay}
            >
                <div className="popup__container-pic-zoom">
                    <button
                        className="link popup__close-button"
                        onClick={close}
                    />
                    <figure className="picture-zoom">
                        <img
                            src={card.link}
                            alt={card.name}
                            className="picture-zoom__img"
                        />
                        <p className="picture-zoom__title">{card.name}</p>
                    </figure>
                </div>
            </section>
        )
    } else return ''
}

export default ImagePopup
