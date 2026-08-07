import { defineConfig } from "vitepress";

const SIDEBAR = [
  {
    text: "Bắt đầu",
    collapsed: false,
    items: [
      { text: "Bắt đầu nhanh", link: "/guide/quick-start" },
      { text: "Cài đặt", link: "/guide/installation" },
      { text: "Cấu hình AI", link: "/guide/ai-configuration" },
      { text: "Làm quen giao diện", link: "/guide/interface" },
    ],
  },
  {
    text: "Quy trình sản xuất",
    collapsed: false,
    items: [
      { text: "Tiêu chuẩn thuyết minh", link: "/guide/narration-spec" },
      { text: "Quy trình video AI", link: "/guide/ai-video-guide" },
      { text: "Xuất và phát hành", link: "/guide/exporting" },
    ],
  },
  {
    text: "Hỗ trợ",
    collapsed: false,
    items: [
      { text: "Khắc phục sự cố", link: "/guide/troubleshooting" },
      { text: "Quy trình phát hành", link: "/guide/release-process" },
    ],
  },
];

export default defineConfig({
  title: "Vynaro",
  description:
    "Tài liệu tiếng Việt cho Vynaro — ứng dụng AI desktop tạo video kể chuyện và thuyết minh theo quy trình 7 bước.",
  base: "/vynaro/",
  lang: "vi-VN",
  cleanUrls: false,
  appearance: "dark",
  ignoreDeadLinks: false,
  lastUpdated: true,

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@500;600;700;800;900&display=swap",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "alternate icon", type: "image/png", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Vynaro, video AI, thuyết minh phim, kịch bản AI, giọng đọc TTS, phụ đề tự động, CapCut",
      },
    ],
    ["meta", { name: "author", content: "Vynaro contributors" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      { property: "og:title", content: "Vynaro — Tài liệu tiếng Việt" },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Hướng dẫn cài đặt, cấu hình và vận hành quy trình tạo video AI 7 bước bằng Vynaro.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://agions.github.io/vynaro/og-image.png",
      },
    ],
    ["meta", { property: "og:url", content: "https://agions.github.io/vynaro/" }],
    ["meta", { property: "og:site_name", content: "Vynaro" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Vynaro — Tài liệu tiếng Việt" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Tài liệu vận hành Vynaro dành cho người dùng Việt Nam.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://agions.github.io/vynaro/og-image.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#111210" }],
    ["meta", { name: "color-scheme", content: "dark" }],
  ],

  markdown: {
    lineNumbers: false,
    theme: { light: "github-light", dark: "github-dark" },
    container: {
      tipLabel: "💡 Mẹo",
      warningLabel: "⚠️ Lưu ý",
      dangerLabel: "🚨 Nguy hiểm",
      infoLabel: "ℹ️ Thông tin",
      detailsLabel: "Chi tiết",
    },
  },

  themeConfig: {
    logo: {
      dark: "/logo.svg",
      light: "/logo-light.svg",
      alt: "Vynaro",
    },
    siteTitle: "Vynaro",
    lastUpdated: {
      text: "Cập nhật lần cuối",
      formatOptions: { dateStyle: "medium", timeStyle: "short" },
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Tìm kiếm",
            buttonAriaLabel: "Tìm trong tài liệu",
          },
          modal: {
            noResultsText: "Không tìm thấy kết quả",
            resetButtonTitle: "Xóa tìm kiếm",
          },
        },
      },
    },
    nav: [
      { text: "Trang chủ", link: "/" },
      {
        text: "Bắt đầu",
        items: [
          { text: "Bắt đầu nhanh", link: "/guide/quick-start" },
          { text: "Cài đặt", link: "/guide/installation" },
          { text: "Cấu hình AI", link: "/guide/ai-configuration" },
          { text: "Giao diện", link: "/guide/interface" },
        ],
      },
      {
        text: "Sản xuất",
        items: [
          { text: "Tiêu chuẩn thuyết minh", link: "/guide/narration-spec" },
          { text: "Quy trình video AI", link: "/guide/ai-video-guide" },
          { text: "Xuất bản", link: "/guide/exporting" },
        ],
      },
      {
        text: "Hỗ trợ",
        items: [
          { text: "Khắc phục sự cố", link: "/guide/troubleshooting" },
          { text: "Quy trình phát hành", link: "/guide/release-process" },
        ],
      },
    ],
    sidebar: SIDEBAR,
    outline: { level: [2, 3], label: "Mục lục" },
    docFooter: { prev: "Trang trước", next: "Trang tiếp theo" },
    footer: {
      message: "Vynaro · Studio AI tạo video kể chuyện và thuyết minh",
      copyright: "Phát hành theo giấy phép MIT · Ưu tiên xử lý cục bộ",
    },
    returnToTopLabel: "Về đầu trang",
    sidebarMenuLabel: "Menu",
    notFound: {
      title: "Không tìm thấy trang",
      quote: "Đường dẫn này không tồn tại hoặc đã được di chuyển.",
      linkText: "Quay về trang chủ",
    },
  },

  sitemap: {
    hostname: "https://agions.github.io/vynaro/",
    lastmodDateOnly: true,
  },
});
