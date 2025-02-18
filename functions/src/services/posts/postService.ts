
import * as functions from 'firebase-functions'
import express from 'express'

const app = express()
app.disable('x-powered-by')

app.get('/:postId/comments', async (request, response) => {
    return response.status(200).send(`post`)

})

/**
 * Routing posts
 */
export const posts =  functions.https.onRequest(app)
