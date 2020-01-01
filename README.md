# js-crash-course

## Useful course links
- [welcome guide](https://github.com/WTMBerlin/jscc-welcomeguide)
- [content](http://wtmberlin.com/javascript-crash-course/)
- [recordings](https://www.youtube.com/watch?v=xCr2v8I4x-I&list=PL9pDl_Oth4cqVnLrf5DCK4a_HhoAEhV4a)

## My project
I would like to develop a program that would help put together an individual yoga sequence. A student would enter how much time she has for a practice, what is her overall level, what should be the emphasis of the practice, and whether particular asanas should not be used. Based on this information the programm would output a list of asanas (maybe with pictures or additional instructions) that the student can follow through her practice.

- student has a name and a certain level of proficiency that doesn't quickly change
- student can request multiple sequences
- sequence has a certain level, duration, emphasis, and consists of multiple asanas
- asana has a name in English and Sanskrit, duration, one or more emphases, and multiple variations depending on level. Not every asana can be followed by any other asana, sometimes particular order has to be maintained.

## My current progress
Backend: I am working further on the main service (now called sequence-creation-service). It is responsible for the creation of an individual yoga sequence on user's request. At the moment, it take into account requested duration and emphasis. Also, I've recently added sign up and sign in functionality using passport local strategy.

Frontend: Not the main priority at the moment, have added sign up interface but not the sign in yet.
