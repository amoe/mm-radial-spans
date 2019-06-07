<template>
<div>
<input type="text" v-model="tableName"></input>
<button @click="doQuery">do it</button>


</div>
</template>

<script lang="ts">
    import Vue from 'vue';
import axios from 'axios';
import {getUnlimitedProximityQuery} from '../sample-query';

export default Vue.extend({
    data() {
        return {
            tableName: 'sampled'
        }
    },
    methods: {
        doQuery() {
            console.log("inside proximity query");
            
            const qry = getUnlimitedProximityQuery(this.tableName);
            
            axios.post("/api/query/proximity/cacheOnly", qry).then(r => {
                axios.post("/api/query/proximity/query", qry).then(r => {
                    console.log("result data was %o", r.data.length);


                    const real = r.data.map(JSON.parse);
                    console.log(real);
                }).catch(e => {
                    console.log("error happened, %o", e);
                });
            }).catch(e => {
                console.log("error happened, %o", e);
            });
        }
    }
});
</script>

<style lang="less">
</style>
