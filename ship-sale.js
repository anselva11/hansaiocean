/* ======================================================
   HANSAI OCEAN - SHIP SALE & PURCHASE (JUAL BELI KAPAL)
   INTERACTIVE JAVASCRIPT & MODAL SYSTEM
====================================================== */

const SHIPS_DATABASE = [
    {
        id: "HN-TB3201",
        name: "TB. Hansai Perkasa 08",
        category: "tugboat",
        categoryLabel: "Tugboat (Kapal Tunda)",
        year: 2020,
        flag: "Indonesia",
        registry: "Batam",
        classification: "BKI (Biro Klasifikasi Indonesia) - A100 Ocean Going",
        engine: "2 x Yanmar 6EY26W (Total 3,200 BHP @ 750 RPM)",
        auxEngine: "2 x Yanmar 6HAL2-TN (150 kVA)",
        dimensions: "LOA 34.00 m x B 9.80 m x D 4.80 m",
        draft: "3.80 m",
        capacity: "Bollard Pull 42 Tonnes",
        speed: "12.5 Knots",
        tankCapacity: "Fuel: 220 m³ | Fresh Water: 55 m³",
        location: "Pelabuhan Batu Ampar, Batam",
        status: "Siap Inspeksi & Sea Trial",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/tugboat.png",
        description: "Kapal tunda samudera (Ocean Going Tugboat) berdaya 3.200 BHP dalam kondisi sangat terawat dan siap pakai berlayar. Baru saja menyelesaikan Annual Survey & Drydocking resmi BKI pada pertengahan 2025. Dilengkapi hydraulic towing winch 45 Ton, stern roller, bow thruster, radar Furuno ARPA, AIS Class A, ECDIS terverifikasi, dan akomodasi 14 awak kabin ber-AC. Sistem propulsi bebas vibrasi, sangat ideal untuk operasional towing tongkang batubara 300ft, tongkang nikel, atau offshore supply di perairan domestik maupun internasional."
    },
    {
        id: "HN-BG3002",
        name: "BG. Hansai Samudra 300",
        category: "barge",
        categoryLabel: "Tongkang (Barge 300ft)",
        year: 2022,
        flag: "Indonesia",
        registry: "Samarinda",
        classification: "BKI - Hull A100 Barge",
        engine: "Non-Propelled (Winch Diesel Yanmar TS230)",
        auxEngine: "Genset Silent 15 kVA untuk penerangan solar navigation",
        dimensions: "LOA 91.44 m (300 ft) x B 24.38 m (80 ft) x D 5.49 m (18 ft)",
        draft: "4.20 m (Loaded)",
        capacity: "8,000 DWT / Sideboard 12 ft (3.65 m)",
        speed: "N/A (Towing Speed 6-8 Knots)",
        tankCapacity: "Ballast Tanks 8 Kompartemen",
        location: "Muara Berau, Samarinda, Kaltim",
        status: "Prompt Delivery",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/barge-tug.jpg",
        description: "Tongkang geladak muatan curah 300 Feet heavy-duty dengan konstruksi sideboard 12 ft terpasang kokoh. Didesain secara khusus untuk angkutan batubara, bijih nikel (nickel ore), pasir, batu split, dan mobilisasi alat berat konstruksi/tambang. Ketebalan pelat lantai geladak (deck plate) 14 mm tanpa deformasi struktural, anoda korban zink terpasang baru, sertifikat garis muat dan keselamatan BKI aktif hingga akhir 2027. Dokumen legalitas dan surat ukur lengkap, siap serah terima prompt."
    },
    {
        id: "HN-TK5503",
        name: "MT. Hansai Pioneer",
        category: "tanker",
        categoryLabel: "Oil & Chemical Tanker",
        year: 2018,
        flag: "Indonesia (Cabotage Compliant)",
        registry: "Tanjung Priok, Jakarta",
        classification: "NK (ClassNK) / BKI Dual Class",
        engine: "Hanshin LH38L (2,800 BHP @ 240 RPM)",
        auxEngine: "3 x Yanmar 6HAL2-WHT (250 kW)",
        dimensions: "LOA 102.50 m x B 16.00 m x D 8.50 m",
        draft: "6.30 m",
        capacity: "5,500 DWT (~6,200 CBM) Double Hull & Bottom",
        speed: "12.0 Knots",
        tankCapacity: "10 Kargo Tanks Epoxy Coated + Heating Coils",
        location: "Tanjung Priok, Jakarta",
        status: "Lulus Vetting Pertamina",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/tanker.jpg",
        description: "Kapal tanker minyak dan produk kimia ringan berstandar internasional dengan sertifikat valid SIRE dan kelulusan Vetting Pertamina. Didesain dengan lambung ganda penuh (Double Hull & Double Bottom) sesuai regulasi MARPOL Annex I. Seluruh ruang muat dilapisi marine epoxy grade tinggi, dilengkapi 2 unit pompa kargo ulir (screw pump) berkapasitas 750 m³/jam, inert gas system (IGS), serta sistem pemadam busa tetap (foam fire system). Sangat siap untuk distribusi BBM Solar/B35, Bensin, MFO, maupun minyak kelapa sawit (CPO)."
    },
    {
        id: "HN-LC1504",
        name: "LCT. Hansai Nusantara 68",
        category: "lct",
        categoryLabel: "Landing Craft Tank (LCT)",
        year: 2021,
        flag: "Indonesia",
        registry: "Surabaya",
        classification: "BKI - Special Trade Voyage",
        engine: "2 x Mitsubishi S6R2-MTK3L (Total 1,280 HP)",
        auxEngine: "2 x Mitsubishi 4D34 (40 kVA)",
        dimensions: "LOA 67.50 m x B 14.00 m x D 3.70 m",
        draft: "2.80 m",
        capacity: "1,500 DWT / Ramp Door Lebar 8.00 m",
        speed: "9.5 Knots",
        tankCapacity: "Fuel: 110 m³ | Fresh Water: 120 m³",
        location: "Pelabuhan Tanjung Perak, Surabaya",
        status: "Tersedia Siap Operasi",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/lct.jpg",
        description: "Kapal Landing Craft Tank (LCT) 1.500 DWT dengan ramp door hidrolik berdaya tahan beban 60 ton. Memiliki area dek terbuka seluas 48 m x 13.5 m yang mampu memuat hingga 22 unit truk tronton, dump truck, excavator, atau material proyek tiang pancang. Sangat ideal untuk ekspedisi antarpulau dan proyek logistik di pesisir atau pulau terpencil tanpa fasilitas pelabuhan beton. Tangki air tawar dan BBM cadangan besar, kondisi mesin kering dan terawat berkala."
    },
    {
        id: "HN-AH6505",
        name: "AHTS. Hansai Defender",
        category: "offshore",
        categoryLabel: "AHTS / Offshore Vessel",
        year: 2017,
        flag: "Indonesia",
        registry: "Balikpapan",
        classification: "ABS (American Bureau of Shipping) + BKI Dual Class",
        engine: "2 x Wärtsilä 6L26 (Total 5,150 BHP)",
        auxEngine: "3 x Caterpillar C18 (450 kW) + Emergency Genset",
        dimensions: "LOA 59.25 m x B 15.00 m x D 6.10 m",
        draft: "4.90 m",
        capacity: "Bollard Pull 68.5 Metric Tonnes / FiFi-1",
        speed: "13.0 Knots",
        tankCapacity: "Fuel: 580 m³ | Drill Water: 400 m³ | Mud: 250 m³",
        location: "Kariangau Port, Balikpapan, Kaltim",
        status: "Siap Inspeksi Port",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/ahts-offshore.jpg",
        description: "Kapal offshore serbaguna Anchor Handling Tug Supply (AHTS) berkekuatan 5.150 BHP dengan sertifikasi Dynamic Positioning DP-1 dan sistem pemadam kebakaran eksternal FiFi-1 (2 x 1.200 m³/jam). Dirancang untuk pekerjaan rig towing, penarikan jangkar laut dalam, pasokan logistik anjungan lepas pantai (drilling mud/brine/fuel/water), serta siaga darurat migas. Dilengkapi waterfall double drum towing winch 150 Ton, stern roller, shark jaws, tugger winch, dan kabin berstandar offshore untuk 28 personel."
    },
    {
        id: "HN-CF3806",
        name: "MV. Hansai Express III",
        category: "cargo",
        categoryLabel: "Container Feeder Vessel",
        year: 2016,
        flag: "Indonesia",
        registry: "Makassar",
        classification: "Lloyd's Register / BKI",
        engine: "MAN B&W 7L32/40 (3,920 kW / 5,330 HP)",
        auxEngine: "3 x Daihatsu 6DL-16 (450 kVA)",
        dimensions: "LOA 115.80 m x B 19.20 m x D 8.80 m",
        draft: "6.20 m",
        capacity: "5,200 DWT (380 TEU / 60 Reefer Plugs)",
        speed: "14.0 Knots Cruising Speed",
        tankCapacity: "HFO: 320 MT | MDO: 85 MT | Water: 120 MT",
        location: "Pelabuhan Soekarno-Hatta, Makassar",
        status: "Siap Delivery",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/containership.jpg",
        description: "Kapal kontainer feeder berkecepatan 14 knot, sangat efisien untuk mendukung konektivitas rute peti kemas domestik dan tol laut kawasan timur Indonesia. Berkapasitas 380 TEU dilengkapi 60 titik colokan reefer container untuk komoditas cold chain beku (seafood, daging, buah). Ruang kendali bridge terintegrasi dengan konsol navigasi modern, sistem pemantauan konsumsi bahan bakar otomatis, palka berdesain cell guides kokoh, serta riwayat perawatan mesin berkala yang terdokumentasi lengkap."
    },
    {
        id: "HN-BC2807",
        name: "MV. Hansai Fortune",
        category: "cargo",
        categoryLabel: "Handysize Bulk Carrier",
        year: 2014,
        flag: "Indonesia",
        registry: "Jakarta",
        classification: "ClassNK / BKI Dual Class",
        engine: "B&W Mitsui 6S42MC (6,480 BHP @ 136 RPM)",
        auxEngine: "3 x Yanmar 6HALN (400 kW)",
        dimensions: "LOA 169.26 m x B 27.20 m x D 13.60 m",
        draft: "9.80 m",
        capacity: "28,400 DWT (5 Palka / 4 x 30.5 Ton Cranes)",
        speed: "13.5 Knots",
        tankCapacity: "Heavy Fuel: 980 MT | Ballast: 9,200 CBM",
        location: "Pelabuhan Bojonegara / Merak, Banten",
        status: "Siap Inspeksi Drydock",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/bulk-carrier.jpg",
        description: "Kapal kargo curah kering ukuran Handysize mandiri (self-geared) dengan 4 unit electro-hydraulic deck crane kapasitas masing-masing 30.5 ton ditambah clamshell grabs 10 m³. Memungkinkan proses bongkar muat mandiri yang cepat di pelabuhan tanpa crane darat. Memiliki 5 palka luas berpenutup MacGregor hidrolik, sangat cocok untuk angkutan gandum, jagung, kedelai, pupuk, clinker semen, dan batubara. Tangki ballast telah disurvei ultrasonik dengan hasil ketebalan pelat optimal."
    },
    {
        id: "HN-CB4008",
        name: "FSV. Hansai Swift 01",
        category: "crew",
        categoryLabel: "Fast Crew Boat & Utility",
        year: 2023,
        flag: "Indonesia",
        registry: "Batam",
        classification: "BKI - High Speed Craft (HSC)",
        engine: "3 x Cummins KTA38-M2 (Total 4,050 BHP)",
        auxEngine: "2 x Cummins 4BT (50 kVA)",
        dimensions: "LOA 40.00 m x B 7.60 m x D 3.65 m",
        draft: "1.80 m",
        capacity: "80 Penumpang Reclining Seat + 45 Ton Deck Cargo",
        speed: "24 - 28 Knots Max Speed",
        tankCapacity: "Fuel: 45 m³ | Fresh Water: 25 m³",
        location: "Kabil Marine Base, Batam",
        status: "Unit Baru (Ready Prompt)",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/crew-luxury.jpg",
        description: "Kapal cepat transfer kru (Fast Support Vessel) berbadan aluminium kualitas marine grade 5083, menawarkan efisiensi bobot dan kelincahan manuver di perairan berombak. Mengusung konfigurasi 3 mesin utama Cummins bertenaga 4.050 BHP dan 3 fixed pitch propellers. Ruang penumpang eksekutif menampung 80 tempat duduk reclining ala kabin pesawat dengan AC sejuk, TV entertainment, toilet higienis, serta dek belakang seluas 90 m² untuk muatan kargo ringan/peralatan darurat."
    },
    {
        id: "HN-GC3509",
        name: "KM. Hansai Maritim",
        category: "cargo",
        categoryLabel: "General Cargo / Breakbulk",
        year: 2019,
        flag: "Indonesia",
        registry: "Semarang",
        classification: "BKI - Ocean Going",
        engine: "Yanmar 6N330-EN (3,500 HP @ 620 RPM)",
        auxEngine: "2 x Yanmar 6HAL2-N (180 kVA)",
        dimensions: "LOA 85.00 m x B 13.80 m x D 7.20 m",
        draft: "5.40 m",
        capacity: "3,500 DWT (2 Palka Box Shaped / 2 x 20T Cranes)",
        speed: "11.5 Knots",
        tankCapacity: "Fuel: 140 m³ | Fresh Water: 60 m³",
        location: "Pelabuhan Tanjung Emas, Semarang",
        status: "Siap Operasi",
        statusType: "ready",
        priceGuide: "Hubungi Sales (Nego)",
        image: "assets/ships/general-cargo.jpg",
        description: "Kapal kargo umum antarpulau berdesain box-shaped holds yang memudahkan penataan kargo kantong (semen, pupuk), besi ulir/profil, kayu lapis, serta palet logistik industri. Dilengkapi 2 unit crane pedestal berkapasitas 20 ton. Konsumsi bahan bakar sangat ekonomis dengan jangkauan jelajah hingga 3.000 mil laut. Kondisi kamar mesin rapi dan bersih, seluruh sertifikat keselamatan pelayaran dari Ditjen Hubla & BKI aktif berlaku."
    }
];

