<template>
  <div>
    <p>Literals available: {{literals}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
    data() {
        return {
            literals: [] as string[]
        };
    },
    created() {
        console.log("literal list created hook");

        const tableName = 'ob-all5';

        axios.get("/api/workspaces/load?name=davetest").then(r => {
            this.literals = Object.keys(r.data.tableLiterals[tableName]);
            console.log(this.literals);
        }).catch(e => {
            console.log("fail");
        });
    }
});
</script>

<style lang="less">
</style>
