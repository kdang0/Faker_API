const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 9000;


const createUser = () => {
    const user = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        id : faker.datatype.uuid()
    };
    return user
}


const createCompany = () => {
    const company = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return company
}

const fakeCompany = createCompany();
const fakeUser = createUser();

app.get("/api/users/new", (req,res) =>  {
    res.json(fakeUser)
});

app.get("/api/companies/new", (req,res) =>  {
    res.json(fakeCompany)
});

app.get("/api/user/company", (req,res) =>  {
    res.json({user: fakeUser, company:fakeCompany})
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );