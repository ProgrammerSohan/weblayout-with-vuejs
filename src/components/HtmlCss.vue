<template>
    <div>
        
        <Header />
  
        <Nav />
        <TwoColumns />
        <Footer />
        
        
    </div>
</template>
<script>
import Header from './Header.vue';
import Nav from './Nav.vue';
import TwoColumns from './TwoColumns.vue';
import Footer from './Footer.vue';


export default {
    name:"HtmlCss",
    components:{
        Header,
        Nav,
        TwoColumns,
        Footer

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
  
  
      
</style>