const Sequence = require('./sequence.js')

module.exports = class Student{
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