# Quy trình phát hành

Tài liệu này dành cho người duy trì dự án khi chuẩn bị một phiên bản Vynaro mới.

## 1. Chuẩn bị nhánh

- Đồng bộ nhánh với `main`.
- Đảm bảo working tree sạch.
- Xác nhận phạm vi thay đổi và phiên bản dự kiến.

## 2. Cập nhật phiên bản

Cập nhật các tệp có chứa phiên bản ứng dụng, bao gồm cấu hình frontend, Cargo và Tauri nếu cần. Các giá trị phải thống nhất.

## 3. Cập nhật CHANGELOG

Ghi rõ:

- Tính năng mới.
- Thay đổi hành vi.
- Lỗi đã sửa.
- Thay đổi có thể ảnh hưởng tương thích.
- Ghi chú nâng cấp.

## 4. Chạy kiểm tra

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
cargo fmt --all -- --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace
```

Kiểm tra thêm website tài liệu:

```bash
cd docs
pnpm install
pnpm docs:build
```

## 5. Kiểm tra thủ công

- Tạo và mở dự án.
- Nhập video.
- Chạy thử từng bước của pipeline.
- Kiểm tra đổi ngôn ngữ, đặc biệt `vi-VN`.
- Kiểm tra FFmpeg, AI, TTS và xuất video.
- Mở bản cài đặt trên hệ điều hành mục tiêu.

## 6. Tạo tag và bản phát hành

Tạo tag theo quy ước phiên bản của dự án. Nội dung phát hành cần tóm tắt thay đổi, yêu cầu hệ thống, tệp tải về và lỗi đã biết.

## 7. Sau phát hành

- Xác nhận tệp tải về và checksum.
- Kiểm tra trang tài liệu.
- Theo dõi issue mới.
- Sửa liên kết hoặc ghi chú sai ngay khi phát hiện.

::: warning
Không phát hành khi kiểm tra build, test hoặc đóng gói còn lỗi chưa được giải thích.
:::
