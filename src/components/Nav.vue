<template>
    <div>
        <div class="topnav">
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Projects Gallery</a>
            <a href="#">Blog</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#" style="float:right">Contact</a>
          </div>
        
    </div>
</template>
<script>
export default {
    name: "Nav",
    
}
</script>
<style scoped>


  /* Style the top navigation bar */
  .topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  /* Style the topnav links */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* Change color on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  @media screen and (max-width: 600px) {
    .topnav a {
      float: none;
      width: 100%;
    }
  }
    
</style>