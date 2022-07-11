<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Laravel Vue Crud App - Tarun Baraiya</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" :to='{name:"home"}' class="nav-item nav-link">Home</router-link> | 
                        <router-link exact-active-class="active" :to='{name:"pagesList"}' class="nav-item nav-link">Pages [CRUD]</router-link>
                        <router-link exact-active-class="active" :to='{name:"pagesTree"}' class="nav-item nav-link">Pages Tree</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {
    name: "App"
}
</script>