import { StoreProduct, AMAZON_PRODUCTS } from "@/data/amazonProducts";

export interface SalesComparisonCriterion {
  feature: string;
  ourScore: string;
  rivalScore: string;
  winner: "ours" | "rival" | "tie";
}

export interface SalesComparison {
  rivalName: string;
  rivalBadge: string;
  verdict: string;
  criteria: SalesComparisonCriterion[];
}

export interface SalesKeyPoint {
  title: string;
  description: string;
  badge: string;
}

export interface SalesArticle {
  product: StoreProduct;
  seoTitle: string;
  seoDescription: string;
  salesHeadline: string;
  hookSubtitle: string;
  painPointsSolved: string[];
  keySellingPoints: SalesKeyPoint[];
  inDepthPitch: string;
  comparison: SalesComparison;
  targetAudience: string[];
  whoShouldPass: string[];
  customerQuotes: {
    quote: string;
    author: string;
    rating: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  verdict: string;
  discountPercent: number;
  updatedDate: string;
}

// Category-specific comparison presets
const CATEGORY_RIVALS: Record<string, { rivalName: string; rivalBadge: string; defaultPoints: SalesComparisonCriterion[] }> = {
  streaming: {
    rivalName: "Standard Smart TV Built-in Apps & Generic Android Sticks",
    rivalBadge: "Standard OEM TV OS",
    defaultPoints: [
      { feature: "Chipset & 4K Decoding (AV1 / HEVC)", ourScore: "Dedicated Quad-Core SoC with hardware AV1", rivalScore: "Slow Dual-Core, drops frames on 4K", winner: "ours" },
      { feature: "Wi-Fi & Streaming Stability", ourScore: "Wi-Fi 6 / 6E Low-Latency Buffer", rivalScore: "Wi-Fi 5 with high packet jitter", winner: "ours" },
      { feature: "IPTV & Custom Media Apps Support", ourScore: "100% Sideloading & Android/FireOS Freedom", rivalScore: "Restricted app store, frequent app blocks", winner: "ours" },
      { feature: "Audio Passthrough (Dolby Atmos / DTS)", ourScore: "Lossless Passthrough to Soundbar / AVR", rivalScore: "Downmixed to compressed stereo", winner: "ours" }
    ]
  },
  mobile: {
    rivalName: "Conventional In-box 20W OEM Power Adapters",
    rivalBadge: "Standard 20W Charger",
    defaultPoints: [
      { feature: "Charging Speed & Power Output", ourScore: "High-Speed GaN III / Power Delivery 3.1", rivalScore: "Slow 15W-20W charging speed", winner: "ours" },
      { feature: "Multi-device Simultaneous Output", ourScore: "Intelligent Dynamic Allocation (Laptop + Phone)", rivalScore: "Single port only, requires multiple plugs", winner: "ours" },
      { feature: "Thermal Control & Safety", ourScore: "ActiveShield 2.0 Real-time Temperature Monitor", rivalScore: "Runs hot, lacks dynamic wattage throttling", winner: "ours" },
      { feature: "Compact Travel Form Factor", ourScore: "Foldable, 40% smaller footprint", rivalScore: "Bulky wall-wart design", winner: "ours" }
    ]
  },
  storage: {
    rivalName: "Traditional Mechanical Hard Drives & Cheap USB 3.0 Flash Drives",
    rivalBadge: "Generic External Drive",
    defaultPoints: [
      { feature: "Read / Write Throughput", ourScore: "Up to 1050MB/s - 2000MB/s NVMe speeds", rivalScore: "Sluggish 80MB/s - 130MB/s", winner: "ours" },
      { feature: "Durability & Drop Resistance", ourScore: "IP65 Water/Dust + 3-Meter Shock Absorption", rivalScore: "Fragile moving mechanical parts", winner: "ours" },
      { feature: "4K Video Editing Direct Workflow", ourScore: "Smooth timeline scrubbing in Premiere / Final Cut", rivalScore: "Freezes and frame buffer crashes", winner: "ours" },
      { feature: "Thermal Heat Dissipation", ourScore: "Silicone armor & aluminum core heatsink", rivalScore: "Thermal throttles after 2 minutes of transfer", winner: "ours" }
    ]
  },
  audio: {
    rivalName: "Budget Wireless Earbuds & Standard Phone Earphones",
    rivalBadge: "Generic Consumer Earphones",
    defaultPoints: [
      { feature: "Active Noise Cancellation (ANC)", ourScore: "Industry-leading Adaptive Dual-Processor ANC", rivalScore: "Passive noise isolation only", winner: "ours" },
      { feature: "High-Res Wireless Audio (LDAC / AAC)", ourScore: "Hi-Res Wireless certified, ultra-wide soundstage", rivalScore: "SBC only, muddy bass and harsh treble", winner: "ours" },
      { feature: "Battery Endurance & Quick Charge", ourScore: "30h - 60h Playtime + 5 min Quick Boost", rivalScore: "4h - 6h battery life", winner: "ours" },
      { feature: "Mic Call Clarity & Wind Reduction", ourScore: "AI Beamforming Mics with Wind Deflector", rivalScore: "Muffled voice in noisy environments", winner: "ours" }
    ]
  },
  creator: {
    rivalName: "Built-in Laptop Mics & Smartphone Internal Recording",
    rivalBadge: "Smartphone Internal Mics",
    defaultPoints: [
      { feature: "Audio Bit-depth & Dynamic Range", ourScore: "32-bit Float Internal Recording (Zero Clipping)", rivalScore: "16-bit compressed audio, clips easily", winner: "ours" },
      { feature: "Transmission Distance & Anti-interference", ourScore: "Up to 250m Line-of-Sight 2.4GHz Digital", rivalScore: "Bluetooth drops within 5 meters", winner: "ours" },
      { feature: "Direct Camera / USB-C Interoperability", ourScore: "Plug-and-play with iPhone 16, Sony, Canon", rivalScore: "Requires clunky dongles and adapters", winner: "ours" },
      { feature: "Noise Suppression", ourScore: "One-click Intelligent Algorithmic De-noise", rivalScore: "Captures heavy room reverberation", winner: "ours" }
    ]
  },
  studio: {
    rivalName: "Generic Office Desk Accessories & Standard Hubs",
    rivalBadge: "Budget Desk Accessories",
    defaultPoints: [
      { feature: "Build Quality & Materials", ourScore: "CNC Anodized Aluminum / Ergonomic Design", rivalScore: "Cheap hollow plastic", winner: "ours" },
      { feature: "Throughput & Connectivity Ports", ourScore: "Full Thunderbolt 4 / USB 3.2 Gen 2 Speeds", rivalScore: "Slow USB 2.0 shared bandwidth", winner: "ours" },
      { feature: "Daily Productivity Impact", ourScore: "One-cable workspace docking & seamless workflow", rivalScore: "Cable clutter and port swapping daily", winner: "ours" },
      { feature: "Firmware Support & Longevity", ourScore: "Engineered for 5+ years of intense daily use", rivalScore: "Fails within 6 months of heavy usage", winner: "ours" }
    ]
  }
};

export function generateSalesArticle(product: StoreProduct): SalesArticle {
  const discountPercent = Math.round(((product.originalPrice - product.dealPrice) / product.originalPrice) * 100);
  const rivalInfo = CATEGORY_RIVALS[product.category] || CATEGORY_RIVALS.streaming;

  // Catchy SEO Headline
  const seoTitle = `${product.name} Review (2026): Is It Worth Buying? Specs, Price & Comparison`;
  const seoDescription = `Comprehensive sales review and lab benchmark of ${product.name}. Save ${discountPercent}% on Amazon with Prime delivery. See head-to-head comparison, real pros & cons, and buyer verdict.`;

  const salesHeadline = `Đánh Giá & So Sánh Chi Tiết: Tại Sao ${product.name} Là Lựa Chọn Số 1 Năm 2026?`;
  const hookSubtitle = `Trải nghiệm thực tế từ kỹ sư AI Software Studio: Hiệu năng đỉnh cao, giá giảm ${discountPercent}%, bảo hành chính hãng Amazon Prime.`;

  // Pain points solved based on category
  const painPointsSolved: string[] = [
    `Loại bỏ hoàn toàn hiện tượng giật lag, đơ máy hay quá nhiệt khi vận hành liên tục nhiều giờ liền.`,
    `Tương thích tuyệt đối với các ứng dụng hiện đại nhất năm 2026, hỗ trợ chuẩn kết nối mới nhất.`,
    `Tiết kiệm đáng kể thời gian và tiền bạc nhờ độ bền vượt trội cùng mức giá ưu đãi Prime độc quyền.`,
    `Thiết kế cao cấp, nhỏ gọn và thanh lịch, nâng cấp ngay lập tức không gian làm việc và giải trí.`
  ];

  // Key Selling Points
  const keySellingPoints: SalesKeyPoint[] = [
    {
      title: "Hiệu Năng Vượt Trội Phân Khúc",
      description: `${product.name} trang bị linh kiện cao cấp từ ${product.brand}, giúp xử lý tác vụ mượt mà và ổn định tuyệt đối trong mọi tình huống.`,
      badge: "Top Performance"
    },
    {
      title: "Tối Ưu Hoá Cho Hệ Sinh Thái 2026",
      description: `Hỗ trợ chuẩn kết nối tốc độ cao nhất, tương thích trơn tru với các thiết bị thông minh và ứng dụng giải trí di động hiện đại.`,
      badge: "Future-Proof"
    },
    {
      title: "Được Hơn " + product.reviewsCount + " Khách Hàng Tin Dùng",
      description: `Đạt điểm đánh giá trung bình ${product.rating} sao trên Amazon toàn cầu cùng danh hiệu ${product.badge}.`,
      badge: "Verified Quality"
    },
    {
      title: "Ưu Đãi Giá Tốt Nhất & Đổi Trả Dễ Dàng",
      description: `Đang có giá ưu đãi chỉ $${product.dealPrice} (tiết kiệm ${discountPercent}% so với giá gốc $${product.originalPrice}), giao hàng hoả tốc qua Amazon Prime.`,
      badge: "Best Value"
    }
  ];

  // Specific customized comparison
  const comparison: SalesComparison = {
    rivalName: rivalInfo.rivalName,
    rivalBadge: rivalInfo.rivalBadge,
    verdict: `Trong các bài kiểm tra thực tế, ${product.name} vượt trội hơn ${rivalInfo.rivalBadge} về độ ổn định, tốc độ phản hồi và độ bền linh kiện, chứng minh đây là khoản đầu tư xứng đáng từng xu.`,
    criteria: rivalInfo.defaultPoints
  };

  // Target audience
  const targetAudience: string[] = [
    `Người dùng tìm kiếm sản phẩm ${product.categoryLabel.toLowerCase()} chính hãng, độ bền cao và chế độ bảo hành uy tín.`,
    `Những ai muốn giải quyết dứt điểm các bất tiện của thiết bị đời cũ và nâng cao chất lượng trải nghiệm hàng ngày.`,
    `Khách hàng thông thái muốn săn sale mức giá hời nhất trên Amazon với đầy đủ quyền lợi thành viên Prime.`
  ];

  const whoShouldPass: string[] = [
    `Những ai chỉ cần tính năng cơ bản nhất và không bận tâm đến độ trễ hay chất lượng hoàn thiện cao cấp.`
  ];

  const customerQuotes = [
    {
      quote: `Sản phẩm này hoàn toàn vượt kỳ vọng của tôi! Tốc độ cực nhanh, đóng gói chắc chắn và dùng cực kỳ ổn định. Khuyên mọi người nên mua khi đang có giá tốt!`,
      author: "Verified Amazon Tech Reviewer",
      rating: 5
    },
    {
      quote: `Đã thử qua nhiều dòng sản phẩm khác nhau nhưng ${product.name} từ ${product.brand} thực sự ở một đẳng cấp khác. Rất đáng đồng tiền bát gạo.`,
      author: "Prime Member Shopper",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: `Sản phẩm ${product.name} này có phải là hàng chính hãng trên Amazon không?`,
      answer: `Chính xác 100%. Đường link đặt hàng trực tiếp trỏ về trang bán hàng chính thức của thương hiệu ${product.brand} trên Amazon.com, được hưởng đầy đủ chính sách bảo hành quốc tế và hoàn tiền 30 ngày từ Amazon.`
    },
    {
      question: `Chính sách giao hàng và đổi trả của Amazon như thế nào?`,
      answer: `Nếu bạn sở hữu tài khoản Amazon Prime, bạn sẽ được miễn phí giao hàng hoả tốc 1-2 ngày. Trong vòng 30 ngày kể từ khi nhận hàng, nếu có bất kỳ lỗi kỹ thuật nào, bạn hoàn toàn có thể yêu cầu đổi mới hoặc hoàn tiền miễn phí.`
    },
    {
      question: `Tại sao nên mua ${product.name} ngay hôm nay?`,
      answer: `Sản phẩm hiện đang được áp dụng mức giá sale $${product.dealPrice} (giảm ${discountPercent}% so với giá gốc $${product.originalPrice}). Do nhu cầu cao (${product.boughtPastMonth}), các deal Amazon có thể kết thúc hoặc hết hàng bất kỳ lúc nào.`
    }
  ];

  const inDepthPitch = `Nếu bạn đang tìm kiếm một thiết bị ${product.categoryLabel.toLowerCase()} hoàn hảo đáp ứng cả 3 tiêu chí: Hiệu năng dẫn đầu, Độ bền bỉ và Mức giá hợp lý, thì ${product.name} chính là câu trả lời. Được đội ngũ kỹ sư của AI Software Studio kiểm định trực tiếp, thiết bị này không chỉ giải quyết triệt để các hạn chế của dòng sản phẩm tiền nhiệm mà còn mang lại trải nghiệm tiện nghi, mượt mà và đẳng cấp cho người sử dụng.`;

  const verdict = `${product.name} hoàn toàn xứng đáng với danh hiệu ${product.badge}. Với mức giá khuyến mãi $${product.dealPrice} cùng hàng ngàn phản hồi 5 sao từ cộng đồng, đây là thời điểm hoàn hảo nhất để bạn sở hữu sản phẩm này.`;

  return {
    product,
    seoTitle,
    seoDescription,
    salesHeadline,
    hookSubtitle,
    painPointsSolved,
    keySellingPoints,
    inDepthPitch,
    comparison,
    targetAudience,
    whoShouldPass,
    customerQuotes,
    faqs,
    verdict,
    discountPercent,
    updatedDate: "Tháng 11, 2026"
  };
}

export function getAllSalesArticles(): SalesArticle[] {
  return AMAZON_PRODUCTS.map(generateSalesArticle);
}

export function getSalesArticleById(id: string): SalesArticle | undefined {
  const prod = AMAZON_PRODUCTS.find((p) => p.id === id);
  if (!prod) return undefined;
  return generateSalesArticle(prod);
}
