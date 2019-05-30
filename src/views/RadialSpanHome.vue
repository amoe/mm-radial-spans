<template>
  <div class="home">
    <div>
      <draggable v-model="selectors" ghost-class="ghost">
        <div v-for="selector in selectors" :key="selector.id" class="item">
          <span>Selector {{selector.id}}</span>
          <el-select v-model="selector.value" placeholder="Select">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select> 

        </div>
      </draggable>
    </div>

    <p>Configured values: {{selectors}}</p>

    <textarea rows="24" cols="80">{{searchResults}}</textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import {SAMPLE_QUERY} from '@/sample-query';
import {getSpanPropertyNames} from '@/query-utils';

import Draggable from 'vuedraggable';

const AVAILABLE_OPTIONS = [
    {value: 'persName',
     label: 'persName'}
];

export default Vue.extend({
    name: 'home',
    components: {Draggable},
    data() {
        return {
            textareaContent: "",
            searchResults: {} as SpanSearchResults,
            options: AVAILABLE_OPTIONS,
            selectors: [
                {
                    id: 1,
                    value: ''
                },
                {
                    id: 2,
                    value: ''
                },
                {
                    id: 3,
                    value: ''
                }
            ]
        };
    },
    created() {
        const query: MicroMacroQuery = SAMPLE_QUERY as MicroMacroQuery;
        const spanProperties = getSpanPropertyNames(SAMPLE_QUERY);

        // initialize all
        for (let spanProperty of spanProperties) {
            Vue.set(this.searchResults, spanProperty, []);
        }

        axios.post("/api/query/select/query", SAMPLE_QUERY).then(r => {
            console.log("PROCESSING");

            const resultDocuments = r.data;

            // What we are doing here is basically a clojure-ish group by.
            // But we need to fake out some data before we can progress much further.
            // And design the interface.

            for (let document of resultDocuments) {
                const realDocument = JSON.parse(document);

                for (let spanProperty of spanProperties) {
                    const spansList = realDocument[spanProperty].spans as any;
                    for (let spanDefinition of spansList) {
                        const fromPosition = spanDefinition.from;
                        const toPosition = spanDefinition.to;

                        // get what the span refers to; this might just be a coincidence.
                        const targetFieldName = spanDefinition.target;
                        const referentText = realDocument[targetFieldName];

                        const spanContent = referentText.substring(fromPosition, toPosition);

                        // at present this is just going to flatten out all the spans.
                        this.searchResults[spanProperty].push(spanContent);
                    }
                }
            }

            console.log("DONE");
        });
    }
});
</script>

<style type="less">
div.item {
    display: inline;
}

.ghost {
    opacity: 0.1;
}
</style>
