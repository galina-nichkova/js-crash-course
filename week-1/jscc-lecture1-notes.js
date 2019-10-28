// var armagan = {
//     name: 'Armagan',
//     age: 35,
//     greet(person){
//         console.log("Hello " + person.name + ", I'm " + this.name + "!")
//     }
// }

// var mert = {
//     name: 'Mert',
//     age: 36
// }

Person = class{
    constructor(name, age) {
        console.log('Hi, I am created, my name is', name)
        this.name = name
        this.age = age
    }

    greet(person){
        console.log("Hello " + person.name + ", I'm " + this.name + "!")
    }

    attend(meetup){
        this.meetup = meetup
        meetup.attendees.push(this)
    }

}


Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }

    printAttendeeNames() {
        this.attendees.forEach(printName)
    }
}

printName = person => console.log(person.name)

wtmb = new Meetup("Women Tech Makers Berlin")

amargan = new Person('Armagan', 35)
mert = new Person('Mert', 34)

amargan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()

//Homework
//Think about a project you want to work on throughout the course
//Create at least 2 classes and at list 3 interations between them
//Save as index.js file, pubish on github and share the link in the slack channel
