const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const app = express()

const stripe = require('stripe')(process.env.STRIPE_KEY)

app.use(cors());

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'success'
    })
})
app.post('/payment/create',async(req,res) =>{
    try {
        const subtotal = Number(req.query.subtotal);

         if (isNaN(subtotal) || subtotal <= 0) {
            return res.status(400).json({
                error: "Invalid or missing subtotal. It must be a number greater than 0.",
            });
            }
        if(subtotal > 0){
           const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(subtotal),
            currency: "usd",
            });
        res.status(200).json({
            clientSecret : paymentIntent.client_secret
        })
        }else{
            res.status(403).json({
                error: 'Payment amount is lessthan 0, which is not valid!'
            })
        }
        
    } catch (err) {
        res.status(404).json({
            error : err 
        })
        console.log(err)
    }
})

exports.api = onRequest(app)