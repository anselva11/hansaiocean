/* ======================================================
   HANSAI OCEAN - CONTAINER RENTAL JAVASCRIPT
====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initContainerCalculator();
    initFaqAccordion();
    initContainerFilter();
    initRentalForm();
});

/* ======================================================
   1. RENTAL CALCULATOR LOGIC
====================================================== */
const PRICING_DATA = {
    '20ft': {
        name: '20 Feet Container',
        dry: 1500000,
        office: 3000000,
        reefer: 6500000,
        workshop: 4000000
    },
    '40ft': {
        name: '40 Feet High Cube Container',
        dry: 2500000,
        office: 5000000,
        reefer: 10500000,
        workshop: 7000000
    },
    '60ft': {
        name: '60 Feet Modular Custom Container',
        dry: 4800000,
        office: 9500000,
        reefer: 18000000,
        workshop: 12000000
    }
};

const DURATION_DISCOUNTS = {
    '1': 0,
    '3': 0.05,
    '6': 0.10,
    '12': 0.15
};

const MOBILIZATION_FEE = 2500000; // Per unit
const INSURANCE_FEE_MONTHLY = 250000; // Per unit per month

function formatIDR(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(amount);
}

function initContainerCalculator() {
    const sizeSelect = document.getElementById('calcSize');
    const typeSelect = document.getElementById('calcType');
    const durationSelect = document.getElementById('calcDuration');
    const qtyInput = document.getElementById('calcQty');
    const insuranceCheckbox = document.getElementById('calcInsurance');
    const mobilizationCheckbox = document.getElementById('calcMobilization');

    if (!sizeSelect || !typeSelect || !durationSelect || !qtyInput) return;

    // Display elements
    const unitPriceEl = document.getElementById('calcUnitPrice');
    const subtotalEl = document.getElementById('calcSubtotal');
    const discountEl = document.getElementById('calcDiscount');
    const addonsEl = document.getElementById('calcAddons');
    const grandTotalEl = document.getElementById('calcGrandTotal');
    const durationTextEl = document.getElementById('calcSummaryDuration');
    const qtyTextEl = document.getElementById('calcSummaryQty');
    const waButton = document.getElementById('calcWhatsAppBtn');

    function calculate() {
        const size = sizeSelect.value;
        const type = typeSelect.value;
        const duration = parseInt(durationSelect.value, 10) || 1;
        const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
        const hasInsurance = insuranceCheckbox ? insuranceCheckbox.checked : false;
        const hasMobilization = mobilizationCheckbox ? mobilizationCheckbox.checked : false;

        const baseMonthlyRate = PRICING_DATA[size][type];
        const rawMonthlySubtotal = baseMonthlyRate * qty * duration;
        
        // Discount
        const discountRate = DURATION_DISCOUNTS[duration.toString()] || 0;
        const discountAmount = rawMonthlySubtotal * discountRate;
        const discountedSubtotal = rawMonthlySubtotal - discountAmount;

        // Addons
        let addonsTotal = 0;
        if (hasInsurance) {
            addonsTotal += (INSURANCE_FEE_MONTHLY * qty * duration);
        }
        if (hasMobilization) {
            addonsTotal += (MOBILIZATION_FEE * qty);
        }

        const grandTotal = discountedSubtotal + addonsTotal;

        // Render UI
        if (unitPriceEl) unitPriceEl.textContent = `${formatIDR(baseMonthlyRate)} / bln`;
        if (subtotalEl) subtotalEl.textContent = formatIDR(rawMonthlySubtotal);
        if (discountEl) {
            if (discountAmount > 0) {
                discountEl.textContent = `- ${formatIDR(discountAmount)} (${discountRate * 100}%)`;
                discountEl.parentElement.style.display = 'flex';
            } else {
                discountEl.parentElement.style.display = 'none';
            }
        }
        if (addonsEl) addonsEl.textContent = formatIDR(addonsTotal);
        if (grandTotalEl) grandTotalEl.textContent = formatIDR(grandTotal);
        if (durationTextEl) durationTextEl.textContent = `${duration} Bulan`;
        if (qtyTextEl) qtyTextEl.textContent = `${qty} Unit`;

        // Update WhatsApp link
        if (waButton) {
            const sizeLabel = PRICING_DATA[size].name;
            const typeLabel = typeSelect.options[typeSelect.selectedIndex].text;
            const message = encodeURIComponent(
                `Halo Hansai Ocean Industries,\nSaya ingin menyewa kontainer dengan estimasi berikut:\n\n` +
                `• Ukuran: ${sizeLabel}\n` +
                `• Tipe: ${typeLabel}\n` +
                `• Jumlah: ${qty} Unit\n` +
                `• Durasi: ${duration} Bulan\n` +
                `• Asuransi: ${hasInsurance ? 'Ya' : 'Tidak'}\n` +
                `• Mobilisasi Trailer/Crane: ${hasMobilization ? 'Ya' : 'Tidak'}\n` +
                `• Estimasi Total: ${formatIDR(grandTotal)}\n\n` +
                `Mohon informasi ketersediaan unit dan penerbitan Quotation / Invoice resmi. Terima kasih.`
            );
            waButton.href = `https://wa.me/6285150956644?text=${message}`;
        }
    }

    // Event listeners
    [sizeSelect, typeSelect, durationSelect, qtyInput].forEach(el => {
        el.addEventListener('change', calculate);
        el.addEventListener('input', calculate);
    });

    if (insuranceCheckbox) insuranceCheckbox.addEventListener('change', calculate);
    if (mobilizationCheckbox) mobilizationCheckbox.addEventListener('change', calculate);

    // Initial calculation
    calculate();
}

