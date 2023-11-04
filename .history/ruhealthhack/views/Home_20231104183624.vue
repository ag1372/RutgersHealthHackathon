<template>
    <div id="app">

  
      <div class="centered-text">
        Hearth is a telehealth scheduler and patient reminder making sure that
        patients are updated with their scheduling and appointments and reducing
        the barriers of access to doctors.
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

.text-section {
  font-size: 24px;
  font-weight: 400;
  color: white;
  max-width: 50%; /* Adjust as per your layout requirement */
  margin: 20px;
  line-height: 1.6;
}

.image-section {
  max-width: 50%; /* Adjust as per your layout requirement */
  margin: 20px;
}

.image-section img {
  width: 100%; /* This will make sure the image is responsive */
  height: auto; /* Maintain the aspect ratio */
  display: block; /* Remove extra space below the image */
}
  @import '/stylesheets/styles.css'; 
  </style>
  