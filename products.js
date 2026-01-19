// Products Data with actual image filenames
const products = [
    {
        id: 1,
        name: "Classic Handbag",
        category: "handbags",
        image: "images/classic-bag.jpg",
        description: "Elegant classic handbag perfect for any occasion. Premium quality leather with spacious interior."
    },
    {
        id: 2,
        name: "Classic Handbag Set",
        category: "handbags",
        image: "images/classic-bag-2.jpg",
        description: "Stylish handbag set with matching accessories. Perfect for the fashion-forward woman."
    },
    {
        id: 3,
        name: "Classic Heels",
        category: "womens-shoes",
        image: "images/classic-shoe.jpg",
        description: "Sophisticated heels to elevate your style. Comfortable and elegant for any event."
    },
    {
        id: 4,
        name: "Female Handbag",
        category: "handbags",
        image: "images/female-handbag.jpg",
        description: "Chic and modern handbag designed for everyday elegance and functionality."
    },
    {
        id: 5,
        name: "Designer Handbag",
        category: "handbags",
        image: "images/Female-handbag-1.jpg",
        description: "Premium designer handbag with exquisite detailing and craftsmanship."
    },
    {
        id: 6,
        name: "Luxury Handbag",
        category: "handbags",
        image: "images/female-handbag-2.jpg",
        description: "Luxurious handbag that combines style with practicality. A must-have accessory."
    },
    {
        id: 7,
        name: "Women's Shoes",
        category: "womens-shoes",
        image: "images/female-shoe.jpg",
        description: "Comfortable and stylish shoes perfect for daily wear and special occasions."
    },
    {
        id: 8,
        name: "Female Wear",
        category: "womens-wear",
        image: "images/female-wear.jpg",
        description: "Beautiful and trendy outfit that showcases elegance and modern fashion."
    },
    {
        id: 9,
        name: "Men's Classic Shirt",
        category: "mens-wear",
        image: "images/male-classic-shirt.jpg",
        description: "Premium quality shirt for the modern gentleman. Perfect fit and elegant design."
    },
    {
        id: 10,
        name: "Men's Shoes",
        category: "mens-shoes",
        image: "images/male-shoe.jpg",
        description: "Classic men's shoes combining comfort with sophisticated style."
    },
    {
        id: 11,
        name: "Designer Men's Shoes",
        category: "mens-shoes",
        image: "images/male-shoe-1.jpg",
        description: "Premium designer shoes for the distinguished gentleman. Quality craftsmanship."
    },
    {
        id: 12,
        name: "Casual Men's Shoes",
        category: "mens-shoes",
        image: "images/male-shoe-2.jpg",
        description: "Comfortable casual shoes perfect for everyday wear with style."
    },
    {
        id: 13,
        name: "Sneakers",
        category: "mens-shoes",
        image: "images/snickers.jpg",
        description: "Trendy sneakers that combine comfort with modern athletic style."
    },
    {
        id: 14,
        name: "Premium Wig",
        category: "wigs",
        image: "images/wig.jpg",
        description: "Natural-looking premium quality wig. Perfect styling and comfortable fit."
    }
];

// Categories for filtering
const categories = [
    { id: "all", name: "All Products", emoji: "🛍️" },
    { id: "mens-wear", name: "Men's Wear", emoji: "👔" },
    { id: "womens-wear", name: "Women's Wear", emoji: "👗" },
    { id: "mens-shoes", name: "Men's Shoes", emoji: "👞" },
    { id: "womens-shoes", name: "Women's Shoes", emoji: "👠" },
    { id: "handbags", name: "Handbags", emoji: "👜" },
    { id: "wigs", name: "Wigs", emoji: "💇‍♀️" }
];

// Current active filter
let activeFilter = "all";

// Load Filter Buttons
function loadFilterButtons() {
    const filterContainer = document.getElementById('filter-buttons');
    
    if (!filterContainer) {
        console.warn('Filter buttons container not found');
        return;
    }

    try {
        filterContainer.innerHTML = '';

        categories.forEach(function(category) {
            const button = document.createElement('button');
            button.className = `filter-btn px-6 py-3 rounded-full font-semibold ${category.id === 'all' ? 'active' : 'bg-white text-gray-700 hover:bg-purple-100'}`;
            button.setAttribute('data-category', category.id);
            button.innerHTML = `${category.emoji} ${category.name}`;
            
            button.addEventListener('click', function() {
                filterProducts(category.id);
            });
            
            filterContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Error loading filter buttons:', error);
    }
}

// Filter Products
function filterProducts(categoryId) {
    try {
        activeFilter = categoryId;
        
        // Update active button
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (filterButtons) {
            filterButtons.forEach(function(btn) {
                const btnCategory = btn.getAttribute('data-category');
                if (btnCategory === categoryId) {
                    btn.className = 'filter-btn px-6 py-3 rounded-full font-semibold active';
                } else {
                    btn.className = 'filter-btn px-6 py-3 rounded-full font-semibold bg-white text-gray-700 hover:bg-purple-100';
                }
            });
        }
        
        // Filter and display products
        loadProducts(categoryId);
    } catch (error) {
        console.error('Error filtering products:', error);
    }
}

// Load Products
function loadProducts(filterCategory) {
    const productsGrid = document.getElementById('products-grid');
    const noProducts = document.getElementById('no-products');
    const productsCount = document.getElementById('products-count');
    
    if (!productsGrid) {
        console.warn('Products grid not found');
        return;
    }

    try {
        productsGrid.innerHTML = '';
        
        // Filter products based on category
        const filteredProducts = filterCategory === 'all' 
            ? products 
            : products.filter(function(product) {
                return product.category === filterCategory;
            });

        // Update count
        if (productsCount) {
            productsCount.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
        }

        // Show/hide no products message
        if (filteredProducts.length === 0) {
            if (productsGrid) productsGrid.classList.add('hidden');
            if (noProducts) noProducts.classList.remove('hidden');
            return;
        } else {
            if (productsGrid) productsGrid.classList.remove('hidden');
            if (noProducts) noProducts.classList.add('hidden');
        }

        // Create product cards
        filteredProducts.forEach(function(product, index) {
            const productCard = document.createElement('div');
            productCard.className = `product-card bg-white rounded-2xl overflow-hidden shadow-lg fade-in delay-${Math.min(index, 3) * 100}`;
            
            productCard.innerHTML = `
                <div class="relative overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop'">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description}</p>
                    <button class="view-details-btn btn-hover bg-purple-600 text-white px-6 py-3 rounded-full font-semibold w-full mb-3" data-product-id="${product.id}">
                        👁️ View Details
                    </button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
            
            // Add click event to the view details button
            const viewBtn = productCard.querySelector('.view-details-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-product-id'));
                    openLightbox(productId);
                });
            }
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Get Category Name
function getCategoryName(categoryId) {
    try {
        const category = categories.find(function(cat) {
            return cat.id === categoryId;
        });
        return category ? `${category.emoji} ${category.name}` : categoryId;
    } catch (error) {
        console.error('Error getting category name:', error);
        return categoryId;
    }
}

// Open Lightbox - GLOBAL FUNCTION
window.openLightbox = function(productId) {
    const lightbox = document.getElementById('lightbox');
    const lightboxBody = document.getElementById('lightbox-body');
    
    if (!lightbox || !lightboxBody) {
        console.warn('Lightbox elements not found');
        return;
    }

    try {
        const product = products.find(function(p) {
            return p.id === productId;
        });

        if (!product) {
            console.warn('Product not found');
            return;
        }

        const whatsappMessage = `Hi, I'm interested in ${product.name} from Nora's Collection. Can you provide more details?`;
        const whatsappLink = `https://wa.me/2349052854540?text=${encodeURIComponent(whatsappMessage)}`;

        lightboxBody.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div class="bg-gray-100">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop'">
                </div>
                <div class="p-8 md:p-12">
                    <div class="mb-4">
                        <span class="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            ${getCategoryName(product.category)}
                        </span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">${product.name}</h2>
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                        <p class="text-gray-700 leading-relaxed">${product.description}</p>
                    </div>
                    <div class="space-y-4">
                        <a href="${whatsappLink}" target="_blank" class="btn-hover bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block w-full text-center">
                            🛒 Order Now via WhatsApp
                        </a>
                        <button onclick="closeLightbox()" class="w-full bg-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        `;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error opening lightbox:', error);
    }
};

// Close Lightbox - GLOBAL FUNCTION
window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) return;

    try {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    } catch (error) {
        console.error('Error closing lightbox:', error);
    }
};

// Setup Lightbox Close Button
function setupLightboxClose() {
    const lightboxCloseBtn = document.getElementById('lightbox-close');
    const lightbox = document.getElementById('lightbox');
    
    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', function() {
            window.closeLightbox();
        });
    }
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                window.closeLightbox();
            }
        });
    }
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.closeLightbox();
        }
    });
}

// Check URL for category filter
function checkUrlParams() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category && categories.some(function(cat) { return cat.id === category; })) {
            filterProducts(category);
        } else {
            loadProducts('all');
        }
    } catch (error) {
        console.error('Error checking URL params:', error);
        loadProducts('all');
    }
}

// Remove sticky positioning from filter section - make it scroll with page
function removeFilterSticky() {
    try {
        const filterSection = document.querySelector('.sticky.top-20');
        if (filterSection) {
            filterSection.classList.remove('sticky', 'top-20', 'z-40');
            filterSection.classList.add('relative');
        }
    } catch (error) {
        console.error('Error removing filter sticky:', error);
    }
}

// Initialize Products Page
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadFilterButtons();
        checkUrlParams();
        setupLightboxClose();
        removeFilterSticky();
    } catch (error) {
        console.error('Error initializing products page:', error);
    }
});


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