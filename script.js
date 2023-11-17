script.js
function addReview() {
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
  
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `<p><strong>${name}</strong> - Rating: ${rating}</p><p>${comment}</p>`;
  
    document.getElementById('existing-reviews').appendChild(reviewElement);
  
    document.getElementById('reviewForm').reset();
  }
  