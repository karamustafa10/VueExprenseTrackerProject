<template>
    <h3>History</h3> <!-- Başlık: Geçmiş İşlemler -->

    <ul id="list" class="list"> <!-- İşlem listesini tutan bir liste -->
        <!-- Her bir işlem için bir liste elemanı oluştur -->
        <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>${{ transaction.amount }}</span> <!-- İşlem metni ve miktarı -->
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button> <!-- Silme butonu -->
        </li>
    </ul>

    <!-- Aşağıdaki kodlar yorum satırı olarak bırakılmış; örnek liste elemanları -->
    <!--
    <ul id="list" class="list">
        <li class="minus">
            Cash <span>-400$</span><button class="delete-btn">x</button>
        </li>
    </ul>
    <ul id="list" class="list">
        <li class="plus">
            Paycheck <span>800$</span><button class="delete-btn">x</button>
        </li>
    </ul>
    -->
</template>

<script setup>
import { defineProps } from 'vue'; // Vue'dan props tanımlamak için gerekli fonksiyon

// Parent bileşene işlem silindiğinde bir olay yayımlamak için emit tanımla
const emit = defineEmits(['transactionDeleted']); 

// Parent bileşenden alınacak olan prop'ları tanımla
const props = defineProps({
    transactions: { // 'transactions' prop'u bir dizi olmalıdır
        type: Array,
        required: true,
    },
});

// İşlemi silmek için fonksiyon
const deleteTransaction = (id) => {
    emit('transactionDeleted', id); // Silme olayı yayımlanıyor
}
</script>

<style>
/* Stil tanımlamaları buraya eklenebilir */
/* Liste ve butonlar için stil ekleyin */
</style>
