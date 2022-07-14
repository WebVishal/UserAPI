
import express from 'express'
const routers = express.Router()

const userData = [
    {
        Id: 1,
        Name: 'vishal',
        LastName: 'kumar',
        Phone: 1234,
        Email: 'vishal@123.gmail.com',
        Address: 'plot no 11'
    },
    {
        Id: 2,
        Name: 'rhaul',
        LastName: 'Greek',
        Phone: 4321,
        Email: 'rahul@123.gmail.com',
        Address: 'plot no 17'
    },
    {
        Id: 3,
        Name: 'G',
        LastName: 'Greek',
        Phone: 809012,
        Email: 'rahul@123.gmail.com',
        Address: 'plot no 16'
    },
    {
        Id: 4,
        Name: 'Thor',
        LastName: 'Greek',
        Phone: 96821,
        Email: 'thor@123.gmail.com',
        Address: 'plot no 10'
    },
    {
        Id: 5,
        Name: 'IronMan',
        LastName: 'TonyStark',
        Phone: 984567,
        Email: 'tonystark@321.gmail.com',
        Address: 'plot no 10'
    }
]



routers.get('/', (res, req) => {
    console.log(userData)
    req.send(userData)

})

routers.post('/', (res, req) => {
    const Newuser = res.body;
    userData.push(Newuser)
    req.send(`New User ${Newuser.name} added to the Database`)

})
routers.delete('/:Id', (res, req) => {
    const userID = res.params.Id;
    let index = userData.findIndex((user) => {

        return user.Id == Number.parseInt(userID)
    })
    if (index >= 0) {
        let x = userData[index]
        userData.splice(index, 1)
        req.json(x)
    }else{
        res.statusCode(404)
    }
    
})

export default routers