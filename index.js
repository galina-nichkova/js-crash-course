var requestedSequence
printAsanaNameEnglish = asana => console.log(asana.nameEnglish)

Sequence = class{
    constructor(level, duration, emphasis){
        this.level = level
        this.duration = duration
        this.emphasis = emphasis
        this.asanas = []
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

    includeIntoSequence(sequence){
        sequence.asanas.push(this)
    }
}

Student = class{
    constructor(name, level){
        this.name = name
        this.level = level
    console.log('Hi, I am created, my name is ' + name + 
        ' and I practice ' + level + ' yoga.')
    }

    request(duration, emphasis){        
        requestedSequence = new Sequence(this.level, duration, 
        emphasis)
      
        console.log(duration + ' minute sequence for ' +
        this.level + ' level with emphasis on ' + emphasis
        + ' created.')
    }
}



galina = new Student('Galina', 'intermediate')
downwardFacingDog = new Asana ('Downward Facing Dog', 
'Adho Mukha Svanasana', 3, 'Forward Bend', ['easy', 'difficult'])
galina.request(45, 'back bending')
downwardFacingDog.includeIntoSequence(requestedSequence)
requestedSequence.printAsanas()
