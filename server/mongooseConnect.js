require('dotenv').config();
const mongoose = require("mongoose");

const mongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");

        const foodCollection = await mongoose.connection.db.collection("food");
        const data = await foodCollection.find({}).toArray();
        global.food_items = data;

        const categoryCollection = await mongoose.connection.db.collection("category");
        const catData = await categoryCollection.find({}).toArray();
        global.food_category = catData;
    }
    catch (err) {
        console.log(err);
    }
};
module.exports = mongodb;
