const fs = require("fs");

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
  console.log("Get all notes");
};

const addNote = (title, body) => {
  //cheak for array of notes to push in it
  const notes = loadNotes();
  //find duplicate
  const duplicate = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicate.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
  } else {
    console.log("The title is duplicated.");
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
    console.log("deleted the note");
  }else{
    console.log("There is not such note title in json file.");
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


//some expoets
module.exports = {
  addNote,
  getNote,
  deleteNote
};
