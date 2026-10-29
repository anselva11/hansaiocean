/* ======================================================
   HANSAI OCEAN INDUSTRIES - CAREER & RECRUITMENT PORTAL
   JAVASCRIPT ENGINE
   ====================================================== */

// Comprehensive Job Vacancies Database
const jobVacanciesData = [
    {
        id: "naval-architect",
        title: "Senior Naval Architect & Marine Engineer",
        department: "Engineering & Design",
        departmentKey: "engineering",
        location: "Batam Shipyard, Kepulauan Riau",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Senior (5+ Tahun)",
        experienceKey: "senior",
        salary: "Kompetitif + Tunjangan Galangan & Proyek",
        deadline: "30 November 2026",
        status: "Urgent Hiring",
        badgeClass: "badge-urgent",
        shortDesc: "Memimpin perancangan lambung kapal baru, kalkulasi hidrostatik & stabilitas, optimasi hambatan kapal, dan persetujuan klasifikasi maritim BKI/IACS.",
        skills: ["Naval Architecture", "Maxsurf", "AutoCAD 3D", "BKI/IACS Rules", "Ship Stability", "Hydrodynamics"],
        overview: "Sebagai Senior Naval Architect di Hansai Ocean Batam Shipyard, Anda akan memegang peran sentral dalam mendesain armada kapal niaga dan lepas pantai modern seperti Tugboat, Tongkang, Oil Tanker, dan Crew Boat. Anda berkoordinasi langsung dengan tim galangan, klasifikasi maritim, dan pemilik kapal internasional.",
        responsibilities: [
            "Merancang lines plan lambung kapal, general arrangement (GA), dan konstruksi profil kapal baru.",
            "Melakukan kalkulasi stabilitas utuh & bocor (intact & damage stability) sesuai regulasi IMO dan BKI/IACS.",
            "Menghitung estimasi daya mesin induk, hambatan kapal (resistance calculation), dan efisiensi propulsi.",
            "Menyusun dokumen teknis (Trim & Stability Booklet, Loading Manual) untuk persetujuan klasifikasi maritim.",
            "Melakukan pengawasan uji coba berlayar (Sea Trial) dan uji kemiringan kapal (Inclining Test) di galangan."
        ],
        requirements: [
            "Pendidikan minimal S1 / S2 Teknik Perkapalan (Naval Architecture) dari universitas terkemuka.",
            "Pengalaman kerja minimal 5 tahun di galangan kapal (shipyard) atau konsultan desain maritim.",
            "Mahir mengoperasikan software perkapalan: Maxsurf, Rhinoceros, AutoCAD, Napa, atau ShipConstructor.",
            "Memahami regulasi BKI, ABS, Lloyd's Register, BV, SOLAS, dan MARPOL.",
            "Memiliki kemampuan analisis problem solving yang kuat dan komunikasi bahasa Inggris yang baik."
        ],
        benefits: [
            "Gaji pokok kompetitif dengan tunjangan penempatan Batam Shipyard.",
            "Fasilitas mess representatif ber-AC dan transportasi antar-jemput.",
            "BPJS Kesehatan, Ketenagakerjaan (JKK, JKM, JHT, JP), dan asuransi tambahan.",
            "Bonus tahunan dan insentif keberhasilan proyek galangan."
        ]
    },
    {
        id: "shipyard-superintendent",
        title: "Shipyard Superintendent / Manajer Proyek Galangan",
        department: "Galangan & Operasi",
        departmentKey: "yard",
        location: "Batam Shipyard, Kepulauan Riau",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Senior (5+ Tahun)",
        experienceKey: "senior",
        salary: "Kompetitif + Tunjangan Manajemen Proyek",
        deadline: "15 Desember 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Mengelola seluruh siklus newbuilding & repair kapal di drydock/graving dock, memastikan target jadwal, anggaran, keselamatan K3, dan mutu terwujud.",
        skills: ["Ship Repair", "Drydock Management", "Project Management", "Hull & Machinery", "Budget Control", "BKI Class"],
        overview: "Superintendent bertanggung jawab mengendalikan operasi fabrikasi, perbaikan lambung, reparasi mesin, dan docking kapal di galangan Hansai Ocean Batam. Peran ini menuntut kepemimpinan lapangan tangguh dan koordinasi teknis tinggi dengan surveyor kapal.",
        responsibilities: [
            "Memimpin jadwal docking, blasting, pengecatan, perbaikan lambung, dan pemasangan permesinan kapal.",
            "Mengontrol budget proyek, alokasi material plat baja, dan tenaga kerja (welder, fitter, rigger, mekanik).",
            "Menjadi representatif galangan dalam inspeksi bersama Ship Owner Representative dan Klasifikasi Maritim.",
            "Menegakkan standar HSE/K3 'Zero Accident' di seluruh area graving dock dan slipway.",
            "Menyusun laporan kemajuan harian dan dokumentasi serah terima kapal (Handover)."
        ],
        requirements: [
            "Pendidikan minimal D3 / S1 Teknik Perkapalan, Teknik Sistem Perkapalan (Marine Engineering), atau Teknik Mesin.",
            "Pengalaman kerja minimal 5-7 tahun di galangan kapal komersial (newbuilding atau ship repair).",
            "Memahami proses drydocking, shaft alignment, rudders, rudder pintle, propeller overhaul, dan sea chest.",
            "Kepemimpinan lapangan yang tegas, berorientasi target waktu pengiriman kapal.",
            "Bersedia bertempat tinggal di Batam, Kepulauan Riau."
        ],
        benefits: [
            "Paket kompensasi eksekutif proyek galangan dan tunjangan perumahan di Batam.",
            "Kendaraan dinas operasional galangan.",
            "Asuransi kesehatan lengkap keluarga & BPJS Ketenagakerjaan.",
            "Pelatihan sertifikasi manajemen proyek maritim berstandar internasional."
        ]
    },
    {
        id: "marine-surveyor-qaqc",
        title: "QA/QC Inspector & Senior Marine Surveyor",
        department: "QA/QC & Inspeksi",
        departmentKey: "qaqc",
        location: "Batam Shipyard & Jakarta",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan Sertifikasi",
        deadline: "10 Desember 2026",
        status: "Urgent Hiring",
        badgeClass: "badge-urgent",
        shortDesc: "Melakukan inspeksi mutu pengelasan, Ultrasonic Thickness Gauging (UT), NDT testing, dan survei kelayakan kapal pra-transaksi jual beli armada.",
        skills: ["NDT Level II", "WPS & PQR", "UT Thickness", "Welding Inspection", "Coating Inspection (NACE)", "BKI Standard"],
        overview: "Sebagai ujung tombak kendali mutu PT Hansai Ocean Industries, QA/QC Inspector memastikan setiap sambungan las lambung, ketebalan plat, lapisan cat anti-fouling, dan instalasi mekanikal memenuhi standar ketat IACS serta BKI.",
        responsibilities: [
            "Melaksanakan Non-Destructive Testing (NDT) meliputi MPI, PT, UT, dan interpretasi film Radiographic Test (RT).",
            "Melakukan Ultrasonic Thickness Measurement (UTM) pada lambung kapal untuk docking repair dan survey S&P.",
            "Memverifikasi WPS (Welding Procedure Specification) dan kualifikasi welder (Welder Performance Qualification).",
            "Inspeksi sandblasting dan coating surface profile (DFT test, Holiday test) sesuai standar ISO 8501 / SSPC.",
            "Menerbitkan Inspection Release Certificate dan laporan Non-Conformance Report (NCR) bila ada deviasi."
        ],
        requirements: [
            "Pendidikan minimal D3 / S1 Teknik Mesin, Teknik Perkapalan, atau Metalurgi.",
            "Memiliki sertifikat NDT Level II (MT/PT/UT) yang masih aktif (ASNT / B4T / CSWIP).",
            "Pengalaman minimal 3 tahun sebagai QA/QC Inspector di galangan kapal, struktur offshore, atau EPCI maritim.",
            "Familiar dengan code ASME Sec IX, AWS D1.1, dan Rules of BKI for Hull.",
            "Teliti, jujur, memiliki integritas tinggi dan ketajaman teknis."
        ],
        benefits: [
            "Gaji kompetitif dengan tunjangan kepemilikan sertifikasi NDT/Welding Inspector.",
            "Tunjangan perjalanan dinas untuk survei armada kapal di berbagai pelabuhan Indonesia.",
            "Fasilitas perlengkapan APD keselamatan terlengkap.",
            "BPJS Kesehatan dan Ketenagakerjaan."
        ]
    },
    {
        id: "welder-6g-specialist",
        title: "Welder 6G & SMAW / FCAW Specialist",
        department: "Galangan & Operasi",
        departmentKey: "yard",
        location: "Batam Shipyard & Surabaya",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Gaji Pokok + Uang Lembur (Overtime) + Tunjangan Keterampilan",
        deadline: "20 Desember 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Pengerjaan pengelasan struktur baja kapal kelas tinggi (plat lambung, double bottom, tangki kargo minyak, dan pipa tekanan tinggi) posisi 6G.",
        skills: ["Welder 6G", "SMAW", "FCAW", "GMAW", "Hull Plating", "Piping Welding"],
        overview: "Kami membuka peluang bagi para pengelas berpengalaman (Welder 6G / 4G) yang berkomitmen tinggi terhadap kerapian dan kekuatan hasil las pada konstruksi kapal baru dan reparasi tangki kapal di Hansai Ocean Yard.",
        responsibilities: [
            "Melakukan pengelasan posisi 1G hingga 6G pada plat tebal dan pipa baja laut (marine grade steel grade A, B, AH36, DH36).",
            "Menerapkan teknik pengelasan FCAW, SMAW, dan GTAW sesuai Welding Procedure Specification (WPS).",
            "Menjaga standar kualitas hasil las bebas cacat (porosity, undercut, lack of fusion, cracking) saat lolos NDT/X-ray.",
            "Mematuhi kaidah keselamatan kerja galangan kapal (penggunaan APD lengkap, hot work permit, safety harness)."
        ],
        requirements: [
            "Pendidikan minimal SMK Jurusan Pengelasan / Fabrikasi Logam atau setara.",
            "Memiliki Sertifikat Welder 6G / 4G dari BKI, Migas, BNSP, atau IACS Class yang masih aktif.",
            "Pengalaman kerja minimal 2-4 tahun di galangan kapal atau fabrikasi boiler/struktur offshore.",
            "Mampu membaca simbol las (welding symbols) pada gambar kerja konstruksi kapal.",
            "Sehat jasmani, mata normal (tidak buta warna), dan tahan bekerja di ketinggian maupun confined space."
        ],
        benefits: [
            "Gaji pokok menarik ditambah perhitungan lembur (overtime) reguler galangan.",
            "Fasilitas makan siang dan mess di area galangan Batam.",
            "BPJS Ketenagakerjaan perlindungan penuh kecelakaan kerja.",
            "Pembaruan berkala sertifikasi kompetensi las yang dibiayai perusahaan."
        ]
    },
    {
        id: "piping-outfitting-engineer",
        title: "Marine Piping & Outfitting Engineer",
        department: "Engineering & Design",
        departmentKey: "engineering",
        location: "Batam Shipyard, Kepulauan Riau",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan Keahlian",
        deadline: "05 Desember 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Merancang dan mensupervisi sistem perpipaan kapal (Ballast, Bilge, Fuel Oil, Cooling Sea Water, Fire Fighting) dan outfitting dek.",
        skills: ["Marine Piping", "P&ID", "AutoCAD Plant 3D", "Pipe Stress Analysis", "Outfitting", "Class Approval"],
        overview: "Engineer Perpipaan bertanggung jawab mendesain rute pipa kamar mesin kapal (Engine Room Layout), sistem bunker bahan bakar, sistem air balas, dan peralatan tambat di geladak kapal niaga Hansai Ocean.",
        responsibilities: [
            "Membuat diagram P&ID (Piping and Instrumentation Diagram) dan gambar isometrik 3D kamar mesin.",
            "Menghitung head pompa, diameter pipa, drop tekanan, dan pemilihan material valve & fitting kelautan.",
            "Memastikan desain sistem perpipaan mematuhi ketentuan BKI, SOLAS, dan International Sewage/Pollution Rules.",
            "Memberikan panduan teknis kepada mandor pipa di lapangan saat instalasi modul perpipaan kapal.",
            "Menyaksikan hydrostatic pressure testing pada sistem pipa sebelum pengoperasian mesin kapal."
        ],
        requirements: [
            "Pendidikan S1 Teknik Sistem Perkapalan (Marine Engineering) atau Teknik Mesin.",
            "Pengalaman kerja minimal 3 tahun dalam perancangan piping galangan kapal.",
            "Menguasai AutoCAD 2D/3D, CADMATIC, atau AVEVA Marine / Plant 3D.",
            "Familiar dengan sistem kelautan: fuel oil purifier, bilge separator, ballast water management system (BWMS).",
            "Mampu bekerja di lingkungan galangan dengan koordinasi lintas divisi."
        ],
        benefits: [
            "Gaji kompetitif dan tunjangan kesehatan komprehensif.",
            "Peluang rotasi proyek newbuilding armada kapal canggih.",
            "Fasilitas mess dan tunjangan transportasi lokal.",
            "Program pelatihan software CAD modern."
        ]
    },
    {
        id: "electrical-automation-engineer",
        title: "Marine Electrical & Automation Engineer",
        department: "Engineering & Design",
        departmentKey: "engineering",
        location: "Batam Shipyard, Kepulauan Riau",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan Kinerja",
        deadline: "12 Desember 2026",
        status: "Urgent Hiring",
        badgeClass: "badge-urgent",
        shortDesc: "Perancangan sistem distribusi tenaga listrik kapal (Main Switchboard, Genset Synchronizing), alarm monitoring, dan navigasi kelautan.",
        skills: ["Marine Electrical", "Main Switchboard", "PLC Automation", "Power Distribution", "Navigation Systems", "BKI Class"],
        overview: "Mengelola perakitan dan commissioning instalasi kelistrikan kapal dari generator induk, sistem kelistrikan darurat (Emergency Genset), switchboard, hingga panel alarm terintegrasi kamar mesin.",
        responsibilities: [
            "Menghitung Electric Load Balance Analysis untuk menentukan kapasitas generator kapal.",
            "Mendesain diagram satu garis (Single Line Diagram) dan kabel routing kapal.",
            "Melakukan setting breaker, sinkronisasi otomatis generator, dan pengujian proteksi beban lebih (reverse power relay).",
            "Pengecekan instalasi radar, GPS, gyro compass, echo sounder, dan sistem radio maritim GMDSS.",
            "Troubleshooting kerusakan sistem automasi kontrol mesin kapal saat docking repair."
        ],
        requirements: [
            "Pendidikan minimal S1 Teknik Elektro (Arus Kuat) atau Teknik Kelistrikan Kapal.",
            "Pengalaman 3 tahun di bidang perkapalan, perakitan switchboard kapal, atau kelistrikan maritim.",
            "Memahami regulasi BKI Rules for Electrical Installations dan IEEE 45.",
            "Mampu membaca wiring diagram kompleks dan melakukan troubleshooting PLC.",
            "Siap bertugas saat sea trial dan commisioning kapal."
        ],
        benefits: [
            "Remunerasi kompetitif disesuaikan dengan rekam jejak teknis.",
            "Mess ber-AC, makan, dan asuransi kecelakaan kerja.",
            "BPJS Kesehatan dan Ketenagakerjaan.",
            "Jenjang karir ke tingkat Chief Electrical Engineer."
        ]
    },
    {
        id: "hse-officer-maritime",
        title: "HSE Officer / Ahli K3 Maritim & Galangan",
        department: "HSE & Keselamatan",
        departmentKey: "hse",
        location: "Batam Shipyard, Kepulauan Riau",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan K3",
        deadline: "18 Desember 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Penerapan standar K3 galangan kapal (Confined space gas testing, Hot work permit, Lifting operation safety) untuk mencapai target Zero Accident.",
        skills: ["Ahli K3 Umum", "Confined Space Entry", "Gas Testing", "Hot Work Permit", "Incident Investigation", "ISO 45001"],
        overview: "HSE Officer bertugas memastikan seluruh aktivitas pekerjaan berisiko tinggi di galangan—seperti pengerjaan pengelasan di tangki bahan bakar kapal, pekerjaan di ketinggian tiang kapal, dan pengangkatan crane—berjalan aman tanpa insiden.",
        responsibilities: [
            "Menerbitkan dan memverifikasi surat izin kerja aman (Work Permit: Hot Work, Confined Space, Working at Height).",
            "Melakukan pengujian gas beracun & oksigen (Gas-Free Certificate) di ruang tertutup lambung kapal sebelum pekerja masuk.",
            "Memimpin safety briefing harian (Toolbox Meeting) kepada seluruh kru pekerja galangan dan kontraktor.",
            "Melakukan inspeksi kelayakan APD, tabung pemadam api (APAR), scaffolding, dan alat angkat (rigging gear).",
            "Melakukan investigasi insiden, pelaporan near-miss, dan audit kepatuhan SMK3 / ISO 45001."
        ],
        requirements: [
            "Pendidikan minimal D3 / S1 Kesehatan & Keselamatan Kerja (K3), Teknik Lingkungan, atau Teknik.",
            "Memiliki sertifikat Ahli K3 Umum (Kemnaker) yang masih berlaku (Wajib).",
            "Diutamakan memiliki sertifikasi Petugas Ruang Terbatas (Confined Space) atau Gas Tester.",
            "Pengalaman kerja minimal 2 tahun di galangan kapal, konstruksi berat, atau industri migas/maritim.",
            "Tegas, komunikatif, berani mengambil tindakan stop work jika terjadi kondisi tidak aman (Unsafe Condition)."
        ],
        benefits: [
            "Gaji pokok kompetitif dan tunjangan sertifikasi K3.",
            "Akomodasi mess di Batam dan seragam dinas HSE berstandar tinggi.",
            "Asuransi kesehatan lengkap BPJS.",
            "Dukungan peningkatan lisensi K3 lanjutan."
        ]
    },
    {
        id: "ship-broker-specialist",
        title: "Marine Brokerage & Chartering Specialist (S&P Desk)",
        department: "Komersial & Brokerage",
        departmentKey: "commercial",
        location: "Jakarta Head Office",
        locationKey: "jakarta",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Senior (3-6 Tahun)",
        experienceKey: "mid",
        salary: "Gaji Pokok + Komisi Transaksi Armada Kapal",
        deadline: "30 Desember 2026",
        status: "Urgent Hiring",
        badgeClass: "badge-urgent",
        shortDesc: "Mengelola transaksi jual beli armada kapal (Sale & Purchase / S&P), sewa kapal (Tug & Barge, LCT, Tanker), dan relasi pemilik kapal internasional.",
        skills: ["Ship Sale & Purchase", "Charter Party (BIMCO)", "Maritime Law", "Market Valuation", "Negotiation", "Client Networking"],
        overview: "Bekerja di S&P Desk Hansai Ocean Jakarta, Anda akan menghubungkan pemilik kapal (Ship Owners), pembeli korporat, penyewa industri tambang dan migas, serta mengawal proses survey pra-pembelian hingga MOA closing.",
        responsibilities: [
            "Mengembangkan portofolio klien jual beli kapal komersial dan persewaan kontainer/armada di Indonesia.",
            "Menyiapkan Memorandum of Agreement (MoA) berdasarkan standar BIMCO (Norwegian Saleform 2012 / SALEFORM).",
            "Mengoordinasikan inspeksi kapal pra-beli (pre-purchase inspection) bersama tim surveyor teknis Hansai Ocean.",
            "Melakukan valuasi nilai pasar kapal bekas dan baru berdasarkan usia kapal, kondisi mesin, dan kelas BKI/IACS.",
            "Menegosiasikan persyaratan charter party (time charter & freight charter) dengan perusahaan logistik dan tambang."
        ],
        requirements: [
            "Pendidikan S1 Manajemen Maritim, Teknik Perkapalan, Hukum Bisnis, atau Ekonomi/Bisnis.",
            "Pengalaman minimal 3 tahun di bidang ship brokerage, shipping company, freight forwarding, atau pelayaran niaga.",
            "Memahami dokumen legalitas kapal: Surat Laut, Grosse Akte, Sertifikat Keselamatan Konstruksi, Class Certificate.",
            "Kemampuan negosiasi tingkat tinggi dan fasih berbahasa Inggris lisan maupun tertulis.",
            "Memiliki jaringan relasi aktif dengan pemilik armada kapal nasional dan regional."
        ],
        benefits: [
            "Paket gaji menarik dengan skema komisi transaksi penjualan armada kapal yang sangat progresif.",
            "Peluang perjalanan bisnis dinas luar kota dan luar negeri (Singapura, Malaysia, dll).",
            "BPJS Kesehatan dan Ketenagakerjaan.",
            "Lingkungan kerja profesional di pusat bisnis Jakarta."
        ]
    },
    {
        id: "container-maintenance-coordinator",
        title: "Container Fleet & Maintenance Coordinator",
        department: "Logistik & Kontainer",
        departmentKey: "logistics",
        location: "Jakarta Port / Marunda Depot",
        locationKey: "jakarta",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Entry-Mid (1-3 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan Depo",
        deadline: "25 November 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Mengkoordinasikan stok unit sewa kontainer (Dry, Office, Reefer 20/40/60ft), survei kelayakan struktur ISO (CSC Plate), dan jadwal perbaikan.",
        skills: ["Container Depot", "IICL Standard", "Reefer Maintenance", "Fleet Logistics", "CSC Safety Plate", "Inventory Control"],
        overview: "Bertanggung jawab atas kesiapan fisik dan legalitas ratusan armada kontainer Hansai Ocean, memastikan kontainer sewaan untuk proyek pertambangan, maritim, dan kantor modular dikirim dalam kondisi prima.",
        responsibilities: [
            "Inspeksi kondisi kontainer masuk dan keluar depo berdasarkan standar IICL (International Institute of Container Lessors).",
            "Mengatur jadwal perbaikan dinding bergelombang, lantai kayu lapis kelautan (marine plywood), dan karet pintu kontainer.",
            "Memastikan pengecekan mesin pendingin Reefer Container (Carrier, Daikin, Thermo King) berfungsi optimal.",
            "Memantau lokasi sebaran unit kontainer sewa di seluruh Indonesia melalui sistem database Hansai Ocean.",
            "Berkoordinasi dengan tim transportasi trucking untuk ketepatan waktu pengiriman unit ke site pelanggan."
        ],
        requirements: [
            "Pendidikan D3 / S1 Manajemen Logistik, Teknik Mesin, atau Perkapalan.",
            "Pengalaman minimal 1-2 tahun di depo kontainer, shipping line, atau logistik alat berat.",
            "Familiar dengan terminologi kontainer ISO dan sertifikasi kelaikan muat kontainer (CSC Plate).",
            "Terbiasa mengoperasikan software manajemen stok atau Microsoft Excel tingkat mahir.",
            "Teliti, disiplin, dan mampu bekerja dinamis di area depo pelabuhan."
        ],
        benefits: [
            "Gaji kompetitif dengan insentif utilisasi unit kontainer sewa.",
            "Tunjangan kesehatan BPJS lengkap.",
            "Uang makan dan tunjangan operasional depo.",
            "Jenjang karir yang terbuka luas di divisi logistik Hansai Ocean."
        ]
    },
    {
        id: "procurement-marine-supply",
        title: "Marine Procurement & Supply Chain Officer",
        department: "Supply Chain & Logistik",
        departmentKey: "logistics",
        location: "Jakarta Head Office",
        locationKey: "jakarta",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Mid-Level (2-5 Tahun)",
        experienceKey: "mid",
        salary: "Kompetitif + Tunjangan Kinerja",
        deadline: "14 Desember 2026",
        status: "Hot Hiring",
        badgeClass: "badge-hot",
        shortDesc: "Pengadaan material perkapalan (Marine Grade Steel Plate, Main Engine Marine Diesel, Pompa, Jangkar, Cat Pelindung Lambung) secara tepat waktu.",
        skills: ["Marine Procurement", "Vendor Negotiation", "Import & Customs", "Cost Negotiation", "Ship Supplies", "SAP/ERP"],
        overview: "Mengelola relasi vendor lokal dan internasional untuk memastikan pasokan material galangan kapal Batam dan kebutuhan suku cadang kapal klien tersedia dengan harga paling efisien serta sertifikat kelas lengkap.",
        responsibilities: [
            "Mencari, menyeleksi, dan menegosiasikan harga serta termin pembayaran dengan supplier peralatan kelautan.",
            "Memastikan seluruh material plat baja kapal dan peralatan mesin dilengkapi Mill Certificate BKI/IACS asli.",
            "Mengurus proses impor logistik suku cadang mesin kapal dari luar negeri hingga izin kepabeanan (Customs Clearance).",
            "Memantau lead time pengiriman agar tidak menghambat progress newbuilding dan docking kapal di galangan.",
            "Melakukan evaluasi berkala terhadap kinerja vendor material maritim berdasarkan kualitas dan ketepatan waktu."
        ],
        requirements: [
            "Pendidikan minimal S1 Teknik, Manajemen Rantai Pasok, Logistik, atau Bisnis.",
            "Pengalaman kerja 2-4 tahun di bidang procurement galangan kapal, offshore, atau manufaktur industri berat.",
            "Memahami regulasi impor barang maritim dan perizinan bea cukai Indonesia.",
            "Memiliki kemampuan negosiasi yang ulet, jujur, dan berintegritas tinggi.",
            "Mahir mengoperasikan sistem ERP / Inventory Management."
        ],
        benefits: [
            "Gaji kompetitif dan lingkungan kerja kolaboratif.",
            "BPJS Kesehatan dan Ketenagakerjaan.",
            "Bonus kinerja tahunan.",
            "Peluang networking dengan prinsipal maritim global."
        ]
    },
    {
        id: "cad-draftsperson-junior",
        title: "Junior Draftsperson CAD / Ship Hull Modeler",
        department: "Engineering & Design",
        departmentKey: "engineering",
        location: "Batam Shipyard (Hybrid Available)",
        locationKey: "batam",
        type: "Full Time",
        typeKey: "fulltime",
        experience: "Fresh Graduate / Entry Level",
        experienceKey: "fresh",
        salary: "Kompetitif + Tunjangan Fresh Graduate",
        deadline: "28 November 2026",
        status: "Fresh Grad Welcome",
        badgeClass: "badge-fresh",
        shortDesc: "Pemodelan 2D/3D gambar kerja konstruksi kapal, detail nesting plat baja kapal, dan piping routing di bawah bimbingan Senior Naval Architect.",
        skills: ["AutoCAD 2D/3D", "Nesting Cutting Plan", "Hull Modeling", "Drafting Standard", "Fresh Graduate", "Team Player"],
        overview: "Program akselerasi untuk talenta muda lulusan perkapalan yang ingin mengasah keterampilan rancang bangun kapal langsung di galangan aktif Hansai Ocean.",
        responsibilities: [
            "Mengonversi sketsa konsep kapal menjadi gambar kerja konstruksi galangan (Shop Drawing) presisi.",
            "Membuat Nesting Plan pemotongan plat baja kapal dengan software CNC Cutting untuk meminimalkan sisa material (scrap).",
            "Membantu Senior Naval Architect dalam pembaruan gambar as-built drawing pasca commissioning kapal.",
            "Mengelola arsip dokumen gambar teknik dan revisi persetujuan biro klasifikasi maritim."
        ],
        requirements: [
            "Lulusan baru (Fresh Graduate) D3 / D4 / S1 Teknik Perkapalan, Teknik Bangunan Kapal, atau Desain Produk.",
            "Mahir menggunakan AutoCAD (2D & 3D) dan software pemodelan 3D (Rhino / SolidWorks / SketchUp).",
            "Mampu membaca gambar teknik perkapalan (frame spacing, shell expansion, web frame, bulkhead).",
            "Memiliki motivasi belajar tinggi, detail-oriented, dan disiplin waktu.",
            "Portofolio gambar teknik kapal pada tugas akhir kuliah menjadi nilai tambah besar."
        ],
        benefits: [
            "Mentoring intensif 1-on-1 dari Senior Naval Architect berpengalaman.",
            "Fasilitas akomodasi mess di Batam bagi pelamar luar kota.",
            "BPJS Kesehatan dan Ketenagakerjaan.",
            "Jalur cepat promosi menjadi Naval Architect Tetap."
        ]
    },
    {
        id: "management-trainee-maritime",
        title: "Management Trainee (MT) - Maritime Operations 2026",
        department: "Lintas Divisi / Operasi",
        departmentKey: "trainee",
        location: "Jakarta & Batam Shipyard",
        locationKey: "jakarta",
        type: "Management Trainee",
        typeKey: "trainee",
        experience: "Fresh Graduate (0-1 Tahun)",
        experienceKey: "fresh",
        salary: "Uang Saku MT Kompetitif + Fasilitas Lengkap",
        deadline: "15 Desember 2026",
        status: "Fresh Grad Welcome",
        badgeClass: "badge-fresh",
        shortDesc: "Program kepemimpinan intensif 12 bulan rotasi di galangan kapal Batam, kantor komersial Jakarta, dan operasi armada maritim.",
        skills: ["Leadership", "Marine Knowledge", "Fast Learner", "Problem Solving", "English Proficiency", "Fresh Graduate"],
        overview: "Hansai Ocean mencari pemimpin maritim masa depan! Program MT kami dirancang untuk membekali sarjana teknik dan bisnis terbaik dengan pengalaman holistik industri perkapalan, mulai dari lantai galangan hingga ruang negosiasi komersial.",
        responsibilities: [
            "Menjalani rotasi kerja di 4 pilar bisnis: Galangan & Desain, S&P Brokerage Kapal, Persewaan Kontainer, dan HSE/QA.",
            "Mengerjakan improvement project untuk efisiensi biaya docking atau inovasi sistem pelaporan armada.",
            "Mempresentasikan hasil proyek percontohan secara berkala langsung kepada Dewan Direksi Hansai Ocean.",
            "Mempelajari standar internasional maritim (IMO, SOLAS, MARPOL, ISO 9001/14001/45001)."
        ],
        requirements: [
            "Lulusan S1 dari jurusan Teknik Perkapalan, Teknik Kelautan, Teknik Mesin, Teknik Industri, Logistik, atau Manajemen Bisnis.",
            "IPK minimal 3.25 dari skala 4.00.",
            "Usia maksimal 25 tahun untuk S1, atau 27 tahun untuk S2.",
            "Aktif dalam organisasi kemahasiswaan atau memiliki pengalaman kepemimpinan.",
            "Fasih berbahasa Inggris dan bersedia rotasi kerja di Batam, Jakarta, maupun penugasan proyek luar pulau."
        ],
        benefits: [
            "Uang saku dan tunjangan penempatan yang kompetitif selama masa trainee.",
            "Akomodasi dan tiket perjalanan dinas antar kantor disediakan perusahaan.",
            "Jaminan penempatan posisi Supervisor / Assistant Project Manager pasca lulus program.",
            "Asuransi kesehatan lengkap dan BPJS Ketenagakerjaan."
        ]
    }
];

/* ======================================================
   DOM CONTENT LOADED & INITIALIZATION
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Job Vacancies & Filters
    initJobDirectory();

    // 2. Initialize Application Form & File Drag/Drop
    initApplicationForm();

    // 3. Initialize FAQ Accordion
    initFaqAccordion();
});

/* ======================================================
   JOB DIRECTORY RENDERING & FILTER ENGINE
   ====================================================== */
let currentFilterState = {
    keyword: "",
    department: "all",
    location: "all",
    type: "all",
    experience: "all"
};

function initJobDirectory() {
    const jobsGrid = document.getElementById("jobsGridContainer");
    const searchInput = document.getElementById("careerSearchInput");
    const deptSelect = document.getElementById("deptFilterSelect");
    const locSelect = document.getElementById("locFilterSelect");
    const expSelect = document.getElementById("expFilterSelect");
    const typeSelect = document.getElementById("typeFilterSelect");
    const resetBtn = document.getElementById("resetFiltersBtn");
    const quickTagBtns = document.querySelectorAll(".quick-tag-btn");

    // Populate Job Select dropdown in application form
    populateApplicationPositionSelect();

    // Initial render of all jobs
    renderJobsList(jobVacanciesData);

    // Event Listeners for Filters
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentFilterState.keyword = e.target.value.toLowerCase().trim();
            applyJobFilters();
        });
    }

    if (deptSelect) {
        deptSelect.addEventListener("change", (e) => {
            currentFilterState.department = e.target.value;
            syncQuickTags(e.target.value);
            applyJobFilters();
        });
    }

    if (locSelect) {
        locSelect.addEventListener("change", (e) => {
            currentFilterState.location = e.target.value;
            applyJobFilters();
        });
    }

    if (expSelect) {
        expSelect.addEventListener("change", (e) => {
            currentFilterState.experience = e.target.value;
            applyJobFilters();
        });
    }

    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            currentFilterState.type = e.target.value;
            applyJobFilters();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", resetAllFilters);
    }

    // Quick tag shortcuts
    quickTagBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterType = btn.getAttribute("data-filter-type");
            const filterVal = btn.getAttribute("data-filter-val");

            quickTagBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            if (filterType === "all") {
                resetAllFilters();
                return;
            }

            if (filterType === "dept") {
                currentFilterState.department = filterVal;
                if (deptSelect) deptSelect.value = filterVal;
            } else if (filterType === "exp") {
                currentFilterState.experience = filterVal;
                if (expSelect) expSelect.value = filterVal;
            } else if (filterType === "urgent") {
                currentFilterState.keyword = "urgent";
                if (searchInput) searchInput.value = "urgent";
            }

            applyJobFilters();
        });
    });
}

