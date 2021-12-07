<template>
    <div>
        <h6>Todo Components</h6>

         <form @submit.prevent="handleSubmit">
            <label>
            Email:
            <input type="email" v-model="user.email"/>
            </label>
            <label>
            Name:
            <input type="text" v-model="user.name"/>
            </label>
            <label>
            Password:
            <input type="password" v-model="user.password"/>
            </label>
            <button type="submit">Submit</button>
        </form>

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
            todoName: '',
            user: {
            email: '',
            name: '',
            password: ''
            }
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

            
        },
         handleSubmit() {
      // Send data to the server or update your stores and such.
        }
    }


}

</script>


<style>
li {
    list-style: none;
}

</style>