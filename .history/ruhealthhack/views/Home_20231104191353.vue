<template>
    <div id="app">

    <div class="grid-container">
      <div class="dynamic-text">
        Hearth is a telehealth scheduler and patient reminder making sure that
        patients are updated with their scheduling and appointments and reducing
        the barriers of access to doctors.
      </div>
      <div class="image-container">
        <img src="@/assets/HomePagePic.png" alt="Home Page Picture" />
      </div>
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
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* This creates two columns of equal width */
  align-items: center; /* This vertically aligns the grid items (if they are of different heights) */
  justify-content: center;
  gap: 20px; /* This adds space between the grid items */
  width: 100%; /* Set the width of the grid container to be full-width */
  max-width: 1200px; /* Maximum width of the container */
  margin: auto; /* This will center the container in the middle of the page */
}

.text-section {
  font-size: 24px;
  font-weight: 400;
  color: white;
  max-width: 50%; /* Adjust as per your layout requirement */
  margin: 20px;
  line-height: 1.6;
}

.image-container img {
  width: 100%; /* Make the image responsive, it will scale with its container */
  height: auto; /* Maintain aspect ratio */
}
  </style>
  