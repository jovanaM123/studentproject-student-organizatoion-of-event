<template>
<div class="utakmice">
<div class="row d-flex justify-content-center">

    <div id="blok">
    <div class="search-wrapper">
    <b-form-input v-model="search" type="text" placeholder="Pretraga..."></b-form-input>
    </div>
    <br/>
     <b-form-group label="Pretraga po:">
      <b-form-checkbox-group id="checkbox-group" v-model="selected">
        <b-form-checkbox value="time">Vremenu</b-form-checkbox>
        <b-form-checkbox value="date">Datumu</b-form-checkbox>
        <b-form-checkbox value="hall">Hali</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
    
    <br/><br/>
    <b-container class="bv-example-row">
    <b-row v-for="match in filteredList" v-bind:key="match.id">
    <div class="w-100"></div>
    <b-col cols="10"><div>
    <b-card>    

    <b-card-text class="text-left">
    <b>  {{match.rivals}} </b>
    </b-card-text>

    <b-card-text class="text-left">
      {{match.hall}}
    </b-card-text>
    
    <b-card-text class="text-right">
      {{match.date}}
    </b-card-text>

     <b-card-text class="text-right">
      {{match.time}}
    </b-card-text>

    </b-card>
</div></b-col>
  </b-row> 
</b-container>


    </div>
 </div>
  </div>
</template>

<script>
import matches from '../data/matchesData.js';

export default {
name:'utakmice',
data() {
    return{
        search: '',
        selected: [],
        matches:matches
    }
},
computed: {
    filteredList() {

    if(this.selected == 'time')
    {
       return this.matches.filter(match  => {
        return match.time.toLowerCase().includes(this.search.toLowerCase())
      })
     } else if(this.selected == 'date'){
         return this.matches.filter(match  => {
        return match.date.toLowerCase().includes(this.search.toLowerCase())
      })
     } else{
      return this.matches.filter(match  => {
        return match.hall.toLowerCase().includes(this.search.toLowerCase())
      })
     }
    }
  }
}

</script>

<style  scoped>
#blok {
    padding-top: 20px;
    text-align: left;
    padding-left: 50px; 
    padding-bottom: 10px;
    width: 50%;
    height: 100%;
    background-color: azure;
}
p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>