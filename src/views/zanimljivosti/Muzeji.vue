<template>
  <div class="muzej">
 <div class="row d-flex justify-content-center">

    <div id="blok">

  <b-tabs content-class="mt-3" justified>
    <b-tab title="Svi" active>
    <br/>  
    <b-container class="bv-example-row">
    <b-row>
    <b-col align="center"> <h2>Muzeji</h2> </b-col>
    </b-row>
    
 <br/>  <br/>
  <div id="b" v-for="place in places" v-bind:key="place.id">
  <b-row v-if="place.type == 'muzej'">
   <b-col >
     <h5> {{place.title}} </h5>
     <small> {{place.address}} </small> <br/>
       <small> <b> {{place.likes}}  ljudi je oznacilo da voli ovo mesto </b></small> <br/> 
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="Sviđa mi se"
      unchecked-value="Ne sviđa mi se"
    >
      <div> <strong>{{ status }}</strong></div>
    </b-form-checkbox>
  <br>
    {{place.description}}
    </b-col>
  </b-row>
   <br/>
  <b-row>
    <b-col>
    <img class="image" v-for="(image, i) in place.images" :src="image" :key="i" @click="index = i" width="100px" height="100px">
    <vue-gallery-slideshow :images="place.images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </b-col>
  </b-row>
  </div>


</b-container>
    </b-tab>

    <b-tab title="Omiljeno">  
 <br/>  <br/>  <br/>
    <b-container class="bv-example-row">
    <b-row>
    <b-col align="left"> <h3> Mesta koja ste označili kao omiljena </h3> </b-col>
    </b-row>
    
 <br/>  <br/>
 
  <div id="b" v-for="place in places" v-bind:key="place.id">
    <div v-if="omiljeno()=='Sviđa mi se'">
  <b-row >
   <b-col >
     <h5> {{place.title}} </h5>
     <small> {{place.address}} </small>
     <br/> 
     {{place.description}}
    </b-col>
  </b-row>
   <br/>
  <b-row >
    <b-col>
     <img class="image" v-for="(image, i) in place.images" :src="image" :key="i" @click="index = i" width="100px" height="100px">
    <vue-gallery-slideshow :images="place.images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </b-col>
  </b-row>
    </div>
  </div>
 
</b-container>

    </b-tab>
  </b-tabs>

    </div>
 </div>
  </div>
</template>

<script>
import places from '../../data/placesData.js';
export default {
name:'muzej',
methods: {
omiljeno() {
  return this.status;
}   
},

data() {
    return{
        status: 'Sviđa mi se',
        index:null,
        places:places
    }
}
}

</script>

<style  scoped>

#blok {
    padding-top: 0px;
    text-align: left;
    padding-left: 0px; 
    padding-right: 0px; 
    padding-bottom: 10px; 
    width: 50%;
    height: 100%;
    background-color: azure;
}
img{
  padding-right: 10px;
}
#b{
    padding-top: 20px;
    text-align: left;
    padding-left: 10px; 
    padding-right: 10px; 
    padding-bottom: 10px; 
    width: 100%;
    background-color: #f0f0f0;

}
p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
  
</style>