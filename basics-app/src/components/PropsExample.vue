<template>
  <h1>{{name}}</h1>
   <h2>{{email}}</h2>
    <h3>{{phone}}</h3>
    <!-- <button @click="toggle">click</button> -->
    <button @click="$emit('delete',id)">Delete</button>
</template>

<script>
export default {
    // props: ['name','email','phone']
    emits: ['delete','dataEmit'],
    props:{
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true,
            default:"123456789",
            validator: function (value){
                return value.length <=10
            }
        },
        dataEmit:{
            type:Function
        }
    },
    methods:{
        toggle() {
            //to pass data to parent component use $emit 
            this.$emit('dataEmit',this.name)
        }
    }
}
</script>

<style>

</style>