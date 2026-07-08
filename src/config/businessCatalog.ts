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
  | "all";

export interface BusinessCatalogItem {
  value: BusinessCategory;
  label: string;
  labelAr: string;
  icon: string;
  color: string;
  description: string;
  descriptionAr: string;
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

export function getBusinessCatalogItem(category?: string | null) {
  return BUSINESS_CATALOG.find((item) => item.value === category) ?? BUSINESS_CATALOG.find((item) => item.value === "all")!;
}

export function getStoredBusinessProfile(): BusinessProfile {
  try {
    const raw = localStorage.getItem(COMPANY_PROFILE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveBusinessSelection(category: BusinessCategory, selectedModules: string[]) {
  const current = getStoredBusinessProfile();
  localStorage.setItem(
    COMPANY_PROFILE_STORAGE_KEY,
    JSON.stringify({
      ...current,
      businessCategory: category,
      businessType: category,
      industry: category,
      selectedModules,
      enabledModules: selectedModules,
      modulePresetUpdatedAt: new Date().toISOString(),
    }),
  );
}

export function getStoredCategory(): BusinessCategory {
  const profile = getStoredBusinessProfile();
  return (profile.businessCategory || profile.businessType || profile.industry || "all") as BusinessCategory;
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
