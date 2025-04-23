document.addEventListener('DOMContentLoaded', function() {
  const blogStyleSelect = document.getElementById('blog-style');
  blogStyleSelect.value = 'style1'; // Set the default style programmatically
  document.getElementById('blog-style').dispatchEvent(new Event('change')); // Trigger the change event to update the inputs
});


document.getElementById('blog-style').addEventListener('change', function() {
  const style = this.value;
  const inputArea = document.getElementById('input-area');
  const previewImage = document.getElementById('style-preview');
  inputArea.innerHTML = ''; // Clear the previous inputs

  // Set the preview image based on the selected style
  switch (style) {
    case 'style1':
      inputArea.innerHTML = `
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

                <label for="text4">Text Section 4:</label>
                <textarea id="text4" placeholder="Enter text section"></textarea>
            `;
      previewImage.src = 'images/Style1.jpg';  // Update preview image for Style 1
      break;
    case 'style2':
      inputArea.innerHTML = `
                <label for="image1">Image URL:</label>
                <input type="text" id="image1" placeholder="Enter image URL">
                
                <label for="title1">Title:</label>
                <input type="text" id="title1" placeholder="Enter title">
                
                <label for="text0">Title Para</label>
                <textarea id="text0" placeholder="Enter title paragraph"></textarea>
                
                <label for="button1">Hyperlinked Button (URL):</label>
                <input type="text" id="button1" placeholder="Enter button URL">
            `;
      previewImage.src = 'images/Style2.jpg';  // Update preview image for Style 2
      break;
    case 'style3':
      inputArea.innerHTML = `
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

  switch (style) {
    case 'style1':
      htmlCode = `
<style>
.article-template {
  margin:
auto;
}
.page-width--narrow{
  max-width:1400px !important;
  padding: 0 5rem !important;
  margin: auto !important;
}

#banner-img,
video{
  width:100%;
  aspect-ratio: 16/9
}

#s1,
#s2{
  display:flex;
}

.blog-post{
  width:100%;
}

p{
  margin: 5rem 0 5rem 2rem;
}

.blog-section{
  display: flex;
  align-items: center;
}

.content-img{
  height:300px;
}
</style>
                <div class="blog-post">
                    <video autoplay loop src="${document.getElementById('video').value}"></video>
                        <h1>${document.getElementById('title1').value}</h1>
                        <p>${document.getElementById('text0').value}</p>
                    <section>
                        <p>${document.getElementById('text1').value}</p>
                        <img src="${document.getElementById('image1').value}" alt="Image 1">
                    </section>
                    <section>
                        <p>${document.getElementById('text2').value}</p>
                        <img src="${document.getElementById('image2').value}" alt="Image 2">
                    </section>
                    <section>
                        <p>${document.getElementById('text3').value}</p>
                    </section>
                    <section>
                        <p>${document.getElementById('text4').value}</p>
                    </section>
                </div>
            `;
      break;
    case 'style2':
      htmlCode = `
<style>
.article-template {
  margin:
auto;
}
.page-width--narrow{
  max-width:1400px !important;
  padding: 0 5rem !important;
  margin: auto !important;
}

#banner-img,
video{
  width:100%;
  aspect-ratio: 16/9
}

#s1,
#s2{
  display:flex;
}

.blog-post{
  width:100%;
}

p{
  margin: 5rem 0 5rem 2rem;
}

.blog-section{
  display: flex;
  align-items: center;
}

.content-img{
  height:300px;
}
</style>
<div class="blog-post">
                    <img src="${document.getElementById('image1').value}" alt="Image">
                    <h1>${document.getElementById('title1').value}</h1>
                    <p>${document.getElementById('text0').value}</p>
                    <a href="${document.getElementById('button1').value}" class="btn">Click Here</a>
                </div>
            `;
      break;
    case 'style3':
      htmlCode = `
<style>
.article-template {
  margin:
auto;
}
.page-width--narrow{
  max-width:1400px !important;
  padding: 0 5rem !important;
  margin: auto !important;
}

#banner-img,
video{
  width:100%;
  aspect-ratio: 16/9
}

#s1,
#s2{
  display:flex;
}

.blog-post{
  width:100%;
}

