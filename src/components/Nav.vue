<template lang="html">
<div  class="row d-flex justify-content-center">
 <div>
  <b-navbar v-if="this.$route.name != 'prva' && this.$route.name != 'registracija'" type="light" variant="light" >
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/home"> POČETNA
          </router-link>
        </b-nav-item>
    
      <b-nav-item-dropdown toggle-class="text-dark" text="INFORMACIJE" right> 
        <b-dropdown-item >
          <router-link to="/smestaj"> Smeštaj
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item>
        <router-link to="/utakmice"> Utakmice
          </router-link>
          </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item>
        <router-link to="/istrazi"> ISTRAŽI BG
          </router-link>
        </b-nav-item>

      <b-nav-item>
        <router-link to="/nalog"> NALOG
          </router-link>
        </b-nav-item>

        
      <b-nav-item>
        <router-link to="/about"> KONTAKT
          </router-link>
        </b-nav-item>

          <b-nav-item>
        <router-link to="/"> ODJAVA
          </router-link>
        </b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</div>
</div>
</template>

<script lang="js">
  export default  {
    name: 'nav' }

</script>

<style scoped lang="scss">
nav {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
   color:#2c3e50;
 a{
    font-weight: bold;
    color:#2c3e50;
 }

}


li {
  padding:20px;
}


</style>
