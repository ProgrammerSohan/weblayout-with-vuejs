<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{secondTitle}}</h2>
        <h2>{{thirdTitle}}</h2>
       
        <p>global comp</p>
    </div>
</template>
<script>
export default {
    name: "Title",
    props: ["title","secondTitle","thirdTitle"],
    
}
</script>
<style scoped>
    
</style>