# js-crash-course

## useful course links
- [welcome guide](https://github.com/WTMBerlin/jscc-welcomeguide)
- [content](http://wtmberlin.com/javascript-crash-course/)
- [recordings](https://www.youtube.com/watch?v=xCr2v8I4x-I&list=PL9pDl_Oth4cqVnLrf5DCK4a_HhoAEhV4a)

## my project
i would like to develop a program that would help put together an individual yoga sequence. a student would enter how much time she has for a practice, what is her overall level, what should be the emphasis of the practice, and whether particular asanas should not be used. based on this information the programm would output a list of asanas (maybe with pictures or additional instructions) that the student can follow through her practice.

- student has a name and a certain level of proficiency that doesn't quickly change
- student can request multiple sequences
- sequence has a certain level, duration, emphasis, and consists of multiple asanas
- asana has a name in English and Sanskrit, duration, one or more emphases, and multiple variations depending on level. not every asana can be followed by any other asana, sometimes particular order has to be maintained

## my current progress
at the moment all the basic functionality like adding, deleting, finding items in the 
database work. 
my goal for the next week is to continue working on the [sequence-service](https://github.com/galina-nichkova/js-crash-course/blob/lesson5/services/sequence-service.js#L7). right now it can only create a new sequence and a reference to a student who requested it. 
further on, i would like it to fill the newly created sequence with asanas based on the user input and on the possible combination of asanas.

## some test commands for reviewers\
add student: axios.post('/student', {name: 'Karina', level: 3, requestedSequence: []}).then(console.log('ok')) \
find student by id: http://localhost:3000/student/5dd1ac785416b42db2f7fcaf \
delete student: axios.delete('/student/5dd1c572892cbd38b78d4699').then(console.log('ok')) \

add asana: axios.post('/asana', {nameEnglish: 'Big Toe Pose', nameSanskrit: 'Padanghustasana', duration: 2, emphasis: 'forward bend', levels: [1, 2]}).then(console.log('ok')) \

request sequence: axios.get('/sequence/5dd1a51d5e360f28c3c5fab8/30/backBend').then(console.log('ok')) \
