<template>
  <Header /> <!-- Header bileşenini ekle -->
  
  <div class="container"> <!-- Ana konteyner -->
    <Balance :total="total" /> <!-- Toplam bakiyeyi gösteren bileşen -->
    <IncomeExpenses :income="income" :expenses="expenses" /> <!-- Gelir ve giderleri gösteren bileşen -->
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" /> <!-- İşlemleri listeleyen bileşen -->
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" /> <!-- Yeni işlem eklemeye yarayan bileşen -->
  </div>
</template>

<script setup>
import Header from './components/Header.vue'; // Header bileşenini içe aktar
import Balance from './components/Balance.vue'; // Balance bileşenini içe aktar
import IncomeExpenses from './components/IncomeExpenses.vue'; // Gelir/Gider bileşenini içe aktar
import TransactionList from './components/TransactionList.vue'; // İşlem listesi bileşenini içe aktar
import AddTransaction from './components/AddTransaction.vue'; // İşlem ekleme bileşenini içe aktar

import { ref, computed, onMounted } from 'vue'; // Vue.js'ten gerekli fonksiyonları içe aktar
import { useToast } from 'vue-toastification'; // Toast bildirimleri için kullanılır

const toast = useToast(); // Toast bildirim fonksiyonunu başlat
const transactions = ref([]); // İşlemleri tutmak için reaktif bir değişken oluştur

// Verileri yerel depolamadan al
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions')); // Yerel depolamadan işlemleri al
  if (savedTransactions) {
    transactions.value = savedTransactions; // Eğer işlem varsa, reaktif değişkene ata
  }
});

// Toplam hesaplama
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount; // İşlemlerin toplamını hesapla
  }, 0).toFixed(2); // Sonucu iki ondalık basamakla döndür
});

// Gelir hesaplama
const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0) // Yalnızca pozitif işlemleri filtrele
    .reduce((acc, transaction) => acc + transaction.amount, 0); // Gelir toplamını hesapla
});

// Gider hesaplama
const expenses = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0) // Yalnızca negatif işlemleri filtrele
    .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0); // Gider toplamını hesapla
});

// İşlem ekleme
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(), // Benzersiz bir ID oluştur
    text: transactionData.text, // İşlem metnini al
    amount: transactionData.amount, // İşlem tutarını al
  });
  savedTransactionsLocalStorage(); // Yerel depolamayı güncelle
  toast.success('Transaction added!'); // Başarılı ekleme bildirimi göster
}

// Benzersiz ID oluşturma
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000); // 0-999999 arası rastgele bir ID oluştur
}

// İşlem silme
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id); // Belirtilen ID'ye sahip işlemi sil
  savedTransactionsLocalStorage(); // Yerel depolamayı güncelle
  toast.success('Transaction deleted!'); // Başarılı silme bildirimi göster
}

// Yerel depolama güncelleme
const savedTransactionsLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value)); // İşlemleri yerel depolamaya kaydet
}
</script>
