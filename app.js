// reset color and text size after preview submitted
function createNewMeme() {
  const newContainer = document.createElement('div');
  newContainer.className = 'new-meme';
  return newContainer;
}

function createNewImage() {
  const newImg = document.createElement('img');
  const img = document.querySelector('#image');

  newImg.src = img.value;
  return newImg;
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

function handleFormSubmission() {
  const submit = document.querySelector('#submit');

  submit.addEventListener('click', function(event) {
    event.preventDefault();

  const memeContainer = document.querySelector('.created-memes');
  const newContainer = createNewMeme();
  const newImg = createNewImage();
  const topDiv = createTopText();
  const bottomDiv = createBottomText();
  const btnDiv = createRemoveButton();
  const newImgDiv = document.createElement('div');

  if (newImg.getAttribute('src') === '') {
    alert("Upload an image");
    resetForm();

    return
  }

  newImgDiv.className = 'img-div';

  newImgDiv.appendChild(newImg);
  newContainer.appendChild(newImgDiv);
  newImgDiv.appendChild(topDiv);
  newImgDiv.appendChild(bottomDiv);
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
  const preview = document.querySelector('.preview');

  preview.innerHTML = '';
  img.value = '';
  topText.value = '';
  bottomText.value = '';
  fontSize.value = '35';
  textColor.value = '#000000';
}

function preview() {
  const uploadBtn = document.querySelector('.img-upload');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const imgPreviewDiv = document.createElement('div');
  const memePreview = document.createElement('div');
  const topText = document.querySelector('#top-text');
  const bottomText = document.querySelector('#bottom-text');
  const textColor = document.querySelector('#text-color');
  const fontSize = document.querySelector('#font-size');

  imgPreviewDiv.className = 'img-div';
  memePreview.className = 'meme-preview';
  topDiv.className = 'meme-text-top';
  bottomDiv.className = 'meme-text-bottom';

  uploadBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const preview = document.querySelector('.preview');

    const imgPreview = document.createElement('img');
    const img = document.querySelector('#image');


    preview.innerHTML = '<h2>Preview</h2>';
    imgPreview.src = img.value;

    imgPreviewDiv.appendChild(imgPreview);
    memePreview.appendChild(imgPreviewDiv);
    preview.appendChild(memePreview);
})

topText.addEventListener('keyup', function(event) {


  topDiv.style.color = '#000000';
  topDiv.style.fontSize = '35px';
  topDiv.innerText = event.target.value;
  memePreview.appendChild(topDiv);
})

bottomText.addEventListener('keyup', function(event) {


  bottomDiv.style.color = '#000000';
  bottomDiv.style.fontSize = '35px';
  bottomDiv.innerText = event.target.value;
  memePreview.appendChild(bottomDiv);
})

textColor.addEventListener('input', function(event) {
  topDiv.style.color = event.target.value;
  bottomDiv.style.color = event.target.value;
})

fontSize.addEventListener('input', function(event) {
  topDiv.style.fontSize = event.target.value + 'px';
  bottomDiv.style.fontSize = event.target.value + 'px';
})

}

handleFormSubmission();
removeMeme();
preview();





