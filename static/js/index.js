
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fade In Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });



        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });

const products = [
    // 🎨 PAINTS (12 Colors)
    { type: 'paint', name: 'Arctic White', visual: '#FFFFFF', price: 45.99 },
    { type: 'paint', name: 'Midnight Black', visual: '#1a1a1a', price: 49.99 },
    { type: 'paint', name: 'Ocean Blue', visual: '#006994', price: 52.99 },
    { type: 'paint', name: 'Forest Green', visual: '#228B22', price: 48.99 },
    { type: 'paint', name: 'Sunset Orange', visual: '#FF6B35', price: 51.99 },
    { type: 'paint', name: 'Royal Purple', visual: '#6B3FA0', price: 54.99 },
    { type: 'paint', name: 'Cherry Red', visual: '#DC143C', price: 50.99 },
    { type: 'paint', name: 'Lemon Yellow', visual: '#FFF44F', price: 47.99 },
    { type: 'paint', name: 'Coral Pink', visual: '#FF7F7F', price: 49.99 },
    { type: 'paint', name: 'Sky Blue', visual: '#87CEEB', price: 46.99 },
    { type: 'paint', name: 'Charcoal Gray', visual: '#36454F', price: 50.99 },
    { type: 'paint', name: 'Terracotta', visual: '#E2725B', price: 49.99 },

    // 🏗️ BUILDING MATERIALS (12 Items)
    { type: 'material', name: 'Aluminum Ladder (6ft)', visual: '🪜', price: 89.99 },
    { type: 'material', name: 'Portland Cement (50lb)', visual: '🧱', price: 12.50 },
    { type: 'material', name: 'Steel Rebar (10ft)', visual: '🔩', price: 18.75 },
    { type: 'material', name: 'PVC Pipe Bundle', visual: '🔧', price: 34.99 },
    { type: 'material', name: 'Roofing Shingles (Pack)', visual: '🏠', price: 65.00 },
    { type: 'material', name: 'Drywall Sheet (4x8)', visual: '📦', price: 22.99 },
    { type: 'material', name: 'Paint Roller Set (5pk)', visual: '🎨', price: 15.99 },
    { type: 'material', name: 'Claw Hammer & Nail Kit', visual: '🔨', price: 28.50 },
    { type: 'material', name: 'OSHA Safety Helmet', visual: '⛑️', price: 32.00 },
    { type: 'material', name: 'Cordless Power Drill', visual: '🔋', price: 124.99 },
    { type: 'material', name: '25ft Measuring Tape', visual: '📏', price: 9.99 },
    { type: 'material', name: 'Heavy-Duty Wheelbarrow', visual: '🛒', price: 79.99 }
];

function renderProducts() {
    const container = document.getElementById('paintProducts');
    container.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.4s ease ${index * 0.05}s`;

        // Determine visual: color swatch for paint, emoji for materials
        const visualStyle = product.type === 'paint' 
            ? `background-color: ${product.visual}; border: ${product.visual === '#FFFFFF' ? '1px solid #e2e8f0' : 'none'}`
            : `background-color: #f8fafc;`;

        const visualContent = product.type === 'paint' ? '' : `<span style="font-size: 3.5rem;">${product.visual}</span>`;

        card.innerHTML = `
            <div class="product-visual" style="${visualStyle}">
                ${visualContent}
            </div>
            <div class="product-info">
                <span class="category-badge">${product.type === 'paint' ? 'Paint' : 'Material'}</span>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="buy-btn" onclick="handleBuyNow('${product.name.replace(/'/g, "\\'")}', ${product.price})">Buy Now</button>
            </div>
        `;

        container.appendChild(card);

        // Trigger fade-in animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    });
}

// Handle "Buy Now" Click
function handleBuyNow(productName, price) {
  
    window.location.href = `/payment/${price}`;
    
    // Option 2: Show a clean checkout toast (current behavior)
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; background: var(--primary); 
        color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999; font-weight: 500; animation: slideIn 0.3s ease;
    `;
    toast.textContent = `🛒 ${productName} added to checkout!`;
    document.body.appendChild(toast);
    
    // Inject slide animation if not exists
    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
        document.head.appendChild(style);
    }

    setTimeout(() => toast.remove(), 3000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', renderProducts);