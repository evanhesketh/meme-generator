
function createNewMeme() {
  const newContainer = document.createElement('div');
  newContainer.className = 'new-meme';
  return newContainer;
}

function createNewImage() {
  const imgDiv = document.createElement('div');
  const newImg = document.createElement('img');
  const img = document.querySelector('#image');

  newImg.src = img.value;
  newImg.className = 'image';
  imgDiv.appendChild(newImg);
  imgDiv.className = 'img-div';

  return imgDiv;
}

function createTopText() {
  const topDiv = document.createElement('div');
  const topText = document.querySelector('#top-text');
  const textColor = document.querySelector('#text-color');
  const fontSize = document.querySelector('#font-size');

  topDiv.className = 'meme-text-top';
  topDiv.innerText = topText.value;
  topDiv.style.color = textColor.value;
  topDiv.style.fontSize = fontSize.value + 'px';

  return topDiv;
}

function createBottomText() {
  const bottomDiv = document.createElement('div');
  const bottomText = document.querySelector('#bottom-text');
  const textColor = document.querySelector('#text-color');
  const fontSize = document.querySelector('#font-size');

  bottomDiv.classList = 'meme-text-bottom';
  bottomDiv.innerText = bottomText.value;
  bottomDiv.style.color = textColor.value;
  bottomDiv.style.fontSize = fontSize.value + 'px';

  return bottomDiv;
}

function createRemoveButton() {
  const btnDiv = document.createElement('div');
  const removeBtn = document.createElement('button');

  removeBtn.innerText = 'Remove Meme';
  btnDiv.appendChild(removeBtn);

  removeMeme();

  return btnDiv;
}

function handleFormSubmission() {
  const submit = document.querySelector('#submit');

  submit.addEventListener('click', function(event) {
    event.preventDefault();

  const memeContainer = document.querySelector('.created-memes');
  const newContainer = createNewMeme();
  const imgDiv = createNewImage();
  const topDiv = createTopText();
  const bottomDiv = createBottomText();
  const btnDiv = createRemoveButton();

  newContainer.appendChild(imgDiv);
  imgDiv.appendChild(topDiv);
  imgDiv.appendChild(bottomDiv);
  newContainer.appendChild(btnDiv);
  memeContainer.appendChild(newContainer);

  resetForm();
})
}

function removeMeme() {
  const memeContainer = document.querySelector('.created-memes');

  memeContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentElement.parentElement.remove();
    }
  })
}

function resetForm() {
  const img = document.querySelector('#image')
  const topText = document.querySelector('#top-text');
  const bottomText = document.querySelector('#bottom-text');
  const fontSize = document.querySelector('#font-size');
  const textColor = document.querySelector('#text-color');

  img.value = '';
  topText.value = '';
  bottomText.value = '';
  fontSize.value = '35';
  textColor.value = '#000000';
}

handleFormSubmission();







