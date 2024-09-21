<template>
    <div>

      <!--   <CompOne />
        <UserInfo /> -->
        <Title :title="page" />
        <Title :secondTitle="header" />
        <Title :thirdTitle="third" />
        <Title :ShowComponent="subHeader" />
        <button @click="page='Hello, this is another sohan!!'">Click</button>
        <button @click="header='ami 2nd title!!'">Click for 2nd title</button>
        <button @click="third='ami 3rd title!!'">Third</button>
       
        


    </div>

</template>
<script>
import CompOne from './components/CompOne.vue';
import UserInfo from './components/UserInfo.vue';
import Title from "./components/Title.vue";


export default{
    name: 'App',
    data(){
        return {
            page: "Hello I Vue",
            header: "this is second title",
            third: "this is 3rd title",
           

            
        }
    },
    components: {
        CompOne,
        UserInfo,
        Title

    }

}


</script>
<style>

</style>