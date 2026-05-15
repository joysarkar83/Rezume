import app from "./src/app.js";
import mongoose from "mongoose";
import config from "./src/configs/config.js";

mongoose.connect(config.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.PORT, () => {
        console.log(`Server is running on port http://localhost:${config.PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
});