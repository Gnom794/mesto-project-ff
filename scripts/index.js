// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function deleteCard(cardElement) {
    cardElement.remove();
}

function createCard(card, handleDelete) {
    const cardTemplate = document.getElementById('card-template');
    const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name

    deleteButton.addEventListener('click', () => {
        handleDelete(cardElement);
    });

    return cardElement;
}

const cardsContainer = document.querySelector('.places__list');

initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
        cardsContainer.append(cardElement);
    });