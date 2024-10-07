<template>
    <h4>Your Balance</h4> <!-- Başlık: Mevcut Bakiye -->
    <h1 id="balance">${{ total }}</h1> <!-- Toplam bakiyeyi gösteren alan -->
</template>

<script setup>
import { defineProps } from 'vue'; // Vue'dan props tanımlamak için gerekli fonksiyon

// Parent bileşenden alınacak olan prop'u tanımla
const props = defineProps({
    total: { // 'total' prop'u bir sayı olmalıdır
        type: Number,
        required: true, // Bu prop zorunlu
    },
});
</script>

<style>
/* Stil tanımlamaları buraya eklenebilir */
/* Örneğin, bakiye metninin stilini ayarlayabilirsiniz */
</style>
