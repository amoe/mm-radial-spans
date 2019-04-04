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

    <textarea rows="24" cols="80">{{extractedSpans}}</textarea>
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
    {value: 'optFoo',
     label: 'Foo'},
    {value: 'optBar',
     label: 'Bar'},
    {value: 'optBaz',
     label: 'Baz'}
];

export default Vue.extend({
    name: 'home',
    components: {Draggable},
    data() {
        return {
            textareaContent: "",
            extractedSpans: [] as string[],
            spanProperties: [],
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
                }]
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
                    const spansList = document[spanProperty].spans as any;
                    for (let spanDefinition of spansList) {
                        const fromPosition = spanDefinition.from;
                        const toPosition = spanDefinition.to;
                        const targetFieldName = spanDefinition.target;

                        const referentText = document[targetFieldName];

                        const spanContent = referentText.substring(fromPosition, toPosition);

                        this.extractedSpans.push(spanContent);
                    }
                }
            }
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
