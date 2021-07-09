<template>
  <q-layout view="lHh Lpr lFf"  style="background-color: #FCFEFF">
    <q-page-container>
      <q-responsive>
        <div class="rounded-borders flex flex-center">
          <div class="fit row wrap justify-center items-start content-start">
            <div class="col-12 col-md-12 col-sm-12 col-xs-12" style="background-color: #FCFEFF">
              <router-view/>
            </div>
          </div>
        </div>
      </q-responsive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "defaultlayout"
};
</script>
