# 🛒 Amazon Clone

Welcome to my **Amazon Clone** project!  
This is a fullstack e-commerce app inspired by Amazon, built using:

- **React** (for the frontend)
- **Firebase** (for auth & database)
- **Express + Node.js** (for backend API)
- **Stripe** (for payment processing)
- **GitHub Pages** (to host frontend)
- **Render** (to host backend)

🔗 **Live Site:** [https://abenezer365.github.io/amazon-clone/](https://abenezer365.github.io/amazon-clone/)

---

## 🚀 Features

- ✅ Sign up / Sign in using Firebase Auth
- 🛒 Add to cart & manage cart items
- 💳 Real Stripe integration for payments
- 📦 Order confirmation
- 🔐 Secure backend using Express & Stripe
- 🌐 Deployed with GitHub Pages (frontend) + Render (backend)

---

## 🧠 Tech Stack Overview

### 🌐 Frontend – React
- Built with **React + Vite**
- Uses **React Router** for page navigation
- Communicates with backend using `fetch` to call API endpoints

### 🔥 Firebase
- **Firebase Auth** for user login/sign up
- **Firebase Firestore** to store orders

### 🖥️ Backend – Node + Express
- Created a backend with **Express.js**
- Endpoint `/payment/create` accepts `subtotal` and returns a **Stripe client secret**
- **CORS** enabled to allow communication with frontend

### 💳 Stripe
- Used **Stripe** to create secure payment intents
- Stripe key is stored in **.env** for safety
- Users can checkout using test cards provided by Stripe

---

## 🛠️ How It Works

### 1. User signs in using Firebase Auth  
→ Firebase handles secure login/signup

### 2. User adds products to cart  
→ Cart stored in React state

### 3. On checkout, React calls backend  
→ Backend endpoint:  
`POST /payment/create?subtotal=amount`

### 4. Backend uses Stripe API  
→ Creates a **PaymentIntent** and returns a `clientSecret`

### 5. React uses Stripe to complete payment  
→ Payment is processed and confirmed

---

## 🌍 Deployment

- **Frontend** deployed on **GitHub Pages**  
  → `vite.config.js` is configured for correct base path

- **Backend** deployed on **Render**  
  → `node index.js` is used as start command  
  → Environment variable `STRIPE_KEY` is added in Render dashboard  
  → Uses `process.env.PORT` for dynamic port on Render

---

## 📁 Test card

**Card:** 4242 4242 4242 4242  
**Exp:** Any future date  
**CVC:** Any 3 digits  
**Zip:** Any 5 digits
