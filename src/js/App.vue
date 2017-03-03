<template>
  <transition name="fade">
    <div class="vh yellow">
      <h1>Yo... Where's Kosla?</h1>
      <div>Github says his last commit was {{ lastcommit['created_at'] | day }}.</div>
      <div>{{ isAlive }}</div>
    </div>
  </transition>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';

export default {
  data(){
    return {
      currentDate: moment().format('YYYY-MM-DD'),
      currentTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
  },
  computed: {
    ...mapGetters([
      'user',
      'lastcommit',
    ]),
    currentTime(){
      return this.currentTime;
    },
    isAlive(){
      if( this.currentDate == moment(this.lastcommit.created_at).format('YYYY-MM-DD') ){
        return "He's Alive!!!";
      }
      return "Yo... Call For Help! He Might Not Be Breathing!";
    }
  }
}
</script>
