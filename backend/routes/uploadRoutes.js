import path from 'path';
import express from 'express';
import multer from 'multer'; //midlver za obradu fajlova

const router = express.Router();

//definiše gde i kako da sačuva fajl:
const storage = multer.diskStorage({
    destination(req, file, cb) { cb(null, 'uploads/'); }, //folder u korenu projekta
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }  //sprečava da se fajlovi sa istim imenom prepišu
});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Dozvoljeni su samo formati: jpg, jpeg, png, webp!');
    }
}
//Ruta prima fajl, multer ga čuva na disk
// onda vraća putanju do fajla koja se čuva u bazi kao image polje proizvoda.
const upload = multer({ storage, fileFilter: function (req, file, cb) { checkFileType(file, cb); } });

router.post('/', upload.single('image'), (req, res) => {
    res.send({ message: 'Slika uspešno otpremljena', image: `/${req.file.path}` });
});

export default router;