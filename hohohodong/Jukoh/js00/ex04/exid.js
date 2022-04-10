const exid = {
    count : 0,
    up(){
        this.count++
    },
    down(){
        this.count--
    },
    showCount(){
        console.log(this.count)
    }
}
const chainExid = {
    count : 0,
    up(){
        this.count++
        return this
    },
    down(){
        this.count--
        return this
    },
    showCount(){
        console.log(this.count)
        return this
    }
}

ch = chainExid

ch.up().down().up().up().down().up().down().up().up().down().showCount()

