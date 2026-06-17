import jwt from 'jsonwebtoken';
//Poziva se nakon uspešne prijave ili registracije
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
//ravi token koji u sebi kodira userId i potpisan je tajnim ključem
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 //vreme trajanja kukija u ms
    });
}
//Token se ne vraća korisniku direktno u JSON odgovoru nego se stavlja u HTTP kolačić.
export default generateToken;