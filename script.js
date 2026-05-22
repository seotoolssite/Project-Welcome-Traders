/**
 * ============================================
 * WELCOME TRADERS - MAIN JAVASCRIPT FILE
 * Author: Muhammad Nabeel Khan
 * Description: Complete functionality for auto parts store
 * Version: 1.0 (Refactored)
 * ============================================
 */

// ==================== DATA ====================

// Vehicle compatibility data
const vehicleData = {
    "Toyota": {
        "2018": ["Corolla", "Yaris", "Camry", "Fortuner"],
        "2019": ["Corolla", "Yaris", "Camry", "Fortuner", "Hilux"],
        "2020": ["Corolla", "Yaris", "Camry", "Fortuner", "Hilux", "Prado"],
        "2021": ["Corolla", "Yaris", "Camry", "Fortuner", "Hilux", "Prado", "Revo"],
        "2022": ["Corolla", "Yaris", "Camry", "Fortuner", "Hilux", "Prado", "Revo"],
        "2023": ["Corolla Cross", "Yaris", "Camry", "Fortuner", "Hilux", "Revo", "Land Cruiser"],
        "2024": ["Corolla Cross", "Yaris", "Camry", "Fortuner", "Hilux", "Land Cruiser"],
        "2025": ["Corolla Cross", "Camry", "Fortuner", "Hilux", "Land Cruiser"],
        "2026": ["Corolla Cross", "Camry", "Fortuner", "Land Cruiser"]
    },
    "Honda": {
        "2018": ["Civic", "City", "BR-V"],
        "2019": ["Civic", "City", "BR-V", "Accord"],
        "2020": ["Civic", "City", "BR-V", "Accord", "CR-V"],
        "2021": ["Civic", "City", "Accord", "CR-V", "HR-V"],
        "2022": ["Civic", "City", "Accord", "CR-V", "HR-V"],
        "2023": ["Civic", "City", "HR-V", "CR-V", "Pilot"],
        "2024": ["Civic", "City", "HR-V", "CR-V"],
        "2025": ["Civic", "City", "HR-V", "CR-V"],
        "2026": ["Civic", "City", "HR-V", "CR-V"]
    },
    "Suzuki": {
        "2018": ["Swift", "Cultus", "Wagon R"],
        "2019": ["Swift", "Cultus", "Wagon R", "Jimny"],
        "2020": ["Swift", "Cultus", "Wagon R", "Jimny", "Alto"],
        "2021": ["Swift", "Cultus", "Wagon R", "Jimny", "Alto"],
        "2022": ["Swift", "Cultus", "Wagon R", "Jimny", "Alto", "Every"],
        "2023": ["Swift", "Cultus", "Wagon R", "Jimny", "Alto"],
        "2024": ["Swift", "Cultus", "Wagon R", "Jimny"],
        "2025": ["Swift", "Cultus", "Jimny"],
        "2026": ["Swift", "Cultus", "Jimny"]
    },
    "Hyundai": {
        "2018": ["Elantra", "Tucson", "Santa Fe"],
        "2019": ["Elantra", "Tucson", "Santa Fe", "Sonata"],
        "2020": ["Elantra", "Tucson", "Santa Fe", "Sonata", "Accent"],
        "2021": ["Elantra", "Tucson", "Santa Fe", "Sonata", "Accent"],
        "2022": ["Elantra", "Tucson", "Santa Fe", "Sonata", "Accent", "Kona"],
        "2023": ["Elantra", "Tucson", "Santa Fe", "Kona", "Palisade"],
        "2024": ["Elantra", "Tucson", "Santa Fe", "Kona", "Palisade"],
        "2025": ["Elantra", "Tucson", "Santa Fe", "Kona"],
        "2026": ["Elantra", "Tucson", "Kona"]
    },
    "Kia": {
        "2018": ["Sportage", "Picanto", "Sorento"],
        "2019": ["Sportage", "Picanto", "Sorento", "Stonic"],
        "2020": ["Sportage", "Picanto", "Sorento", "Stonic", "Carnival"],
        "2021": ["Sportage", "Picanto", "Sorento", "Stonic", "Carnival"],
        "2022": ["Sportage", "Picanto", "Sorento", "Stonic", "Carnival", "K5"],
        "2023": ["Sportage", "Picanto", "Sorento", "Stonic", "K5"],
        "2024": ["Sportage", "Picanto", "Sorento", "K5", "EV6"],
        "2025": ["Sportage", "Picanto", "Sorento", "EV6"],
        "2026": ["Sportage", "Picanto", "Sorento", "EV6"]
    },
    "Nissan": {
        "2018": ["Sunny", "X-Trail", "Altima"],
        "2019": ["Sunny", "X-Trail", "Altima", "Patrol"],
        "2020": ["Sunny", "X-Trail", "Altima", "Patrol", "Juke"],
        "2021": ["Sunny", "X-Trail", "Altima", "Patrol", "Juke"],
        "2022": ["Sunny", "X-Trail", "Altima", "Patrol", "Juke", "Kicks"],
        "2023": ["Sunny", "X-Trail", "Altima", "Patrol", "Kicks"],
        "2024": ["Sunny", "X-Trail", "Patrol", "Kicks"],
        "2025": ["Sunny", "X-Trail", "Patrol"],
        "2026": ["Sunny", "X-Trail"]
    },
    "BMW": {
        "2018": ["3 Series", "5 Series", "X3"],
        "2019": ["3 Series", "5 Series", "X3", "X5"],
        "2020": ["3 Series", "5 Series", "X3", "X5", "7 Series"],
        "2021": ["3 Series", "5 Series", "X3", "X5", "7 Series"],
        "2022": ["3 Series", "5 Series", "X3", "X5", "7 Series", "X7"],
        "2023": ["3 Series", "5 Series", "X3", "X5", "X7"],
        "2024": ["3 Series", "5 Series", "X3", "X5", "X7", "i4"],
        "2025": ["3 Series", "5 Series", "X5", "X7", "i4"],
        "2026": ["3 Series", "5 Series", "X5", "i4"]
    },
    "Audi": {
        "2018": ["A4", "A6", "Q5"],
        "2019": ["A4", "A6", "Q5", "Q7"],
        "2020": ["A4", "A6", "Q5", "Q7", "A3"],
        "2021": ["A4", "A6", "Q5", "Q7", "A3", "e-tron"],
        "2022": ["A4", "A6", "Q5", "Q7", "A3", "e-tron"],
        "2023": ["A4", "A6", "Q5", "Q7", "e-tron"],
        "2024": ["A4", "A6", "Q5", "Q7", "e-tron", "RS7"],
        "2025": ["A4", "A6", "Q5", "e-tron"],
        "2026": ["A4", "A6", "Q5", "e-tron"]
    },
    "Ford": {
        "2018": ["Mustang", "F-150", "Explorer"],
        "2019": ["Mustang", "F-150", "Explorer", "Focus"],
        "2020": ["Mustang", "F-150", "Explorer", "Focus", "Ranger"],
        "2021": ["Mustang", "F-150", "Explorer", "Ranger", "Bronco"],
        "2022": ["Mustang", "F-150", "Explorer", "Ranger", "Bronco", "Maverick"],
        "2023": ["Mustang", "F-150", "Explorer", "Ranger", "Bronco", "Maverick"],
        "2024": ["Mustang", "F-150", "Ranger", "Bronco", "Maverick"],
        "2025": ["Mustang", "F-150", "Ranger", "Bronco"],
        "2026": ["Mustang", "F-150", "Ranger"]
    }
};

