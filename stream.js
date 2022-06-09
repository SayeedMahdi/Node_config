
const { writeFileSync,  createReadStream } = require("fs");

const makeSome=(url) => {
    for (var i = 1; i < 100000; i++){
        writeFileSync(url, `some data write hear ${i} \n`, {
            flag:"a"
        })
    }
}
const make_to = (url) => {
    const data = readFileSync(url, "utf-8");
    console.log(data);
}
makeSome("./fixe.txt");
// make_to("./fixe.txt");
//Stream is for making and reading big file that is too big we can use it many ways for collecting dat
const stream = createReadStream("./fixe.txt","utf-8");
// stream.on("data", (result) => {
//     console.log(result);
// });
stream.on("error", (result) => {
    console.log(result);
})