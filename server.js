const { Sequelize, DataTypes } = require('sequelize') //orm система
const sequelize = new Sequelize('postgres://postgres:Jhsy0P0asg@localhost:5432/test') //строка подключения, пароль

const User = sequelize.define(
    'User',
    {
        //таблица пользователей
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, //увеличивается на 1
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, //поле имя обязательно
            unique: true, // уникальное имя
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull по умолчанию имеет значение true
        },
    },
    {
        timestamps: false
    }
)
User.sync() //таблица

const Chats = sequelize.define(
    'Chats',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        json: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
    },
)
Chats.sync()

const jwt = require('jsonwebtoken');
const TOKEN_SECRET = '327hf7h77'

function generateAccessToken(username) {
    return jwt.sign({ username: username }, TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
app.use(express.json())
//
app.post('/api/login', function (req, res) {
    User.findOne({
        where: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function (user) {
        if (user) {
            return res.json(generateAccessToken(user.name))
        }
        return res.sendStatus(403)
    })

})

app.post('/api/chats', function (req, res) {
    Chats.create({
        title: req.body.title,
        avatar: req.body.avatar
    }).then(function(data){
        return res.send(data)
    })
})



//маршруты приложения, чтобы работала vue
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/login',function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, authenticateToken,function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)