// Constants
const makesList = Object.keys(vehicleData);
const yearsList = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];

// Categories data
const categoriesData = {
    "Engine Parts": ["Engine Oil Filter", "Air Filter Element", "Spark Plug Set", "Timing Belt Kit", "Fuel Injector", "Alternator Assembly", "Starter Motor", "Radiator Coolant"],
    "Brake System": ["Front Brake Pads", "Rear Brake Shoes", "Brake Disc Rotor", "Brake Caliper", "Brake Master Cylinder", "Brake Fluid DOT4", "ABS Sensor", "Parking Brake Cable"],
    "Suspension System": ["Shock Absorber Set", "Coil Spring", "Control Arm", "Ball Joint Kit", "Stabilizer Link", "Strut Mount", "Suspension Bushing Kit", "Tie Rod End"],
    "Transmission Parts": ["Clutch Kit", "Clutch Plate", "Transmission Oil", "CV Joint Kit", "Drive Shaft", "Gearbox Mount", "Transmission Filter", "Flywheel"],
    "Tires & Wheels": ["All-Season Radial Tire", "Alloy Wheel Rim", "Tire Pressure Sensor", "Wheel Hub Assembly", "Tire Repair Kit", "Wheel Spacers", "Hubcap Set", "Valve Stem Kit"],
    "Oil & Lubricants": ["5W30 Engine Oil", "10W40 Diesel Oil", "Automatic Transmission Fluid", "Brake Fluid DOT4", "Power Steering Fluid", "Coolant Antifreeze", "Gear Oil 80W90", "Grease Cartridge"],
    "Filters": ["Engine Oil Filter", "Cabin AC Filter", "Fuel Filter", "Air Intake Filter", "Transmission Filter", "Oil Filter Wrench", "Filter Housing", "Hydraulic Filter"],
    "Batteries": ["Maintenance Free Battery 60Ah", "AGM Start-Stop Battery", "Deep Cycle Battery", "Battery Terminal Kit", "Battery Charger", "Jump Starter Cable", "Battery Tester", "Solar Battery"],
    "Electrical & Lighting": ["LED Headlight Bulb", "Fog Light Assembly", "Tail Light LED", "Turn Signal Light", "Wiper Blade Set", "Fuse Box Kit", "Relay Switch", "Ignition Coil"],
    "Accessories": ["Car Floor Mat Set", "Seat Cover", "Steering Wheel Cover", "Phone Mount Holder", "Car Vacuum Cleaner", "Dashboard Camera", "USB Charger", "Car Perfume"],
    "Body Parts": ["Front Bumper Cover", "Rear Bumper", "Side Mirror Assembly", "Headlight Assembly", "Taillight Assembly", "Grille Mesh", "Door Handle", "Windshield Wiper"],
    "Cooling System": ["Radiator Assembly", "Water Pump", "Coolant Reservoir", "Radiator Fan", "Thermostat Housing", "Cooling Hose Kit", "Heater Core", "Radiator Cap"]
};

const brands = ["Bosch", "Brembo", "Denso", "Valeo", "Mann Filter", "Mobil 1", "Castrol", "Bilstein", "TRW", "NGK", "Febi", "ZF", "Mahle", "Hella", "Osram"];
const badgeTypes = ["In Stock", "Limited Stock", "Fast Moving", "OEM Quality", "Best Seller", "New Arrival"];

// Product images mapping
const productImages = {
    "Engine Parts": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400",
    "Brake System": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
    "Suspension System": "https://images.unsplash.com/photo-1552519507-88f166587b36?w=400",
    "Transmission Parts": "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=400",
    "Tires & Wheels": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
    "Oil & Lubricants": "https://images.unsplash.com/photo-1632684087163-7f2f8f4ae1ab?w=400",
    "Filters": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400",
    "Batteries": "https://images.unsplash.com/photo-1611250282008-d4193b1e4c6c?w=400",
    "Electrical & Lighting": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400",
    "Accessories": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
    "Body Parts": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
    "Cooling System": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400"
};

// Owner contact
const OWNER_PHONE = "923184200767";

// ==================== GLOBAL VARIABLES ====================
let products = [];
let productId = 1;
let cart = [];
let garageVehicles = [];
let lastCompatibleResults = null;
let lastCompatibleFilter = null;

// ==================== HELPER FUNCTIONS ====================

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

/**
 * Show toast notification
 */
