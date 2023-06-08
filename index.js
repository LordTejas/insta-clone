const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.set('strictQuery', true);

// Start App
mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => console.log(`Connected to on ${config.mongoose.url}`))
    .catch((err) => console.log(err));

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
})