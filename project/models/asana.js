module.exports = class Asana{
    constructor(nameEnglish, nameSanskrit, duration, emphases,
    variations = [], id){
        this.nameEnglish = nameEnglish
        this.nameSanskrit = nameSanskrit
        this.duration = duration
        this.emphases = emphases
        this.variations = variations
        this.id = id
    console.log('Asana ' + nameEnglish + ' is created')
    }

    static create ({nameEnglish, nameSanskrit, duration, emphases, variations, id}){
        return new Asana (nameEnglish, nameSanskrit, duration, emphases, variations, id)
    }
}