function showToast(msg, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = isError ? '#E63946' : '#2A9D8F';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

/**
 * WhatsApp direct message
 */
function whatsappDirect(phone, message) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) return false;
    try {
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
        const newWindow = window.open(waUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            window.location.href = waUrl;
        }
        return true;
    } catch (e) {
        console.error('WhatsApp failed:', e);
        showToast(`Unable to open WhatsApp. Please contact us directly at +92 ${OWNER_PHONE.substring(2)}`, true);
        return false;
    }
}

/**
 * Get badge class based on badge type
 */
function getBadgeClass(badge) {
    const badgeMap = {
        "In Stock": "badge-stock",
        "Limited Stock": "badge-limited",
        "Fast Moving": "badge-fast",
        "OEM Quality": "badge-oem",
        "Best Seller": "badge-seller",
        "New Arrival": "badge-new"
    };
    return badgeMap[badge] || "badge-stock";
}

// ==================== PRODUCT GENERATION ====================

/**
 * Generate realistic product data
 */
function generateProducts() {
    makesList.forEach(make => {
        yearsList.forEach(year => {
            const models = vehicleData[make][year] || [];
            models.forEach(model => {
                Object.keys(categoriesData).forEach(category => {
                    const productNames = categoriesData[category];
                    const numProducts = Math.min(4, productNames.length);
                    for (let i = 0; i < numProducts; i++) {
                        const randomName = productNames[i % productNames.length];
                        const brand = brands[Math.floor(Math.random() * brands.length)];
                        const basePrice = Math.floor(Math.random() * 15000) + 800;
                        const discount = Math.random() > 0.7 ? Math.floor(Math.random() * 20) + 5 : 0;
                        const stock = Math.random() > 0.2 ? "In Stock" : "Limited Stock";
                        const badge = badgeTypes[Math.floor(Math.random() * badgeTypes.length)];
                        
                        products.push({
                            id: productId++,
                            name: `${brand} ${randomName} for ${make} ${model} ${year}`,
                            sku: `${make.substring(0, 2).toUpperCase()}-${year}-${category.substring(0, 2)}-${productId}`,
                            brand: brand,
                            price: basePrice,
                            discount: discount,
                            stock: stock,
                            badge: badge,
                            category: category,
                            compatible: { make: make, model: model, year: year },
                            image: productImages[category] || productImages["Engine Parts"],
                            description: `Premium quality ${randomName.toLowerCase()} manufactured for ${make} ${model} ${year}. OEM specification part with 24-month warranty.`,
                            specs: `Material: High-grade alloy/Composite | Fitment: Direct replacement | Warranty: 24 months | OEM Certified: Yes | Origin: Germany/Japan`
                        });
                    }
                });
            });
        });
    });
}

// ==================== CART FUNCTIONS ====================

/**
 * Save cart to localStorage
 */
function saveCart() {
    try {
        localStorage.setItem('wt_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart:', e);
    }
    updateCartUI();
}

/**
 * Load cart from localStorage
 */
function loadCart() {
    try {
        const c = localStorage.getItem('wt_cart');
        if (c) {
            const parsed = JSON.parse(c);
            if (Array.isArray(parsed)) {
                cart = parsed.filter(item => item && typeof item === 'object' && item.id && typeof item.price === 'number');
            }
        }
    } catch (e) {
        console.error('Failed to load cart:', e);
        cart = [];
    }
    updateCartUI();
}

/**
 * Update cart UI (count and items)
 */
function updateCartUI() {
    const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
    const cartCountElem = document.getElementById('cartCount');
    if (cartCountElem) cartCountElem.innerText = count;
    
    const container = document.getElementById('cartItemsList');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);">Your cart is empty</p>';
        const cartTotalElem = document.getElementById('cartTotal');
        if (cartTotalElem) cartTotalElem.innerHTML = '';
        return;
    }
    
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const itemPrice = item.price || 0;
        const itemQty = item.qty || 0;
        total += itemPrice * itemQty;
        html += `
            <div class="cart-item">
                <div><strong>${escapeHtml(item.name || 'Product')}</strong></div>
                <div>Rs. ${itemPrice.toFixed(2)} x ${itemQty} = Rs. ${(itemPrice * itemQty).toFixed(2)}</div>
                <div class="quantity-selector">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${itemQty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    const cartTotalElem = document.getElementById('cartTotal');
    if (cartTotalElem) cartTotalElem.innerHTML = `<strong>Total: Rs. ${total.toFixed(2)}</strong>`;
}

/**
 * Update item quantity in cart
 */
function updateQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
        cart[idx].qty = (cart[idx].qty || 0) + delta;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        saveCart();
    }
}

/**
 * Remove item from cart
 */
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
}

/**
 * Add product to cart
 */
function addToCart(product) {
    if (!product || !product.id || typeof product.price !== 'number') {
        showToast('Invalid product', true);
        return;
    }
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
        existing.qty = (existing.qty || 0) + 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    saveCart();
    showToast(`${product.name} added to cart`);
}

/**
 * Open cart sidebar
 */
function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) sidebar.classList.add('open');
}

/**
 * Close cart sidebar
 */
function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) sidebar.classList.remove('open');
}

/**
 * Proceed to checkout
 */
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty. Add some products first!', true);
        closeCart();
        return;
    }
    showPage('checkout');
    closeCart();
    setTimeout(() => {
        const checkoutSection = document.getElementById('checkoutSection');
        if (checkoutSection) checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ==================== GARAGE FUNCTIONS ====================

/**
 * Load garage from localStorage
 */
function loadGarage() {
    try {
        const saved = localStorage.getItem('wt_garage');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) garageVehicles = parsed;
        }
    } catch (e) {
        console.error('Failed to load garage:', e);
        garageVehicles = [];
    }
    renderGarage();
}

/**
 * Save garage to localStorage
 */
function saveGarage() {
    try {
        localStorage.setItem('wt_garage', JSON.stringify(garageVehicles));
    } catch (e) {
        console.error('Failed to save garage:', e);
    }
    renderGarage();
}

/**
 * Render garage vehicles
 */
function renderGarage() {
    const container = document.getElementById('garageVehiclesList');
    if (!container) return;
    
    if (garageVehicles.length === 0) {
        container.innerHTML = '<span class="empty-message">No vehicles saved. Click "Add Vehicle" to save your cars.</span>';
        return;
    }
    
    container.innerHTML = '';
    garageVehicles.forEach((v, idx) => {
        const vehicleDiv = document.createElement('div');
        vehicleDiv.className = 'garage-vehicle';
        
        const lastSelected = localStorage.getItem('wt_last_selected_vehicle');
        if (lastSelected) {
            try {
                const last = JSON.parse(lastSelected);
                if (last.make === v.make && last.model === v.model && last.year === v.year) {
                    vehicleDiv.style.borderColor = 'var(--accent)';
                    vehicleDiv.style.background = 'var(--accent-dark)';
                }
            } catch (e) {}
        }
        
        vehicleDiv.innerHTML = `
            <i class="fas fa-car"></i>
            <span>${escapeHtml(v.make)} ${escapeHtml(v.model)} ${escapeHtml(v.year)}</span>
            <button class="remove-vehicle" onclick="event.stopPropagation(); removeVehicle(${idx})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        vehicleDiv.onclick = () => {
            localStorage.setItem('wt_last_selected_vehicle', JSON.stringify({ make: v.make, model: v.model, year: v.year }));
            showCompatibleForGarageVehicle(v);
            renderGarage();
        };
        
        container.appendChild(vehicleDiv);
    });
}

