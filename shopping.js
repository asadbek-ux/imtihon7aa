document.addEventListener('DOMContentLoaded', function () {
    const plusBtn = document.querySelector('.plus');
            const minusBtn = document.querySelector('.minus');
    const qtyCount = document.querySelector('.qtycount');

    plusBtn.addEventListener('click', () => {
        let count = parseInt(qtyCount.innerText);
        qtyCount.innerText = count + 1;
    });

    minusBtn.addEventListener('click', () => {
        let count = parseInt(qtyCount.innerText);
        if (count >= 1) {
            qtyCount.innerText = count - 1;
        }
    });
});   


const addbtn = document.querySelector(".addcount")
addbtn.addEventListener('click', function () {

    window.location.href = 'detail.html';  
});    








        const likeCountEl = document.querySelector('.likecount .count');
        let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
        likeCountEl.textContent = likeCount;
        likeCountEl.style.display = likeCount > 0 ? 'flex' : 'none';

        
        const addCountEl = document.querySelector('.addcount .count');
        let addCount = parseInt(localStorage.getItem('addCount')) || 0;
        addCountEl.textContent = addCount;
        addCountEl.style.display = addCount > 0 ? 'flex' : 'none';

       
        const likeButtons = document.querySelectorAll('.card .like');
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




document.querySelectorAll('.remove').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const product = this.closest('.product');
    if (product) {
      product.style.display = 'none';
    }
  });
});


const sum = document.querySelector('.subtotal');

document.getElementById("applyBtn").addEventListener("click", function () {
  checkPromo(function(success) {
    if (success) {
      alert("🎉 Siz 50% chegirma oldingiz!");
      sum.innerHTML = "8.00 USD"

    } else {
      alert("❌ Noto‘g‘ri kod. Iltimos, qayta urinib ko‘ring.");
    }
  });
});

function checkPromo(callback) {
  const secretCode = "SANSA50";
  const userInput = document.getElementById("promoInput").value.trim();
  callback(userInput === secretCode);
}



let step = 0;

document.querySelector('.continue').addEventListener('click', function () {
  const products = document.querySelector('.products');
  const debitcard = document.querySelector('.debit-card');
  const payment = document.querySelector('.paymet-m');
  const close = document.querySelector('.debit-close');
  
  close.addEventListener('click', function () {
    debitcard.style.display = 'none';
    products.style.display = 'block';
    payment.style.display = 'none';
    console.log("sfg");
    
    step = 0;
  });
  
  if (step === 0) {
      products.style.display = 'none';
      payment.style.display = 'block';
      step++;
    } else if (step === 1) {
        debitcard.style.display = 'block';
    }
});