// Target Contacts
const HANSAI_CONTACT = {
    whatsapp: "6285150956644",
    email: "info@hansaiocean.com",
    phoneDisplay: "+62 851-5095-6644"
};

// State
let currentSelectedShip = null;
let currentCategoryFilter = "all";
let currentSearchTerm = "";
let currentSortOrder = "default";

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initShipsCatalog();
    initFiltersAndSearch();
    initModalEvents();
    initSellShipForm();
    initFaqAccordion();
    initMobileNav();
});

/* ======================================================
   CATALOG RENDERING & FILTERING
====================================================== */
function initShipsCatalog() {
    renderShipsList();
    updateCategoryCounts();
}

function getFilteredShips() {
    return SHIPS_DATABASE.filter(ship => {
        // Category match
        const matchesCategory = (currentCategoryFilter === 'all') || (ship.category === currentCategoryFilter);
        
        // Search term match
        const term = currentSearchTerm.toLowerCase().trim();
        const matchesSearch = !term || 
            ship.name.toLowerCase().includes(term) ||
            ship.id.toLowerCase().includes(term) ||
            ship.categoryLabel.toLowerCase().includes(term) ||
            ship.location.toLowerCase().includes(term) ||
            ship.classification.toLowerCase().includes(term) ||
            ship.engine.toLowerCase().includes(term) ||
            ship.year.toString().includes(term);

        return matchesCategory && matchesSearch;
    }).sort((a, b) => {
        if (currentSortOrder === 'year-desc') return b.year - a.year;
        if (currentSortOrder === 'year-asc') return a.year - b.year;
        if (currentSortOrder === 'name-asc') return a.name.localeCompare(b.name);
        return 0; // Default
    });
}

