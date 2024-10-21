import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const galleryContainer = document.querySelector('.gallery');
let currentPage = 1;
let currentQuery = '';

// Функція для обробки сабміту форми
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = form.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  // Очищення попередніх результатів та встановлення нових значень
  currentQuery = query;
  currentPage = 1;
  galleryContainer.innerHTML = '';

  try {
    showLoadingIndicator(); // Показати індикатор завантаження
    const data = await fetchImages(currentQuery, currentPage);
    hideLoadingIndicator(); // Приховати індикатор завантаження

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(data.hits); // Відображення результатів у галереї
  } catch (error) {
    hideLoadingIndicator(); // Приховати індикатор завантаження у разі помилки
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});

// Функції для керування індикатором завантаження
function showLoadingIndicator() {
  galleryContainer.insertAdjacentHTML('beforebegin', '<div class="loader">Loading...</div>');
}

function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
