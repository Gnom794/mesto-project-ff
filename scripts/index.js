// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(card, handDelete) {
    const cardTemplate = document.getElementById('card-template');
    const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name

    deleteButton.addEventListener('click', () => {
        handDelete(cardElement);
    });

    return cardElement;
}

const placesList = document.querySelector('.places__list');

initialCards.forEach((card) => {
    const cardElement = createCard(card, (element) => {
        element.remove()
    });

    placesList.appendChild(cardElement);
});