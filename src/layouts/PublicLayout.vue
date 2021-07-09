<template>
  <q-layout view="hHh lpR fff" class="bg-body">
    <q-header reveal class="bg-body text-grey-9 text-bold q-pa-md">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Event Lab
        </q-toolbar-title>
        <q-tabs align="right">
        <q-route-tab class="text-capitalize" to="/page1" label="Browse Event" />
        <q-route-tab class="text-capitalize" to="/page2" label="News" />
        <q-route-tab class="text-capitalize" to="/page2" label="Help" />
         <div class="q-pa-md">
            <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar rounded size="48px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
                <!-- <q-badge floating color="teal">new</q-badge> -->
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Rafid Rabbani</q-item-label>
                <q-item-label caption>rafidbbn@gmail.com</q-item-label>
            </q-item-section>
            <q-item-section side>
                <span class="fa fa-chevron-down"></span>
            </q-item-section>
            </q-item>
             <q-menu fit auto-close>
                <q-list>
                    <q-item clickable>
                        <q-item-section>Browser Events</q-item-section>
                    </q-item>
                    <q-item clickable>
                        <q-item-section>Manage My Events</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable>
                        <q-item-section>Joined Event (0)</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable>
                        <q-item-section>Account Setting</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable>
                        <q-item-section>Logout</q-item-section>
                    </q-item>
                    <q-separator />
                </q-list>
            </q-menu>
        </div>
      </q-tabs>
      </q-toolbar>
    </q-header>
    <div style="margin-top: 130px">
       <router-view />
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
</style>
<style lang="sass">
  .bg-body
    background-color: #F5F9FC !important
    font-family: manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    color: #133548

  .bg-body-secondary
    background: #FFFFFF
    margin-left: -50px
    margin-right: -50px

  .btn-main-color
    background-color: #5BC3C3 !important

  .text-grey-13
    color: $grey-13

  .text-grey-5
    color: $grey-5
  
  .fn-color-pimary
    color: #133548
    font-family: manrope
  
  .fn-color-secondary
    color: #5BC3C3
    font-family: manrope
  
  .fn-color-third
    color: $grey-5
    font-family: manrope
  
  .font-weight-800
    font-weight: 800

  .font-weight-1000
    font-weight: 1000

  .my-card
    background: #FFFFFF
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06)
    border-radius: 0px 0px 6px 6px
</style>