function renderShipsList() {
    const gridEl = document.getElementById('shipsGrid');
    if (!gridEl) return;

    const filtered = getFilteredShips();

    if (filtered.length === 0) {
        gridEl.innerHTML = `
            <div class="empty-ships-state">
                <svg viewBox="0 0 24 24" width="56" height="56" stroke="currentColor" stroke-width="1.5" fill="none">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <h3>Tidak Ada Kapal Ditemukan</h3>
                <p>Maaf, tidak ada unit kapal yang sesuai dengan pencarian "${currentSearchTerm}" atau filter kategori yang dipilih.</p>
                <button class="btn btn-primary ripple" onclick="resetFilters()">Reset Filter & Cari Ulang</button>
            </div>
        `;
        return;
    }

    gridEl.innerHTML = filtered.map(ship => `
        <div class="ship-card" data-ship-id="${ship.id}" onclick="openShipModal('${ship.id}')">
            <div class="ship-card-image-wrapper">
                <img src="${ship.image}" alt="${ship.name}" class="ship-card-image" loading="lazy">
                <span class="ship-badge-floating">${ship.id}</span>
                <span class="ship-status-badge">${ship.status}</span>
                <div class="ship-card-overlay-hint">
                    <span>Klik untuk melihat deskripsi lengkap & spesifikasi</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
            <div class="ship-card-content">
                <div class="ship-type-tag">${ship.categoryLabel}</div>
                <h3 class="ship-title">${ship.name}</h3>
                
                <div class="ship-specs-list">
                    <div class="spec-item">
                        <span class="spec-label">Tahun Buat</span>
                        <span class="spec-val">${ship.year}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Klasifikasi</span>
                        <span class="spec-val" title="${ship.classification}">${ship.classification.split(' ')[0]}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Dimensi / LOA</span>
                        <span class="spec-val">${ship.dimensions.split('x')[0].trim()}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Daya / Kapasitas</span>
                        <span class="spec-val" title="${ship.capacity}">${ship.capacity}</span>
                    </div>
                </div>

                <div class="ship-location-row">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${ship.location}</span>
                </div>

                <div class="ship-card-footer">
                    <div class="ship-price-hint">
                        <span>Penawaran:</span>
                        <span class="price-value">${ship.priceGuide}</span>
                    </div>
                    <button class="btn btn-primary ripple btn-view-details" onclick="event.stopPropagation(); openShipModal('${ship.id}')">
                        Detail & Quote
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCategoryCounts() {
    const counts = { all: SHIPS_DATABASE.length };
    SHIPS_DATABASE.forEach(s => {
        counts[s.category] = (counts[s.category] || 0) + 1;
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
        const cat = chip.getAttribute('data-category');
        const countSpan = chip.querySelector('.chip-count');
        if (countSpan && cat) {
            countSpan.textContent = counts[cat] || 0;
        }
    });
}

function initFiltersAndSearch() {
    const searchInput = document.getElementById('shipSearchInput');
    const sortSelect = document.getElementById('shipSortSelect');
    const filterChips = document.querySelectorAll('.filter-chip');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            renderShipsList();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSortOrder = e.target.value;
            renderShipsList();
        });
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategoryFilter = chip.getAttribute('data-category') || 'all';
            renderShipsList();
        });
    });
}

function resetFilters() {
    currentCategoryFilter = 'all';
    currentSearchTerm = '';
    currentSortOrder = 'default';

    const searchInput = document.getElementById('shipSearchInput');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('shipSortSelect');
    if (sortSelect) sortSelect.value = 'default';

    document.querySelectorAll('.filter-chip').forEach(chip => {
        if (chip.getAttribute('data-category') === 'all') {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    renderShipsList();
}

/* ======================================================
   SHIP DETAIL MODAL & DUAL QUOTE (WA + EMAIL)
====================================================== */
function openShipModal(shipId) {
    const ship = SHIPS_DATABASE.find(s => s.id === shipId);
    if (!ship) return;

    currentSelectedShip = ship;

    const modalOverlay = document.getElementById('shipModalOverlay');
    const modalTitle = document.getElementById('modalShipTitle');
    const modalMeta = document.getElementById('modalShipMeta');
    const modalImage = document.getElementById('modalShipImage');
    const modalDesc = document.getElementById('modalShipDesc');
    const modalBadges = document.getElementById('modalShipBadges');
    const modalSpecsGrid = document.getElementById('modalSpecsGrid');

    // Title & Meta
    if (modalTitle) modalTitle.textContent = ship.name;
    if (modalMeta) {
        modalMeta.innerHTML = `
            <span><strong>ID Listing:</strong> ${ship.id}</span>
            <span>•</span>
            <span><strong>Tipe:</strong> ${ship.categoryLabel}</span>
            <span>•</span>
            <span><strong>Status:</strong> ${ship.status}</span>
        `;
    }

    // Image
    if (modalImage) {
        modalImage.src = ship.image;
        modalImage.alt = ship.name;
    }

    // Description
    if (modalDesc) {
        modalDesc.textContent = ship.description;
    }

    // Badges
    if (modalBadges) {
        modalBadges.innerHTML = `
            <span class="modal-badge badge-blue">Tahun: ${ship.year}</span>
            <span class="modal-badge badge-green">Bendera: ${ship.flag}</span>
            <span class="modal-badge badge-purple">Kelas: ${ship.classification.split('-')[0]}</span>
            <span class="modal-badge badge-amber">Pelabuhan: ${ship.location}</span>
        `;
    }

    // Specifications Grid
    if (modalSpecsGrid) {
        modalSpecsGrid.innerHTML = `
            <div class="spec-row-card">
                <span class="row-label">Nama Kapal & ID</span>
                <span class="row-value">${ship.name} (${ship.id})</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Jenis / Kategori</span>
                <span class="row-value">${ship.categoryLabel}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Tahun Pembuatan</span>
                <span class="row-value">${ship.year}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Klasifikasi & Notasi</span>
                <span class="row-value">${ship.classification}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Bendera & Registrasi</span>
                <span class="row-value">${ship.flag} (${ship.registry})</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Dimensi Utama (LOA x B x D)</span>
                <span class="row-value">${ship.dimensions}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Draft Maksimal</span>
                <span class="row-value">${ship.draft}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Daya Muat / Kapasitas</span>
                <span class="row-value">${ship.capacity}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Mesin Utama (Main Engine)</span>
                <span class="row-value">${ship.engine}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Mesin Bantu (Aux Engine)</span>
                <span class="row-value">${ship.auxEngine}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Kecepatan Jelajah (Speed)</span>
                <span class="row-value">${ship.speed}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Kapasitas Tangki</span>
                <span class="row-value">${ship.tankCapacity}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Lokasi Saat Ini</span>
                <span class="row-value">${ship.location}</span>
            </div>
            <div class="spec-row-card">
                <span class="row-label">Status Kesiapan</span>
                <span class="row-value" style="color: #10b981;">${ship.status}</span>
            </div>
        `;
    }

    // Set Quick Buttons for WA & Email with defaults
    updateModalActionButtons(ship);

    // Open Modal
    if (modalOverlay) {
        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function updateModalActionButtons(ship, customData = {}) {
    const waBtn = document.getElementById('modalDirectWaBtn');
    const emailBtn = document.getElementById('modalDirectEmailBtn');

    const userName = customData.name || 'Calon Pembeli / Investor Maritim';
    const userCompany = customData.company || 'Pribadi / Perusahaan';
    const userPhone = customData.phone || '-';
    const userEmail = customData.email || '-';
    const userPlan = customData.plan || 'Pembelian Unit Kapal (Purchase)';
    const userNotes = customData.notes || 'Mohon kirimkan surat penawaran harga resmi (Quotation), spesifikasi Q88 / particulars lengkap, dan jadwal inspeksi fisik kapal.';

    // Generate WhatsApp Message
    const waMessage = 
`Halo Tim Ship Sale & Purchase (S&P) Hansai Ocean Industries Ltd,

Saya ingin meminta *Surat Penawaran Resmi (Formal Quotation)* untuk kapal berikut:

🚢 *DATA ARMADA KAPAL:*
• Nama Kapal: *${ship.name}*
• ID Listing: *${ship.id}*
• Jenis/Kategori: ${ship.categoryLabel}
• Tahun Buat: ${ship.year}
• Klasifikasi: ${ship.classification}
• Dimensi: ${ship.dimensions}
• Kapasitas / Daya: ${ship.capacity}
• Mesin Utama: ${ship.engine}
• Lokasi Sandar: ${ship.location}
• Status: ${ship.status}

👤 *INFORMASI PEMINAT:*
• Nama Kontak: ${userName}
• Perusahaan: ${userCompany}
• Nomor Kontak: ${userPhone}
• Rencana Transaksi: ${userPlan}
• Kebutuhan / Catatan: ${userNotes}

Mohon dapat diinformasikan penawaran harga dan prosedur inspeksi pre-purchase / sea trial. Terima kasih!`;

    const waUrl = `https://wa.me/${HANSAI_CONTACT.whatsapp}?text=${encodeURIComponent(waMessage)}`;
    if (waBtn) waBtn.href = waUrl;

    // Generate Email Subject & Body
    const emailSubject = `Permintaan Penawaran Resmi Kapal: ${ship.name} (${ship.id}) - Hansai Ocean S&P`;
    const emailBody = 
`Kepada Yth.
Tim Ship Sale & Purchase (S&P) Brokerage
Hansai Ocean Industries Ltd
Email: ${HANSAI_CONTACT.email}
Website: www.hansaiocean.com

Dengan hormat,

Sehubungan dengan daftar armada kapal yang tersedia pada platform Hansai Ocean Industries, saya berminat untuk mengajukan permintaan penawaran harga resmi (Price Quotation) dan dokumen teknis lengkap untuk kapal berikut:

--------------------------------------------------
DATA KAPAL YANG DIMINATI:
--------------------------------------------------
Nama Kapal      : ${ship.name}
ID Listing      : ${ship.id}
Jenis Kapal     : ${ship.categoryLabel}
Tahun Buat      : ${ship.year}
Klasifikasi     : ${ship.classification}
Bendera         : ${ship.flag} (${ship.registry})
Dimensi Utama   : ${ship.dimensions}
Mesin Utama     : ${ship.engine}
Daya / Kapasitas: ${ship.capacity}
Lokasi Terkini  : ${ship.location}
Status Kesiapan : ${ship.status}

--------------------------------------------------
PROFIL PEMINAT & KEBUTUHAN:
--------------------------------------------------
Nama Kontak     : ${userName}
Perusahaan      : ${userCompany}
Telepon/WA      : ${userPhone}
Email Kontak    : ${userEmail}
Rencana Akuisisi: ${userPlan}
Catatan Tambahan: 
${userNotes}

--------------------------------------------------
DOKUMEN YANG DIMOHONKAN:
1. Surat Penawaran Resmi (Formal Quotation) & Ketentuan Pembayaran
2. Ship Particulars / Q88 & General Arrangement Plan (GA Plan)
3. Ringkasan Hasil Survei Ketebalan Plat Lambung & Riwayat Drydock
4. Prosedur dan Jadwal Pengajuan Inspeksi Fisik (Pre-Purchase Survey)

Demikian permohonan ini kami sampaikan. Kami menantikan konfirmasi dan tanggapan dari tim Hansai Ocean Industries.

Hormat kami,
${userName}
${userCompany}`;

    const mailtoUrl = `mailto:${HANSAI_CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    if (emailBtn) emailBtn.href = mailtoUrl;
}

function closeShipModal() {
    const modalOverlay = document.getElementById('shipModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function initModalEvents() {
    const modalOverlay = document.getElementById('shipModalOverlay');
    const closeBtn = document.getElementById('closeShipModalBtn');
    const customQuoteForm = document.getElementById('modalCustomQuoteForm');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeShipModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeShipModal();
            }
        });
    }

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('show')) {
            closeShipModal();
        }
    });

    // Custom Quote Form Sync inside Modal
    if (customQuoteForm) {
        const syncFormInputs = () => {
            if (!currentSelectedShip) return;
            const customData = {
                name: document.getElementById('modalFormName')?.value,
                company: document.getElementById('modalFormCompany')?.value,
                phone: document.getElementById('modalFormPhone')?.value,
                email: document.getElementById('modalFormEmail')?.value,
                plan: document.getElementById('modalFormPlan')?.value,
                notes: document.getElementById('modalFormNotes')?.value
            };
            updateModalActionButtons(currentSelectedShip, customData);
        };

        customQuoteForm.addEventListener('input', syncFormInputs);
        customQuoteForm.addEventListener('change', syncFormInputs);

        // Buttons inside custom form
        const formSubmitWa = document.getElementById('modalFormSendWa');
        const formSubmitEmail = document.getElementById('modalFormSendEmail');

        if (formSubmitWa) {
            formSubmitWa.addEventListener('click', (e) => {
                e.preventDefault();
                syncFormInputs();
                const waBtn = document.getElementById('modalDirectWaBtn');
                if (waBtn && waBtn.href) {
                    window.open(waBtn.href, '_blank');
                }
            });
        }

        if (formSubmitEmail) {
            formSubmitEmail.addEventListener('click', (e) => {
                e.preventDefault();
                syncFormInputs();
                const emailBtn = document.getElementById('modalDirectEmailBtn');
                if (emailBtn && emailBtn.href) {
                    window.location.href = emailBtn.href;
                }
            });
        }
    }
}

/* ======================================================
   SELL YOUR SHIP FORM (TITIP JUAL / BROKERAGE)
====================================================== */
function initSellShipForm() {
    const form = document.getElementById('sellShipForm');
    const sendWaBtn = document.getElementById('sellShipSendWaBtn');
    const sendEmailBtn = document.getElementById('sellShipSendEmailBtn');

    if (!form) return;

    function getSellShipFormData() {
        return {
            ownerName: document.getElementById('sellOwnerName')?.value.trim() || 'Pemilik Kapal',
            company: document.getElementById('sellCompany')?.value.trim() || '-',
            phone: document.getElementById('sellPhone')?.value.trim() || '-',
            email: document.getElementById('sellEmail')?.value.trim() || '-',
            shipName: document.getElementById('sellShipName')?.value.trim() || 'Kapal Dijual',
            shipType: document.getElementById('sellShipType')?.value || 'Tugboat',
            year: document.getElementById('sellYear')?.value || '-',
            classification: document.getElementById('sellClass')?.value || 'BKI',
            dimensions: document.getElementById('sellDimensions')?.value.trim() || '-',
            engine: document.getElementById('sellEngine')?.value.trim() || '-',
            location: document.getElementById('sellLocation')?.value.trim() || '-',
            expectedPrice: document.getElementById('sellExpectedPrice')?.value.trim() || 'Negosiasi',
            notes: document.getElementById('sellNotes')?.value.trim() || 'Mohon bantuan tim Hansai Ocean untuk pemasaran kapal.'
        };
    }

    if (sendWaBtn) {
        sendWaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const data = getSellShipFormData();

            const waText = 
`Halo Tim Hansai Ocean S&P Brokerage,

Saya ingin mengajukan *PENDAFTARAN / TITIP JUAL KAPAL* melalui Hansai Ocean:

🚢 *DATA KAPAL YANG INGIN DIJUAL:*
• Nama Kapal: *${data.shipName}*
• Jenis/Tipe: ${data.shipType}
• Tahun Pembuatan: ${data.year}
• Klasifikasi: ${data.classification}
• Dimensi: ${data.dimensions}
• Mesin Utama: ${data.engine}
• Lokasi Sandar/Inspeksi: ${data.location}
• Ekspektasi Harga: ${data.expectedPrice}

👤 *DATA PEMILIK / KUASA JUAL:*
• Nama: ${data.ownerName}
• Perusahaan: ${data.company}
• No. WhatsApp/HP: ${data.phone}
• Email: ${data.email}
• Catatan Kondisi: ${data.notes}

Mohon dapat dihubungi untuk verifikasi data kapal dan penandatanganan perjanjian listing brokerage. Terima kasih.`;

            window.open(`https://wa.me/${HANSAI_CONTACT.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');
        });
    }

    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const data = getSellShipFormData();

            const subject = `Pendaftaran Titip Jual Kapal: ${data.shipName} (${data.shipType}) - ${data.ownerName}`;
            const body = 