/**
 * Remove vehicle from garage
 */
function removeVehicle(idx) {
    garageVehicles.splice(idx, 1);
    saveGarage();
    showToast('Vehicle removed from garage');
}

/**
 * Show compatible parts for garage vehicle
 */
function showCompatibleForGarageVehicle(vehicle) {
    const filtered = products.filter(p => 
        p.compatible.make === vehicle.make && 
        p.compatible.model === vehicle.model && 
        p.compatible.year === vehicle.year
    );
    lastCompatibleResults = filtered;
    lastCompatibleFilter = { make: vehicle.make, model: vehicle.model, year: vehicle.year };
    
    const titleElem = document.getElementById('compatibleTitle');
    if (titleElem) {
        titleElem.innerHTML = `<i class="fas fa-car"></i> Compatible Parts for ${escapeHtml(vehicle.make)} ${escapeHtml(vehicle.model)} ${escapeHtml(vehicle.year)} (${filtered.length} items)`;
    }
    renderCompatibleParts(filtered, vehicle.make, vehicle.model, vehicle.year);
    showPage('compatible');
}

/**
 * Open add vehicle modal
 */
function openAddVehicleModal() {
    populateVehicleSelects();
    const modal = document.getElementById('addVehicleModal');
    if (modal) modal.style.display = 'flex';
}

/**
 * Close add vehicle modal
 */
function closeAddVehicleModal() {
    const modal = document.getElementById('addVehicleModal');
    if (modal) modal.style.display = 'none';
}

/**
 * Populate vehicle select dropdowns
 */
function populateVehicleSelects() {
    const makeSelect = document.getElementById('vehicleMake');
    if (makeSelect) {
        makeSelect.innerHTML = '';
        makesList.forEach(m => {
            makeSelect.innerHTML += `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`;
        });
    }
    populateVehicleYears();
}

/**
 * Populate vehicle years dropdown
 */
function populateVehicleYears() {
    const yearSelect = document.getElementById('vehicleYear');
    if (yearSelect) {
        yearSelect.innerHTML = '';
        yearsList.forEach(y => {
            yearSelect.innerHTML += `<option value="${escapeHtml(y)}">${escapeHtml(y)}</option>`;
        });
    }
    updateVehicleModels();
}

/**
 * Update vehicle models based on selected make/year
 */
function updateVehicleModels() {
    const make = document.getElementById('vehicleMake')?.value;
    const year = document.getElementById('vehicleYear')?.value;
    const modelSelect = document.getElementById('vehicleModel');
    
    if (!modelSelect) return;
    
    if (!make || !year) {
        modelSelect.innerHTML = '<option value="">Select Make & Year first</option>';
        return;
    }
    
    modelSelect.innerHTML = '<option value="">Select Model</option>';
    if (vehicleData[make] && vehicleData[make][year]) {
        vehicleData[make][year].forEach(model => {
            modelSelect.innerHTML += `<option value="${escapeHtml(model)}">${escapeHtml(model)}</option>`;
        });
    }
}

/**
 * Add vehicle to garage
 */
function addVehicleToGarage() {
    const make = document.getElementById('vehicleMake')?.value;
    const year = document.getElementById('vehicleYear')?.value;
    const model = document.getElementById('vehicleModel')?.value;
    
    if (!make || !year || !model) {
        showToast('Please select Make, Year, and Model', true);
        return;
    }
    
    garageVehicles.push({ make, model, year });
    saveGarage();
    closeAddVehicleModal();
    showToast(`${make} ${model} ${year} added to garage`);
}

// ==================== RENDER FUNCTIONS ====================

