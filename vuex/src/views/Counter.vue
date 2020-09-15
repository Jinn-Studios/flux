<template>
  <div class="home">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button v-on="{ click: () => setCount(count + 1) }">increment</button>
    <button v-on="{ click: () => setCount(count - 1) }">decrement</button>
    <button v-on:click="loadCount">load random</button>
    <button v-on:click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action, Mutation } from "vuex-class";
import { CountActions } from "@/store/count/actions";
import { CountGetters } from "@/store/count/getters";
import { CountMuations } from "@/store/count/mutations";

@Component
export default class Counter extends Vue {
  @Getter(CountGetters.count) count!: number;
  @Mutation(CountMuations.setCount) setCount!: (value: number) => void;
  @Mutation(CountMuations.reset) reset!: () => void;
  @Action(CountActions.loadCount) loadCount!: () => void;
}
</script>
