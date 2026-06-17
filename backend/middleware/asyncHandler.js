const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
//prima funkciju koja vraca funkciju sa parametrima 
//izvrsava se u promise resolve 

//fora je da ne pisemo try i catch blok nego ako bude greska 
//vata ga error handler

//request response next(sl midlver )