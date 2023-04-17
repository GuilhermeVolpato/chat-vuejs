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
    <div class=" mx-96 p-4 justify-center border-4  border-gray-500 h-96">
      <div class=" flex-1 border-4 border-gray-500 h-full overflow-y-scroll">
        <div class="justify-center">
          <div class="flex flex-col justify-start">
            <h5 class="ml-2 w-max min-h-min mb-0">Atendente diz:</h5>
            <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit">
              Obrigado por entrar em contato com nossa equipe logo mais, um
              a!
            </h4>
            <h5 class="ml-2 w-max min-h-min mb-0">Atendente diz:</h5>
            <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit">Olá, como posso ajudar você?</h4>
          </div>
          <div class="flex flex-row-reverse">
            <ul class="mx-5 my-4 list-disc">
              <li v-for="item in listOfUserMessages" class="list-none">
                <div class="flex flex-col items-end">
                    <h5 class= " w-max min-h-min mb-0">Você diz:</h5>
                    <h4 class="ml-2 border-2 border-solid mt-0 p-2 w-fit">{{ item }}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form @submit.prevent="addNewUserMessage" method="get">
        <input
          id="userMessage"
          v-model="userMessage"
          class="w-96*2 h-5 mt-4 mb-1 py-4 bg-gray-200 text-white border-2 border-gray-400 "
          type="text"
          placeholder="Digite sua mensagem aqui"
        />
        <button type="submit" class="p-2 mt-2 bg-teal-500 ml-12 text-white hover:bg-teal-600">Enviar</button>
      </form>
    </div>
  </body>
</template>

<!-- CSS -->
<style>

.chatUsuario{
  display: flex;
  align-items: flex-end;
  flex-direction: column; 
}

.labelUsuario{
  margin-right: 8px;
  width: max-content;
  height:min-content;
  margin-bottom: 0px;
}

.mensagem{
  display: flex;
  flex:1;
  flex-direction: row;
  align-items: center;
}

input{
  height: 35px;
  width: 85%;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.button{
  height: 35px;
  width: 15%;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.creditos{
  display: flex;
  flex-direction: row;
}

.nomes{
  margin-left: 15px;
}
</style>