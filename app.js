
const img = document.querySelector('#image');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const submit = document.querySelector('#submit');
const memeContainer = document.querySelector('.created-memes');
const textColor = document.querySelector('#text-color');

submit.addEventListener('click', function(event) {
  event.preventDefault();

  const newContainer = document.createElement('div');
  const newImg = document.createElement('img');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const btnDiv = document.createElement('div');

  newContainer.className = 'new-meme';
  newImg.src = img.value;
  topDiv.innerText = topText.value;

  topDiv.className = 'meme-text-top';
  bottomDiv.innerText = bottomText.value;

  bottomDiv.className = 'meme-text-bottom';
  removeBtn.innerText = 'Remove Meme';
  btnDiv.className = 'btn-container';

  topDiv.style.color = textColor.value;
  bottomDiv.style.color = textColor.value;



  newContainer.appendChild(newImg);
  newContainer.appendChild(topDiv);
  newContainer.appendChild(bottomDiv);
  memeContainer.appendChild(newContainer);

  btnDiv.appendChild(removeBtn);
  newContainer.appendChild(btnDiv);

  img.value = '';
  topText.value = '';
  bottomText.value = '';

})

memeContainer.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.parentElement.remove();
  }
})