/**
 * Render categories
 */
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const icons = ["fa-engine", "fa-brake-warning", "fa-car-side", "fa-cogs", "fa-circle", "fa-oil-can", "fa-filter", "fa-charging-station", "fa-lightbulb", "fa-couch", "fa-truck", "fa-thermometer-half"];
    const categories = Object.keys(categoriesData);
    
    categories.forEach((cat, idx) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <i class="fas ${icons[idx % icons.length]}"></i>
            <h4>${escapeHtml(cat)}</h4>
            <p>${escapeHtml(categoriesData[cat].slice(0, 3).join(', '))}...</p>
        `;
        card.onclick = () => {
            const filtered = products.filter(p => p.category === cat);
            renderProducts(filtered);
            showPage('products');
            showToast(`Showing ${filtered.length} products in ${cat}`);
            setTimeout(() => {
                const productsSection = document.getElementById('productsSection');
                if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        };
        grid.appendChild(card);
    });
}

/**
 * Render products
 */
function renderProducts(productArray, targetGridId = 'productGrid') {
    const grid = document.getElementById(targetGridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    const productsToShow = productArray.slice(0, 30);
    
    productsToShow.forEach(p => {
        const finalPrice = (p.price || 0) * (1 - (p.discount || 0) / 100);
        const badgeClass = getBadgeClass(p.badge);
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-badge ${badgeClass}">${escapeHtml(p.badge)}</div>
            <div class="stock-status">${escapeHtml(p.stock)}</div>
            <div class="product-img">
                <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='${productImages.EngineParts}'">
            </div>
            <div class="product-info">
                <div class="product-title">${escapeHtml(p.name)}</div>
                <div class="price">Rs. ${finalPrice.toFixed(2)}${p.discount > 0 ? ` <span style="font-size:0.8rem; text-decoration:line-through; color:var(--text-muted);">Rs. ${p.price}</span>` : ''}</div>
                <div style="font-size:0.7rem; color:var(--text-muted);">${escapeHtml(p.sku)} | ${escapeHtml(p.brand)}</div>
                <div class="card-actions">
                    <button class="btn-sm btn-cart" data-id="${p.id}" data-price="${finalPrice}">Add to Cart</button>
                    <button class="btn-sm btn-wa" data-id="${p.id}">WhatsApp Order</button>
                    <button class="btn-sm btn-view" data-id="${p.id}">Quick View</button>
                </div>
            </div>
        `;
        
        const addBtn = card.querySelector('.btn-cart');
        const waBtn = card.querySelector('.btn-wa');
        const viewBtn = card.querySelector('.btn-view');
        
        addBtn.onclick = () => addToCart({ id: p.id, name: p.name, price: finalPrice });
        waBtn.onclick = () => whatsappProductOrder(p.id);
        viewBtn.onclick = () => enhancedQuickView(p.id);
        
        grid.appendChild(card);
    });
}

/**
 * Render compatible parts
 */
function renderCompatibleParts(compatibleProducts, make, model, year) {
    const grid = document.getElementById('compatibleGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (compatibleProducts.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding:60px; background:var(--bg-card); border-radius:20px;">
                <i class="fas fa-search" style="font-size:3rem; color:var(--text-muted); margin-bottom:16px; display:block;"></i>
                <h3>No compatible parts found</h3>
                <p style="color:var(--text-muted); margin-top:8px;">No products available for ${escapeHtml(make)} ${escapeHtml(model)} ${escapeHtml(year)}</p>
                <button class="btn" style="margin-top:20px;" onclick="showPage('home')">Browse All Products</button>
            </div>
        `;
        return;
    }
    
    compatibleProducts.forEach(p => {
        const finalPrice = (p.price || 0) * (1 - (p.discount || 0) / 100);
        const badgeClass = getBadgeClass(p.badge);
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-badge ${badgeClass}">${escapeHtml(p.badge)}</div>
            <div class="stock-status">${escapeHtml(p.stock)}</div>
            <div class="product-img">
                <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='${productImages.EngineParts}'">
            </div>
            <div class="product-info">
                <div class="product-title">${escapeHtml(p.name)}</div>
                <div class="price">Rs. ${finalPrice.toFixed(2)}${p.discount > 0 ? ` <span style="font-size:0.8rem; text-decoration:line-through; color:var(--text-muted);">Rs. ${p.price}</span>` : ''}</div>
                <div style="font-size:0.7rem; color:var(--text-muted);">${escapeHtml(p.sku)} | ${escapeHtml(p.brand)}</div>
                <div style="font-size:0.7rem; color:var(--success); margin:4px 0;">✓ Compatible with ${escapeHtml(p.compatible.make)} ${escapeHtml(p.compatible.model)} ${escapeHtml(p.compatible.year)}</div>
                <div class="card-actions">
                    <button class="btn-sm btn-cart" data-id="${p.id}" data-price="${finalPrice}">Add to Cart</button>
                    <button class="btn-sm btn-wa" data-id="${p.id}">WhatsApp Order</button>
                    <button class="btn-sm btn-view" data-id="${p.id}">Quick View</button>
                </div>
            </div>
        `;
        
        const addBtn = card.querySelector('.btn-cart');
        const waBtn = card.querySelector('.btn-wa');
        const viewBtn = card.querySelector('.btn-view');
        
        addBtn.onclick = () => addToCart({ id: p.id, name: p.name, price: finalPrice });
        waBtn.onclick = () => whatsappProductOrder(p.id);
        viewBtn.onclick = () => enhancedQuickView(p.id);
        
        grid.appendChild(card);
    });
}

// ==================== MODAL FUNCTIONS ====================

/**
 * Enhanced product quick view
 */
