<template>
    <div>
        <h1>Todo Components</h1>

        <input type="text" v-model="todoName" @keyup.enter = "addTodo">

        <ul>
            <li  v-for="todo of todos" v-bind:key="todo.id">{{todo.id}}--{{todo.name}}</li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios' ;

const baseURL ="http://localhost:3000/todos";
export default{
    name: "Todo",

    data(){
        return{
            todos :[],
            todoName: ''
        };
    },

    async created(){
        try{
           
             const res =await axios.get(baseURL);
             this.todos=res.data;

        }catch(e){
            console.error(e);
        }
    },
    methods:{
        async addTodo(){
            const res = await axios.post(baseURL,{name:this.todoName});

            this.todos = [...this.todos, res.data];

            this.todoName = ''
        }
    }


}

</script>


<style>
li {
    list-style: none;
}

</style>