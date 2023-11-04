<template>
    <div id="app">

  
      <div class="centered-text">
        Hearth is a telehealth scheduler and patient reminder making sure that
        patients are updated with their scheduling and appointments and reducing
        the barriers of access to doctors.
      </div>
      <div class="image-section">
        <img src="@/assets/HomePagePic.png" alt="Home Page Picture" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    // You can add data, computed properties, methods, etc. here as needed.
  }
  </script>
  
  <style>
<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 5vh; /* Adjust this as needed to center the content vertically */
}

.text-section {
  font-size: 1.5em; /* Increased font size */
  font-weight: bold; /* To make text more prominent */
  color: white;
  flex: 1;
  text-align: left; /* Ensures text is aligned to the left */
  padding-right: 10px; /* To ensure there's a gap between text and image */
}

.image-section {
  flex: 1;
  text-align: right; /* Aligns the image to the right */
}

.image-section img {
  max-width: 100%;
  height: auto;
  display: block;
}
  @import '/stylesheets/styles.css'; 
  </style>
  