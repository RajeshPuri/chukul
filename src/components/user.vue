<template>
    <div>
        <ul>
            <li v-for="todo of todos" v-bind:key="todo.id">
                {{todo.name}}
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"User",
    data(){
        return{
            todos :[]

        }
    },

    async created(){
        try{
            const res =await axios.get(`http://localhost:3000/todos`);
            this.todos = res.data;

        }catch(e){
            console.error(e);
        }
    },
}


</script>