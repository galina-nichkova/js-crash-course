const Sequence = require('./sequence.js')
const Asana = require('./asana.js')

module.exports = class Student{
    constructor(name, level, requestedSequence = [], id){
        this.name = name
        this.level = level
        this.requestedSequence = requestedSequence
        this.id = id
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

    static create ({name, level, requestedSequence, id}){
        return new Student (name, level, requestedSequence, id)
    }
}