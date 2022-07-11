<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"PagesAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>page</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Page Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="pages.length > 0">
                                <tr v-for="(page,key) in pages" :key="key">
                                    <td>{{ page.id }}</td>
                                    <td>{{ page.title }}</td>
                                    <td>{{ page.description }}</td>
                                    <td>
                                        <router-link :to='{name:"PagesEdit",params:{id:page.id}}' class="btn btn-success">Edit</router-link>
                                        <button  type="button" @click="deletepage(page.id)" class="btn btn-danger ms-1">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Pages Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"pages",
    data(){
        return {
            pages:[]
        }
    },
    mounted(){
        this.getPages()
    },
    methods:{
        async getPages(){
            await this.axios.get('/api/page').then(response=>{
                this.pages = response.data
            }).catch(error=>{
                console.log(error)
                this.pages = []
            })
        },
        deletepage(id){
            if(confirm("Are you sure to delete this page ?")){
                this.axios.delete(`/api/page/${id}`).then(response=>{
                    this.getPages()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>