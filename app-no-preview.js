
function createNewMeme() {
  const newContainer = document.createElement('div');
  newContainer.className = 'new-meme';
  return newContainer;
}

function createNewImage() {
  const imgDiv = document.createElement('div');
  const newImg = document.createElement('img');
  const img = document.querySelector('#image');

  if (img.value === '') {
    alert("Don't forget to provide an image link!");
    return;
  }

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

  return btnDiv;
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

function handleFormSubmission(event) {
  event.preventDefault();

  const memeContainer = document.querySelector('.created-memes');
  const newContainer = createNewMeme();
  const imgDiv = createNewImage();
  const topDiv = createTopText();
  const bottomDiv = createBottomText();
  const btnDiv = createRemoveButton();

  imgDiv.appendChild(topDiv);
  imgDiv.appendChild(bottomDiv);
  newContainer.appendChild(imgDiv);
  newContainer.appendChild(btnDiv);
  memeContainer.appendChild(newContainer);

  resetForm();
}

function runProgram() {
  const submit = document.querySelector('#submit');
  const memeContainer = document.querySelector('.created-memes');

  submit.addEventListener('click', handleFormSubmission)

  memeContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentElement.parentElement.remove();
    }
  })
}

runProgram();







