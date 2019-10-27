printAsanaNameEnglish = asana => console.log(asana.nameEnglish)

Sequence = class{
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

Asana = class{
    constructor(nameEnglish, nameSanskrit, duration, emphases,
    variations){
        this.nameEnglish = nameEnglish
        this.nameSanskrit = nameSanskrit
        this.duration = duration
        this.emphases = emphases
        this.variations = variations
    console.log('Asana ' + nameEnglish + ' is created')
    }

}

Student = class{
    constructor(name, level){
        this.name = name
        this.level = level
        this.requestedSequence = []
    console.log('Hi, I am created, my name is ' + name + 
        ' and I practice ' + level + ' yoga.')
    }
    
    request(duration, emphasis){        
        var newSequence = new Sequence(this.level, duration, 
        emphasis)
        this.requestedSequence.push(newSequence)
      
        console.log(duration + ' minute sequence for ' +
        this.level + ' level with emphasis on ' + emphasis
        + ' created.')
    }
}



galina = new Student('Galina', 'intermediate')
downwardFacingDog = new Asana ('Downward Facing Dog', 
'Adho Mukha Svanasana', 3, 'Forward Bend', ['easy', 'difficult'])
kingPigeon = new Asana ('King Pigeon', 
'Kapotasana', 5, 'Back Bend', ['easy', 'intermediate', 'difficult'])
galina.request(45, 'back bending')
galina.requestedSequence[0].addAsana(downwardFacingDog)
galina.requestedSequence[0].addAsana(kingPigeon)
galina.requestedSequence[0].printAsanas()
