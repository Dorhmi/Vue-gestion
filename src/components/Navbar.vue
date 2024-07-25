<template>
    <div class="navbar-container">
        <router-link to="/" class="nav-home">
            <font-awesome-icon :icon="['fas', 'home']" />
            <p>Home</p>
        </router-link>

        <router-link to="user" class="nav-user">
            <font-awesome-icon :icon="['fas', 'user']" />
            <p>User</p>
        </router-link>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink} from 'vue-router'
</script>

<style>
.navbar-container {
    background-color: #333;
    width: 80px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 30px;
    color: #fff;
    box-shadow: 1px 1px 10px 2px  gray;
}
.nav-user {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
}
.nav-user:hover {
    scale: 1.1;
}
.nav-home {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
}
.nav-home:hover {
    scale: 1.1;
}
</style>
