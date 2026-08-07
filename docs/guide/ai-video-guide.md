# Quy trình tạo video bằng AI

Vynaro chia công việc thành bảy giai đoạn để người dùng có thể kiểm tra và sửa lỗi trước khi chuyển tiếp.

## Luồng dữ liệu

```text
Video nguồn
→ thông tin media và ảnh thu nhỏ
→ danh sách cảnh
→ kịch bản
→ giọng đọc
→ phụ đề
→ timeline phối hợp
→ video hoặc bản nháp CapCut
```

## Nguyên tắc vận hành

- Không chạy bước sau khi đầu ra bước trước chưa được duyệt.
- Giữ nguyên tệp nguồn trong suốt dự án.
- Lưu phiên bản kịch bản đã duyệt trước khi tạo giọng đọc.
- Nghe toàn bộ giọng đọc trước khi đồng bộ phụ đề.
- Xuất một bản xem thử dung lượng thấp trước bản cuối.

## Chất lượng đầu vào

Video nguồn ổn định giúp giảm lỗi ở mọi bước sau. Ưu tiên tệp có codec phổ biến, âm thanh rõ, tốc độ khung hình ổn định và không bị hỏng metadata.

## Vai trò của AI

AI hỗ trợ phát hiện, gợi ý và tạo bản nháp. Người dùng vẫn cần kiểm duyệt nội dung, bản quyền, độ chính xác và sự phù hợp với nền tảng phát hành.
