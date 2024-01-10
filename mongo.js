const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Angel117:${password}@cluster0.gzxjaqd.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url)
//create schema and new note to save

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
/*
const note = new Note({
  content: 'This is a new note',
  date: new Date(),
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
Note.find({_id : '659dacb527b55b857310e0d7'}).then(result => {
    result.forEach(note => {
      console.log(note.content)
    })
    mongoose.connection.close()
  })