<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add page</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="page.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Page Parent</label>
                                    <select class="form-control" v-model="page.parent_id" name="parent_id">
                                        <option selected value="">--Select Page--</option>
                                        <option v-for="result in results" :value="result.id" >{{ result.title }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="page.content">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                                <router-link :to='{name:"pagesList"}' class="btn btn-success ms-1">Back</router-link>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-page",
    data(){
        return {
            page:{
                title:"",
                content:""
            },
            results:[]
        }
    },
     mounted(){
        this.getPagesListDropdown()
       
        
    },
    methods:{
        async create(){
            await this.axios.post('/api/page',this.page).then(response=>{
                this.$router.push({name:"pagesList"})
            }).catch(error=>{
                console.log(error)
            })
        },
        async getPagesListDropdown(){
             await this.axios.get('/api/page').then(response=>{
            this.results = response.data = response.data

            }).catch(error=>{
                console.log(error)
                this.pages = []
            })
        }
    }
}
</script>