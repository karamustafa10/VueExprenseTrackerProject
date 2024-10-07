<template>
    <div class="inc-exp-container"> <!-- Gelir ve gider bilgilerini tutan ana kapsayıcı div -->
        <div>
            <h4>Income</h4> <!-- Gelir başlığı -->
            <p id="money-plus" class="money plus">+${{ income.toFixed(2) }}</p> <!-- Gelir miktarını gösteren alan -->
        </div>

        <div>
            <h4>Expense</h4> <!-- Gider başlığı -->
            <p id="money-minus" class="money minus">-${{ expenses.toFixed(2) }}</p> <!-- Gider miktarını gösteren alan -->
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'; // Vue'dan props tanımlamak için gerekli fonksiyon

// Parent bileşenden alınacak olan prop'ları tanımla
const props = defineProps({
    income: { // 'income' prop'u bir sayı olmalıdır
        type: Number,
        required: true, // Bu prop zorunlu
    },

    expenses: { // 'expenses' prop'u bir sayı olmalıdır
        type: Number,
        required: true, // Bu prop zorunlu
    },
});
</script>

<style>
/* Stil tanımlamaları buraya eklenebilir */
/* Gelir ve gider alanlarının stillerini ayarlamak için buraya ekleyebilirsiniz */
</style>
