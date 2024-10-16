const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;
        try {
            // Create a Payment Intent
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });
            // Send the client_secret back to the frontend
            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}