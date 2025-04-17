<script setup>
import { ref, watch } from "vue";
import { VApp, VBtn, VCard, VDialog } from "vuetify/lib";

const showDialog = ref(false);
const totalOverlay = ref(0);

watch(showDialog, (next) => {
  if (!next) {
    totalOverlay.value = document.querySelectorAll(".v-overlay").length;
  }
});
</script>

<template>
  <VApp>
    <header>
      <h1>VDialog bug: totalOverlay {{ totalOverlay }}</h1>
    </header>
    <main>
      <VBtn type="button" @click="showDialog = true">open dialog</VBtn>
      <VDialog v-if="showDialog" :value="true">
        <VCard>
          <VBtn type="button" @click="showDialog = false">close dialog</VBtn>
        </VCard>
      </VDialog>
    </main>
  </VApp>
</template>
