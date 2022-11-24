<template>
    <div>
        <h1>Counter Track</h1>
        <p class="value">
            {{ counter }}
        </p>

        <div class="counter">
            <button class="add" @click="addNumber">+</button>
            <input type="number" name="number" id="number" v-model="number">
            <button class="subtract" @click="subNumber">-</button>
        </div>

        <div class="randomNumber">
            <button @click="addRandomNumber">Add random number</button>
        </div>

        <div class="history">
            <h3>History</h3>
            <div class="list-wrapper">
                <div class="list">
                    <p v-for="(history, index) in histories" :key="index">
                        {{ history }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {computed, ref} from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const number = ref(0)
    const counter = computed(() => store.state.counter)
    const histories = computed(() => store.state.histories)

    const addNumber = computed(() => store.commit('addCounter', parseInt(number.value)))
    const subNumber = computed(() => store.commit('subCounter', parseInt(number.value)))
    const addRandomNumber = computed(() => store.dispatch('addRandomNumber'))
</script>

<style scoped>
    .value{
        font-size: 3rem;
        font-weight: bold;
    }
    .counter{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    input{
        text-align: center;
    }
    .history{
        margin-top: 7rem;
    }
    .list-wrapper{
        width: 400px;
        margin: auto;
    }
    .list{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .randomNumber{
        margin-top: 1rem;
    }
</style>