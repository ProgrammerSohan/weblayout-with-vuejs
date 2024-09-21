<template>
    <div>

        <div class="leftcolumn">
            <div class="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div class="fakeimg" style="height:200px;">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div class="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div class="fakeimg" style="height:200px;">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        
    </div>
</template>
<script>
export default {
    name:"LeftColumn",
    components:{


    }
}
</script>
<style scoped>
/* Create two unequal columns that floats next to each other */
  /* Left column */
  .leftcolumn {   
    float: left;
    width: 75%;
  }
  @media screen and (max-width: 800px) {
    .leftcolumn{   
      width: 100%;
      padding: 0;
    }
  }
    
</style>