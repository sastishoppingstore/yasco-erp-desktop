export type BusinessCategory =
  | "hospital"
  | "workshop"
  | "construction"
  | "retail"
  | "restaurant"
  | "hotel"
  | "hostel"
  | "manufacturing"
  | "education"
  | "transport"
  | "real_estate"
  | "services"
  | "laundry"
  | "salon"
  | "gym"
  | "pharmacy"
  | "ecommerce"
  | "ecommerce_online_retail"
  | "manufacturing_industrial"
  | "digital_marketing_media"
  | "logistics_supply_chain"
  | "healthcare_medical"
  | "real_estate_property"
  | "construction_engineering"
  | "tourism_travel"
  | "hospitality_accommodation"
  | "food_beverage"
  | "education_edtech"
  | "professional_consulting"
  | "offline_retail_consumer"
  | "events_entertainment"
  | "financial_fintech"
  | "agriculture_agritech"
  | "automotive_transportation"
  | "clean_energy_environment"
  | "wholesale_import_export"
  | "all";

export interface BusinessCatalogItem {
  value: BusinessCategory;
  label: string;
  labelAr: string;
  icon: string;
  color: string;
  description: string;
  descriptionAr: string;
  subCategories?: string[];
  subCategoriesAr?: string[];
  complianceNotes?: string[];
  defaultModules: string[];
  groupTitles: string[];
}

export interface BusinessProfile {
  businessCategory?: BusinessCategory;
  businessType?: BusinessCategory;
  industry?: string;
  selectedModules?: string[];
  enabledModules?: string[];
  [key: string]: unknown;
}

export const COMPANY_PROFILE_STORAGE_KEY = "yasco-company-profile";

export const CORE_MODULE_IDS = [
  "dashboard",
  "accounting",
  "inventory",
  "sales",
  "purchase",
  "hrm",
  "reports",
  "settings",
];

export const MODULE_PATH_PREFIXES: Record<string, string[]> = {
  dashboard: ["/app"],
  accounting: ["/app/accounting"],
  inventory: ["/app/inventory"],
  sales: ["/app/sales", "/app/pos", "/app/cashbox", "/app/installments"],
  purchase: ["/app/purchase"],
  hrm: ["/app/hrm"],
  reports: ["/app/reports"],
  settings: ["/app/settings", "/app/branches", "/app/admin/invoice-settings", "/app/setup-wizard"],
  documents: ["/app/documents"],
  crm: ["/app/crm"],
  projects: ["/app/projects"],
  helpdesk: ["/app/helpdesk"],
  assets: ["/app/assets"],
  pos_retail: ["/app/pos", "/app/cashbox"],
  pos_restaurant: ["/app/pos/restaurant"],
  pos_pharmacy: ["/app/pos/pharmacy"],
  pos_wholesale: ["/app/pos/wholesale"],
  healthcare: ["/app/verticals/healthcare", "/app/pos/pharmacy"],
  workshop: ["/app/verticals/workshop"],
  construction: ["/app/construction", "/app/verticals/construction"],
  education: ["/app/verticals/education"],
  hotel: ["/app/verticals/hotel", "/app/pos/restaurant"],
  real_estate: ["/app/verticals/real-estate"],
  transport: ["/app/verticals/transport", "/app/assets/fleet"],
  travel: ["/app/verticals/travel"],
  manufacturing: ["/app/manufacturing", "/app/mrp", "/app/verticals/manufacturing"],
  laundry: ["/app/verticals/laundry"],
  salon: ["/app/verticals/salon"],
  gym: ["/app/verticals/gym"],
  ecommerce: ["/app/verticals/ecommerce"],
  platform: ["/app/platform"],
};

const commonGroups = ["MAIN", "FINANCE", "INVENTORY", "SALES", "PURCHASE", "CRM", "HRM", "OPERATIONS", "SYSTEM"];
const allGroups = ["MAIN", "FINANCE", "INVENTORY", "SALES", "PURCHASE", "CRM", "HRM", "MANUFACTURING", "PROJECTS", "WORKSHOP", "OPERATIONS", "PLATFORM", "SYSTEM"];