p{
  margin: 5rem 0 5rem 2rem;
}

.blog-section{
  display: flex;
  align-items: center;
}

.content-img{
  height:300px;
}
</style>
                <div class="blog-post">
                    <img src="${document.getElementById('image1').value}" alt="Image">
                    <h1>${document.getElementById('title1').value}</h1>
                    <p>${document.getElementById('text0').value}</p>
                    <section>
                        <p>${document.getElementById('text1').value}</p>
                        <img src="${document.getElementById('image2').value}" alt="Image 2">
                    </section>
                    <section>
                        <p>${document.getElementById('text2').value}</p>
                        <img src="${document.getElementById('image3').value}" alt="Image 3">
                    </section>
                    <section>
                        <p>${document.getElementById('text3').value}</p>
                        <img src="${document.getElementById('image4').value}" alt="Image 4">
                    </section>
                    <section>
                        <p>${document.getElementById('text4').value}</p>
                    </section>
                </div>
            `;
      break;
    case 'style4':
      htmlCode = `
<style>
.article-template {
  margin:
auto;
}
.page-width--narrow{
  max-width:1400px !important;
  padding: 0 5rem !important;
  margin: auto !important;
}

#banner-img,
video{
  width:100%;
  aspect-ratio: 16/9
}

#s1,
#s2{
  display:flex;
}

.blog-post{
  width:100%;
}

p{
  margin: 5rem 0 5rem 2rem;
}

.blog-section{
  display: flex;
  align-items: center;
}

.content-img{
  height:300px;
}
</style>
                <div class="blog-post">
                    <img src="${document.getElementById('image1').value}" alt="Image">
                    <h1>${document.getElementById('title1').value}</h1>
                    <p>${document.getElementById('text0').value}</p>
                    <section>
                        <p>${document.getElementById('text1').value}</p>
                        <img src="${document.getElementById('image2').value}" alt="Image 2">
                    </section>
                    <section>
                        <p>${document.getElementById('text2').value}</p>
                        <img src="${document.getElementById('image3').value}" alt="Image 3">
                    </section>
                    <section>
                        <p>${document.getElementById('text3').value}</p>
                        <img src="${document.getElementById('image4').value}" alt="Image 4">
                    </section>
                    <section>
                        <p>${document.getElementById('text4').value}</p>
                        <img src="${document.getElementById('image5').value}" alt="Image 5">
                    </section>
                    <section>
                        <p>${document.getElementById('text5').value}</p>
                    </section>
                </div>
            `;
      break;
    case 'style5':
      htmlCode = `
<style>
.article-template {
  margin:
auto;
}
.page-width--narrow{
  max-width:1400px !important;
  padding: 0 5rem !important;
  margin: auto !important;
}

#banner-img,
video{
  width:100%;
  aspect-ratio: 16/9
}

#s1,
#s2{
  display:flex;
}

.blog-post{
  width:100%;
}

p{
  margin: 5rem 0 5rem 2rem;
}

.blog-section{
  display: flex;
  align-items: center;
}

.content-img{
  height:300px;
}
</style>
                <div class="blog-post">
                    <video loop autoplay muted src="${document.getElementById('video').value}"></video>
                    <h1>${document.getElementById('title1').value}</h1>
                    <p>${document.getElementById('text0').value}</p>
                    <section id="s1">
                        <img src="${document.getElementById('image1').value}" alt="Image 1">
                        <p>${document.getElementById('text1').value}</p>
                    </section>
                    <section id="s2">
                        <p>${document.getElementById('text2').value}</p>
                        <img src="${document.getElementById('image2').value}" alt="Image 2">
                    </section>
                    <section id="s3">
                        <img src="${document.getElementById('image3').value}" alt="Image 3">
                        <p>${document.getElementById('text3').value}</p>
                    </section>
                    <section id="s4">
                        <img src="${document.getElementById('image4').value}" alt="Image 4">
                        <p>${document.getElementById('text4').value}</p>
                    </section>
                    <section id="s5">
                        <p>${document.getElementById('text5').value}</p>
                    </section>
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
        function(){
            alert("HTML code copied to clipboard!"); 
        })
      .catch(
         function() {
            alert("err"); // error
      });
  document.body.removeChild(htmlContainer);
});
