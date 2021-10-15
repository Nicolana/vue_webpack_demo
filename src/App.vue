<template>
    <div class="App">
        测试信息 {{ msg }}! Hello, World!!!
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            msg: "，你好呀👋"
        }
    },
    mounted() {
        console.log(CONSTANT);
    }
}
</script>