export const BUSINESS_CATALOG: BusinessCatalogItem[] = [
  {
    value: "ecommerce_online_retail",
    label: "E-Commerce & Online Retail",
    labelAr: "التجارة الإلكترونية والبيع عبر الإنترنت",
    icon: "Store",
    color: "text-fuchsia-600 bg-fuchsia-50",
    description: "Online storefronts, marketplaces, dropshipping, fulfillment and payment integrations.",
    descriptionAr: "متاجر إلكترونية، أسواق رقمية، دروبشيبنغ، تجهيز طلبات وربط مدفوعات.",
    subCategories: ["Niche Online Storefronts", "B2B Wholesale Platforms", "Multi-vendor Digital Marketplaces", "Dropshipping Businesses", "E-commerce Warehousing and Order Fulfillment", "Payment Gateway and FinTech Integrations"],
    defaultModules: ["ecommerce", "pos_retail", "crm", "inventory", "sales", "purchase", "accounting", "transport", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "manufacturing_industrial",
    label: "Manufacturing & Industrial Production",
    labelAr: "التصنيع والإنتاج الصناعي",
    icon: "Factory",
    color: "text-indigo-600 bg-indigo-50",
    description: "Factories for packaging, construction materials, plastics, textiles, food and assemblies.",
    descriptionAr: "مصانع التغليف، مواد البناء، البلاستيك، النسيج، الأغذية والتجميع.",
    subCategories: ["Packaging and Styrofoam Products", "Construction Materials - Cement, Steel, Bricks", "Plastics and Petrochemical Products", "Textile and Garments Manufacturing", "Food Processing and Packaging", "Machinery and Spare Parts Assembly"],
    complianceNotes: ["Batch/lot tracking for food and chemicals", "Industrial license and safety document storage"],
    defaultModules: ["manufacturing", "inventory", "purchase", "sales", "accounting", "hrm", "assets", "reports", "settings"],
    groupTitles: [...commonGroups, "MANUFACTURING"],
  },
  {
    value: "digital_marketing_media",
    label: "Digital Marketing & Media Services",
    labelAr: "التسويق الرقمي والخدمات الإعلامية",
    icon: "Sparkles",
    color: "text-rose-600 bg-rose-50",
    description: "Agencies for AI video, ads, social, SEO, brand design, influencers and PR.",
    descriptionAr: "وكالات فيديو وذكاء اصطناعي، إعلانات، سوشيال، SEO، هوية، مؤثرين وعلاقات عامة.",
    subCategories: ["AI Video Content Creation and Commercial Ads", "Social Media Management", "SEO and Search Engine Marketing", "Brand Identity and Graphic Design", "Influencer Marketing Agencies", "Digital PR and Corporate Communications"],
    defaultModules: ["crm", "projects", "helpdesk", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "logistics_supply_chain",
    label: "Logistics & Supply Chain",
    labelAr: "اللوجستيات وسلاسل الإمداد",
    icon: "Truck",
    color: "text-emerald-600 bg-emerald-50",
    description: "Last-mile, freight forwarding, cold chain, customs, fleet and courier operations.",
    descriptionAr: "توصيل آخر ميل، شحن، سلسلة تبريد، تخليص جمركي، أسطول وبريد سريع.",
    subCategories: ["Last-Mile Delivery Services", "Freight Forwarding and Cargo - Air, Sea, Land", "Cold Chain Storage for Food and Medicines", "Customs Brokerage and Clearance Services", "Fleet Management and Tracking", "Courier and Express Mail Services"],
    complianceNotes: ["Vehicle, driver and temperature-log document expiry alerts"],
    defaultModules: ["transport", "assets", "inventory", "crm", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "healthcare_medical",
    label: "Healthcare & Medical Services",
    labelAr: "الرعاية الصحية والخدمات الطبية",
    icon: "Stethoscope",
    color: "text-teal-600 bg-teal-50",
    description: "Telemedicine, clinics, equipment, pharmacies, healthcare IT and home care.",
    descriptionAr: "طب عن بعد، عيادات، معدات، صيدليات، أنظمة صحية ورعاية منزلية.",
    subCategories: ["Telemedicine and Online Health Platforms", "Specialized Clinics - Dental, Skin, Eye", "Medical Equipment and Surgical Supplies", "Retail Pharmacies and Drug Stores", "Healthcare IT and Patient Record Management", "Home Care and Rehabilitation Services"],
    complianceNotes: ["Patient privacy controls", "NPHIES-ready insurance architecture", "Batch/expiry for medicines"],
    defaultModules: ["healthcare", "pos_pharmacy", "inventory", "crm", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "real_estate_property",
    label: "Real Estate & Property",
    labelAr: "العقار وإدارة الأملاك",
    icon: "Home",
    color: "text-pink-600 bg-pink-50",
    description: "Property management, brokerage, development, short rentals, FM and valuation.",
    descriptionAr: "إدارة أملاك، وساطة، تطوير تجاري، إيجار قصير، صيانة وتقييم.",
    subCategories: ["Property Management Services", "Real Estate Brokerage", "Commercial Real Estate Development", "Short-term Rentals and Vacation Homes", "Facility Management", "Real Estate Appraisals and Valuation"],
    complianceNotes: ["Ejar reference storage where applicable", "Maintenance work-order audit trail"],
    defaultModules: ["real_estate", "crm", "sales", "accounting", "projects", "helpdesk", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "construction_engineering",
    label: "Construction & Engineering",
    labelAr: "المقاولات والهندسة",
    icon: "Factory",
    color: "text-orange-600 bg-orange-50",
    description: "Civil, architecture, MEP, interior fit-out, landscaping and project management.",
    descriptionAr: "مدني، معماري، MEP، تصميم داخلي، تنسيق مواقع وإدارة مشاريع.",
    subCategories: ["Civil Contracting and Infrastructure Development", "Architectural Design Services", "MEP Contracting", "Interior Design and Fit-outs", "Landscaping and Urban Planning", "Construction Project Management"],
    complianceNotes: ["BOQ, retention, progress certificates and subcontractor ledgers"],
    defaultModules: ["construction", "projects", "inventory", "purchase", "sales", "accounting", "hrm", "assets", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "tourism_travel",
    label: "Tourism & Travel",
    labelAr: "السياحة والسفر",
    icon: "Globe",
    color: "text-cyan-600 bg-cyan-50",
    description: "Hajj/Umrah, domestic tourism, travel agencies, guides, adventure and corporate travel.",
    descriptionAr: "حج وعمرة، سياحة داخلية، وكالات سفر، مرشدين، مغامرات وسفر شركات.",
    subCategories: ["Hajj and Umrah Tour Operators", "Domestic Leisure Tourism - AlUla, NEOM tours", "Travel Agencies and Ticketing", "Professional Tour Guide Services", "Adventure and Eco-Tourism", "Corporate Travel Management"],
    complianceNotes: ["Passenger manifests, passports, supplier settlements and package costing"],
    defaultModules: ["travel", "crm", "sales", "purchase", "accounting", "transport", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "hospitality_accommodation",
    label: "Hospitality & Accommodation",
    labelAr: "الضيافة والإقامة",
    icon: "Hotel",
    color: "text-violet-600 bg-violet-50",
    description: "Hotels, resorts, serviced apartments, boutique hotels, venues and housekeeping.",
    descriptionAr: "فنادق، منتجعات، شقق مخدومة، بوتيك، قاعات وخدمات نظافة.",
    subCategories: ["Hotel and Resort Management", "Serviced Apartments", "Boutique Hotels", "Hospitality Training and Consulting", "Event Venues and Banquet Halls", "Cleaning and Housekeeping Services"],
    defaultModules: ["hotel", "pos_restaurant", "crm", "sales", "purchase", "accounting", "hrm", "helpdesk", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "food_beverage",
    label: "Food & Beverage",
    labelAr: "الأغذية والمشروبات",
    icon: "UtensilsCrossed",
    color: "text-red-600 bg-red-50",
    description: "Restaurants, fast food, cloud kitchens, cafes, catering, trucks and pop-ups.",
    descriptionAr: "مطاعم، وجبات سريعة، مطابخ سحابية، كافيهات، تموين وعربات طعام.",
    subCategories: ["Fine Dining Restaurants", "Fast Food and Casual Dining", "Cloud Kitchens", "Coffee Shops and Specialty Cafes", "Corporate and Event Catering Services", "Food Trucks and Pop-up Stalls"],
    complianceNotes: ["Recipe costing, expiry, food safety checklists and shift closing"],
    defaultModules: ["pos_restaurant", "inventory", "purchase", "sales", "accounting", "hrm", "crm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "education_edtech",
    label: "Education & EdTech",
    labelAr: "التعليم والتقنية التعليمية",
    icon: "GraduationCap",
    color: "text-sky-600 bg-sky-50",
    description: "E-learning, tutoring, training centers, schools, corporate training and placements.",
    descriptionAr: "تعليم إلكتروني، دروس، مراكز تدريب، مدارس، تدريب شركات واستشارات تعليمية.",
    subCategories: ["E-learning and Online Tutoring Platforms", "Vocational and Technical Training Centers", "Private Schools and Nurseries", "Corporate Training and Skill Development", "Language Institutes", "Educational Consulting and Student Placements"],
    defaultModules: ["education", "crm", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "professional_consulting",
    label: "Professional & Consulting Services",
    labelAr: "الخدمات المهنية والاستشارية",
    icon: "Briefcase",
    color: "text-slate-600 bg-slate-50",
    description: "Legal, accounting, tax, business setup, HR/payroll and management consulting.",
    descriptionAr: "قانون، محاسبة، ضرائب، تأسيس شركات، موارد بشرية واستشارات إدارية.",
    subCategories: ["Law Firms and Legal Consulting", "Accounting, Auditing and Bookkeeping", "Tax and VAT Advisory", "Business Setup and Company Formation", "HR, Payroll and Talent Acquisition", "Business Management and Strategy Consulting"],
    defaultModules: ["crm", "projects", "helpdesk", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "offline_retail_consumer",
    label: "Retail & Consumer Goods",
    labelAr: "التجزئة والسلع الاستهلاكية",
    icon: "Store",
    color: "text-blue-600 bg-blue-50",
    description: "Supermarkets, fashion, electronics, cosmetics, furniture and perfumes.",
    descriptionAr: "سوبرماركت، أزياء، إلكترونيات، تجميل، أثاث وعطور.",
    subCategories: ["Supermarkets and Grocery Stores", "Fashion and Apparel Boutiques", "Electronics and Home Appliances", "Cosmetics and Personal Care Stores", "Furniture and Home Decor Showrooms", "Traditional Perfumes - Oud, Attar"],
    defaultModules: ["pos_retail", "crm", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "events_entertainment",
    label: "Event Management & Entertainment",
    labelAr: "إدارة الفعاليات والترفيه",
    icon: "Sparkles",
    color: "text-purple-600 bg-purple-50",
    description: "MICE, concerts, rentals, weddings, esports and family entertainment.",
    descriptionAr: "معارض ومؤتمرات، حفلات، تأجير معدات، زفاف، رياضات إلكترونية وترفيه عائلي.",
    subCategories: ["Corporate Events and Exhibitions", "Concerts and Live Entertainment Management", "Event Equipment and Sound System Rentals", "Wedding Planning Services", "Gaming and Esports Arenas", "Theme Parks and Family Entertainment Centers"],
    defaultModules: ["projects", "crm", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "financial_fintech",
    label: "Financial Services & FinTech",
    labelAr: "الخدمات المالية والتقنية المالية",
    icon: "Briefcase",
    color: "text-emerald-600 bg-emerald-50",
    description: "Wallets, lending, insurance brokerage, advisory, blockchain and wealth management.",
    descriptionAr: "محافظ، تمويل، وساطة تأمين، استثمار، بلوكتشين وإدارة ثروات.",
    subCategories: ["Digital Wallets and Mobile Payments", "Microfinance and Business Lending", "Insurance Brokerage", "Investment Advisory", "Cryptocurrency and Blockchain Solutions", "Wealth Management Services"],
    complianceNotes: ["SAMA/regulator licensing flags", "Sensitive audit logs and approval workflows"],
    defaultModules: ["crm", "sales", "accounting", "documents", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "agriculture_agritech",
    label: "Agriculture & AgriTech",
    labelAr: "الزراعة والتقنية الزراعية",
    icon: "Store",
    color: "text-lime-600 bg-lime-50",
    description: "Hydroponics, dates, poultry, dairy, equipment, organic food and agro-chemicals.",
    descriptionAr: "زراعة مائية، تمور، دواجن، ألبان، معدات، أغذية عضوية وأسمدة.",
    subCategories: ["Hydroponics and Vertical Farming", "Date Palm Cultivation and Export", "Poultry and Dairy Farming", "Agricultural Equipment Supply", "Organic Food Production", "Fertilizer and Agro-chemical Supply"],
    defaultModules: ["inventory", "manufacturing", "purchase", "sales", "accounting", "hrm", "assets", "reports", "settings"],
    groupTitles: [...commonGroups, "MANUFACTURING"],
  },
  {
    value: "automotive_transportation",
    label: "Automotive & Transportation Services",
    labelAr: "السيارات وخدمات النقل",
    icon: "Wrench",
    color: "text-amber-600 bg-amber-50",
    description: "Rental, workshops, spare parts, EV charging, limousine, car wash and detailing.",
    descriptionAr: "تأجير، ورش، قطع غيار، شحن كهربائي، ليموزين، غسيل وتلميع.",
    subCategories: ["Car Rental and Leasing", "Auto Repair and Maintenance Workshops", "Spare Parts and Accessories Retail", "EV Charging Infrastructure", "VIP Chauffeur and Limousine Services", "Car Wash and Auto Detailing"],
    defaultModules: ["workshop", "transport", "pos_retail", "inventory", "crm", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "WORKSHOP"],
  },
  {
    value: "clean_energy_environment",
    label: "Clean Energy & Environmental Services",
    labelAr: "الطاقة النظيفة والخدمات البيئية",
    icon: "Zap",
    color: "text-green-600 bg-green-50",
    description: "Solar, energy audits, waste, recycling, water treatment and green building.",
    descriptionAr: "طاقة شمسية، تدقيق طاقة، نفايات، تدوير، معالجة مياه ومباني خضراء.",
    subCategories: ["Solar Panel Installation and Maintenance", "Renewable Energy Consulting", "Energy Efficiency Audits", "Waste Management and Recycling", "Water Treatment and Desalination Services", "Green Building Consulting"],
    defaultModules: ["projects", "helpdesk", "assets", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "wholesale_import_export",
    label: "Wholesale, Import & Export Trading",
    labelAr: "الجملة والاستيراد والتصدير",
    icon: "Truck",
    color: "text-cyan-600 bg-cyan-50",
    description: "Garments, electronics, building materials, FMCG, medical supplies and industrial tools.",
    descriptionAr: "ملابس، إلكترونيات، مواد بناء، مواد غذائية، مستلزمات طبية وأدوات صناعية.",
    subCategories: ["Women's Apparel and Garments Wholesale", "Electronics and Mobile Accessories Trading", "Building Materials Wholesale", "Food Stuff and FMCG Distribution", "Medical and Surgical Equipment Trading", "Industrial Tools and Hardware Wholesale"],
    complianceNotes: ["Landed cost, supplier documents, batch/expiry for food and medical goods"],
    defaultModules: ["pos_wholesale", "inventory", "crm", "sales", "purchase", "accounting", "transport", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "workshop",
    label: "Automotive Workshop",
    labelAr: "ورشة سيارات",
    icon: "Wrench",
    color: "text-amber-600 bg-amber-50",
    description: "Job cards, vehicles, technicians, bays, parts and service reminders.",
    descriptionAr: "بطاقات عمل، مركبات، فنيين، رافعات، قطع غيار وتذكيرات صيانة.",
    defaultModules: ["workshop", "pos_retail", "crm", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "WORKSHOP"],
  },
  {
    value: "hostel",
    label: "Hostel / Staff Accommodation",
    labelAr: "سكن / نزل",
    icon: "Hotel",
    color: "text-violet-600 bg-violet-50",
    description: "Rooms, bookings, rent billing, housekeeping, maintenance and HR.",
    descriptionAr: "غرف، حجوزات، فواتير إيجار، نظافة، صيانة وموارد بشرية.",
    defaultModules: ["hotel", "real_estate", "crm", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "hotel",
    label: "Hotel / Hospitality",
    labelAr: "فندق / ضيافة",
    icon: "Hotel",
    color: "text-purple-600 bg-purple-50",
    description: "Rooms, bookings, housekeeping, folio billing and restaurant POS.",
    descriptionAr: "غرف، حجوزات، نظافة، فوترة وحسابات مطعم.",
    defaultModules: ["hotel", "pos_restaurant", "crm", "sales", "accounting", "inventory", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "hospital",
    label: "Hospital / Clinic",
    labelAr: "مستشفى / عيادة",
    icon: "Stethoscope",
    color: "text-teal-600 bg-teal-50",
    description: "Patients, appointments, EMR, prescriptions, insurance and billing.",
    descriptionAr: "مرضى، مواعيد، ملف طبي، وصفات، تأمين وفوترة.",
    defaultModules: ["healthcare", "pos_pharmacy", "crm", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "construction",
    label: "Construction",
    labelAr: "مقاولات",
    icon: "Factory",
    color: "text-orange-600 bg-orange-50",
    description: "Projects, BOQ, contracts, site reports, materials and subcontractors.",
    descriptionAr: "مشاريع، جدول كميات، عقود، تقارير موقع، مواد ومقاولين.",
    defaultModules: ["construction", "projects", "inventory", "purchase", "sales", "accounting", "hrm", "crm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "retail",
    label: "Retail / Trading",
    labelAr: "تجزئة / تجارة",
    icon: "Store",
    color: "text-blue-600 bg-blue-50",
    description: "POS, products, stock, invoices, customers and branch sales.",
    descriptionAr: "نقطة بيع، منتجات، مخزون، فواتير، عملاء ومبيعات فروع.",
    defaultModules: ["pos_retail", "crm", "inventory", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "restaurant",
    label: "Restaurant / Cafe",
    labelAr: "مطعم / مقهى",
    icon: "UtensilsCrossed",
    color: "text-red-600 bg-red-50",
    description: "Restaurant POS, tables, kitchen, delivery, recipes and shift closing.",
    descriptionAr: "نقطة بيع مطعم، طاولات، مطبخ، توصيل، وصفات وإقفال وردية.",
    defaultModules: ["pos_restaurant", "inventory", "purchase", "sales", "accounting", "hrm", "crm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "manufacturing",
    label: "Manufacturing",
    labelAr: "تصنيع",
    icon: "Factory",
    color: "text-indigo-600 bg-indigo-50",
    description: "BOM, production, work orders, quality, stock and costing.",
    descriptionAr: "قائمة مواد، إنتاج، أوامر عمل، جودة، مخزون وتكلفة.",
    defaultModules: ["manufacturing", "inventory", "purchase", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "MANUFACTURING", "PROJECTS"],
  },
  {
    value: "education",
    label: "School / Training",
    labelAr: "مدرسة / تدريب",
    icon: "GraduationCap",
    color: "text-cyan-600 bg-cyan-50",
    description: "Students, admissions, fees, attendance, schedules and reports.",
    descriptionAr: "طلاب، قبول، رسوم، حضور، جداول وتقارير.",
    defaultModules: ["education", "crm", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "transport",
    label: "Transport / Logistics",
    labelAr: "نقل / لوجستيات",
    icon: "Truck",
    color: "text-emerald-600 bg-emerald-50",
    description: "Fleet, drivers, routes, shipments, POD and settlements.",
    descriptionAr: "أسطول، سائقين، مسارات، شحنات، إثبات تسليم وتسويات.",
    defaultModules: ["transport", "assets", "crm", "sales", "purchase", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "real_estate",
    label: "Real Estate",
    labelAr: "عقارات",
    icon: "Home",
    color: "text-pink-600 bg-pink-50",
    description: "Properties, leases, rent invoices, maintenance and commissions.",
    descriptionAr: "عقارات، عقود إيجار، فواتير إيجار، صيانة وعمولات.",
    defaultModules: ["real_estate", "crm", "sales", "accounting", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "services",
    label: "General Services",
    labelAr: "خدمات عامة",
    icon: "Briefcase",
    color: "text-slate-600 bg-slate-50",
    description: "CRM, projects, helpdesk, contracts, tasks and timesheets.",
    descriptionAr: "عملاء، مشاريع، دعم فني، عقود، مهام وسجلات وقت.",
    defaultModules: ["crm", "projects", "helpdesk", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: [...commonGroups, "PROJECTS"],
  },
  {
    value: "laundry",
    label: "Laundry",
    labelAr: "مغسلة",
    icon: "Store",
    color: "text-sky-600 bg-sky-50",
    description: "Garment intake, order stages, POS, delivery and customer alerts.",
    descriptionAr: "استلام ملابس، مراحل الطلب، نقطة بيع، توصيل وتنبيهات عملاء.",
    defaultModules: ["pos_retail", "crm", "inventory", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "salon",
    label: "Salon / Spa",
    labelAr: "صالون / سبا",
    icon: "Sparkles",
    color: "text-rose-600 bg-rose-50",
    description: "Appointments, packages, staff commission, products and reminders.",
    descriptionAr: "مواعيد، باقات، عمولات موظفين، منتجات وتذكيرات.",
    defaultModules: ["crm", "pos_retail", "inventory", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "gym",
    label: "Gym / Sports Club",
    labelAr: "نادي رياضي",
    icon: "Briefcase",
    color: "text-lime-600 bg-lime-50",
    description: "Memberships, check-ins, trainers, classes, renewals and billing.",
    descriptionAr: "اشتراكات، دخول، مدربين، حصص، تجديدات وفوترة.",
    defaultModules: ["crm", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "pharmacy",
    label: "Pharmacy",
    labelAr: "صيدلية",
    icon: "Stethoscope",
    color: "text-emerald-600 bg-emerald-50",
    description: "Pharmacy POS, prescriptions, batches, expiry and supplier purchases.",
    descriptionAr: "نقطة بيع صيدلية، وصفات، دفعات، صلاحية ومشتريات.",
    defaultModules: ["pos_pharmacy", "inventory", "purchase", "sales", "accounting", "hrm", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    labelAr: "تجارة إلكترونية",
    icon: "Store",
    color: "text-fuchsia-600 bg-fuchsia-50",
    description: "Orders, stock sync, picking, courier, COD and returns.",
    descriptionAr: "طلبات، مزامنة مخزون، تجهيز، شحن، دفع عند الاستلام ومرتجعات.",
    defaultModules: ["ecommerce", "pos_retail", "crm", "inventory", "sales", "accounting", "reports", "settings"],
    groupTitles: commonGroups,
  },
  {
    value: "all",
    label: "Super Admin / All Services",
    labelAr: "المشرف العام / كل الخدمات",
    icon: "Globe",
    color: "text-violet-600 bg-violet-50",
    description: "Show every service, vertical and platform control.",
    descriptionAr: "عرض كل الخدمات والقطاعات وأدوات التحكم.",
    defaultModules: ["all"],
    groupTitles: allGroups,
  },
];

export const MODULE_CHOICES = [
  { id: "accounting", label: "Accounting", labelAr: "المحاسبة" },
  { id: "inventory", label: "Inventory", labelAr: "المخزون" },
  { id: "sales", label: "Sales & Invoices", labelAr: "المبيعات والفواتير" },
  { id: "purchase", label: "Purchase", labelAr: "المشتريات" },
  { id: "hrm", label: "HRM & Payroll", labelAr: "الموارد البشرية والرواتب" },
  { id: "crm", label: "CRM", labelAr: "إدارة العملاء" },
  { id: "reports", label: "Reports", labelAr: "التقارير" },
  { id: "pos_retail", label: "Retail POS", labelAr: "نقطة بيع التجزئة" },
  { id: "pos_restaurant", label: "Restaurant POS", labelAr: "نقطة بيع المطعم" },
  { id: "pos_pharmacy", label: "Pharmacy POS", labelAr: "نقطة بيع الصيدلية" },
  { id: "workshop", label: "Workshop", labelAr: "الورشة" },
  { id: "construction", label: "Construction", labelAr: "المقاولات" },
  { id: "healthcare", label: "Clinic / Healthcare", labelAr: "العيادة / الصحة" },
  { id: "hotel", label: "Hotel / Hostel", labelAr: "فندق / سكن" },
  { id: "real_estate", label: "Real Estate", labelAr: "العقارات" },
  { id: "transport", label: "Transport", labelAr: "النقل" },
  { id: "education", label: "Education", labelAr: "التعليم" },
  { id: "manufacturing", label: "Manufacturing", labelAr: "التصنيع" },
  { id: "projects", label: "Projects", labelAr: "المشاريع" },
  { id: "helpdesk", label: "Helpdesk", labelAr: "الدعم الفني" },
  { id: "assets", label: "Assets / Fleet", labelAr: "الأصول / الأسطول" },
  { id: "settings", label: "Settings", labelAr: "الإعدادات" },
];

const CATEGORY_ALIASES: Record<string, BusinessCategory> = {
  healthcare: "hospital",
  clinic: "hospital",
  hospitality: "hotel",
  accommodation: "hotel",
  logistics: "transport",
  wholesale: "retail",
  technology: "services",
  auto_workshop: "workshop",
  realestate: "real_estate",
};

export function normalizeBusinessCategory(category?: string | null): BusinessCategory {
  if (!category) return "all";
  if (CATEGORY_ALIASES[category]) return CATEGORY_ALIASES[category];
  return BUSINESS_CATALOG.some((item) => item.value === category) ? (category as BusinessCategory) : "all";
}

export function getBusinessCatalogItem(category?: string | null) {
  const normalized = normalizeBusinessCategory(category);
  return BUSINESS_CATALOG.find((item) => item.value === normalized) ?? BUSINESS_CATALOG.find((item) => item.value === "all")!;
}

export function getStoredBusinessProfile(): BusinessProfile {
  try {
    const raw = localStorage.getItem(COMPANY_PROFILE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveBusinessSelection(category: BusinessCategory, selectedModules: string[], businessSubCategory?: string) {
  const current = getStoredBusinessProfile();
  localStorage.setItem(
    COMPANY_PROFILE_STORAGE_KEY,
    JSON.stringify({
      ...current,
      businessCategory: category,
      businessType: category,
      industry: category,
      ...(businessSubCategory ? { businessSubCategory } : {}),
      selectedModules,
      enabledModules: selectedModules,
      modulePresetUpdatedAt: new Date().toISOString(),
    }),
  );
}

export function getStoredCategory(): BusinessCategory {
  const profile = getStoredBusinessProfile();
  return normalizeBusinessCategory((profile.businessCategory || profile.businessType || profile.industry || "all") as string);
}

export function getDefaultModulesForCategory(category: BusinessCategory): string[] {
  const item = getBusinessCatalogItem(category);
  if (item.value === "all") return Object.keys(MODULE_PATH_PREFIXES);
  return Array.from(new Set([...CORE_MODULE_IDS, ...item.defaultModules]));
}

export function getEnabledModuleIds(category?: BusinessCategory): string[] {
  const profile = getStoredBusinessProfile();
  const cat = category || getStoredCategory();
  const modules = profile.selectedModules || profile.enabledModules;
  if (cat === "all" || modules?.includes("all")) return Object.keys(MODULE_PATH_PREFIXES);
  return modules?.length ? Array.from(new Set([...CORE_MODULE_IDS, ...modules])) : getDefaultModulesForCategory(cat);
}

export function getEnabledSidebarPathPrefixes(category?: BusinessCategory): string[] {
  return getEnabledModuleIds(category).flatMap((moduleId) => MODULE_PATH_PREFIXES[moduleId] || []);
}

export function getVisibleGroupTitles(category?: BusinessCategory): string[] {
  return getBusinessCatalogItem(category || getStoredCategory()).groupTitles;
}
