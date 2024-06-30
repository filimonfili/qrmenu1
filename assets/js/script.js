document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const categories = document.querySelectorAll('.category');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  searchInput.addEventListener('input', filterFoodItems);

  categories.forEach(function (category) {
    category.addEventListener('click', function () {
      const selectedCategory = this.getAttribute('data-category');

      categories.forEach(cat => cat.classList.remove('active'));
      this.classList.add('active');

      filterFoodItems();
    });
  });

  function filterFoodItems() {
    const filter = searchInput.value.toLowerCase();
    const selectedCategory = document.querySelector('.category.active').getAttribute('data-category');
    const foodItems = document.querySelectorAll('.food-item');

    foodItems.forEach(function (item) {
      const foodName = item.querySelector('.food-header h2').textContent.toLowerCase();
      const itemCategory = item.getAttribute('data-category');

      if ((selectedCategory === 'all' || itemCategory === selectedCategory) && foodName.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    attachMoreButtonListeners(); // Re-attach event listeners after filtering
  }

  function attachMoreButtonListeners() {
    const moreButtons = document.querySelectorAll('.more-btn');
    const closeButtons = document.querySelectorAll('.close-btn');

    moreButtons.forEach(button => {
      button.removeEventListener('click', handleMoreButtonClick);
      button.addEventListener('click', handleMoreButtonClick);
    });

    closeButtons.forEach(button => {
      button.removeEventListener('click', handleCloseButtonClick);
      button.addEventListener('click', handleCloseButtonClick);
    });

    overlay.addEventListener('click', function () {
      document.querySelectorAll('.food-detail-popup.show').forEach(popup => {
        popup.classList.remove('show');
      });
      overlay.classList.remove('show');
    });
  }

  function handleMoreButtonClick(event) {
    const detailId = event.currentTarget.getAttribute('data-details');
    const detailPopup = document.getElementById(detailId);
    detailPopup.classList.add('show');
    overlay.classList.add('show');
  }

  function handleCloseButtonClick(event) {
    const detailId = event.currentTarget.getAttribute('data-details');
    const detailPopup = document.getElementById(detailId);
    detailPopup.classList.remove('show');
    overlay.classList.remove('show');
  }

  // Initial setup
  filterFoodItems();

  // Attach initial more button listeners
  attachMoreButtonListeners();

  // Carousel dots functionality
  const cardContainer = document.getElementById('card-container');
  const dotsContainer = document.getElementById('dots');
  const cards = document.querySelectorAll('.card');

  // Create dots for each card
  cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  cardContainer.addEventListener('scroll', () => {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    const scrollPosition = cardContainer.scrollLeft;
    const index = Math.round(scrollPosition / cardWidth);

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to the current dot
    if (dots[index]) dots[index].classList.add('active');
  });
});