function syncQuickTags(deptValue) {
    const quickTagBtns = document.querySelectorAll(".quick-tag-btn");
    quickTagBtns.forEach(btn => {
        const fVal = btn.getAttribute("data-filter-val");
        if (fVal === deptValue) {
            btn.classList.add("active");
        } else if (deptValue === "all" && btn.getAttribute("data-filter-type") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function resetAllFilters() {
    currentFilterState = {
        keyword: "",
        department: "all",
        location: "all",
        type: "all",
        experience: "all"
    };

    const searchInput = document.getElementById("careerSearchInput");
    const deptSelect = document.getElementById("deptFilterSelect");
    const locSelect = document.getElementById("locFilterSelect");
    const expSelect = document.getElementById("expFilterSelect");
    const typeSelect = document.getElementById("typeFilterSelect");
    const quickTagBtns = document.querySelectorAll(".quick-tag-btn");

    if (searchInput) searchInput.value = "";
    if (deptSelect) deptSelect.value = "all";
    if (locSelect) locSelect.value = "all";
    if (expSelect) expSelect.value = "all";
    if (typeSelect) typeSelect.value = "all";

    quickTagBtns.forEach(b => {
        if (b.getAttribute("data-filter-type") === "all") {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    applyJobFilters();
}

function applyJobFilters() {
    const filteredJobs = jobVacanciesData.filter(job => {
        // Keyword search matches
        const matchesKeyword = !currentFilterState.keyword || (
            job.title.toLowerCase().includes(currentFilterState.keyword) ||
            job.department.toLowerCase().includes(currentFilterState.keyword) ||
            job.location.toLowerCase().includes(currentFilterState.keyword) ||
            job.skills.some(s => s.toLowerCase().includes(currentFilterState.keyword)) ||
            job.shortDesc.toLowerCase().includes(currentFilterState.keyword) ||
            job.status.toLowerCase().includes(currentFilterState.keyword)
        );

        // Department filter
        const matchesDept = currentFilterState.department === "all" ||
            job.departmentKey === currentFilterState.department;

        // Location filter
        const matchesLoc = currentFilterState.location === "all" ||
            job.locationKey === currentFilterState.location;

        // Type filter
        const matchesType = currentFilterState.type === "all" ||
            job.typeKey === currentFilterState.type;

        // Experience filter
        const matchesExp = currentFilterState.experience === "all" ||
            job.experienceKey === currentFilterState.experience;

        return matchesKeyword && matchesDept && matchesLoc && matchesType && matchesExp;
    });

    renderJobsList(filteredJobs);
}

function renderJobsList(jobs) {
    const container = document.getElementById("jobsGridContainer");
    const countBadge = document.getElementById("jobsCountBadge");

    if (countBadge) {
        countBadge.textContent = `${jobs.length} Lowongan Ditemukan`;
    }

    if (!container) return;

    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="no-jobs-found">
                <svg class="no-jobs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h3>Tidak Ada Posisi Yang Sesuai Kriteria</h3>
                <p>Coba gunakan kata kunci lain, atau atur ulang filter pencarian untuk melihat semua lowongan kerja yang tersedia.</p>
                <button type="button" class="btn btn-emerald" onclick="resetAllFilters()">
                    Reset Semua Filter
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = jobs.map(job => {
        return `
            <div class="job-card" data-job-id="${job.id}">
                <div>
                    <div class="job-card-header">
                        <span class="job-dept-badge">${job.department}</span>
                        <span class="job-status-badge ${job.badgeClass}">${job.status}</span>
                    </div>

                    <h3 class="job-title">${job.title}</h3>
                    <p class="job-description-snip">${job.shortDesc}</p>

                    <div class="job-meta-list">
                        <div class="job-meta-item">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span><strong>Lokasi:</strong> ${job.location}</span>
                        </div>
                        <div class="job-meta-item">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <span><strong>Tipe:</strong> ${job.type} • ${job.experience}</span>
                        </div>
                        <div class="job-meta-item">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            <span><strong>Remunerasi:</strong> ${job.salary}</span>
                        </div>
                    </div>

                    <div class="job-skills-tags">
                        ${job.skills.slice(0, 4).map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
                        ${job.skills.length > 4 ? `<span class="skill-pill">+${job.skills.length - 4} lainnya</span>` : ""}
                    </div>
                </div>

                <div class="job-card-actions">
                    <button type="button" class="btn-view-job" onclick="openJobDetailModal('${job.id}')">
                        Detail Pekerjaan
                    </button>
                    <button type="button" class="btn-apply-job" onclick="quickApplyJob('${job.id}')">
                        Lamar Sekarang
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

/* ======================================================
   JOB DETAIL MODAL HANDLER
   ====================================================== */
function openJobDetailModal(jobId) {
    const job = jobVacanciesData.find(j => j.id === jobId);
    if (!job) return;

    const modalBackdrop = document.getElementById("jobDetailModalBackdrop");
    const modalContent = document.getElementById("jobModalDynamicContent");

    if (!modalBackdrop || !modalContent) return;

    const waText = encodeURIComponent(`Halo HRD PT Hansai Ocean Industries, saya tertarik dan ingin menanyakan informasi lebih lanjut mengenai lowongan ${job.title} (${job.location}).`);
    const waUrl = `https://wa.me/6285150956644?text=${waText}`;

    modalContent.innerHTML = `
        <div class="job-modal-header">
            <button type="button" class="btn-close-modal" onclick="closeJobDetailModal()" aria-label="Tutup">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="job-dept-badge" style="background: rgba(255,255,255,0.2); color:#fff; border-color:rgba(255,255,255,0.4); display:inline-block; margin-bottom:8px;">
                ${job.department}
            </div>
            <h2>${job.title}</h2>
            <div class="job-modal-meta-pills">
                <span class="modal-pill">📍 ${job.location}</span>
                <span class="modal-pill">💼 ${job.type}</span>
                <span class="modal-pill">🎓 ${job.experience}</span>
                <span class="modal-pill">💰 ${job.salary}</span>
                <span class="modal-pill">⏳ Batas: ${job.deadline}</span>
            </div>
        </div>

        <div class="job-modal-body">
            <div class="modal-section">
                <h4>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Ringkasan Peran & Visi
                </h4>
                <p>${job.overview}</p>
            </div>

            <div class="modal-section">
                <h4>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Tanggung Jawab Utama (Key Responsibilities)
                </h4>
                <ul class="modal-check-list">
                    ${job.responsibilities.map(resp => `
                        <li>
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>${resp}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h4>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Kualifikasi & Persyaratan (Requirements)
                </h4>
                <ul class="modal-check-list">
                    ${job.requirements.map(req => `
                        <li>
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>${req}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h4>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Fasilitas & Paket Benefit
                </h4>
                <ul class="modal-check-list">
                    ${job.benefits.map(b => `
                        <li>
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>${b}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>

            <div class="modal-section">
                <h4>Keahlian & Kompetensi Yang Dibutuhkan</h4>
                <div class="job-skills-tags">
                    ${job.skills.map(s => `<span class="skill-pill" style="font-size:0.85rem; padding:6px 12px;">${s}</span>`).join("")}
                </div>
            </div>
        </div>

        <div class="job-modal-footer">
            <div style="font-size: 0.85rem; color:#64748b;">
                Rekrutmen resmi Hansai Ocean <strong>100% Bebas Pungutan Biaya</strong>.
            </div>
            <div class="modal-footer-actions">
                <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="color:#059669; border-color:#059669; display:inline-flex; align-items:center; gap:6px;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
                    </svg>
                    Tanya HR
                </a>
                <button type="button" class="btn btn-emerald" onclick="applyFromModal('${job.id}')">
                    Lamar Posisi Ini
                </button>
            </div>
        </div>
    `;

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeJobDetailModal() {
    const modalBackdrop = document.getElementById("jobDetailModalBackdrop");
    if (modalBackdrop) {
        modalBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// Close modal on escape key or clicking backdrop
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeJobDetailModal();
        closeSuccessModal();
    }
});

const modalBackdropElem = document.getElementById("jobDetailModalBackdrop");
if (modalBackdropElem) {
    modalBackdropElem.addEventListener("click", (e) => {
        if (e.target === modalBackdropElem) {
            closeJobDetailModal();
        }
    });
}

function quickApplyJob(jobId) {
    const job = jobVacanciesData.find(j => j.id === jobId);
    if (!job) return;

    const positionSelect = document.getElementById("formPosisiDilamar");
    if (positionSelect) {
        positionSelect.value = job.title;
    }

    const formSection = document.getElementById("form-lamaran");
    if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
    }

    showToast(`Posisi "${job.title}" telah dipilih pada formulir.`);
}

function applyFromModal(jobId) {
    closeJobDetailModal();
    quickApplyJob(jobId);
}

/* ======================================================
   APPLICATION FORM ENGINE & FILE UPLOAD
   ====================================================== */
function populateApplicationPositionSelect() {
    const select = document.getElementById("formPosisiDilamar");
    if (!select) return;

    select.innerHTML = `<option value="">-- Pilih Posisi Pekerjaan Yang Dilamar --</option>` +
        jobVacanciesData.map(j => `<option value="${j.title}">${j.title} (${j.location})</option>`).join("") +
        `<option value="Spontaneous / Lainnya">Lainnya / Aplikasi Spontan (Kirim CV Umum)</option>`;
}

function initApplicationForm() {
    const form = document.getElementById("careerApplicationForm");
    const fileDropBox = document.getElementById("fileUploadBox");
    const fileInput = document.getElementById("cvFileInput");
    const fileIndicator = document.getElementById("fileSelectedIndicator");
    const fileNameSpan = document.getElementById("selectedFileName");

    if (!form) return;

    // File Drag and Drop events
    if (fileDropBox && fileInput) {
        ["dragenter", "dragover"].forEach(eventName => {
            fileDropBox.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                fileDropBox.classList.add("dragover");
            }, false);
        });

        ["dragleave", "drop"].forEach(eventName => {
            fileDropBox.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                fileDropBox.classList.remove("dragover");
            }, false);
        });

        fileDropBox.addEventListener("drop", (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                fileInput.files = files;
                handleSelectedFile(files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) {
                handleSelectedFile(e.target.files[0]);
            }
        });
    }

    function handleSelectedFile(file) {
        const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
        const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

        if (!allowedExtensions.exec(file.name)) {
            alert("Mohon upload file resume dengan format PDF, DOC, atau DOCX.");
            fileInput.value = "";
            if (fileIndicator) fileIndicator.style.display = "none";
            return;
        }

        if (file.size > maxSizeBytes) {
            alert("Ukuran file melebihi batas 5MB. Silakan kompres atau pilih file yang lebih kecil.");
            fileInput.value = "";
            if (fileIndicator) fileIndicator.style.display = "none";
            return;
        }

        if (fileIndicator && fileNameSpan) {
            const sizeKB = Math.round(file.size / 1024);
            fileNameSpan.textContent = `${file.name} (${sizeKB} KB)`;
            fileIndicator.style.display = "inline-flex";
        }
    }

    // Submit handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById("submitAppBtn");
        const nameVal = document.getElementById("appFullName").value.trim();
        const emailVal = document.getElementById("appEmail").value.trim();
        const phoneVal = document.getElementById("appPhone").value.trim();
        const posVal = document.getElementById("formPosisiDilamar").value;
        const expVal = document.getElementById("appExperience").value;

        if (!nameVal || !emailVal || !phoneVal || !posVal) {
            alert("Mohon lengkapi seluruh kolom wajib bertanda bintang (*).");
            return;
        }

        // Show loading state on button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" style="animation: spin 1s linear infinite;">
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                Mengirimkan Lamaran...
            `;
        }

        // Simulated submission response
        setTimeout(() => {
            const randomCode = Math.floor(1000 + Math.random() * 9000);
            const appRefNumber = `HNS-2026-JOB-${randomCode}`;

            // Reset button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `Kirim Lamaran Sekarang`;
            }

            // Open Success Modal
            openSuccessModal({
                appRef: appRefNumber,
                name: nameVal,
                position: posVal,
                email: emailVal,
                phone: phoneVal
            });

            // Reset form
            form.reset();
            if (fileIndicator) fileIndicator.style.display = "none";
        }, 1200);
    });
}

function openSuccessModal(appData) {
    const modalBackdrop = document.getElementById("successModalBackdrop");
    const refCodeElem = document.getElementById("successAppRefCode");
    const nameElem = document.getElementById("successApplicantName");
    const posElem = document.getElementById("successAppliedPos");
    const waConfirmBtn = document.getElementById("btnConfirmToWaHR");

    if (!modalBackdrop) return;

    if (refCodeElem) refCodeElem.textContent = appData.appRef;
    if (nameElem) nameElem.textContent = appData.name;
    if (posElem) posElem.textContent = appData.position;

    if (waConfirmBtn) {
        const textMsg = encodeURIComponent(`Halo HRD PT Hansai Ocean Industries Ltd, saya telah mengirimkan formulir lamaran kerja secara online:\n\n• Nomor Registrasi: ${appData.appRef}\n• Nama: ${appData.name}\n• Posisi: ${appData.position}\n• No Telp: ${appData.phone}\n\nMohon informasi verifikasi berkas saya. Terima kasih!`);
        waConfirmBtn.href = `https://wa.me/6285150956644?text=${textMsg}`;
    }

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
    const modalBackdrop = document.getElementById("successModalBackdrop");
    if (modalBackdrop) {
        modalBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
}

/* ======================================================
   FAQ ACCORDION TOGGLE
   ====================================================== */
function initFaqAccordion() {
    const faqButtons = document.querySelectorAll(".faq-question-btn");
    faqButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const content = item.querySelector(".faq-answer-content");
            const isOpen = item.classList.contains("active");

            // Close other items
            document.querySelectorAll(".faq-item").forEach(other => {
                other.classList.remove("active");
                const otherContent = other.querySelector(".faq-answer-content");
                if (otherContent) otherContent.style.maxHeight = null;
            });

            // Toggle clicked
            if (!isOpen) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                item.classList.remove("active");
                content.style.maxHeight = null;
            }
        });
    });
}

/* ======================================================
   TOAST HELPER
   ====================================================== */
function showToast(message) {
    let toast = document.getElementById("careerToastNotice");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "careerToastNotice";
        toast.className = "career-toast";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#10b981" stroke-width="2" fill="none">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
    `;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}
