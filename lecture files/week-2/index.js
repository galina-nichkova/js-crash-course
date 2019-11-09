const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Chalk = require('chalk')
const Database = require('./database')

  printName = person => console.log(Chalk.bgGreen(person.name))

  const galina = new Person('Galina', 30)
  const olena = new Person ('Olena', 27)
  galina.greet(olena)

  const wtmk = new Meetup('Women Tech Makers Berlin')
  galina.attend(wtmk)
  wtmk.printAttendeeNames()
  olena.attend(wtmk)
  wtmk.printAttendeeNames()

  console.log(Chalk.blue.bgRed.bold('hello world'))

  Database.save('meetup.json', wtmk)
  console.log(Database.load('meetup.json'))