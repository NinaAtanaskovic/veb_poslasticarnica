import bcrypt from "bcryptjs";

const users = [
    {
        name: "Nina",
        email: "admin@poslasticarnica.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Tara Ivošević",
        email: "tara@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Milica Bogdanović",
        email: "milica@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    }
];

export default users;