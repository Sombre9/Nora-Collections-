// Mobile Menu Toggle with smooth dropdown
(function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                mobileMenu.classList.add('active');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }
})();

// Categories Data with Emojis
const categories = [
    { 
        name: "Men's Wear", 
        emoji: "👔", 
        link: "products.html?category=mens-wear",
        color: "from-blue-100 to-blue-200"
    },
    { 
        name: "Women's Wear", 
        emoji: "👗", 
        link: "products.html?category=womens-wear",
        color: "from-pink-100 to-pink-200"
    },
    { 
        name: "Men's Shoes", 
        emoji: "👞", 
        link: "products.html?category=mens-shoes",
        color: "from-indigo-100 to-indigo-200"
    },
    { 
        name: "Women's Shoes", 
        emoji: "👠", 
        link: "products.html?category=womens-shoes",
        color: "from-purple-100 to-purple-200"
    },
    { 
        name: "Handbags", 
        emoji: "👜", 
        link: "products.html?category=handbags",
        color: "from-rose-100 to-rose-200"
    },
    { 
        name: "Wigs", 
        emoji: "💇‍♀️", 
        link: "products.html?category=wigs",
        color: "from-violet-100 to-violet-200"
    }
];

// Featured Products Data (using placeholder images for now)
const featuredProducts = [
    { 
        name: "Classic Handbag", 
        category: "Handbags", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
        description: "Elegant leather handbag perfect for any occasion"
    },
    { 
        name: "Men's Classic Shirt", 
        category: "Men's Wear", 
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
        description: "Premium quality shirt for the modern gentleman"
    },
    { 
        name: "Women's Heels", 
        category: "Women's Shoes", 
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
        description: "Sophisticated heels to elevate your style"
    },
    { 
        name: "Premium nails", 
        category: "nails", 
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&h=500&fit=crop",
        description: "Natural-looking premium quality nails"
    }
];

// Load Categories Function
function loadCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = '';

    categories.forEach(function(category, index) {
        const categoryCard = document.createElement('a');
        categoryCard.href = category.link;
        categoryCard.className = `category-card bg-gradient-to-br ${category.color} p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl fade-in delay-${(index + 1) * 100}`;
        categoryCard.innerHTML = `
            <div class="text-6xl mb-4 emoji-float">${category.emoji}</div>
            <h4 class="text-xl font-semibold text-gray-900">${category.name}</h4>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}

// Load Featured Products Function
function loadFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featured-products');
    
    if (!featuredProductsGrid) return;

    featuredProductsGrid.innerHTML = '';

    featuredProducts.forEach(function(product, index) {
        const productCard = document.createElement('div');
        productCard.className = `product-card bg-white rounded-2xl overflow-hidden shadow-xl fade-in delay-${(index + 1) * 100}`;
        
        const whatsappMessage = `Hi, I'm interested in ${product.name} from Nora's Collection. Can you provide more details?`;
        const whatsappLink = `https://wa.me/2349052854540?text=${encodeURIComponent(whatsappMessage)}`;
        
        productCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-6">
                <p class="text-sm text-purple-600 font-semibold mb-2">${product.category}</p>
                <h4 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h4>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <a href="${whatsappLink}" 
                   target="_blank"
                   class="btn-hover bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold inline-block w-full text-center">
                    🛒 Order Now
                </a>
            </div>
        `;
        featuredProductsGrid.appendChild(productCard);
    });
}

// Intersection Observer for Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
        observer.observe(element);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadCategories();
        loadFeaturedProducts();
        setupScrollAnimations();
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
})




// Our Values Data
const values = [
    {
        icon: "💯",
        title: "Authenticity",
        description: "Every item is genuine and carefully sourced. We never compromise on quality, ensuring you get exactly what you see.",
        color: "from-purple-100 to-purple-200"
    },
    {
        icon: "🎯",
        title: "Customer Focus",
        description: "You're not just a customer—you're part of our family. Your satisfaction and style journey matter to us deeply.",
        color: "from-pink-100 to-pink-200"
    },
    {
        icon: "✨",
        title: "Style Innovation",
        description: "We stay ahead of trends while respecting timeless classics, bringing you the perfect blend of modern and elegant.",
        color: "from-violet-100 to-violet-200"
    }
];

// Load Values Function - ONLY FOR ABOUT PAGE
function loadValues() {
    const valuesGrid = document.getElementById('values-grid');
    
    if (!valuesGrid) {
        return;
    }

    try {
        valuesGrid.innerHTML = '';

        values.forEach(function(value, index) {
            const valueCard = document.createElement('div');
            valueCard.className = `value-card bg-gradient-to-br ${value.color} p-8 rounded-2xl shadow-lg fade-in delay-${(index + 2) * 100}`;
            valueCard.innerHTML = `
                <div class="text-6xl mb-6 text-center">${value.icon}</div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">${value.title}</h3>
                <p class="text-gray-700 text-center leading-relaxed">${value.description}</p>
            `;
            valuesGrid.appendChild(valueCard);
        });
    } catch (error) {
        console.error('Error loading values:', error);
    }
}

// Initialize About Page specific content
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadValues();
    } catch (error) {
        console.error('Error initializing about page:', error);
    }
});