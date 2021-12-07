<template>
<div>
    <table border="1px">
        <tr>
            <td>Name</td>
            <td>Salart</td>
            <td>Age</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item.employee_name}}</td>
            <td>{{item.employee_salary}}</td>
            <td>{{item.employee_age}}</td>
        </tr>
    </table>

</div>
</template>

<script>
    import vue from 'vue'
    import axios from 'axios'
    import VueAxious from 'vue-axios'
    vue.use (VueAxious , axios)
    export default{
        name:"Employee",
        data(){
            return{
                list:undefined

            }

        },
        mounted(){
            vue.axios.get('http://localhost:3000/employees')
            .then((resp)=>{
                this.list=resp.data.data

            })

        },

        methods:{

        }
    }

</script>