<template>
    <div class="row">
      <div class="col-3">
        <q-item>
        <q-item-section avatar >
          <q-avatar>
           
            <img src="/images/avatar1.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section >
          <q-item-label>{{name}}</q-item-label>
          <q-item-label caption> {{email}} </q-item-label>
        </q-item-section>
      </q-item>
        </div>
      <div class="col-9">
        
        

          <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-file standout v-model="imgmodel">
        <template v-slot:append>
          <q-avatar>
              <img src="/images/avatar1.jpg">
          </q-avatar>
        </template>
      </q-file>

      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="address"
        label="Your Address *"
        hint="type your address"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="email"
        label="Your email*"
        hint="john@email.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="contact"
        label="Your Contact Number *"
        hint="+977-9841234567"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age']"
      />

     

      <div class="q-gutter-sm">
        <p>Gender</p>
         <q-radio v-model="gender" val="male" label="Male" />
        <q-radio v-model="gender" val="Female" label="Female" />
      
    </div>
      
    

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </div>
      
    </div>
  
</template>


    <script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
const baseURL ="http://localhost:3000/profiles";

export default {
  setup () {
   const gender= ref('male')
    const $q = useQuasar()

    const name = ref("John Doe")
    const email = ref("john@email.com")
    const age = ref(20)
    const contact = ref(9841234567)
    const address=ref("kathmandu")
    const accept = ref(false);

    

    

    return {
      profiles:[],
      name,
      age,
      contact,
      email,
      accept,
      address,
      imgmodel: ref(null),


       async created(){
        try{
            const res =await axios.get(baseURL);
            this.profiles=res.data;
            console.log(res.data)
        }catch(e){
            console.error(e);
        }

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
}
</script>


<style lang="sass" scoped>
 .my-card
  width: 100%
  max-width: 1250px
  
.q-gutter-md
 background-color:red  
  
</style>
