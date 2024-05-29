import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan('combined'));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.route("/").get((req, res) => {
  res.send(`${process.env.APP}: Hello World!\n`);
});

app.route("/502").get(async (req, res) => {
  // sleep for 1 minute
  await sleep(60000);
  res.status(200).send(`${process.env.APP}: Hello 502\n`);
});

app.listen(80, () => {
    console.log(`${process.env.APP} listening on port 80`);
});
