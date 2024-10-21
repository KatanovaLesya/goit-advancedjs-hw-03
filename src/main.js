import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css'; // Підключення стилів


const form = document.getElementById('search-form');
const galleryContainer = document.querySelector('.gallery');
let currentPage = 1;
let currentQuery = '';
let lightbox;

// Функція для ініціалізації SimpleLightbox
function initializeLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'title', // Використання атрибуту title для підписів
    captionPosition: 'bottom', // Позиція підпису
    captionDelay: 250, // Затримка перед показом підпису
    captions: true, // Увімкнення підписів
  });
}
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
    if (lightbox) {
      lightbox.refresh();
    } else {
      initializeLightbox();
    }
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
  galleryContainer.insertAdjacentHTML('beforebegin', '<div class="loader"></div>');
}

function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
