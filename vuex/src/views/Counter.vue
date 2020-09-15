<template>
  <div class="home">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button v-on="{ click: () => setCount(count + 1) }">Increment</button>
    <button v-on="{ click: () => setCount(count - 1) }">Decrement</button>
    <button v-on:click="loadCount">Load Random</button>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action, Mutation } from "vuex-class";
import { CountActions, CountGetters, CountMutations } from "@/store/count";

@Component
export default class Counter extends Vue {
  @Getter(CountGetters.count) count!: number;
  @Mutation(CountMutations.setCount) setCount!: (value: number) => void;
  @Mutation(CountMutations.reset) reset!: () => void;
  @Action(CountActions.loadCount) loadCount!: () => void;
}
</script>
