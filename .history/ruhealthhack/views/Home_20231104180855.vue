<template>
    <div id="app">

  
      <div class="centered-text">
        Hearth is a telehealth scheduler and patient reminder making sure that
        patients are updated with their scheduling and appointments and reducing
        the barriers of access to doctors.
      </div>
  
      <!-- The rest of your content -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    // You can add data, computed properties, methods, etc. here as needed.
  }
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    min-height: 100vh;
    background-color: #000;
  }
  
  nav {
    width: 100%;
    background-color: #000;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start; /* Align to the left */
  }
  
  nav .nav-link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
  }
  
  nav .nav-link:hover {
    color: #3498db;
  }
  
  .centered-text {
    font-size: 24px;
    font-weight: 400;
    color: white;
    max-width: 800px;
    margin: 20px;
    line-height: 1.6;
  }
  </style>
  