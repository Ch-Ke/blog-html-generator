document.addEventListener('DOMContentLoaded', function() {
  const blogStyleSelect = document.getElementById('blog-style');
  blogStyleSelect.value = 'style1';
  document.getElementById('blog-style').dispatchEvent(new Event('change'));
});


document.getElementById('blog-style').addEventListener('change', function() {
  const style = this.value;
  const inputArea = document.getElementById('input-area');
  const previewImage = document.getElementById('style-preview');
  inputArea.innerHTML = '';

  switch (style) {
    case 'style1':
      inputArea.innerHTML = `
<label for="blogType">Blog Type:</label>
<input type="text" id="blogType" placeholder="Enter blog type, e.g. interview, playlist etc.">
<label for="video">Video URL:</label>
<input type="text" id="video" placeholder="Enter video URL">
<label for="title1">Text Title:</label>
<input type="text" id="title1" placeholder="Enter title">
<label for="text0">Title Para</label>
<textarea id="text0" placeholder="Enter title paragraph"></textarea>
<label for="text1">Text Section 1:</label>
<textarea id="text1" placeholder="Enter text section"></textarea>
<label for="image1">Image 1 URL:</label>
<input type="text" id="image1" placeholder="Enter image URL">
<label for="text2">Text Section 2:</label>
<textarea id="text2" placeholder="Enter text section"></textarea>
<label for="image2">Image 2 URL:</label>
<input type="text" id="image2" placeholder="Enter image URL">
<label for="text3">Text Section 3:</label>
<textarea id="text3" placeholder="Enter text section"></textarea>
`;
      previewImage.src = 'images/Style1.jpg';  // Update preview image for Style 1
      break;

    case 'style2':
      inputArea.innerHTML = `
<label for="blogType">Blog Type:</label>
<input type="text" id="blogType" placeholder="Enter blog type, e.g. interview, playlist etc.">
<label for="image1">Image URL:</label>
<input type="text" id="image1" placeholder="Enter image URL">
<label for="title1">Title:</label>
<input type="text" id="title1" placeholder="Enter title">
<label for="text0">Title Para</label>
<textarea id="text0" placeholder="Enter title paragraph"></textarea>
<label for="buttonText">Button text:</label>
<input type="text" id="buttonText" placeholder="Enter button text">
<label for="button1">Hyperlinked Button (URL):</label>
<input type="text" id="button1" placeholder="Enter button URL">
`;
      previewImage.src = 'images/Style2.jpg';  // Update preview image for Style 2
      break;

    case 'style3':
      inputArea.innerHTML = `
<label for="blogType">Blog Type:</label>
<input type="text" id="blogType" placeholder="Enter blog type, e.g. interview, playlist etc.">
<label for="image1">Image URL:</label>
<input type="text" id="image1" placeholder="Enter image URL">
<label for="title1">Title:</label>
<input type="text" id="title1" placeholder="Enter title">
<label for="text0">Title Para</label>
<textarea id="text0" placeholder="Enter title paragraph"></textarea>
<label for="text1">Text Section 1:</label>
<textarea id="text1" placeholder="Enter text section"></textarea>
<label for="image2">Image 2 URL:</label>
<input type="text" id="image2" placeholder="Enter image URL">
<label for="text2">Text Section 2:</label>
<textarea id="text2" placeholder="Enter text section"></textarea>
<label for="image3">Image 3 URL:</label>
<input type="text" id="image3" placeholder="Enter image URL">
<label for="text3">Text Section 3:</label>
<textarea id="text3" placeholder="Enter text section"></textarea>
<label for="image4">Image 4 URL:</label>
<input type="text" id="image4" placeholder="Enter image URL">
<label for="text4">Text Section 4:</label>
<textarea id="text4" placeholder="Enter text section"></textarea>
`;
      previewImage.src = 'images/Style3.jpg';  // Update preview image for Style 3
      break;

    case 'style4':
      inputArea.innerHTML = `
<label for="blogType">Blog Type:</label>
<input type="text" id="blogType" placeholder="Enter blog type, e.g. interview, playlist etc.">
<label for="image1">Image URL:</label>
<input type="text" id="image1" placeholder="Enter image URL">
<label for="title1">Title:</label>
<input type="text" id="title1" placeholder="Enter title">
<label for="text0">Title Para</label>
<textarea id="text0" placeholder="Enter title paragraph"></textarea>
<label for="text1">Text Section 1:</label>
<textarea id="text1" placeholder="Enter text section"></textarea>
<label for="image2">Image 2 URL:</label>
<input type="text" id="image2" placeholder="Enter image URL">
<label for="text2">Text Section 2:</label>
<textarea id="text2" placeholder="Enter text section"></textarea>
<label for="image3">Image 3 URL:</label>
<input type="text" id="image3" placeholder="Enter image URL">
<label for="text3">Text Section 3:</label>
<textarea id="text3" placeholder="Enter text section"></textarea>
<label for="image4">Image 4 URL:</label>
<input type="text" id="image4" placeholder="Enter image URL">
<label for="text4">Text Section 4:</label>
<textarea id="text4" placeholder="Enter text section"></textarea>
<label for="image5">Image 5 URL:</label>
<input type="text" id="image5" placeholder="Enter image URL">
<label for="text5">Text Section 5:</label>
<textarea id="text5" placeholder="Enter text section"></textarea>
`;
      previewImage.src = 'images/Style4.jpg';  // Update preview image for Style 4
      break;

    case 'style5':
      inputArea.innerHTML = `
<label for="blogType">Blog Type:</label>
<input type="text" id="blogType" placeholder="Enter blog type, e.g. interview, playlist etc.">
<label for="video">Video URL:</label>
<input type="text" id="video" placeholder="Enter video URL">
<label for="title1">Title:</label>
<input type="text" id="title1" placeholder="Enter title">
<label for="text0">Title Para</label>
<textarea id="text0" placeholder="Enter title paragraph"></textarea>
<label for="text1">Text Section 1:</label>
<textarea id="text1" placeholder="Enter text section"></textarea>
<label for="image1">Image 1 URL:</label>
<input type="text" id="image1" placeholder="Enter image URL">
<label for="text2">Text Section 2:</label>
<textarea id="text2" placeholder="Enter text section"></textarea>
<label for="image2">Image 2 URL:</label>
<input type="text" id="image2" placeholder="Enter image URL">
<label for="text3">Text Section 3:</label>
<textarea id="text3" placeholder="Enter text section"></textarea>
<label for="image3">Image 3 URL:</label>
<input type="text" id="image3" placeholder="Enter image URL">
<label for="text4">Text Section 4:</label>
<textarea id="text4" placeholder="Enter text section"></textarea>
<label for="image4">Image 4 URL:</label>
<input type="text" id="image4" placeholder="Enter image URL">
<label for="text5">Text Section 5:</label>
<textarea id="text5" placeholder="Enter text section"></textarea>
`;
      previewImage.src = 'images/Style5.jpg';  // Update preview image for Style 5
      break;
    default:
      inputArea.innerHTML = ''; // Clear inputs if no style selected
      previewImage.src = '';   // Clear preview if no style selected
  }
});

