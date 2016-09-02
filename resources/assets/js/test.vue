<template>
    Hello
    <tabs>
        <tab header="Content">
            <quill :content.sync="content"></quill>
        </tab>
    </tabs>   
</template>

<script>

import { alert, tabset, tab } from 'vue-strap/src/index.js';

export default {
    data() {
        return {
            content: {
                ops: [],
            },
        }
    }
};
</script>

<style>

</style>