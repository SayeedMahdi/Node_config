const yargs = require("yargs");

yargs.command({
  command: "list",
  describe: "Some notes to show",
  handler: () => {
    console.log("list of notes");
  },
});
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
    console.log("create title: ", argv.title, argv.body);
  },
});
yargs.command({
  command: "read",
  describe: "some description",
  handler: () => {
    console.log("read data");
  },
});
console.log(yargs.argv);
