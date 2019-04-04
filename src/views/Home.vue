<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import {SAMPLE_QUERY} from '@/sample-query';
import {getSpanPropertyNames} from '@/query-utils';

export default Vue.extend({
    name: 'home',
    components: {},
    created() {
        console.log("inside created hook: %o", axios);

        const query: MicroMacroQuery = SAMPLE_QUERY as MicroMacroQuery;
        const spanProperties = getSpanPropertyNames(SAMPLE_QUERY);

        console.log("properties are %o", spanProperties);

        axios.post("/api/query/select", SAMPLE_QUERY).then(r => {
//            console.log(JSON.stringify(r.data));
        });
    }
});
</script>
