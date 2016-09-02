<template>
    Hello

    <quill :content.sync="content"></quill>

</template>

<script>

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