<template>
    <div class="user-view-container">
        <h2>Users</h2>
        <button @click="addUser">+ Add User</button>
        <div v-for="(item) in user" v-if="show">
            <div class="partner-input-container">
                <p class="input-title">Nom d'utilisateur :</p>
                <input v-model="item.Nom" class="partner-input" type="text">
            </div>
            <div class="partner-input-container">
                <p class="input-title">Email :</p>
                <input v-model="item.email" class="partner-input" type="text">
            </div>
            <div class="partner-input-container">
                <p class="input-title">numero :</p>
                <input v-model="item.num" class="partner-input" type="text">
            </div>
            <button @click="onSubmit" class="submit-btn">Submit</button>
        </div>
        <datatable/>
    </div>
</template>


<script setup lang="ts">
    import datatable from '../components/DataTable.vue'
    import {ref} from 'vue'

    interface User {
    Nom : string;
    email: string;
    num: string;
    initialState: null;
}

    const show = ref(false);

    const user = ref<User[]>([
            {
                Nom: "",
                email: "",
                num: "",
                initialState: null,
            }
        ]);

        const addUser = () => {
            show.value = true;
        }

        const  onSubmit = () => {
            show.value = false;
            user.value = [
            {
                Nom: "",
                email: "",
                num: "",
                initialState: null,
            }
            ];
        }

    </script>

<style>
.user-view-container {
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
.partner-input-container {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }
    .partner-input {
        border: 1px solid #333;
        padding: 5px;
        border-radius: 5px;
        width: 400px;
    }
        .input-title {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>