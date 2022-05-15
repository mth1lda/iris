const { Sequelize, DataTypes } = require('sequelize') //
const sequelize = new Sequelize('postgres://postgres:Jhsy0P0asg@localhost:5432/test') //строка подключения, пароль

const User = sequelize.define(
    'User',
    {
        //таблица пользователей
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        //таблица пользователей
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

//маршруты приложения, чтобы работала vue
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)