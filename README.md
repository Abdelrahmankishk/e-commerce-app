# 🛒 FreshCart – Angular E-Commerce App

FreshCart is a modern and responsive **E-Commerce web application** built with **Angular** and styled using **Tailwind CSS**.  
It integrates with the **[Route E-commerce API](https://documenter.getpostman.com/view/5709532/2s93JqTRWN)** to provide a full online shopping experience — from browsing products to secure checkout.

---

## ✨ Features

### 👤 Authentication & User Management

- Register a new account
- Login with email and password
- Forget & Reset password functionality
- Secure token handling with cookies (via **ngx-cookies**)

### 🛍️ Shopping Experience

- Browse products on **Home** and **Product Listing** pages
- View **detailed product information**
- Add items to **Cart** and manage them (update, remove, view total)
- Pagination support for product listing (**ngx-pagination**)
- Search functionality for products

### 💳 Checkout & Payments

- Checkout flow with shipping details
- Integrated with **Stripe Payment Gateway** (Test mode)
  - Test Card: `4242 4242 4242 4242`
  - Expiry: Any future date
  - CVC: Any 3 digits
  - Name: Any

### 🎨 UI & UX Enhancements

- **Tailwind CSS** for modern styling
- **Font Awesome** icons for better UI
- **Owl Carousel** for homepage banners/sliders
- **Toastr Notifications** for alerts & messages
- **Loading Spinner** for smooth responses (**ngx-spinner**)

---

## 🛠️ Tech Stack

- **Frontend Framework**: [Angular](https://angular.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Carousel**: [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o)
- **Pagination**: [ngx-pagination](https://www.npmjs.com/package/ngx-pagination)
- **Token Management**: [ngx-cookie-service](https://www.npmjs.com/package/ngx-cookie-service)
- **Notifications**: [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
- **Loading Spinner**: [ngx-spinner](https://www.npmjs.com/package/ngx-spinner)
- **API**: [Route E-commerce App](https://documenter.getpostman.com/view/5709532/2s93JqTRWN)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/FreshCart.git
cd FreshCart
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
ng serve
```

App will be available at: **http://localhost:4200/**

---

## 🔗 API Reference

FreshCart uses the **Route E-commerce API** for all backend functionality:  
👉 [API Documentation](https://documenter.getpostman.com/view/5709532/2s93JqTRWN)

---

## 🔮 Future Enhancements

Planned features to make FreshCart even better:

- **Categories Page** 🗂️

  - Display all available product categories.
  - When a user clicks on a category, show all products belonging to that category.

- **Brands Page** 🏷️
  - Display all available product brands.
  - When a user clicks on a brand, show all products from that brand.

---

## 👨‍💻 Author

Developed by **[Abdelrahman kishk]** ✨
