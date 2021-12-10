<template>
        <div>

        </div>
</template>

<script>
export default{
    name:'Hidetable',
   
  data: () =>({
      tableData: [{
        id: 1,
        name: 'Steve'
      },
      {
        id: 2,
        name: 'Bob'
      }],
      selection: 'multiple',
      selected: [],
      tableThs: [
        {field: row => row.id, label: 'Id'},
        {field: row => row.name, label: 'Name'}
      ],
      dataSource: [],
      tableTitle: 'Employee',
      addUrl: 'http://addthis'
      
    }),

    methods: {
      deleteRow () {
        this.$q.notify({
          color: 'secondary',
          icon: 'delete',
          message: `Will delete the selected 
  row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
        })
      }
    },

    mounted() {
      axios.get("/api/"+this.dataSource)
        .then(response => {
        this.tableData = response.data.data;
      });
    }
    
}

</script>

<style>
 .row{
       margin-left: 0;
       margin-right: 0;
   }
   .q-table-bottom{
       border-top: 0;
   }

</style>