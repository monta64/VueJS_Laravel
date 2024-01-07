<template>
    <div>

        <div v-if="isloading">
            <h1>Loading...</h1>
        </div>

        <div v-else class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <div class="container-fluid">
                    <router-link :to="{ name: 'addarticle' }" class="btn btnoutline-light">
                        <i class="fa-solid fa-square-plus"></i> New Article
                    </router-link>
                </div>
            </nav>
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Qté stock</th>
                        <th>Prix</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="art in articles" :key="art.id">
                        <td><img :src="art.imageart" width="80" height="80" /></td>
                        <td>{{ art.reference }}</td>
                        <td>{{ art.designation }}</td>
                        <td>{{ art.qtestock }}</td>
                        <td>{{ art.prix }}</td>
                        <td>
                            <router-link :to="{ name: 'editarticle', params: { id: art.id } }"
                                class="btn btn-outline-warning mx-2">
                                <i class="fa-solid fa-pen-to-square"></i>
                                Modifier
                            </router-link>
                        </td>
                        <td><button class="btn btn-danger" @click="deletearticle(art.id)">Delete</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios"

const articles = ref([])
const isloading = ref(true)
const getarticles = async () => {
    try {
        await axios.get("http://localhost:8000/api/articles")
            .then(res => {
                articles.value = res.data
                isloading.value = false
            })
    } catch (error) {
        console.log(error)

    }
}
onMounted(() => {
    getarticles()
})
const deletearticle = async (id) => {
    if (window.confirm("voulez vous supprimer l'article")) {
        try {

            await axios.delete(`http://localhost:8000/api/articles/${id}`)
                .then(res => {
                    alert("article supprimé")
                    getarticles()
                })

        } catch (error) {
            console.log(error)

        }

    }
}
</script>

<style lang="scss" scoped></style>