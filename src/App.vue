<script setup lang="ts">
import chat from './components/chat.vue';
</script>

<template class="template">
  <body class="min-h-screen bg-neutral-800">
    <div class="flex bg-neutral-800" />
    <header class="flex justify-center border-4 rounded border-gray-300 mt-12 mb-4 mx-96">
      <h1 className="text-3xl font-bold text-zinc-300">Atendimento ao cliente</h1>
    </header>

    <main>
      <chat />
    </main>
  </body>
</template>
