const fs = require("fs");
const chalk = require("chalk");
// const user = {

//     username  :"mahdi",
//     password  :"lkjsdklfj"
// };
// const jsonUser= JSON.stringify(user);
// fs.writeFileSync("json1.json",jsonUser);

// const buffer= fs.readFileSync("json1.json");
// var userPars = buffer.toString();
// userPars =JSON.parse(userPars);

// console.log(userPars.username);
//Making changes to Existing file
// let data = fs.readFileSync("json1.json");
// data = data.toString();
// data = JSON.parse(data);
// data.name = "mahdi";
// data.age = 20;
// data.planet = "orber";
// console.log(data);
// fs.writeFileSync("json1.json",JSON.stringify(data));
const getNote = () => {
  const notes = loadNotes();
  console.log(chalk.yellowBright("Title"),"\t\t",chalk.blueBright("Description"));
  notes.forEach(element => {
  console.log(chalk.red(element.title),"\t",chalk.green(element.body));  
  });

};

const addNote = (title, body) => {
  //cheak for array of notes to push in it
  const notes = loadNotes();
  //find duplicate
  const duplicate = notes.find((note) =>  note.title === title);

  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green.inverse("added one note!"));
  } else {
    console.log(chalk.red.inverse("The title is duplicated."));
  }
};

//delete a note with given title
const deleteNote = (title) =>{
  const notes = loadNotes();
  const noteToKeep = notes.filter((nt) => {
    return nt.title !== title;
  });
  if(notes.length > noteToKeep.length){
    saveNote(noteToKeep);
    console.log(chalk.green.inverse("deleted the note"));
  }else{
    console.log(chalk.red.inverse("There is not such note title in json file."));
  }
}
//load notes
const loadNotes = () => {
  try {
    const bufferNote = fs.readFileSync("note.json");
    const note = bufferNote.toString();
    return JSON.parse(note);
  } catch (e) {
    return [];
  }
};

//save notes
const saveNote = (note) => {
  fs.writeFileSync("note.json", JSON.stringify(note));
};

//find a note
const findOne = (title) =>{
  const notes = loadNotes();
  const oneNote = notes.find((nt)=>nt.title === title);
  console.log(oneNote);
  debugger
  if(oneNote){
    console.log(chalk.green.inverseit (oneNote.title), "\t",chalk.green.inverse(oneNote.body));
  }else{
    console.log(chalk.red.inverse("Not found!"));
  }
}

//some expoets
module.exports = {
  getNote,
  addNote,
  getNote,
  deleteNote,
  findOne
};
