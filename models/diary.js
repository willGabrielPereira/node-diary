const fs = require('fs')
const crypto = require('crypto')

// const Diary = require('./models/diary')

class Diary {
    constructor(title, text) {
        this.id = crypto.randomUUID()
        this.title = title
        this.text = text
        this.date = new Date()
    }

    save() {
        fs.appendFile('diary.json', JSON.stringify(this), (err) => {
            if (err) return err
            else 'Diário salvo com sucesso!'
        })
    }
}

module.exports = Diary
