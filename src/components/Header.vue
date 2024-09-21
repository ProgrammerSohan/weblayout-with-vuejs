<template>
    <div>
        <div class="header">
            <h1>Programmer Sohan</h1>
            <p>A Self-Taught Software Engineer,Learner & Dreamer!!</p>
          </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    
}
</script>
<style scoped>

/* Header/Blog Title */
.header {
    padding: 30px;
    text-align: center;
    background: white;
    line-height: 4px;
  }
  
  .header h1 {
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    .header h1 {
        font-size: 40px;
        font-style: italic;
      }
  }
    
</style>