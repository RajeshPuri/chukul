<template>
    <div row justify-center items-center>
        <h6 id="demo">Stock Table</h6>

        <div  class="drop" style="margin: auto;left: 40%;position: relative;">

        
                <q-btn-dropdown  pa="100px" color="primary" label="Select Sectors" style="margin: 0px 15px;">
                      <q-list>
                        <q-item v-for="sect in sectors" :key="sect.id" clickable v-close-popup @click=" onItemClickStock(sect.id)">
                          <q-item-section >
                            <q-item-label> {{sect.name}} </q-item-label>
                          </q-item-section>
                        </q-item>
                    </q-list>
                  </q-btn-dropdown>

                  

                  <q-btn-dropdown pa="100px" color="primary" label="Select Stock">
                      <q-list>
                        <q-item v-for="stoc in filteredstocks" :key="stoc.id" clickable v-close-popup @click="onItemClicks(stoc.id)">
                          <q-item-section >
                            <q-item-label> {{stoc.name}} </q-item-label>
                          </q-item-section>
                        </q-item>
                    </q-list>
                  </q-btn-dropdown>

      </div>
 <div  class="drop" style="margin: auto;left: 32%;position: relative;">
             <div class="q-pa-md q-m-md q-gutter-sm">
                <q-btn color="primary" icon="mail" label="Tabular" />
                <q-btn color="primary" icon-right="mail" label="Graph" />
                <q-btn color="primary" icon="mail" icon-right="" label="Add/remove Dimension" />
                
               </div>
             </div>
       
 



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

                  <tr>
                      <td>{{}}</td>
                      <td>{{}}</td>
                      <td>{{}}</td>
                      <td>{{}}</td>
                  </tr>

                     <tr v-for="stoc in  filteredsingle" :key="stoc.id">
                      <td>{{stoc.id}}</td>
                      <td>{{stoc.name}}</td>
                      <td>{{stoc.symbol}}</td>
                      <td>{{stoc.sector}}</td>
                     
                    </tr>

                    <!-- <tr v-for="stoc in filteredstocks" :key="stoc.id">
                      <td>{{stoc.id}}</td>
                      <td>{{stoc.name}}</td>
                      <td>{{stoc.symbol}}</td>
                      <td>{{stoc.sector}}</td>
                     
                    </tr> -->
                    <!-- <tr v-for="stoc in stocks" :key="stoc.id">
                      <td>{{stoc.id}}</td>
                      <td>{{stoc.name}}</td>
                      <td>{{stoc.symbol}}</td>
                      <td>{{stoc.sector}}</td>
                    </tr> -->

                  </tbody>
            </table>
       

    </div>
</template>
<script>
import axios from 'axios';

const stockURL ="http://localhost:3000/stocks";
const sectorURL ="http://localhost:3000/sectors";

export default{
    name:"Stock",

    data(){
      
        return{
            stocks:[],
            sectors:[],
            filteredstocks:[],
            filteredsingle:[]
            

                  
            

        };
    },
    

    async created(){
        try{
            const stock =await axios.get(stockURL);
            const sector = await axios.get(sectorURL)
            this.stocks=stock.data;
            this.sectors=sector.data;
            
        }catch(e){
            console.error(e);
        }

    },

    methods:{
       
       onItemClickStock(sectorId) {
         
         const filteredItems =this.stocks.filter((item)=>{
            return item.sector===sectorId;
            })

           this.filteredstocks = filteredItems

        
      },

       onItemClicks(stockId) {
         
         const filteredItemsSingle =this.filteredstocks.filter((item)=>{
            return item.id===stockId;
            })

           this. filteredsingle = filteredItemsSingle
         console.log ( filteredsingle );
        
      },
     
    
        
       

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

