<template>
  <q-page class="flex q-pa-md ">
   <q-list class="full-width " separator>
      <q-item v-for="users in users" :key="users.id" to="/chat" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ users.name.charAt(0) }}
          </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ users.name }}</q-item-label>
            </q-item-section>

            <q-item-section side>
           <q-badge :color="users.online ? 'light-green-6' : 'grey-4'">
             {{users.online ? 'online' : 'offline'}}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
       users: [ {
        id: 1,
        name: 'Ruddy',
        online: true
      }, {
        id: 2,
        name: 'Mallorie',
        online: true

      }, {
        id: 3,
        name: 'Elisabetta',
        online: false

      }, {
        id: 4,
        name: 'Seka',
        online: true
      } ]
    }
  }
}
</script>
<style>

</style>
