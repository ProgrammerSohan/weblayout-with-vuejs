<template>
    <div>
        <div class="wrapper">
            <h1>Component & Props In Vue</h1>
            <img src="https://www.turunculevye.com/wp-content/uploads/2022/11/Modern-Warfare-2-Karakteri-Ghostun-Yuzu-Gorundu.jpg" alt="Ghost from Call of Duty: Modern Warfare 2">

            <h1>Sohan</h1>
            <h3>Artist</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet autem dolorum magni, neque accusantium deserunt natus at voluptates consequatur obcaecati, dolore molestiae! Aliquam provident architecto sed, esse excepturi rerum?
                Delectus omnis blanditiis ipsa officiis? Vel optio sed eaque sequi incidunt? Ex amet possimus laborum esse sunt? Laboriosam similique asperiores unde, cumque distinctio sunt, eligendi, dolor ut dicta a nostrum.</p>
                <myTitle />
                <UserInfo/>
        </div>
    </div>
</template>
<script>
import UserInfo from './UserInfo.vue';

export default {
    name: "CompOne",
    components: {UserInfo},
    
};
</script>
<style scoped>
/*
.wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: bisque;
    margin-left: 200px;
    text-align: center;
 }
 img {
    width: 100%;
 }*/

 .wrapper{
  width: 300px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: bisque;
  margin-left: 200px;
  text-align:center;

 }
 img{
    width: 100%;
 }
    
</style>