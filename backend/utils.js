import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  // Si authorzization exsite 
  if (authorization) { 
    // on récupère le token
    const token = authorization.slice(7, authorization.length); // Bearer XXXXX (récupération du token)
    // Vérification et décryptage du token et de la clé secrète
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        // Vérification des erreur
        if (err) {
          res.status(401).send({ message: "Invalid  Token" }); // problème d'authenfication
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" }); // problème d'authenfication

  }
};
// Protect the API for admins like updating a product or managing an order
export const isAdmin = (req, res, next) => {
  //Vérification : si user && user.isAdmin est true
  if(req.user && req.user.isAdmin) {
    // pass next middleware
    next();
  } else {
  res.status(401).send({ message: "Invalid Admin Token" });

}
}