/* ======================================================
   2. FAQ ACCORDION
====================================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // If not active, open clicked
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
                }
            }
        });
    });
}

/* ======================================================
   3. CONTAINER FILTER TABS
====================================================== */
function initContainerFilter() {
    const tabButtons = document.querySelectorAll('.filter-tab-btn');
    const containerCards = document.querySelectorAll('.container-card-item');

    if (!tabButtons.length || !containerCards.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            containerCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ======================================================
   4. RENTAL INQUIRY FORM
====================================================== */
function initRentalForm() {
    const form = document.getElementById('rentalInquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('rfqName').value.trim();
        const company = document.getElementById('rfqCompany').value.trim();
        const phone = document.getElementById('rfqPhone').value.trim();
        const email = document.getElementById('rfqEmail').value.trim();
        const size = document.getElementById('rfqSize').value;
        const type = document.getElementById('rfqType').value;
        const duration = document.getElementById('rfqDuration').value;
        const location = document.getElementById('rfqLocation').value.trim();
        const notes = document.getElementById('rfqNotes').value.trim();

        const modal = document.getElementById('quoteModal');
        const modalBody = document.getElementById('quoteModalBody');
        const modalWaBtn = document.getElementById('quoteModalWaBtn');

        const message = 
            `*PENGAJUAN SEWA KONTAINER HANSAI OCEAN*\n` +
            `• Nama: ${name}\n` +
            `• Perusahaan: ${company || '-'}\n` +
            `• No. Telepon/WA: ${phone}\n` +
            `• Email: ${email}\n` +
            `• Ukuran: ${size}\n` +
            `• Tipe Unit: ${type}\n` +
            `• Durasi Sewa: ${duration}\n` +
            `• Lokasi Proyek: ${location}\n` +
            `• Catatan Khusus: ${notes || '-'}\n\n` +
            `Mohon diterbitkan penawaran harga resmi (Quotation).`;

        if (modal && modalBody) {
            modalBody.innerHTML = `
                <div class="summary-check-icon">✓</div>
                <h4>Pengajuan Anda Siap Dikirim!</h4>
                <p>Data pengajuan sewa kontainer Anda telah tersimpan. Silakan lanjutkan ke WhatsApp Customer Service kami untuk respon kilat dan penerbitan penawaran resmi.</p>
                <div class="summary-details">
                    <p><strong>Nama:</strong> ${name} (${company || 'Individu'})</p>
                    <p><strong>Spesifikasi:</strong> ${size} - ${type}</p>
                    <p><strong>Durasi & Lokasi:</strong> ${duration} / ${location}</p>
                </div>
            `;
            if (modalWaBtn) {
                modalWaBtn.href = `https://wa.me/6285150956644?text=${encodeURIComponent(message)}`;
            }
            modal.classList.add('show');
        } else {
            // Direct fallback
            window.open(`https://wa.me/6285150956644?text=${encodeURIComponent(message)}`, '_blank');
        }
    });

    // Close modal handlers
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('quoteModal');
            if (modal) modal.classList.remove('show');
        });
    });
}
