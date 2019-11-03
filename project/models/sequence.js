const Asana = require('./asana.js')
printAsanaNameEnglish = asana => console.log(asana.nameEnglish)

module.exports = class Sequence {
    constructor(level, duration, emphasis, asanas = [], id){
        this.level = level
        this.duration = duration
        this.emphasis = emphasis
        this.asanas = asanas
        this.id = id
    }

    addAsana(asana){
        this.asanas.push(asana)
    }    

    printAsanas(){
        this.asanas.forEach(printAsanaNameEnglish)
    }

    static create ({level, duration, emphasis, asanas, id}){
        return new Sequence (level, duration, emphasis, asanas, id)
    }
}

