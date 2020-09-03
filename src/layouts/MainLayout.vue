<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
        v-if="$route.fullPath.includes('/chat')"
        v-go-back.single
         flat
         icon="arrow_back" label="Back" />


        <q-toolbar-title class="absolute-center">
          {{title}}
        </q-toolbar-title>

        <q-btn
        to="/auth"
        class="absolute-right q-pr-sm"
        no-caps
        v-go-back.single
         flat
         icon="account_circle" label="Login" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'



export default {
computed:{
tital(){
let currentPath = this.$rout.fullPath
if(currentPath == '/') return 'chatApp'
else if(currentPath == '/chat') return 'chat'
else if(currentPath == '/auth') return 'login'

}
},
methods:{
EssentialLink
}
}
</script>
