
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponenteInicial',
  data() {
    return {
      nombre: 'jose',
      contador: 0,
      resetear: 0,
      selecion: 1, // Valor inicial del select
    };
  },
  computed: {
    contadorMultiplicado() {
      return this.contador * this.selecion;
    },
  },
  methods: {
    incrementar() {
      console.log('pulsado incrementar');
      this.contador += 1;
    },
    decrementar() {
      console.log('pulsado decrementar');
      this.contador -= 1;
    },
    reset() {
      console.log('pulsado resetear');
      this.contador = this.resetear;
    },
  },
});
</script>


<template>
    <div>
      <h2>Contador: {{ contador }}</h2>
      <button @click="incrementar" class="btn-primary">Incrementar</button>
      <button @click="decrementar" class="btn-secondary">Decrementar</button>
  
      <p><input type="number" v-model.number="resetear"></p>
      <button @click="reset">Fijar número</button>
      <p>El valor a resetear es: {{ resetear }}</p>
      <p>El valor del select es: {{ selecion }}</p>
  
      <select name="multiplicador" v-model.number="selecion">
        <option value="1">Multiplica x1</option>
        <option value="10">Multiplica x10</option>
        <option value="100">Multiplica x100</option>
      </select>
  
      <p>El contador multiplicado por el valor del select es: {{ contadorMultiplicado }}</p>
    </div>
  </template>

