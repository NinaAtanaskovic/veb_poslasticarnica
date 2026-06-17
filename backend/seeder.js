import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

//Briše sve postojeće porudžbine, proizvode i korisnike
//Ubacuje korisnike, uzima ID prvog (admin) korisnika
//Svakom proizvodu dodaje user: adminUser — ko je vlasnik
//Ubacuje sve proizvode nazad

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users); //podaci su vec hesirani(sifra)
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => ({ ...product, user: adminUser }));
        await Product.insertMany(sampleProducts);
        console.log("Podaci uspešno uvezeni!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};
//brise sve 
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Podaci uspešno obrisani!".red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") { destroyData(); } else { importData(); }
//"data:destroy" kada ovo ukucamo on ce ga podesiti na -d 
