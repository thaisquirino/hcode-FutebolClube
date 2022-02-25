<template>
  <input
    type="text"
    :value="clubName"
    @keyup="updateclubName($event.target.value)" class="form-control"
    placeholder="Digite seu clube"
  />
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:mapGetters({
    ClubName:'getClubName'
    }),
  methods:mapActions(['updateclubName'])
}
</script>
<style scoped>
</style>
