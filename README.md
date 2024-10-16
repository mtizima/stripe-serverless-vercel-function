# Stripe Serverless Function for Vercel

This is a simple serverless function for creating Payment Intents using Stripe on Vercel. It allows you to securely handle payments without the need for a full backend server.

## Prerequisites

- Node.js installed on your machine
- Stripe account ([Sign up here](https://stripe.com))
- Vercel account ([Sign up here](https://vercel.com))

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/stripe-serverless-function.git
    cd stripe-serverless-function
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure your environment variables:
    - Create a `.env` file in the root directory and add your Stripe Secret Key:
    ```bash
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Test the function locally:
    ```bash
    vercel dev
    ```

5. Deploy to Vercel:
    ```bash
    vercel
    ```

## Usage

Make a `POST` request to the serverless function endpoint with the required parameters:
- `amount` (integer): Amount to be charged in the smallest currency unit (e.g., cents for USD).
- `currency` (string): Currency code (e.g., `usd`).

### Example

```bash
curl -X POST https://your-vercel-domain/api/create-payment-intent \
-H "Content-Type: application/json" \
-d '{"amount": 1000, "currency": "usd"}'


### License
This project is licensed under the MIT License.