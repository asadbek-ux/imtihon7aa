
const clothingBtn = document.querySelector('.clothing');
const shoesBtn = document.querySelector('.shoes');
const clothingContainer = document.querySelector('.clothing-container');
const shoesContainer = document.querySelector('.shoes-container');

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('green'));
        button.classList.add('green');
    });
});

clothingBtn.addEventListener('click', () => {
    clothingContainer.style.display = 'flex';
    shoesContainer.style.display = 'none';
});

shoesBtn.addEventListener('click', () => {
    clothingContainer.style.display = 'none';
    shoesContainer.style.display = 'flex';
});






const likeButtons = document.querySelectorAll('.card .like');
const likeCountEl = document.querySelector('.likecount .count');
let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

likeCountEl.textContent = likeCount;
likeCountEl.style.display = likeCount > 0 ? 'flex' : 'none';

likeButtons.forEach((button, index) => {
 
  const isLiked = JSON.parse(localStorage.getItem(`like-${index}`)) || false;
  if (isLiked) {
    button.classList.add('liked');
    button.style.backgroundColor = 'red';
  }

  button.addEventListener('click', () => {
    const liked = button.classList.toggle('liked');
    localStorage.setItem(`like-${index}`, liked);

    if (liked) {
      likeCount++;
      button.style.backgroundColor = 'red';
    } else {
      likeCount--;
      button.style.backgroundColor = 'transparent';
    }

    likeCountEl.textContent = likeCount;
    likeCountEl.style.display = likeCount > 0 ? 'flex' : 'none';
    localStorage.setItem('likeCount', likeCount);
  });
});

const addButtons = document.querySelectorAll('.card .addbtn');
const addCountEl = document.querySelector('.addcount .count');
let addCount = parseInt(localStorage.getItem('addCount')) || 0;

addCountEl.textContent = addCount;
addCountEl.style.display = addCount > 0 ? 'flex' : 'none';

addButtons.forEach((button, index) => {
  const img = button.querySelector('img');
  const isAdded = JSON.parse(localStorage.getItem(`add-${index}`)) || false;
  if (isAdded) {
    button.classList.add('added');
    img.src = './img/added.png';
  }

  button.addEventListener('click', () => {
    const added = button.classList.toggle('added');
    localStorage.setItem(`add-${index}`, added);

    if (added) {
      addCount++;
      img.src = './img/added.png';
    } else {
      addCount--;
      img.src = './img/add.png';
    }

    addCountEl.textContent = addCount;
    addCountEl.style.display = addCount > 0 ? 'flex' : 'none';
    localStorage.setItem('addCount', addCount);
  });
});






document.querySelector('.addcount').addEventListener('click', function () {
    window.location.href = 'detail.html';
});




document.querySelector('.likecount').addEventListener('click', function () {
  window.location.href = './shopping.html';
});