# Hướng dẫn duy trì bản Việt hóa

Tài liệu này quy định cách duy trì tiếng Việt nhất quán trong Vynaro.

## Locale

- Mã locale chuẩn: `vi-VN`.
- Nội dung giao diện phải đi qua hệ thống i18n.
- Không hard-code chuỗi tiếng Việt mới trong component nếu chuỗi đó có thể hiển thị cho người dùng.

## Thuật ngữ chuẩn

| Thuật ngữ gốc | Cách dùng tiếng Việt |
| --- | --- |
| Dashboard | Bảng điều khiển |
| Pipeline | Quy trình sản xuất |
| Assets | Tài nguyên |
| Narrative project | Dự án kể chuyện / thuyết minh |
| Scene detection | Phát hiện cảnh |
| Voice synthesis | Tổng hợp giọng nói |
| Voice cloning | Nhân bản giọng nói |
| Subtitle sync | Đồng bộ phụ đề |
| Render / export | Kết xuất / xuất bản |
| Draft | Bản nháp |

Các tên công nghệ như LLM, TTS, FFmpeg, VAD, API, Base URL, codec, SRT, VTT, ASS và CapCut có thể giữ nguyên, nhưng cần giải thích bằng tiếng Việt khi xuất hiện lần đầu trong tài liệu dành cho người mới.

## Phong cách viết

- Dùng câu chủ động, ngắn và trực tiếp.
- Dùng “bạn” trong hướng dẫn thao tác.
- Tên nút và menu được in đậm.
- Lệnh, đường dẫn, khóa cấu hình và tên tệp đặt trong backtick.
- Không dịch tên model hoặc tên nhà cung cấp.
- Tránh pha tiếng Trung vào nội dung tiếng Việt.

## Danh sách kiểm tra khi thêm tính năng

1. Thêm khóa vào từ điển `vi-VN`.
2. Kiểm tra độ dài chuỗi trên màn hình nhỏ.
3. Kiểm tra dấu tiếng Việt và font hiển thị.
4. Cập nhật README hoặc trang hướng dẫn liên quan.
5. Chạy build tài liệu và kiểm tra liên kết.
6. Tìm chuỗi hard-code mới trong các component đã sửa.

## Kiểm tra tài liệu

```bash
cd docs
pnpm install
pnpm docs:build
```

Ngoài build, hãy kiểm tra thủ công menu, tìm kiếm, liên kết trước/sau, trang 404, code block và bảng trên cả giao diện sáng lẫn tối.
