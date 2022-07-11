<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update page</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                        <option value="">--Select Page--</option>
                                        <option  v-for="result in results" :value="result.id"  :selected= "result.id == page.parent_id">{{ result.title }}</option>
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
                                <button type="submit" class="btn btn-primary">Update</button>
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
    name:"update-page",
    data(){
        return {
            page:{
                parent_id:"",
                title:"",
                content:"",
                _method:"patch"
            },
            results:[]
        }
    },
    mounted(){
        this.getPagesListDropdown()
        this.showpage()
        
    },
    methods:{
        async showpage(){
            await this.axios.get(`/api/page/${this.$route.params.id}`+'/edit').then(response=>{
                const { title, content,parent_id } = response.data
                this.page.title = title
                this.page.content = content
                this.page.parent_id = parent_id
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/page/${this.$route.params.id}`,this.page).then(response=>{
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