function enhancedQuickView(pid) {
    const p = products.find(pr => pr.id === pid);
    if (!p) return;
    
    const final = ((p.price || 0) * (1 - (p.discount || 0) / 100)).toFixed(2);
    const badgeClass = getBadgeClass(p.badge);
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <h2 style="margin-bottom:16px;">${escapeHtml(p.name)}</h2>
        <div class="product-detail-grid">
            <div class="detail-image">
                <img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.src='${productImages.EngineParts}'">
            </div>
            <div>
                <div class="price" style="font-size:2rem;">Rs. ${final}</div>
                ${p.discount > 0 ? `<div style="color:var(--success);">Save ${p.discount}%!</div>` : ''}
                <div style="margin:16px 0;">
                    <span class="product-badge ${badgeClass}" style="position:relative; top:0; left:0; display:inline-block;">${escapeHtml(p.badge)}</span>
                    <span class="stock-status" style="position:relative; top:0; right:0; display:inline-block; margin-left:8px;">${escapeHtml(p.stock)}</span>
                </div>
                <div><strong>SKU:</strong> ${escapeHtml(p.sku)}</div>
                <div><strong>Brand:</strong> ${escapeHtml(p.brand)}</div>
                <div><strong>Warranty:</strong> 24 months</div>
                <div style="margin:16px 0;">
                    <strong>Compatible Vehicles:</strong><br>
                    <span class="compatibility-tag">${escapeHtml(p.compatible.make)} ${escapeHtml(p.compatible.model)} ${escapeHtml(p.compatible.year)}</span>
                </div>
                <div class="card-actions" style="margin-top:16px;">
                    <button class="btn" id="modalAddToCartBtn">Add to Cart</button>
                    <button class="btn btn-wa" id="modalWhatsAppBtn">Order via WhatsApp</button>
                </div>
            </div>
        </div>
        <div style="margin-top:24px;">
            <h4>Specifications</h4>
            <ul class="spec-list">
                <li><strong>Material:</strong> High-grade alloy/Composite</li>
                <li><strong>Quality:</strong> OEM Certified</li>
                <li><strong>Fitment:</strong> Direct replacement</li>
                <li><strong>Origin:</strong> Germany/Japan</li>
            </ul>
        </div>
        <div style="margin-top:16px;">
            <h4>Description</h4>
            <p>${escapeHtml(p.description)}</p>
        </div>
        <div style="display:flex; gap:16px; margin-top:24px;">
            <button class="btn btn-outline" onclick="closeModal()">Close</button>
        </div>
    `;
    
    const addBtn = document.getElementById('modalAddToCartBtn');
    const waBtn = document.getElementById('modalWhatsAppBtn');
    
    if (addBtn) addBtn.onclick = () => {
        addToCart({ id: p.id, name: p.name, price: parseFloat(final) });
        closeModal();
    };
    if (waBtn) waBtn.onclick = () => {
        whatsappProductOrder(p.id);
        closeModal();
    };
    
    modal.style.display = 'flex';
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.style.display = 'none';
}

/**
 * WhatsApp product order
 */
function whatsappProductOrder(pid) {
    const p = products.find(pr => pr.id === pid);
    if (p) {
        const final = ((p.price || 0) * (1 - (p.discount || 0) / 100)).toFixed(2);
        whatsappDirect(OWNER_PHONE, `*Product Inquiry - Welcome Traders*\n\nProduct: ${p.name}\nSKU: ${p.sku}\nPrice: Rs. ${final}\nCompatible: ${p.compatible.make} ${p.compatible.model} ${p.compatible.year}\n\nI would like to order this product.`);
    }
}

// ==================== PAGE NAVIGATION ====================

/**
 * Show specific page/section
 */
function showPage(page) {
    // Hide all sections
    const sections = ['categoriesSection', 'productsSection', 'dealerSection', 'posSection', 'checkoutSection', 'compatibleSection', 'orderHistorySection'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add('section-hidden');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${page}Section`);
    if (targetSection) targetSection.classList.remove('section-hidden');
    
    // Handle filter panel visibility
    const filterPanel = document.getElementById('filterPanel');
    if (filterPanel) {
        filterPanel.style.display = page === 'compatible' ? 'none' : 'flex';
    }
    
    // Handle home page (show both categories and products)
    if (page === 'home') {
        const categoriesSection = document.getElementById('categoriesSection');
        const productsSection = document.getElementById('productsSection');
        if (categoriesSection) categoriesSection.classList.remove('section-hidden');
        if (productsSection) productsSection.classList.remove('section-hidden');
        
        // Reset filters
        const makeFilter = document.getElementById('makeFilter');
        const yearFilter = document.getElementById('yearFilter');
        const modelFilter = document.getElementById('modelFilter');
        if (makeFilter) makeFilter.value = '';
        if (yearFilter) yearFilter.value = '';
        if (modelFilter) modelFilter.innerHTML = '<option value="">Select Make & Year first</option>';
        
        renderProducts(products.slice(0, 24));
        renderCategories();
    } else if (page === 'products') {
        renderProducts(products.slice(0, 30));
    } else if (page === 'categories') {
        renderCategories();
    } else if (page === 'orderHistory') {
        displayOrderHistory();
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (page !== 'compatible') {
        const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
        if (activeLink) activeLink.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== SEARCH FUNCTION ====================

/**
 * Search products
 */
function searchProducts() {
    const term = document.getElementById('globalSearch').value.toLowerCase().trim();
    if (term === '') {
        renderProducts(products.slice(0, 30));
        showToast('Showing all products');
    } else {
        const results = products.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.sku.toLowerCase().includes(term) || 
            p.brand.toLowerCase().includes(term)
        );
        renderProducts(results);
        if (results.length === 0) {
            showToast('No products found', true);
        } else {
            showToast(`Found ${results.length} products matching "${term}"`);
        }
    }
    showPage('products');
    setTimeout(() => {
        const productsSection = document.getElementById('productsSection');
        if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ==================== FILTER FUNCTIONS ====================

/**
 * Populate makes dropdown
 */
function populateMakes() {
    const makeSelect = document.getElementById('makeFilter');
    if (!makeSelect) return;
    makeSelect.innerHTML = '<option value="">Select Make</option>';
    makesList.forEach(make => {
        makeSelect.innerHTML += `<option value="${escapeHtml(make)}">${escapeHtml(make)}</option>`;
    });
}

/**
 * Populate years dropdown
 */
function populateYears() {
    const yearSelect = document.getElementById('yearFilter');
    if (!yearSelect) return;
    yearSelect.innerHTML = '<option value="">Select Year</option>';
    yearsList.forEach(year => {
        yearSelect.innerHTML += `<option value="${escapeHtml(year)}">${escapeHtml(year)}</option>`;
    });
}

/**
 * Update models based on selected make/year
 */
function updateModels() {
    const make = document.getElementById('makeFilter')?.value;
    const year = document.getElementById('yearFilter')?.value;
    const modelSelect = document.getElementById('modelFilter');
    
    if (!modelSelect) return;
    
    if (!make || !year) {
        modelSelect.innerHTML = '<option value="">Select Make & Year first</option>';
        return;
    }
    
    modelSelect.innerHTML = '<option value="">Select Model</option>';
    if (vehicleData[make] && vehicleData[make][year]) {
        vehicleData[make][year].forEach(model => {
            modelSelect.innerHTML += `<option value="${escapeHtml(model)}">${escapeHtml(model)}</option>`;
        });
    } else {
        modelSelect.innerHTML = '<option value="">No models available for this year</option>';
    }
}

// ==================== DEALER FUNCTIONS ====================

/**
 * Validate dealer form inputs
 */
function validateDealerInputs(business, name, email, phone) {
    if (!business || !name || !email || !phone) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(phone)) return false;
    return true;
}

/**
 * Submit dealer inquiry
 */
function submitDealerInquiry() {
    const business = document.getElementById('dealerBusiness')?.value.trim() || '';
    const name = document.getElementById('dealerName')?.value.trim() || '';
    const email = document.getElementById('dealerEmail')?.value.trim() || '';
    const phone = document.getElementById('dealerPhone')?.value.trim() || '';
    const msg = document.getElementById('dealerMsg')?.value.trim() || '';
    
    if (!validateDealerInputs(business, name, email, phone)) {
        showToast('Please fill all fields with valid email and phone number', true);
        return;
    }
    
    whatsappDirect(OWNER_PHONE, `*DEALER INQUIRY - Welcome Traders*\n\nBusiness: ${business}\nOwner: ${name}\nEmail: ${email}\nPhone: ${phone}\nVolume: ${msg}`);
    whatsappDirect(phone, `Thank you ${name}! Welcome Traders has received your dealer inquiry. Our wholesale team will contact you within 24 hours.`);
    
    const successDiv = document.getElementById('dealerSuccess');
    if (successDiv) {
        successDiv.innerHTML = '<span style="color:var(--success);">✅ Inquiry sent! Check WhatsApp.</span>';
        setTimeout(() => successDiv.innerHTML = '', 4000);
    }
    
    const form = document.getElementById('dealerForm');
    if (form) form.reset();
}

/**
 * WhatsApp dealer inquiry
 */
function whatsappDealerInquiry() {
    whatsappDirect(OWNER_PHONE, "*DEALER INQUIRY* - I am interested in wholesale pricing for auto parts.");
}

// ==================== CHECKOUT & ORDERS ====================

/**
 * Validate checkout form
 */
function validateCheckout(name, phone, address, city) {
    if (!name || !phone || !address || !city) return false;
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(phone)) return false;
    return true;
}

/**
 * Display order history
 */
function displayOrderHistory() {
    const container = document.getElementById('orderHistoryList');
    if (!container) return;
    
    try {
        const orders = JSON.parse(localStorage.getItem('wt_orders') || '[]');
        if (orders.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:40px;">No orders found. Start shopping to see your orders here.</p>';
            return;
        }
        
        const reversedOrders = [...orders].reverse();
        let html = '';
        reversedOrders.forEach(order => {
            html += `
                <div style="background:var(--bg-elevated); border:1px solid var(--border); border-radius:16px; padding:20px; margin-bottom:16px;">
                    <div style="display:flex; justify-content:space-between; flex-wrap:wrap; margin-bottom:12px;">
                        <strong style="color:var(--accent);">Order #${escapeHtml(order.orderId)}</strong>
                        <span style="color:var(--text-muted);">${escapeHtml(order.timestamp)}</span>
                    </div>
                    <div><strong>Status:</strong> <span style="color:var(--success);">${escapeHtml(order.status)}</span></div>
                    <div style="margin-top:12px;"><strong>Items:</strong></div>
                    <ul style="margin-left:20px; margin-top:8px;">
            `;
            order.items.forEach(item => {
                html += `<li>${escapeHtml(item.name)} x${item.qty} = Rs. ${((item.price || 0) * (item.qty || 0)).toFixed(2)}</li>`;
            });
            html += `
                    </ul>
                    <div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--border);">
                        <strong>Total: Rs. ${order.total.toFixed(2)}</strong>
                    </div>
                    <div style="margin-top:8px; font-size:0.8rem; color:var(--text-muted);">
                        Delivery: ${escapeHtml(order.address)}, ${escapeHtml(order.city)}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } catch (e) {
        console.error('Failed to load orders:', e);
        container.innerHTML = '<p style="color:var(--accent);">Error loading order history</p>';
    }
}

/**
 * Place order
 */
function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty', true);
        return;
    }
    
    const name = document.getElementById('chName')?.value.trim() || '';
    const phone = document.getElementById('chPhone')?.value.trim() || '';
    const address = document.getElementById('chAddress')?.value.trim() || '';
    const city = document.getElementById('chCity')?.value.trim() || '';
    const notes = document.getElementById('chNotes')?.value.trim() || '';
    
    if (!validateCheckout(name, phone, address, city)) {
        showToast('Please fill all required fields with valid phone number', true);
        return;
    }
    
    const orderId = 'WT-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    let cartDetails = cart.map((i, idx) => `${idx + 1}. ${i.name} x${i.qty} = Rs. ${((i.price || 0) * (i.qty || 0)).toFixed(2)}`).join('\n');
    let total = cart.reduce((s, i) => s + ((i.price || 0) * (i.qty || 0)), 0);
    const timestamp = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' });
    
    const orderRecord = {
        orderId: orderId,
        customerName: name,
        customerPhone: phone,
        address: address,
        city: city,
        notes: notes,
        items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
        total: total,
        timestamp: timestamp,
        status: 'pending'
    };
    
    try {
        const orders = JSON.parse(localStorage.getItem('wt_orders') || '[]');
        orders.push(orderRecord);
        localStorage.setItem('wt_orders', JSON.stringify(orders));
    } catch (e) {
        console.error('Failed to save order record:', e);
    }
    
    const customerMessage = `🏭 *WELCOME TRADERS - Order Confirmation* 🏭\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `📋 *ORDER DETAILS*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `🆔 Order ID: ${orderId}\n` +
        `👤 Customer: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `📍 Address: ${address}, ${city}\n` +
        `📅 Date: ${timestamp}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `📦 *ITEMS ORDERED*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${cartDetails}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `💰 *TOTAL AMOUNT: Rs. ${total.toFixed(2)}*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n\n` +
        `💳 Payment Method: Cash on Delivery\n` +
        `🚚 Delivery: 2-3 business days\n\n` +
        `✅ Your order has been received and will be processed shortly.\n` +
        `📞 For inquiries, contact: +92 318 4200767\n\n` +
        `*Thank you for shopping with Welcome Traders!* 🚗`;
    
    const ownerMessage = `🔔 *NEW ORDER ALERT - Welcome Traders* 🔔\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `📋 *ORDER INFORMATION*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `🆔 Order ID: ${orderId}\n` +
        `👤 Customer: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `📍 Address: ${address}, ${city}\n` +
        `📝 Notes: ${notes || 'None'}\n` +
        `📅 Time: ${timestamp}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `📦 *ITEMS ORDERED*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `${cartDetails}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `💰 *TOTAL: Rs. ${total.toFixed(2)}*\n` +
        `━━━━━━━━━━━━━━━━━━━━\n\n` +
        `🔄 Status: Pending Confirmation\n` +
        `📞 Contact customer to confirm order.`;
    
    let ownerSent = false;
    
    try {
        ownerSent = whatsappDirect(OWNER_PHONE, ownerMessage);
    } catch (e) {
        console.error('Failed to send owner WhatsApp:', e);
    }
    
    try {
        whatsappDirect(phone, customerMessage);
    } catch (e) {
        console.error('Failed to send customer WhatsApp:', e);
    }
    
    const checkoutSuccess = document.getElementById('checkoutSuccess');
    if (ownerSent) {
        cart = [];
        saveCart();
        updateCartUI();
        if (checkoutSuccess) {
            checkoutSuccess.innerHTML = `<span style="color:var(--success);">✅ Order #${orderId} placed successfully! Check WhatsApp for confirmation.</span>`;
        }
    } else {
        if (checkoutSuccess) {
            checkoutSuccess.innerHTML = '<span style="color:var(--accent);">❌ Order submission failed. Please try again or call +92 318 4200767</span>';
        }
        showToast('Order failed. Please try again or call directly.', true);
        return;
    }
    
    setTimeout(() => {
        if (checkoutSuccess) checkoutSuccess.innerHTML = '';
    }, 8000);
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.reset();
    showPage('home');
}

// ==================== POS / EXPORT FUNCTIONS ====================

/**
 * Export products to CSV
 */
function exportToCSV() {
    let csv = "ID,Name,SKU,Brand,Category,Price,Stock,Compatible Make,Compatible Model,Compatible Year,Badge\n";
    products.slice(0, 500).forEach(p => {
        csv += `${p.id},"${p.name.replace(/"/g, '""')}",${p.sku},${p.brand},${p.category},${p.price},${p.stock},${p.compatible.make},${p.compatible.model},${p.compatible.year},${p.badge}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'welcome_traders_inventory.csv';
    link.click();
    showToast('Inventory exported');
}

/**
 * Handle CSV import
 */
function handleCSVImport(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const content = evt.target.result;
                if (content && content.trim()) {
                    showToast('CSV import feature would process ' + file.name + ' (demo mode)');
                    const importStatus = document.getElementById('importStatus');
                    if (importStatus) {
                        importStatus.innerHTML = '<span style="color:var(--success);">✅ CSV imported! Product data would be updated.</span>';
                        setTimeout(() => importStatus.innerHTML = '', 3000);
                    }
                } else {
                    showToast('Invalid CSV file', true);
                }
            } catch (err) {
                showToast('Error reading CSV file', true);
            }
        };
        reader.readAsText(file);
    }
}

// ==================== THEME FUNCTIONS ====================

/**
 * Initialize theme from localStorage
 */
function initTheme() {
    const saved = localStorage.getItem('wt_theme');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
    }
}

/**
 * Toggle dark/light theme
 */
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('wt_theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// ==================== EVENT LISTENERS & INITIALIZATION ====================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
        });
    });
    
    // Buttons
    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) shopNowBtn.addEventListener('click', () => {
        showPage('products');
        showToast('Browse our premium auto parts collection');
    });
    
    const becomeDealerBtn = document.getElementById('becomeDealerBtn');
    if (becomeDealerBtn) becomeDealerBtn.addEventListener('click', () => {
        showPage('dealer');
        showToast('Fill the form to get wholesale pricing');
    });
    
    // Filter
    const makeFilter = document.getElementById('makeFilter');
    const yearFilter = document.getElementById('yearFilter');
    if (makeFilter) makeFilter.addEventListener('change', updateModels);
    if (yearFilter) yearFilter.addEventListener('change', updateModels);
    
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    if (applyFilterBtn) {
        applyFilterBtn.onclick = () => {
            const make = document.getElementById('makeFilter')?.value;
            const year = document.getElementById('yearFilter')?.value;
            const model = document.getElementById('modelFilter')?.value;
            
            if (!make || !year || !model) {
                showToast('Please select Make, Year, and Model first', true);
                return;
            }
            
            const filtered = products.filter(p =>
                p.compatible.make === make &&
                p.compatible.model === model &&
                p.compatible.year === year
            );
            lastCompatibleResults = filtered;
            lastCompatibleFilter = { make: make, model: model, year: year };
            
            const titleElem = document.getElementById('compatibleTitle');
            if (titleElem) {
                titleElem.innerHTML = `<i class="fas fa-car"></i> Compatible Parts for ${escapeHtml(make)} ${escapeHtml(model)} ${escapeHtml(year)} (${filtered.length} items)`;
            }
            renderCompatibleParts(filtered, make, model, year);
            showPage('compatible');
        };
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    // Export CSV
    const exportBtn = document.getElementById('exportCSVBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);
    
    // Import CSV
    const importInput = document.getElementById('importCSV');
    if (importInput) importInput.addEventListener('change', handleCSVImport);
    
    // Vehicle selects
    const vehicleMake = document.getElementById('vehicleMake');
    const vehicleYear = document.getElementById('vehicleYear');
    if (vehicleMake) vehicleMake.addEventListener('change', updateVehicleModels);
    if (vehicleYear) vehicleYear.addEventListener('change', updateVehicleModels);
}

/**
 * Initialize application
 */
function init() {
    generateProducts();
    initTheme();
    loadCart();
    loadGarage();
    populateMakes();
    populateYears();
    renderCategories();
    renderProducts(products.slice(0, 24));
    initEventListeners();
    showPage('home');
}

// Start the application
init();
