let menuData;

const loading_message = document.getElementById('loading_message');
let activeCategory = null;

const categoryImages = {

    "Starters": "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800",
    "Main Course": "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    "Pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    "Burgers": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    "Pasta": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    "Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    "Desserts": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
    "Beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    "Soups": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    "Salads": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    "Sandwiches": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    "Wraps": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
    "Seafood": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800",
    "Grilled Items": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    "Rice & Biryani": "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800",
    "Breakfast": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800",
    "Indian Thali": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    "Ice Cream": "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=800",
    "Bakery": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    "Shakes": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800"

};

document.addEventListener('DOMContentLoaded' , async () => {
    loadMenu('restaurant_menu.json');
})

async function loadMenu(apiUrl) {

    try {

        let response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to Load Menu.');
        }

        menuData = await response.json();

        getCategories();
        renderFavouriteDishes();

    } catch(error) {

        loading_message.textContent = 'Failed to Load Recipes..';
        console.log(error)
    }
    
}

const categoryModal = document.getElementById('categoryModal');

function getCategories(){

    if (menuData.length === 0) {
        return;
    }

    const categories = {};

    for (let food of menuData) {
        if (food.category in categories) {
            categories[food.category] += 1;
        } else {
            categories[food.category] = 1;
        }
    }

    renderCategoricalCards(categories);
    
}

const categoryContainer = document.getElementById('categoryContainer');

function renderCategoricalCards(categoryMenu) {

    if (Object.keys(categoryMenu).length === 0) {
        categoryContainer.innerHTML = `
            <div class="loading-state">
                <span class="loading-spinner"></span>
                <p id="loading_message">Preparing something delicious...</p>
            </div>`;
        return;
    } 

    categoryContainer.innerHTML = '';

    let cCount = 1;

    for (let category in categoryMenu) {

        const formattedCategory = category.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
        const imageUrl = categoryImages[formattedCategory] || categoryImages['Main Course'];
        const formattedNumber = cCount < 10 ? `0${cCount}` : cCount;

        const card = document.createElement('article');

        card.className = 'category-card';
        card.setAttribute('data-category', formattedCategory);
        
        card.style.setProperty('--category-image', `url('${imageUrl}')`);

        card.innerHTML = `
            <span class="category-number">${formattedNumber}</span>

            <div class="category-content">
                <small>EXPLORE THE COLLECTION</small>
                <h3>${formattedCategory}</h3>
                <p>${categoryMenu[category]} items available</p>
            </div>

            <div class="category-arrow">
                ↗
            </div>
        `;

        card.addEventListener('click' , () => {
            renderCategoryModal(formattedCategory);
        });

        categoryContainer.appendChild(card);
        cCount += 1;
    }

}

const categoryTitle = document.getElementById('categoryTitle');
const modalCloseButton = document.getElementById('modalCloseButton');

function renderCategoryModal(categoryName) {

    categoryModal.classList.add('is-open');
    document.body.classList.add('modal-open');

    activeCategory = categoryName;

    categoryTitle.textContent = categoryName;
    renderCategoryDishes(categoryName);
}

modalCloseButton.addEventListener('click' , () => {
    categoryModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    activeCategory = null;
})

const menuItemsContainer = document.getElementById('menuItemsContainer');
const menuSearch = document.getElementById('menuSearch');
const sortSelect = document.getElementById('sortSelect');

const filterButton = document.getElementById('filterButton');

const filterVeg = document.getElementById('filterVeg');
const filterNonVeg = document.getElementById('filterNonVeg');
const filterVegan = document.getElementById('filterVegan');

const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');

const activeFilters = document.getElementById('activeFilters');

