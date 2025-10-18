# Ex.08 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.
gallery.html
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Image Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="gallery">
    <img src="a2.jpg" id="image1" alt="Person 2">
    <img src="a3.jpg" id="image2" alt="Person 3">
    <img src="a4.jpg" id="image3" alt="Person 4">
    <img src="a5.jpg" id="image4" alt="Person 5">
  </div>

  <footer>
    <h1>&copy; DESIGNED BY:</h1>
    <h2> NKK</h2>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```
script.js
```
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2) rotate(2deg)';
    image.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1) rotate(0deg)';
    image.style.boxShadow = '';
  });
});
```
style.css
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(180deg, rgba(255, 0, 0, 0.6), #8e906f, #384043, #50565f);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: white;
  text-align: center;
  padding: 40px 0;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 100px;
}

.gallery img {
  width: 200px;
  height: 250px;
  border: 8px solid rgb(255, 0, 0);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

footer {
  margin-top: 80px;
}

h1 {
  font-size: 25px;
}

h2 {
  font-size: 22px;
  color: #fff;
}
```
## OUTPUT
<img width="1920" height="1080" alt="Screenshot 2025-10-10 165658" src="https://github.com/user-attachments/assets/67442ec7-02bd-4cfa-8278-21886e9ba5cf" />





## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
