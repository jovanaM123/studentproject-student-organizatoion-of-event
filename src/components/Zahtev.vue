<template>
<div class="row d-flex justify-content-center">
  <div class="forma">
      
          <h3 style="color:gray" align="center"> Zahtev za promenu </h3>
      <hr/>
     <br/>  <br/>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email adresa:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Razlog promene:" label-for="input-2">
        <textarea rows="4" cols="50" v-model="form.promena">
        </textarea>
        
      </b-form-group>

     

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-3">
          <b-form-checkbox value="smestaj">Smeštaj</b-form-checkbox>
          <b-form-checkbox value="restoran">Restoran</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
<div class="text-center">
      <b-button type="submit" variant="success" @click="potvrda()" >Potvrda</b-button>
</div>
    </b-form>
  </div>
  </div>
</template>

<script>
import router from '../router/index.js';

export default {
    name:'zahtev',
    data() {
      return {
        form: {
          email: '',
          promena: '',
          checked: []
        }}
    },
    methods: {
        potvrda() {
        router.push('home')  ;       }
    }
  }
</script>

<style scoped>
.forma{
    padding-top: 15px;
    text-align: left;
    padding-left: 10px; 
    padding-right: 10px;
    padding-bottom: 10px;
    width: 40%;
    height: 500px;
    border: 0.5px solid grey;
}
</style>