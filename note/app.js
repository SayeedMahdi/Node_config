const yargs = require("yargs");
const notes = require("./note");


//list all notes
yargs.command({
  command: "list",
  describe: "Some notes to show",
  handler() {
    notes.getNote()
  },
});

//create some command
yargs.command({
  command: "create",
  describe: "create",
  builder: {
    title: {
      describe: "some title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "some title",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//delete command
yargs.command({
  command: "delete",
  describe: "delete",
  builder: {
    title: {
      describe: "delete some title",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.deleteNote(argv.title);
  },
});
//read command for one note
yargs.command({
  command: "read",
  describe: "some description note",
  handler(argv) {
    notes.findOne(argv.title);
  },
});
console.log(yargs.argv);
