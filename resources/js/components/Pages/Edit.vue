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
                title:"",
                content:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showpage()
    },
    methods:{
        async showpage(){
            await this.axios.get(`/api/page/${this.$route.params.id}`+'/edit').then(response=>{
                const { title, content } = response.data
                this.page.title = title
                this.page.content = content
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/page/${this.$route.params.id}`,this.page).then(response=>{
                this.$router.push({name:"pageList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>