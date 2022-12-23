<template>
  <div class="istrazi">
 <div class="row d-flex justify-content-center">

    <div id="blok">
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
    <b-card no-body  style="max-width: 250px;">
     <router-link to="/muzej">
      <img src="../assets/istrazi/muzej_1.jpg" width="250px" height="200px">
     </router-link>
    <template v-slot:header>
      <h4 class="mb-0">MUZEJI</h4>
    </template>
    </b-card>
    </b-col>

    <b-col> 
      <b-card no-body  style="max-width: 250px;">
      <router-link to="/">
      <img src="../assets/istrazi/trg.jpg" width="250px" height="200px"> 
      </router-link>
    <template v-slot:header>
      <h4 class="mb-0">TRG</h4>
    </template>
    </b-card>
    </b-col>


    <b-col> 
      <b-card no-body  style="max-width: 250px;">
      <router-link to="/">
      <img src="../assets/istrazi/galerija.jpg" width="250px" height="200px"> 
      </router-link>
    <template v-slot:header>
      <h4 class="mb-0">GALERIJA</h4>
    </template>
    </b-card>
    </b-col>
  </b-row>
  <br/> <br/>

  <b-row>
    
      
    <b-col> 
      <b-card no-body  style="max-width: 250px;">
      <router-link to="/">
      <img src="../assets/istrazi/kalemegdan.jpg" width="250px" height="200px"> 
      </router-link>
    <template v-slot:header>
      <h4 class="mb-0">PARKOVI</h4>
    </template>
    </b-card>
    </b-col>

  
    <b-col> 
      <b-card no-body  style="max-width: 250px;">
      <router-link to="/">
      <img src="../assets/istrazi/avala.jpg" width="250px" height="200px"> 
      </router-link>
    <template v-slot:header>
      <h4 class="mb-0">ATRAKCIJE</h4>
    </template>
    </b-card></b-col>

      
    <b-col> 
      <b-card no-body  style="max-width: 250px;">
      <router-link to="/">
      <img src="../assets/istrazi/ulica.jpg" width="250px" height="200px"> 
      </router-link>
    <template v-slot:header>
      <h4 class="mb-0">ULICE</h4>
    </template>
    
    </b-card>
    </b-col>
  </b-row>
</b-container>

    </div>
 </div>
  </div>
</template>

<script>
export default {
name:'istrazi'
}

</script>

<style  scoped>
#blok {
    padding-top: 30px;
    text-align: left;
    padding-left: 70px; 
    width: 70%;
    height: 650px;
    background-color: azure;
    }
p{
  font-size: 18px;
  text-align: left;
  padding-left: 50px; 
}
</style>