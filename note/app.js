const yargs = require("yargs");
const notes = require("./note");

yargs.command({
  command: "list",
  describe: "Some notes to show",
  handler: () => {
    console.log("list of notes");
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
  handler: function (argv) {
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
    }
  },
  handler: function (argv) {
    notes.deleteNote(argv.title);
  },
});
//read command
yargs.command({
  command: "read",
  describe: "some description",
  handler: () => {
    console.log("read data");
  },
});
console.log(yargs.argv);