`Kepada Yth.
Tim S&P Brokerage & Valuasi Kapal
Hansai Ocean Industries Ltd
Email: ${HANSAI_CONTACT.email}

Dengan hormat,

Melalui email ini, saya mengajukan data kapal kami untuk dipasarkan dan dibantu proses penjualan / charter melalui jaringan S&P Hansai Ocean Industries:

--------------------------------------------------
SPESIFIKASI KAPAL YANG AKAN DIJUAL:
--------------------------------------------------
Nama Kapal       : ${data.shipName}
Kategori / Jenis : ${data.shipType}
Tahun Pembuatan  : ${data.year}
Klasifikasi      : ${data.classification}
Dimensi (LOAxBxD): ${data.dimensions}
Mesin Utama      : ${data.engine}
Posisi / Pelabuhan: ${data.location}
Estimasi Harga   : ${data.expectedPrice}

--------------------------------------------------
DATA PEMILIK / BROKER REPRESENTATIVE:
--------------------------------------------------
Nama Lengkap     : ${data.ownerName}
Perusahaan       : ${data.company}
Nomor WhatsApp   : ${data.phone}
Email Kontak     : ${data.email}

Keterangan Tambahan & Kelengkapan Dokumen:
${data.notes}

Mohon informasi mengenai prosedur listing, evaluasi teknis/valuasi kapal, dan jadwal konsultasi lebih lanjut.

Hormat saya,
${data.ownerName}
${data.company}`;

            window.location.href = `mailto:${HANSAI_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
}

/* ======================================================
   FAQ ACCORDION
====================================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        }
    });
}

/* ======================================================
   MOBILE NAVBAR & SCROLL BEHAVIOR
====================================================== */
function initMobileNav() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Set Copyright Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
