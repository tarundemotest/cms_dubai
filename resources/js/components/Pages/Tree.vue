<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"PagesAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Page Tree</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    
                                    <th>Page Title</th>
                                    
                                </tr>
                            </thead>
                            <tbody v-if="pages.length > 0">
                                <tr v-for="(page,key) in pages" :key="key">
                                    <td><router-link exact-active-class="active" :to='{name:"PageTreeLoop",params:{slug:page.slug}}' class="nav-item nav-link">{{ page.title }}</router-link></td>
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