# Website tài liệu Vynaro

Thư mục `docs` chứa website VitePress của dự án.

## Chạy cục bộ

```bash
cd docs
pnpm install
pnpm docs:dev
```

## Xây dựng

```bash
pnpm docs:build
```

## Cấu trúc

- `index.md`: trang chủ tài liệu.
- `guide/`: các bài hướng dẫn.
- `.vitepress/config.ts`: menu, sidebar, SEO và cấu hình giao diện.
- `.vitepress/theme/`: layout và component trình bày tùy chỉnh.
- `public/`: logo, biểu tượng và ảnh minh họa.

## Khi cập nhật nội dung

- Viết tiếng Việt tự nhiên, không dịch máy từng chữ.
- Giữ nguyên tên công nghệ và lệnh.
- Kiểm tra tất cả liên kết nội bộ.
- Thêm trang mới vào cả navigation và sidebar khi cần.
- Cập nhật alt text tiếng Việt cho ảnh.
- Không đưa thông tin nhạy cảm vào ví dụ hoặc ảnh chụp.

Xem [Hướng dẫn duy trì bản Việt hóa](./VIETNAMESE_LOCALIZATION.md) để dùng thuật ngữ nhất quán.
