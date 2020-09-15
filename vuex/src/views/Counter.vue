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
import {
  CounterActions,
  CounterGetters,
  CounterMutations
} from "@/store/count";

@Component
export default class Counter extends Vue {
  @Getter(CounterGetters.count) count!: number;
  @Mutation(CounterMutations.setCount) setCount!: (value: number) => void;
  @Mutation(CounterMutations.reset) reset!: () => void;
  @Action(CounterActions.loadCount) loadCount!: () => void;
}
</script>
