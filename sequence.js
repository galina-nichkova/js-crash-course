printAsanaNameEnglish = asana => console.log(asana.nameEnglish)

module.exports = class Sequence {
    constructor(level, duration, emphasis){
        this.level = level
        this.duration = duration
        this.emphasis = emphasis
        this.asanas = []
    }

    addAsana(asana){
        this.asanas.push(asana)
    }    

    printAsanas(){
        this.asanas.forEach(printAsanaNameEnglish)
    }
}

