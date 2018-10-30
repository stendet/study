<template>
  <div class="holder">
    <div>
      <b-alert :key="key" v-for="(dream, key) in dreams" variant="success" show>
        <font-awesome-icon class="mr-2 share" icon="share-alt" v-if="dream.share == 'yes'" />
        {{dream.description}}
      </b-alert>

    <b-button @click="$router.push({name:'create'})">
      <font-awesome-icon icon="plus" />
      Add dream
    </b-button>

    </div>
  </div>
</template>

<script>
  
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['dreams']),
    },
    mounted() {
      this.storeLoadDreams()
    },
    methods: {
    ...mapActions(['storeLoadDreams'])
    }
  }
</script>
<style lang="scss" scoped>
.holder {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba( white, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  .share {
    opacity: 50%;
  }
}

</style>