// Function to generate the HTML for the selected style
document.getElementById('generate-html').addEventListener('click', function() {
  const style = document.getElementById('blog-style').value;
  let htmlCode = '';
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  switch (style) {
    case 'style1':
      htmlCode = `
<style>
  .page-width--narrow{
    max-width:1400px !important;
    padding: 0 5rem !important;
    margin: auto !important;
  }
  
  #blog-video{
    width:100%;
    aspect-ratio: 16/9
  }

  h1{
    margin: 0;
    padding-left: 25px;
  }

  .blog-image-text-item{
    display:flex;
  }
  
  .blog-content-image, 
  .blog-content-text{
    display:inline-block;
    width:50% !important;
  }

  .blog-content-text{
    display: flex;
    align-items: center;
  }

  #blog-text-1{
    padding-left: 7rem;
  }

  #blog-text-2{
    padding-right: 7rem;
  }
  
  .blog-image-text-item {
    height: 400px; 
    overflow: hidden;
    position: relative;
  }

  .blog-image-text-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .blog-final-paragraph{
    padding-top: 25px
  }
  
  .blog-title-container{
    margin-bottom: 30px;
  }
</style>

<div class="blog-post">
  <div class="blog-video-container">
    <video id="blog-video" autoplay loop muted src="${document.getElementById('video').value}"></video>
  </div>

  <div class="blog-type-date-container">
    <h3 id="blog-type-date">${document.getElementById('blogType').value} | ${formattedDate}</h3>
  </div>

  <div class="blog-title-container">
    <h1 id="blog-title">${document.getElementById('title1').value}</h1>
    <p id="title-paragraph">${document.getElementById('text0').value}</p>
  </div>

  <div class="blog-image-text-container">
    <div class="blog-image-text-item">
      <img id="blog-image-1" class="blog-content-image" src="${document.getElementById('image1').value}" alt="Image 1" width="1500" height="1064" sizes="(min-width: 1400px) 650px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)">
      <p id="blog-text-1" class="blog-content-text">${document.getElementById('text1').value}</p>
    </div>

    <div class="blog-image-text-item">
      <p id="blog-text-2" class="blog-content-text">${document.getElementById('text2').value}</p>
      <img id="blog-image-2" class="blog-content-image" src="${document.getElementById('image2').value}" alt="Image 2" width="1500" height="1064" sizes="(min-width: 1400px) 650px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)">
    </div>
  </div>

  <div class="blog-final-paragraph-container">
    <p id="blog-final-paragraph" class="blog-final-paragraph">${document.getElementById('text3').value}</p>
  </div>
</div>

`;
      break;

    case 'style2':
      htmlCode = `
<style>
  .page-width--narrow{
    max-width:1400px !important;
    padding: 0 5rem !important;
    margin: auto !important;
  }

  .blog-post{
    display: flex;
  }

  h1{
    margin: 0;
    padding-left: 25px;
  }
  
  #text-content {
    padding: 0 0 0 25px;
  }
  
  a{
    text-decoration: none;
  }
  
  #main-img,
  #text-content{
    display:inline-block;
    width:50%;
}
</style>

<div class="blog-post">
  <img id="main-img" src="${document.getElementById('image1').value}" alt="Image">

  <div id="text-content">
    <div class="blog-type-date-container">
      <h3 id="blog-type-date">${document.getElementById('blogType').value} | ${formattedDate}</h3>
    </div>

    <div class="blog-title-container">
      <h1 id="blog-title">${document.getElementById('title1').value}</h1>
      <p id="title-paragraph">${document.getElementById('text0').value}</p>
      <button class="button button--secondary"><a href="${document.getElementById('button1').value}" class="btn">${document.getElementById('buttonText').value}</a></button>
    </div>
  </div>
</div>
`;
      break;
    case 'style3':
      htmlCode = `
<style>
  .page-width--narrow{
    max-width:1400px !important;
    padding: 0 5rem !important;
    margin: auto !important;
  }
  
  #blog-image-1
  .blog-bottom-banner-image{
    width:100%;
    aspect-ratio: 16/9;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h1{
    margin: 0;
    padding-left: 25px;
  }

  .blog-image-text-item{
    display:flex;
  }
  
  .blog-content-image, 
  .blog-content-text{
    display:inline-block;
    width:50% !important;
  }

  .blog-content-text{
    display: flex;
    align-items: center;
  }

  #blog-text-1{
    padding-left: 7rem;
  }

  #blog-text-2{
    padding-right: 7rem;
  }
  
  .blog-image-text-item {
    height: 400px; 
    overflow: hidden;
    position: relative;
    padding-bottom: 25px;
  }

  .blog-image-text-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .blog-final-paragraph{
    padding-top: 25px
  }
  
  .blog-title-container{
    margin-bottom: 30px;
  }

  #blog-image-4{
    max-height: 500px;
    aspect-ratio: 16/9;
  }
  
</style>

<div class="blog-post">
  <img id="blog-image-1" src="${document.getElementById('image1').value}" alt="Image">
  
  <div class="blog-type-date-container">
    <h3 id="blog-type-date">${document.getElementById('blogType').value} | ${formattedDate}</h3>
  </div>

  <div class="blog-title-container">
    <h1 id="blog-title">${document.getElementById('title1').value}</h1>
    <p id="title-paragraph">${document.getElementById('text0').value}</p>
  </div>

  <div class="blog-image-text-container">
    <div class="blog-image-text-item" id="section-1">
      <img class="blog-content-image" id="blog-image-2" src="${document.getElementById('image2').value}" alt="Image 2">
      <p class="blog-content-text" id="blog-text-1">${document.getElementById('text1').value}</p>
    </div>

    <div class="blog-image-text-item" id="section-2">
      <p class="blog-content-text" id="blog-text-2">${document.getElementById('text2').value}</p>
      <img class="blog-bottom-banner-image" id="blog-image-3" src="${document.getElementById('image3').value}" alt="Image 3">
    </div>
  </div>

  <div class="blog-content-section" id="section-3">
    <img class="blog-content-image" id="blog-image-4" src="${document.getElementById('image4').value}" alt="Image 4">
    <p class="blog-content-text" id="blog-text-3">${document.getElementById('text3').value}</p>
  </div>
</div>
`;
      break;
    case 'style4':
      htmlCode = `
<style>
  .page-width--narrow{
    max-width:1400px !important;
    padding: 0 5rem !important;
    margin: auto !important;
  }
  
  #blog-image-1
  .blog-bottom-banner-image{
    width:100%;
    aspect-ratio: 16/9;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h1{
    margin: 0;
    padding-left: 25px;
  }

  .blog-image-text-item{
    display:flex;
  }
  
  .blog-content-image, 
  .blog-content-text{
    display:inline-block;
    width:50% !important;
  }

  .blog-content-text{
    display: flex;
    align-items: center;
  }

  #blog-text-1{
    padding-left: 7rem;
  }

  #blog-text-2{
    padding-right: 7rem;
  }
  
  .blog-image-text-item {
    height: 400px; 
    overflow: hidden;
    position: relative;
    padding-bottom: 25px;
  }

  .blog-image-text-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .blog-final-paragraph{
    padding-top: 25px
  }
  
  .blog-title-container{
    margin-bottom: 30px;
  }

  #blog-image-4{
    max-height: 500px;
    aspect-ratio: 16/9;
  }
  
</style>

<div class="blog-post">
  <img id="blog-image-1" src="${document.getElementById('image1').value}" alt="Image">
  
  <div class="blog-type-date-container">
    <h3 id="blog-type-date">${document.getElementById('blogType').value} | ${formattedDate}</h3>
  </div>

  <div class="blog-title-container">
    <h1 id="blog-title">${document.getElementById('title1').value}</h1>
    <p id="title-paragraph">${document.getElementById('text0').value}</p>
  </div>

  <div class="blog-image-text-container">
    <div class="blog-image-text-item" id="section-1">
      <img class="blog-content-image" id="blog-image-2" src="${document.getElementById('image2').value}" alt="Image 2">
      <p class="blog-content-text" id="blog-text-1">${document.getElementById('text1').value}</p>
    </div>

    <div class="blog-image-text-item" id="section-2">
      <p class="blog-content-text" id="blog-text-2">${document.getElementById('text2').value}</p>
      <img class="blog-bottom-banner-image" id="blog-image-3" src="${document.getElementById('image3').value}" alt="Image 3">
    </div>
  </div>

  <div id="section-3">
    <img class="blog-bottom-banner-image" id="blog-image-4" src="${document.getElementById('image4').value}" alt="Image 4">
    <p id="blog-text-3">${document.getElementById('text3').value}</p>
  </div>

  <div class="blog-content-section" id="section-4">
    <p id="blog-text-4">${document.getElementById('text4').value}</p>
    <img id="blog-image-5" src="${document.getElementById('image5').value}" alt="Image 5">
  </div>

  <div class="blog-content-section" id="section-5">
    <p id="blog-text-5">${document.getElementById('text5').value}</p>
  </div>
</div>
`;
      break;
    case 'style5':
      htmlCode = `
<style>
  .page-width--narrow{
    max-width:1400px !important;
    padding: 0 5rem !important;
    margin: auto !important;
  }
  
  #blog-image-1
  .blog-bottom-banner-image{
    width:100%;
    aspect-ratio: 16/9;
    max-height: 500px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h1{
    margin: 0;
    padding-left: 25px;
  }

  .blog-image-text-item{
    display:flex;
  }
  
  .blog-content-image, 
  .blog-content-text{
    display:inline-block;
    width:50% !important;
  }

  .blog-content-text{
    display: flex;
    align-items: center;
  }

  #blog-text-1{
    padding-left: 7rem;
  }

  #blog-text-2{
    padding-right: 7rem;
  }
  
  .blog-image-text-item {
    height: 400px; 
    overflow: hidden;
    position: relative;
    padding-bottom: 25px;
  }

  .blog-image-text-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .blog-final-paragraph{
    padding-top: 25px
  }
  
  .blog-title-container{
    margin-bottom: 30px;
  }

  #blog-image-4{
    max-height: 500px;
    aspect-ratio: 16/9;
  }
  
</style>

<div class="blog-post">
  <div class="blog-video-container">
    <video id="blog-video" autoplay loop muted src="${document.getElementById('video').value}"></video>
  </div>

  <div class="blog-type-date-container">
    <h3 id="blog-type-date">${document.getElementById('blogType').value} | ${formattedDate}</h3>
  </div>

  <div class="blog-title-container">
    <h1 id="blog-title">${document.getElementById('title1').value}</h1>
    <p id="title-paragraph">${document.getElementById('text0').value}</p>
  </div>

  <div class="blog-image-text-container">
    <div class="blog-image-text-item" id="section-1">
      <img class="blog-content-image" id="blog-image-2" src="${document.getElementById('image2').value}" alt="Image 2">
      <p class="blog-content-text" id="blog-text-1">${document.getElementById('text1').value}</p>
    </div>

    <div class="blog-image-text-item" id="section-2">
      <p class="blog-content-text" id="blog-text-2">${document.getElementById('text2').value}</p>
      <img class="blog-bottom-banner-image" id="blog-image-3" src="${document.getElementById('image3').value}" alt="Image 3">
    </div>
  </div>

  <div id="section-3">
    <img class="blog-bottom-banner-image" id="blog-image-4" src="${document.getElementById('image4').value}" alt="Image 4">
    <p id="blog-text-3">${document.getElementById('text3').value}</p>
  </div>

  <div class="blog-content-section" id="section-4">
    <p id="blog-text-4">${document.getElementById('text4').value}</p>
    <img id="blog-image-5" src="${document.getElementById('image5').value}" alt="Image 5">
  </div>

  <div class="blog-content-section" id="section-5">
    <p id="blog-text-5">${document.getElementById('text5').value}</p>
  </div>
</div>
`;
      break;
    default:
      htmlCode = 'Invalid Style';
      break;
  }

  // Display the generated HTML code in a copyable container
  const htmlContainer = document.createElement('textarea');
  htmlContainer.value = htmlCode;
  document.body.appendChild(htmlContainer);
  htmlContainer.select();
  navigator.clipboard.writeText(htmlCode).then(
    function() {
      alert("HTML code copied to clipboard!");
    })
    .catch(
      function() {
        alert("err"); // error
      });
  document.body.removeChild(htmlContainer);
});
