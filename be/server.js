import express from 'express'
import { userschema } from './schemas.js'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())


app.post("/register", async (req, res) => {
    const { name, email, password, dob, gen } = req.body
    const oldUser = await userschema.findOne({ email })
    if (oldUser) {
        res.status(400).send({
            error: {
                code: 498,
                msg: "This email is already associated with us."
            }
        })
    } else {
        const user = new userschema({
            name, email, password, dob, gen
        })
        const result = await user.save()
        res.status(201).send(result)
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userschema.findOne({ email })
    const isAuthourized = password == user.password
    if (user) {
        if (isAuthourized) {
            res.status(201).send({
                id: user._id,
                name: user.name,
                email: user.email,
                dob: user.dob,
                gen: user.gen
            })
        } else {
            res.status(498).send({
                error: {
                    code: 498,
                    msg: "wrong password."
                }
            })
        }

    } else {
        res.status(400).send({
            error: {
                code: 498,
                msg: "This email does not associated with us."
            }
        })
    }

})



app.listen(5000, () => { console.log("express: 5000"); })