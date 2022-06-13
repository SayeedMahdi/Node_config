var fs = require('fs');
var archiver = require('archiver');
var output = fs.createWriteStream('./example.zip');
var archive = archiver('zip', {
    gzip: true,
    zlib: { level: 9 } // Sets the compression level.
});

archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the output file
archive.pipe(output);

// append files
archive.file('fixe.txt', {name: 'changed.txt'});
// archive.file('/path/to/README.md', {name: 'foobar.md'});

//
archive.finalize();