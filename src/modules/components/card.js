export default function createCard(mealName, strMealImage) {
    const mealCard = document.createElement('div')
    mealCard.className = 'card'

    const mealImage = document.createElement('figure')
    mealImage.className = 'img-wrapper'
    mealImage.innerHTML = `<img src="${strMealImage}">`

    const mealTitle = document.createElement('div')
    mealTitle.className = 'card-body'
    mealTitle.innerHTML = `
    <article class="card-header">
        <h2 class="card-title">${mealName}</h2>
        <div class="like-button">
            <i class="fas fa-heart"></i>
            <span class="counter">
        </div>
    </article>
    <button class="btn" type="button">Comments</button>
    <button class="btn" type="button">Reservations</button>`

    mealCard.append(mealImage, mealTitle)
    return mealCard
}