# ✨ Nora's Collection

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://sombre9.github.io/Nora-Collections-/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

> **Your Look is Our Pride** 💎

A modern, responsive e-commerce website for Nora's Collection - a premium fashion boutique offering curated selections of men's and women's clothing, shoes, handbags, and wigs. Built with performance and user experience in mind.

## 🌐 Live Demo

**[View Live Site →](https://sombre9.github.io/Nora-Collections-/)**

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Seamlessly adapts to all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, elegant interface with smooth animations
- **Custom Typography** - Premium font pairing (Playfair Display + Poppins)
- **Gradient Themes** - Soft purple/pink color palette for brand consistency

### 🛍️ E-Commerce Functionality
- **Product Catalog** - 14+ curated fashion products across multiple categories
- **Smart Filtering** - Category-based product filtering with URL parameter support
- **Lightbox Gallery** - Full-screen product preview with detailed information
- **WhatsApp Integration** - Direct ordering via pre-filled WhatsApp messages
- **Dynamic Product Loading** - Fast, efficient rendering with vanilla JavaScript

### 🚀 Performance
- **Optimized Images** - Efficient loading with fallback support
- **Smooth Animations** - CSS-powered transitions and scroll effects
- **Fast Load Times** - Minimal dependencies, lightweight codebase
- **SEO-Friendly** - Semantic HTML and proper meta tags

### 📱 User Experience
- **Mobile-First Approach** - Touch-friendly navigation and interactions
- **Sticky Navigation** - Easy access to menu on all pages
- **Keyboard Accessible** - Full keyboard navigation support (ESC to close modals)
- **Visual Feedback** - Hover states and interactive elements throughout

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Design & Typography
- **Google Fonts** - Playfair Display (serif) & Poppins (sans-serif)
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Custom Animations** - CSS keyframes for fade-in and transitions

### Integration & Tools
- **WhatsApp API** - Direct messaging integration for orders
- **GitHub Pages** - Static site hosting and deployment
- **Git** - Version control and collaboration

## 📂 Project Structure

```
Nora-Collections-/
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products catalog page
├── contact.html            # Contact page
├── script.js               # Main JavaScript (navigation, utilities)
                # About page specific scripts
├── products.js             # Products page logic & lightbox
├── images/                 # Product images directory
│   ├── classic-bag.jpg
│   ├── classic-bag-2.jpg
│   ├── classic-shoe.jpg
│   ├── female-handbag.jpg
│   ├── Female-handbag-1.jpg
│   ├── female-handbag-2.jpg
│   ├── female-shoe.jpg
│   ├── female-wear.jpg
│   ├── male-classic-shirt.jpg
│   ├── male-shoe.jpg
│   ├── male-shoe-1.jpg
│   ├── male-shoe-2.jpg
│   ├── snickers.jpg
│   └── wig.jpg
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sombre9/Nora-Collections-.git
   cd Nora-Collections-
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # OR use a local server (recommended)
   python -m http.server 8000
   # OR
   npx serve
   ```

3. **Visit the site**
   ```
   http://localhost:8000
   ```

### Deployment
The site is deployed on GitHub Pages. To deploy your own version:

1. Fork this repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be live at `https://yourusername.github.io/Nora-Collections-/`

## 💻 Development

### Adding New Products

Edit `products.js` and add to the `products` array:

```javascript
{
    id: 15,
    name: "Product Name",
    category: "handbags", // or mens-wear, womens-wear, mens-shoes, womens-shoes, wigs
    image: "images/your-image.jpg",
    description: "Product description here"
}
```

### Customizing Colors

The site uses Tailwind CSS. Main colors can be customized in the HTML files:
- Primary: `purple-600` to `pink-600` gradient
- Accent: `purple-100` to `purple-200`
- Neutral: `gray-50` to `gray-900`

### Modifying Contact Information

Update WhatsApp number, email, and Facebook in:
- Footer sections (all HTML files)
- `products.js` (WhatsApp integration)
- Floating WhatsApp button links

## 📱 Pages Overview

### 🏠 Home (`index.html`)
- Hero section with brand tagline
- Featured products grid
- Category navigation cards
- Call-to-action buttons

### 💫 About (`about.html`)
- Brand story and mission
- Core values showcase
- "Why Choose Us" section
- Customer-focused messaging

### 🛍️ Products (`products.html`)
- Full product catalog
- Category filtering
- Interactive lightbox previews
- Direct WhatsApp ordering

### 📞 Contact (`contact.html`)
- Contact information
- Social media links
- Multiple communication channels

## 🎯 Key Features Explained

### Product Filtering
Products can be filtered by category with smooth transitions. URL parameters allow direct category links:
```
products.html?category=handbags
products.html?category=mens-shoes
```

### Lightbox Modal
Click "View Details" on any product to open a full-screen modal with:
- Large product image
- Complete description
- Category badge
- Order Now button (WhatsApp)
- Continue Shopping option

### WhatsApp Integration
Every product has a pre-filled WhatsApp message:
```javascript
"Hi, I'm interested in [Product Name] from Nora's Collection. 
Can you provide more details?"
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sombre9 Tech Ltd**

- GitHub: [@Sombre9](https://github.com/Sombre9)
- Project Link: [https://github.com/Sombre9/Nora-Collections-](https://github.com/Sombre9/Nora-Collections-)
- Live Demo: [https://sombre9.github.io/Nora-Collections-/](https://sombre9.github.io/Nora-Collections-/)

## 🙏 Acknowledgments

- **Nora Emekwe** - Brand owner and inspiration
- **Google Fonts** - Playfair Display & Poppins typography
- **Tailwind CSS** - Utility-first CSS framework
- **Unsplash** - Fallback product images

## 📞 Contact

For business inquiries or support:

- **WhatsApp**: [09166763856](https://wa.me/2349166763856)
- **Email**: sombre9techltd@yahoo.com
- **Facebook**: [Ernest O Jephthah](https://facebook.com/ernest.o.jephthah)

---

<div align="center">

**Made with 💜 by Sombre9 Tech Ltd**

⭐ Star this repo if you like it! ⭐

</div>
