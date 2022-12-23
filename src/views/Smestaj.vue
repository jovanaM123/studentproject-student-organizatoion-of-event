<template>
  <div class="smestaj">
    <div class="row d-flex justify-content-center">

    <div id="blok">
    <b-tabs content-class="mt-3" justified>
    <b-tab title="Smeštaj" active>
    <br/>  <br/>  <br/>
    <b-container class="bv-example-row">
    <b-row>
    <b-col align="center"> <img  src='../assets/mapa.png' width="450px" height="150px"> </b-col>
    <b-col>
    <h4> Dom "Kralj Aleksandar I" </h4> <br/>
   <span> <b style="color:#fae805"> 4.8 </b> </span>
    <star-rating v-bind:increment="1"
             v-bind:max-rating="5"
             inactive-color="#000"
             active-color="#fae805"
             v-bind:star-size="20" @rating-selected="rating = $event" 
             :rating="rating" ></star-rating> 
           
  <br/>

    <small> Ukoliko niste zadovoljni smeštajem pritisnite link ispod </small> <br/>
    <router-link to="/zahtev"> Zahtev za promenu </router-link>
    </b-col>
  </b-row>
 <br/>  <br/>  <br/>
  <b-row>
    <b-col > <b> KOMENTARI: </b></b-col>
  
  </b-row>
 <br/>  <br/>
  <b-row v-for="comm in comments" v-bind:key="comm.com">
    <b-col cols="6">   <b-card>
    <b-card-text>
      {{comm.com}}
    </b-card-text>
  </b-card>
    </b-col>
  </b-row>
 <br/>  <br/>
  <b-row>
    <b-col><b-form-input id="input-large" size="lg" placeholder="Ostavite vaš komentar.." v-model='comm'></b-form-input></b-col>
    <b-col>  <b-button variant="warning"  @click='add'>Potvrda</b-button></b-col>

  </b-row>
</b-container>
    

    </b-tab>

    <b-tab title="Restoran">  
      <br/>  <br/>  <br/>
 <b-container class="bv-example-row">
    <b-row>
    <b-col align="center"> <img  src='../assets/mapa.png' width="450px" height="150px"> </b-col>
    <b-col>
    <h4> Restoran "Kralj Aleksandar I" </h4> <br/>
   <span> <b style="color:#fae805"> 4.8 </b> </span>
    <star-rating v-bind:increment="1"
             v-bind:max-rating="5"
             inactive-color="#000"
             active-color="#fae805"
             v-bind:star-size="20" @rating-selected="rating = $event" 
             :rating="rating" ></star-rating> 
           
  <br/>

    <small> Ukoliko niste zadovoljni restoranom pritisnite link ispod </small> <br/>
    <router-link to="/zahtev"> Zahtev za promenu </router-link>
    </b-col>
  </b-row>
 <br/>  <br/>  <br/>
  <b-row>
    <b-col > <b> KOMENTARI: </b></b-col>
  
  </b-row>
 <br/>  <br/>
<b-row v-for="comm in comments" v-bind:key="comm.com">
    <b-col cols="6">   <b-card>
    <b-card-text>
      {{comm.com}}
    </b-card-text>
  </b-card>
    </b-col>
  </b-row>
 <br/>  <br/>
  <b-row>
    <b-col><b-form-input id="input-large" size="lg" placeholder="Ostavite vaš komentar.." v-model='comm'></b-form-input></b-col>
    <b-col>  <b-button variant="warning"  @click='add'>Potvrda</b-button></b-col>

  </b-row>
</b-container>

    </b-tab>
  </b-tabs>



</div>
</div>
 </div>
</template>

<script>
import  comments from '../data/commentsData.js';

export default {
    name: 'smestaj',
    data() {
      return {
        comm:'',
        comments:comments
      }
    },

     methods: {
      add(){
        this.comments.push({"com":this.comm});

        localStorage.setItem('comments', JSON.stringify(this.comments));
      }
    },
    created(){
      if(localStorage.getItem('comments')!=null){
        this.users = JSON.parse(localStorage.getItem('comments'));
      }
    }
}

</script>

<style  scoped>
#blok {
    padding-top: 0px;
    text-align: left;
    padding-left: 10px; 
    padding-bottom: 10px;
    width: 70%;
    height: 800px;
    background-color: azure;
}
p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>
