# 🖼️ Image Gallery

A responsive image search gallery built with React, powered by the Unsplash API. Search for any keyword and instantly browse a beautiful masonry-style grid of high-quality photos with photographer credits.

🌐 **Live Demo:** [gallery.henriquesantos.dev](https://gallery.henriquesantos.dev)

---

## 📸 Preview

> Search for any keyword and browse a responsive grid of high-quality images. Each card shows the photo and credits the photographer by name.

---

## ✨ Features

- 🔍 Real-time image search powered by the **Unsplash API**
- 🗂️ Responsive masonry-style grid layout
- 📷 Photographer credit displayed on each image card
- ⚡ Fast and clean UI with a dark theme
- 🖼️ High-resolution images sourced directly from Unsplash

---

## 🛠️ Tech Stack

- **React 19**
- **JavaScript (ES6+)**
- **CSS3**
- **[Unsplash API](https://unsplash.com/developers)** — free high-quality photos
- **gh-pages** for deployment

---

## 🔑 API Setup

This project uses the [Unsplash API](https://unsplash.com/developers). To run it locally, you'll need a free API key.

1. Create an account at [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application to get your **Access Key**
3. Create a `.env` file at the root of the project:

```env
REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm
- Unsplash API key (see above)

### Installation

```bash
# Clone the repository
git clone https://github.com/Henr1queSantos/hs_gallery.git

# Navigate into the project
cd hs_gallery

# Install dependencies
npm install
```

### Running locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📁 Project Structure

```
hs_gallery/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Henrique Santos**

- Portfolio: [henriquesantos.dev](https://henriquesantos.dev)
- GitHub: [@Henr1queSantos](https://github.com/Henr1queSantos)
