<template>
  <q-layout view="lHh Lpr lFf">
      <div class="full-width row justify-center items-center content-stretch"> 
          <div class="col-12 q-pl-md q-pr-md">
             <router-view/>  
          </div>
      </div>
  </q-layout>
</template>

<script>
export default {
  name: 'defaultlayout'
}
</script> 
