<template>
  <div class="home">
    <textarea rows="24" cols="80">{{textareaContent}}</textarea>

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
    data() {
        return {
            textareaContent: "",
            spanProperties: []
        };
    },
    created() {
        console.log("inside created hook: %o", axios);

        const query: MicroMacroQuery = SAMPLE_QUERY as MicroMacroQuery;
        const spanProperties = getSpanPropertyNames(SAMPLE_QUERY);

        axios.post("/api/query/select", SAMPLE_QUERY).then(r => {
            console.log("received result data");

            const resultDocuments = r.data;

            // What we are doing here is basically a clojure-ish group by.
            // But we need to fake out some data before we can progress much further.
            // And design the interface.
            for (let document of resultDocuments) {
                for (let spanProperty of spanProperties) {
                }
            }
        });
    }
});
</script>
