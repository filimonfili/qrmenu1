document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const foodItems = document.querySelectorAll('.food-item');
  const categories = document.querySelectorAll('.category');

  searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    foodItems.forEach(function (item) {
      const foodName = item.querySelector('.food-header h2').textContent.toLowerCase();
      if (foodName.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  categories.forEach(function (category) {
    category.addEventListener('click', function () {
      const selectedCategory = this.getAttribute('data-category');

      categories.forEach(cat => cat.classList.remove('active'));
      this.classList.add('active');

      foodItems.forEach(function (item) {
        if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const moreButtons = document.querySelectorAll('.more-btn');
  const closeButtons = document.querySelectorAll('.close-btn');

  moreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const detailId = this.getAttribute('data-details');
      document.getElementById(detailId).style.display = 'block';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const detailId = this.getAttribute('data-details');
      document.getElementById(detailId).style.display = 'none';
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const moreButtons = document.querySelectorAll('.more-btn');
  const closeButtons = document.querySelectorAll('.close-btn');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  moreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const detailId = this.getAttribute('data-details');
      const detailPopup = document.getElementById(detailId);
      detailPopup.classList.add('show');
      overlay.classList.add('show');
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const detailId = this.getAttribute('data-details');
      const detailPopup = document.getElementById(detailId);
      detailPopup.classList.remove('show');
      overlay.classList.remove('show');
    });
  });

  overlay.addEventListener('click', function() {
    document.querySelectorAll('.food-detail-popup.show').forEach(popup => {
      popup.classList.remove('show');
    });
    overlay.classList.remove('show');
  });
});
