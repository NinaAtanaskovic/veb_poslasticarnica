import dns from 'node:dns/promises';
dns.setServers(["1.1.1.1", "1.0.0.1"]);
//Ovo je ulazna tačka cele aplikacije 
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
//BITAN REDOSLED KONTROLERA JER SE  IZVRSAVA OD GORE KA DOLE
const port = process.env.PORT || 5000;
connectDB();

const app = express();
//povezivanje sa frontom
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());//parsira JSON telo zahteva
app.use(express.urlencoded({ extended: true }));//parsira form podatke
app.use(cookieParser());

app.get('/', (req, res) => { res.send('Poslastičarnica API radi...'); });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);
//uta vraća PayPal Client ID frontendu 
//  ne čuvamo ga direktno u frontend kodu jer bi bio vidljiv svima


//ako neko traži /uploads/nesto.jpg, samo mu vrati fajl sa diska
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//servira slike statički
// Express direktno vraća fajl sa diska bez pozivanja controllera.
app.use(notFound);
app.use(errorHandler); // ako ne uvati nijednu rutu pre ucice ovde

app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));
//pokreće server i počinje da sluša zahteve na portu 5000