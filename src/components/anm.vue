<template>
    <div class="form-signin">

       
  <q-page
    class=" row justify-center items-center"
   
  >


 
    <!-- <div class="column q-pa-lg">

      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Form </h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">

                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>

              </q-input>

              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>

              </q-input>

            </q-form>
          </q-card-section>

          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>


          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Sign In" />
          </q-card-actions>

          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>

        </q-card>
      </div>
    </div> -->

    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div>
          </q-card-section>


          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
                 <q-input square clearable v-model="todoName" type="name" label="Name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input square clearable v-model="todoEmail" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
               <q-input square clearable v-model="todoNumber" type="Number" label="Contact">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

               <q-input square clearable v-model="todoAddress" type="texts" label="Address">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
             
              <q-input square clearable v-model="todoAge" type="text" label="Age">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Register" @click="addTodo()" />
          </q-card-actions>
          
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>


          <ul  v-for="profile of profiles" v-bind:key="profile.id">
            <li>{{profile.id}}</li>
             <li>{{profile.name}}</li>
              <li>{{profile.email}}</li>
               <li>{{profile.contact}}</li>
                <li>{{profile.address}}</li>
                  <li>{{profile.age}}</li>
           
        </ul>
        
    </div>
</template>

<script>

import axios from 'axios';

const baseURL ="http://localhost:3000/profiles";
export default{
    name:"Anm",
    data(){
        return{
            profiles:[] ,
            todoName: '',
            todoEmail: '',
            todoNumber: '',
            todoAddress: '',
            todoAge:''
        }
    },

     async created(){
        try{
           
             const res =await axios.get(baseURL);
             this.profiles = res.data;
        }catch(e){
            console.error(e);
        }
    },

    methods:{

          async addTodo(){
            const res = await axios.post(baseURL,{name:this.todoName,email:this.todoEmail,contact:this.todoNumber,address:this.todoAddress,age:this.todoAge});
            this.profiles = [...this.profiles, res.data];
            this.todoName = '',
            this.todoEmail= '',
            this.todoNumber= '',
            this.todoAddress= '',
            this.todoAge=''
        },

        onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

       onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }

    }
    
}



</script>

<style lang="sass" scoped>
 .my-card
  width: 100%
  max-width: 1250px
  
.q-gutter-md
 background-color:red  
  
</style>