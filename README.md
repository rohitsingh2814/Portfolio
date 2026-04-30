
# 🚀 Portfolio Website

A modern and responsive **personal portfolio website** built using **React + Vite + Tailwind CSS**.
This portfolio showcases my projects, skills, and experience with a clean UI, fast performance, and smooth user interactions.

---

## 🌐 Live Demo

```
https://rohitsingh7667.netlify.app/
```

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 📧 EmailJS (for contact form)
* 🧩 Component-based architecture

---

## ✨ Features

* Fully responsive design 📱💻
* Fast loading (Vite optimized) ⚡
* Clean and modern UI 🎨
* Smooth hover & interaction effects
* Contact form with EmailJS integration 📩
* Easy customization for projects & profile

---

## 📁 Project Structure

```
portfolio/
│── public/           # Static assets (images, icons)
│── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Main sections
│   ├── assets/       # Images, icons (optional)
│   └── App.jsx
│── .env              # Environment variables
│── package.json
│── vite.config.js
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rohitsingh2814/portfolio.git
cd portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

👉 Open in browser:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Output folder:

```
dist/
```

---

## 📧 EmailJS Setup (Contact Form)

1. Go to 👉 [https://www.emailjs.com](https://www.emailjs.com)

2. Create:

   * Service ID
   * Template ID
   * Public Key

3. Create a `.env` file in root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart server after adding `.env`

⚠️ Important:

* Never upload `.env` to GitHub
* Add `.env` to `.gitignore`

---

## 🖼️ Public Folder Usage

Place all images inside:

```
public/
```

Example:

```
public/projects/project1.png
```

Use in code:

```jsx
<img src="/projects/project1.png" />
```

---

## 🔗 Customization Guide

### 👤 Update Profile Info

Edit your details inside:

```
src/constants / src/data / components
```

Change:

* Name
* About section
* Skills
* Social links

---

### 🔗 Update Social Links

Example:

```js
{
  github: "https://github.com/yourusernam",
  linkedin: "https://linkedin.com/in/yourusername"
}
```

---

### 📂 Update Projects

Inside your projects array:

```js
const projects = [
  {
    title: "Project Name",
    description: "Short description",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind"],
    link: "https://live-link.com",
    github: "https://github.com/yourrepo"
  }
];
```

---

## 🚀 Deployment

### Netlify (Recommended)

* Build Command:

```
npm run build
```

* Publish Directory:

```
dist
```

---

### Vercel

* Framework: Vite
* Auto-detect settings

---

## 📌 Future Improvements

* Dark/Light mode toggle 🌙
* Animations (Framer Motion)
* Blog section
* Backend integration

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork and improve.

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🙌 Acknowledgements

* React Docs
* Tailwind CSS
* EmailJS

---

## 👨‍💻 Author

**Rohit Singh**

* GitHub: [https://github.com/yourusername](https://github.com/rohitsingh2814)
* LinkedIn: [https://linkedin.com/in/yourusername](https://www.linkedin.com/in/rohit-singh-3527aa270/)
