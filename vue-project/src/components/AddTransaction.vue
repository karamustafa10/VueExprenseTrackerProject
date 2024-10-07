<template>
    <h3>Add New Transaction</h3>
    <!-- Form for adding a new transaction -->
    <form @submit.prevent="onSubmit">
        <!-- Input for transaction text -->
        <div class="form-control">
            <label for="text">Text</label>
            <input v-model="text" type="text" id="text" placeholder="Enter text..." />
        </div>
        <!-- Input for transaction amount -->
        <div class="form-control">
            <label for="amount">Amount <br> (negative - expense, positive - income)</label>
            <input v-model.number="amount" type="number" step=0.01 id="amount" placeholder="Enter amount..." />
        </div>
        <!-- Submit button for the form -->
        <button class="btn">Add Transaction</button>
    </form>
</template>

<script setup>
import { useToast } from 'vue-toastification'; // Importing the toast notification library
import { ref } from 'vue'; // Importing the ref function from Vue for reactive variables

// Reactive variables to store transaction data
const text = ref(""); // Stores the transaction text
const amount = ref(null); // Stores the transaction amount, initially null

// Define the emits for sending data to the parent component
const emit = defineEmits('transactionSubmitted'); // Emits an event when the transaction is submitted
const toast = useToast(); // Initializes toast for notifications

// Function to handle form submission
const onSubmit = () => {
    // Validate input fields
    if (!text.value || amount.value === null) {
        toast.error("Both fields must be filled!"); // Show error if validation fails
        return; // Exit the function
    }

    // Prepare transaction data
    const transactionData = {
        text: text.value, // Assign the text input value
        amount: amount.value, // Assign the amount input value
    };

    // Emit the transaction data to the parent component
    emit('transactionSubmitted', transactionData);
    
    // Reset the fields after submission
    text.value = ""; // Clear the text input
    amount.value = null; // Reset the amount input
};
</script>

<style>
/* Add your styles here */
/* You can style your form, buttons, and inputs here */
</style>
