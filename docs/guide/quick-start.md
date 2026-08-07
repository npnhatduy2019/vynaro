# Bắt đầu nhanh

Hướng dẫn này giúp bạn chạy Vynaro và hoàn thành một dự án thử nghiệm theo quy trình 7 bước.

## 1. Chuẩn bị

Đảm bảo máy đã có:

- FFmpeg trong `PATH`.
- Một video nguồn hợp lệ.
- Khóa API của nhà cung cấp LLM, trừ khi dùng mô hình cục bộ.
- Công cụ TTS phù hợp với nhu cầu.

## 2. Tạo dự án

1. Mở Vynaro.
2. Chọn **Tạo dự án mới**.
3. Đặt tên dự án và chọn thư mục lưu.
4. Nhập một hoặc nhiều tệp video.

## 3. Thực hiện quy trình 7 bước

### Bước 1 — Nhập tài nguyên

Kiểm tra độ phân giải, FPS, codec, thời lượng và ảnh thu nhỏ. Tệp lỗi hoặc không được hỗ trợ cần được chuyển đổi trước khi tiếp tục.

### Bước 2 — Phát hiện cảnh

Chạy phát hiện chuyển cảnh. Xem lại danh sách cảnh và điều chỉnh các đoạn cần giữ hoặc loại bỏ.

### Bước 3 — Viết kịch bản AI

Chọn nhà cung cấp AI, phong cách kể chuyện và góc nhìn. Kiểm tra nội dung, sửa tên riêng và loại bỏ thông tin không chính xác.

### Bước 4 — Tạo giọng đọc

Chọn công cụ TTS, giọng đọc, tốc độ và cao độ. Nghe thử trước khi tạo toàn bộ âm thanh.

### Bước 5 — Đồng bộ phụ đề

Tạo phụ đề theo giọng đọc, sau đó kiểm tra mốc thời gian, lỗi chính tả và độ dài từng dòng.

### Bước 6 — Phối hình và tiếng

Căn chỉnh cảnh, lời đọc và nhạc nền. Giữ lời đọc rõ, tránh để nhạc nền lấn át nội dung chính.

### Bước 7 — Xuất bản

Chọn tỷ lệ khung hình và độ phân giải. Có thể xuất video hoàn chỉnh hoặc bản nháp CapCut để chỉnh sửa thêm.

## 4. Kiểm tra trước khi xuất

- Không có cảnh đen hoặc tệp bị thiếu.
- Lời đọc không bị cắt đầu hoặc cuối.
- Phụ đề đúng nội dung và không tràn khung hình.
- Âm lượng ổn định.
- Tỷ lệ video phù hợp với nền tảng đích.

## Bước tiếp theo

- [Cấu hình AI](./ai-configuration.md)
- [Tiêu chuẩn thuyết minh](./narration-spec.md)
- [Xuất và phát hành](./exporting.md)
