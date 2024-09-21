<template>
    <div>

        <div class="row">
           <LeftColumn />
           <RightColumn />
          
          </div>
        
    </div>
</template>
<script>
import LeftColumn from './LeftColumn.vue';
import RightColumn from './RightColumn.vue';
export default {
    name:"TwoColumns",
    components:{
        LeftColumn,
        RightColumn,

    }


}
</script>
<style >
 
  
 
  
  /* Fake image */
  .fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
  }
  
  /* Add a card effect for articles */
  .card {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
  }
  
  /* Clear floats after the columns */
  .row::after {
    content: "";
    display: table;
    clear: both;
  }

/*
  @media screen and (max-width: 800px) {
    .leftcolumn, .rightcolumn {   
      width: 100%;
      padding: 0;
    }
  }*/
    
</style>