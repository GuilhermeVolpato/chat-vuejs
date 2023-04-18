<!-- TypeScript -->
<script setup lang="ts">
  import { ref } from "vue";

  const listOfUserMessages = ref<string[]>([]);
  const userMessage = ref("");
  const emptyMessage = ref();

  function addNewUserMessage(){
    if(userMessage.value !=="" && userMessage.value !== undefined){
      listOfUserMessages.value.push(userMessage.value);
      console.log(listOfUserMessages)
      userMessage.value = "";
      emptyMessage.value = "";
    }
    else{
      emptyMessage.value = "Não é possível enviar uma mensagem vazia"
    }
  }
</script>


<!-- Html -->
<template >
  <body>
    <div class=" mx-96 p-4 justify-center border-4 rounded border-gray-300 h-128 backdrop-brightness-40">
      <div class="border-4 border-gray-300 h-100 overflow-y-auto rounded ">
        <div class="justify-center">
          <div class="flex flex-col justify-start">
            <h5 class="ml-2 mb-0 text-sm text-slate-200">Atendente diz:</h5>
            <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit text-slate-200">
              Obrigado por entrar em centato com nossa equipe
            </h4>
            <h5 class="ml-2 mb-0 text-sm text-slate-200 mt-2">Atendente diz:</h5>
            <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit text-slate-200">Olá, como posso ajudar você?</h4>
          </div>
          <div class="flex flex-row-reverse">
            <ul class="mx-5 my-4 list-disc">
              <li v-for="item in listOfUserMessages" class="list-none">
                <div class="flex flex-col items-end">
                    <h6 class= "text-sm mb-0 mt-2 text-slate-200">Você diz:</h6>
                    <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit  text-slate-200">{{ item }}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form @submit.prevent="addNewUserMessage" method="get" class="flex flex-row min-w-full">
        <input
          id="userMessage"
          v-model="userMessage"
          class="rounded w-full h-5 mt-4 py-4 placeholder:pl-2 bg-gray-200 text-gray-900 border-2 border-gray-400 "
          type="text"
          placeholder="Digite sua mensagem aqui"
        />
        <button type="submit" class="rounded p-2 mt-2 bg-teal-500 ml-6 text-white hover:bg-teal-600">Enviar</button>
      </form>
    </div>
  </body>
</template>