function renderCategoryDishes(categoryName){

    let dishes = applySearchSort(categoryName);
    
    activeFilters.innerHTML = '';

    const updatedDishes = applyOptionalFilters(dishes);

    if (updatedDishes.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="loading-state">
                <span class="loading-spinner"></span>
                <p>No Match Found.</p>
            </div>`;
        return;
    } else {
        menuItemsContainer.innerHTML = '';
    }
    
    let dishCount = 1;
    for (let dish of updatedDishes) {
        displayDish(dish , dishCount);
        dishCount++;
    }

}

function applySearchSort(categoryName) {
    
    let dishes;
    const searchText = menuSearch.value.trim().toLowerCase();
    
    if (searchText != '') {
        dishes = menuData.filter(food => food['category'] === categoryName && food['name'].toLowerCase().includes(searchText));
    } else {
        dishes = menuData.filter(food => food['category'] === categoryName);
    }

    const sortName = sortSelect.value;

    if (sortName === 'price-low') {
        dishes.sort((a , b) => {
            return a.price - b.price;
        })
    } else if (sortName === 'price-high') {
        dishes.sort((a , b) => {
            return b.price - a.price;
        })
    } else if (sortName === 'rating') {
        dishes.sort((a , b) => {
            return b.rating - a.rating;
        })
    } else if (sortName === 'name') {
        dishes.sort((a , b) => {
            return a.name.localeCompare(b.name);
        })
    }

    return dishes;
}

function applyOptionalFilters(dishes) {

    let selectedDiets = [];

    if (filterVeg.checked) {
        selectedDiets.push('veg');
        appendActiveFilterTag('veg', 'Vegetarian');
    }
    if (filterNonVeg.checked) {
        selectedDiets.push('non-veg');
        appendActiveFilterTag('non-veg', 'Non-Vegetarian');
    }
    if (filterVegan.checked) {
        selectedDiets.push('vegan');
        appendActiveFilterTag('vegan', 'Vegan');
    }

    if (selectedDiets.length > 0) {
        dishes = dishes.filter(food => selectedDiets.includes(food['dietary']));
    }

    const minimumPrice = minPrice.value !== '' ? Number(minPrice.value) : 0;
    const maximumPrice = maxPrice.value !== '' ? Number(maxPrice.value) : Infinity;

    if (minPrice.value === '' && maxPrice.value === '') {
        return dishes;
    }

    appendActiveFilterTag('minPrice' , `Min: ₹${minimumPrice}`);

    if (maximumPrice !== Infinity) {
        appendActiveFilterTag('maxPrice' , `Max: ₹${maximumPrice}`);
    }
    
    dishes = dishes.filter(food => {
        const price = Number(food['price']);
        return price >= minimumPrice && price <= maximumPrice;
    });

    return dishes;

}

function displayDish(food , count) {

    const dishCard = document.createElement('article');
    dishCard.classList.add('menu-dish-card');
    dishCard.setAttribute('data-dish-id', `dish-${count}`);

    dishCard.innerHTML = `
    <div class="menu-dish-top">
        <span class="diet-badge veg">${food.dietary || 'Not Available'}</span>
        <span class="dish-rating">★ ${food.rating.toFixed(2) || 'Not Available'}</span>
    </div>

    <div class="menu-dish-info">
        <div class="menu-dish-meta">
            <span>CHEF'S SPECIAL</span>
        </div>

        <h3>${food.name || 'Currently Not Available'}</h3>
        <p>${food.description || 'Not Available'}</p>

        <div class="menu-dish-footer">
            <span class="menu-dish-price">₹${food.price}</span>
            <span class="dish-inspect">Details →</span>
        </div>
    </div>`;

    dishCard.addEventListener('click' , () => {
        renderDishDetails(food);
    })

    menuItemsContainer.appendChild(dishCard);
}

menuSearch.addEventListener('input' , () => {
    renderCategoryDishes(activeCategory);
});

sortSelect.addEventListener('change' , () => {
    renderCategoryDishes(activeCategory);
})

const filterModal = document.getElementById('filterModal');
const filterModalCloseBtn = document.getElementById('filterModalCloseBtn');

filterButton.addEventListener('click' , () => {
    filterModal.classList.add('is-open');
})

filterModalCloseBtn.addEventListener('click' , () => {
    filterModal.classList.remove('is-open');
})

const applyFilters = document.getElementById('applyFilters');

applyFilters.addEventListener('click' , () => {

    renderCategoryDishes(activeCategory);
    filterModal.classList.remove('is-open');
    
})

function appendActiveFilterTag(filterKey, filterLabel) {
    if (activeFilters.querySelector(`[data-filter-key="${filterKey}"]`)) return;

    const tag = document.createElement('div');
    tag.className = 'active-filter-pill';
    tag.setAttribute('data-filter-key', filterKey);
    tag.textContent = filterLabel;

    activeFilters.appendChild(tag);
}

const signatureContainer = document.getElementById('signatureContainer');

function renderFavouriteDishes(){

    if (menuData.length === 0) {
        signatureContainer.innerHTML = `
            <div class="loading-state">
                <span class="loading-spinner"></span>
                <p>Finding our customer favourites...</p>
            </div>`;
        return;
    }

    signatureContainer.innerHTML = '';

    const topRatedSorted = [...menuData].sort((a , b) => {
        return b.rating - a.rating;
    })

    let dishCount = 1

    const topRatedishes = topRatedSorted.slice(0 , 12);
    for (let dish of topRatedishes) {
        getTopRatedDishCard(dish , dishCount);
        dishCount++;
    }

}

function getTopRatedDishCard(dish , dishCount){

    const dishCard = document.createElement('article');
    dishCard.classList.add('signature-card-text-only-card');

    dishCard.innerHTML = `
    <div class="card-header-row">
        <span class="rank-badge">${dishCount < 10 
            ? `0${dishCount}`
            : dishCount
        } // MOST LOVED</span>
        <span class="rating">★ ${dish.rating} <small>${dish.review_count 
            ? `(${dish.review_count}+ reviews)`
            : '(Review Count not available)'
        }</small></span>
    </div>

    <div class="card-body">
        <span class="sub-meta">CHEF'S MASTERPIECE</span>
        <h3 class="card-title">${dish.name || 'Not Available'}</h3>
        <p class="card-description">
            ${dish.description}
        </p>
    </div>

    <div class="card-footer">
        <span class="dish-price">₹${dish.price}</span>
    </div>`;

    signatureContainer.appendChild(dishCard);
}

const dishDetailModal = document.getElementById('dishDetailModal');

const detailDishName = document.getElementById('detailDishName');
const detailDishCategory = document.getElementById('detailDishCategory');
const detailDietBadge = document.getElementById('detailDietBadge');
const detailAvailabilityBadge = document.getElementById('detailAvailabilityBadge');
const detailRating = document.getElementById('detailRating');
const detailDescription = document.getElementById('detailDescription');
const detailPrepTime = document.getElementById('detailPrepTime');
const detailSpiceLevel = document.getElementById('detailSpiceLevel');
const detailPrice = document.getElementById('detailPrice');

const detailModalCloseBtn = document.getElementById('detailModalCloseBtn');
const detailModalCancelBtn = document.getElementById('detailModalCancelBtn');

const dietaryObject = {
    'veg' : 'Vegetarian',
    'non-veg' : 'Non Vegetarian',
    'vegan' : 'Vegan',
}

function renderDishDetails(dish) {

    dishDetailModal.classList.add('is-open');
    document.body.classList.add('modal-open');

    detailDishName.textContent = dish.name || 'Not Available';
    detailDishCategory.textContent = dish.category || 'Specialty';
    detailDescription.textContent = dish.description || 'Description not available.';
    detailPrice.textContent = dish.price ? `₹${dish.price}` : '₹0';

    const dietaryKey = dish.dietary || 'veg';
    detailDietBadge.className = `diet-badge ${dietaryKey}`;
    detailDietBadge.textContent = dietaryObject[dietaryKey] || 'Vegetarian';

    const isAvailable = dish.is_available === 1;
    detailAvailabilityBadge.className = `availability-badge ${isAvailable ? 'available' : 'unavailable'}`;
    detailAvailabilityBadge.textContent = isAvailable ? 'Available' : 'Currently Unavailable';

    const ratingVal = dish.rating ? dish.rating.toFixed(2) : '4.00';
    const reviewText = dish.review_count ? `(${dish.review_count}+ reviews)` : '(50+ reviews)';
    detailRating.innerHTML = `★ ${ratingVal} <small id="detailReviewCount">${reviewText}</small>`;

    detailPrepTime.textContent = dish.preparation_time ? `${dish.preparation_time} mins` : '15 - 30 mins';
    detailSpiceLevel.textContent = dish.spice_level ? `${dish.spice_level} 🌶️` : 'Medium 🌶️';
}

detailModalCloseBtn.addEventListener('click' , closeDetailModal);
detailModalCancelBtn.addEventListener('click' , closeDetailModal);

function closeDetailModal(){
    
    dishDetailModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');

}