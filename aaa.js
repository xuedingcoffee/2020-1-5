const aaa ={
    template:"#aaa",
    created() {
       console.log(this.$parent.num)
    },
    inject:['ary2']
}