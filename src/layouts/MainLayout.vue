<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar class="bg-white text-black" style="height:80px;">
          <q-btn
            flat
            dense
            round
            icon="format_align_left"
            aria-label="Menu"
            color="black"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title>
            <div class="text-bold"> Dashboard</div>
          </q-toolbar-title>
          <q-btn flat round dense icon="notifications_none" class="q-mr-xs q-pa-md" />
          <div class="divider_vertical">&nbsp;</div>
          <span class="text-bold q-pa-md ">Rafid Rabbani </span>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="cursor:pointer;">
            <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Profile</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="logout">
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                  <q-separator /> 
                </q-list>
              </q-menu>
          </q-avatar>

          </q-card>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white-1"
      :width="260"
    >
      <q-list>
        <q-item-label
          header
          class="q-pl-lg q-pt-xl q-pb-xl text-teal-3 text-h5"
        >
          <q-img src="~/assets/Frame.png" width="90%"/>
        </q-item-label>

        <EssentialLink
          :data ="essentialLinks"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-light">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
      categories: '',
      type : 'Utama',
      categoriesChild :[
        {
          title: 'Dashboard',
          icon: 'dashboard',
          link: 'https://quasar.dev'
        },
        {
          title: 'Event',
          icon: 'event',
          link: '/event/event-lists'
        },
        {
          title: 'User Management',
          icon: 'people_outline',
          link: '/event/event-lists'
        }
      ]
  },
  {
      categories: '',
      type :'Event',
      categoriesChild :[
        {
          title: 'General',
          icon: 'view_quilt',
          link: ''
        }
      ]
  },
  {
      type :'Event',
      categories: 'Configuration',
      categoriesChild :[
            {
              title: 'Schedule',
              icon: 'calendar_today',
              link: '/event/schedule-lists'
            },
            {
              title: 'Category',
              icon: 'list',
              link: '/event/category-lists'
            },
            {
              title: 'Price',
              icon: 'sell',
              child:[{
                title :'Price List',
                link: '/event/price-lists'
              },
              {
                title :'Price Category',
                link: '/event/price-category-lists'
              }]
            },
            {
              title: 'Scoring',
              icon: 'star_outline',
              link: 'https://chat.quasar.dev'
            },
            {
              title: 'CMS',
              icon: 'web',
              link: '/event/event-lists',
              child:[{
                title :'Post',
                link: '/event/event-lists',
              },
              {
                title :'Categories',
                link: '/event/event-lists',
              },{
                title :'Pages',
                link: '/event/event-lists',
              }]
            }
      ]
  },{
      type :'Event',
      categories: 'Participant',
      categoriesChild :[
        {
          title: 'Participant',
          icon: 'people_outline',
          link: 'https://quasar.dev'
        },
        {
          title: 'Winner List',
          icon: 'emoji_events',
          link: '/event/event-lists'
        },
        {
          title: 'Sponsor',
          icon: 'loyalty',
          link: '/event/event-lists'
        }
      ]
  },{
      type :'Event',
      categories: 'Administration',
      categoriesChild :[
        {
          title: 'Participant Approval',
          icon: 'verified',
          link: 'https://quasar.dev'
        },
        {
          title: 'Sponsor Approval',
          icon: 'verified_user',
          link: '/event/event-lists'
        }
      ]
  },{
      type :'Event',
      categories: 'Report',
      categoriesChild :[
        {
          title: 'Certificate',
          icon: 'receipt_long',
          link: 'https://quasar.dev'
        }
      ]
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods:{
    logout(){
        this.$store.commit('auth/isLoggedIn', false)
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
  },
  mounted(){

  }
}
</script>
<style>
.divider_vertical {
  width: 0px;
  left: calc(50% - 0px/2 + 7px);
  top: 0px;
  bottom: 0px;
  border: 1px solid #DFE0EB;
  height: 32px;
}
.bg-light{
  background: #F5F9FC;
}
</style>
