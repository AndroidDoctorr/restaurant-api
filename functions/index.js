const { onRequest } = require("firebase-functions/v2/https")
const logger = require("firebase-functions/logger")
const { buildApp } = require("turbo-api")
const admin = require('firebase-admin')
const cors = require('cors')
// Set up Firebase Admin/Auth
admin.initializeApp()

exports.helloWorld = onRequest((request, response) => {
    response.send("Heyyooooooooooo!!!!")
})

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 204,
}

exports.api = onRequest(async (req, res) => {
    const app = await buildApp()
    cors(corsOptions)(req, res, () => app(req, res))
})