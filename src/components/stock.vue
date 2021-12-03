<template>
    <div>
        <h3>Stock Table</h3>
         <table >
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Sector</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="stock in stocks" :key="stock.id">
      <td>{{stock.id}}</td>
      <td>{{stock.name}}</td>
      <td>{{stock.symbol}}</td>
      <td>{{stock.sector}}</td>
    </tr>
  </tbody>
</table>
       

    </div>
</template>
<script>
import axios from 'axios';

const baseURL ="http://localhost:3000/stocks";

export default{
    name:"Stock",

    data(){
        return{
            stocks:[]

        };
    },

    async created(){
        try{
            const res =await axios.get(baseURL);
            this.stocks=res.data;
        }catch(e){
            console.error(e);
        }

    },

    methods:{
        stock(){
            
        }

    }
}



</script>


<style>
h3{
  text-align: center;
}

table {
  font-family: 'Open Sans', sans-serif;
  width: 1200px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
  margin-left: 100px;
 
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  cursor: pointer;
  padding: 18px;
   width:200px;
  text-align: center;
}
table th:hover {
        background: #717699;
      }
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
  text-align: center;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

  


</style>

