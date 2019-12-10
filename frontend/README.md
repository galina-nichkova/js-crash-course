# frontend

## set-up
Please create a few asanas before checking the frontend. 
```
axios.post('/asana', {nameEnglish: 'Fish Pose', nameSanskrit: 'Matsyasana', duration: 5, emphasis: 'chest open', levels: [1, 2], pic: '' }).then(console.log('ok'))

axios.post('/asana', {nameEnglish: 'Cobra Pose', nameSanskrit: 'Bhujangasana', duration: 5, emphasis: 'back bend', levels: [1, 2, 3], pic: '' }).then(console.log('ok'))

axios.post('/asana', {nameEnglish: 'Camel Pose', nameSanskrit: 'Ustrasana', duration: 5, emphasis: 'chest open', levels: [1, 2, 3, 4, 5], pic: '' }).then(console.log('ok'))

axios.post('/asana', {nameEnglish: 'Bow Pose', nameSanskrit: 'Dhanurasana', duration: 3, emphasis: 'chest open', levels: [1], pic: '' }).then(console.log('ok'))

axios.post('/asana', {nameEnglish: 'Mountain Pose', nameSanskrit: 'Tadasana', duration: 2, emphasis: 'balance', levels: [1], pic: '' }).then(console.log('ok'))
```
## what should work so far
* Asana page shows all asanas available in the data base. There are 5 pics in the assets folder that are also displayed for the respective asanas. Maybe, it would be better to store them in the data base within each asana, but i don't know yet how.
* Register page takes 3 inputs and write a new user into the data base when the "Register" button is clicked.

## what have to work the until 10.12
* Request page should take 3 inputs from a user and call the main-service from the backend. As a result a list of asanas that main-service returns should be displayed on a separate (or Asanas) page.
