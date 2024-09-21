<template>
    <div>
        
        <Header />
  
        <Nav />
        <TwoColumns />
  
  
  <div class="footer">
    <h2>&copy; Programmer Sohan
    </h2>
  </div>
        
    </div>
</template>
<script>
import Header from './Header.vue';
import Nav from './Nav.vue';
import TwoColumns from './TwoColumns.vue';


export default {
    name:"HtmlCss",
    components:{
        Header,
        Nav,
        TwoColumns,

    }
    
}
</script>
<style>


* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial;
    padding: 10px;
    background: #f1f1f1;
  }
  
  
  
 
  
  /* Footer */
  .footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
    margin-top: 20px;
  }
  


  


    
</style>