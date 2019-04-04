<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import {SAMPLE_QUERY} from '@/sample-query';

export default Vue.extend({
    name: 'home',
    components: {},
    created() {
        console.log("inside created hook: %o", axios);

        axios.post("http://localhost:8090/api/query/select", SAMPLE_QUERY).then(r => {
            console.log("result happened");
        });
    }
});
</script>
