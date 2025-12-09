# Patel Clothes 🛍️

**Patel Clothes** is a React-based e-commerce frontend application for a clothing store.  
It supports browsing a shopping cart, entering delivery address details, choosing payment method, and placing orders — with form validation using Formik & Yup, and user-friendly notifications using React Toastify.

---

## 📦 Features

- Add / remove items in cart (via CartContext)  
- Checkout page with:  
  - Delivery address form (full name, phone number, address, city, pincode)  
  - Payment method selection (COD, UPI, Card)  
  - Order summary (subtotal, (free) delivery charge, total)  
- Form validation using Yup & Formik:  
  - Mandatory fields: full name, phone, house/ building, area, city, pincode  
  - Phone number → must be exactly 10 digits  
  - Pincode → must be exactly 6 digits  
  - Visual feedback on invalid fields (red border + error message)  
  - Auto-scroll and focus to the first invalid field on form submit  
- Toast notifications for success / errors (via React Toastify)  
- Responsive, clean UI using Tailwind CSS  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React     | Front-end UI library |
| React Router (v6) | Client-side routing |
| Context API (`CartContext`) | State management for shopping cart |
| Formik     | Form state management & handling |
| Yup        | Schema-based form validation |
| React Toastify | Notification / toast messages |
| Tailwind CSS | Styling & layout |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)  
- npm or yarn  

### Installation

```bash
git clone https://github.com/your-username/patel-clothes.git
cd patel-clothes
npm install
# or if using yarn:
# yarn install
