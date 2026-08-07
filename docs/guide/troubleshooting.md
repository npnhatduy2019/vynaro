# Khắc phục sự cố

## Ứng dụng không khởi động

- Chạy lại từ terminal để xem log.
- Kiểm tra thư viện hệ thống của Tauri.
- Xóa cache build rồi biên dịch lại.
- Xác nhận phiên bản Node.js và Rust đáp ứng yêu cầu.

```bash
pnpm install
cargo check --workspace
pnpm tauri dev
```

## Không tìm thấy FFmpeg

Kiểm tra:

```bash
ffmpeg -version
ffprobe -version
```

Nếu lệnh không chạy, cài FFmpeg và thêm thư mục chứa tệp thực thi vào `PATH`, sau đó khởi động lại Vynaro.

## Không kết nối được mô hình AI

1. Kiểm tra API Key.
2. Kiểm tra Base URL và tên model.
3. Xem hạn mức, số dư hoặc giới hạn tốc độ.
4. Kiểm tra proxy, VPN và tường lửa.
5. Với mô hình cục bộ, xác nhận dịch vụ đang lắng nghe đúng cổng.

Không đăng khóa API vào issue hoặc ảnh chụp màn hình.

## Tạo giọng đọc thất bại

- Nghe thử một câu ngắn trước.
- Kiểm tra mã giọng và locale.
- Với GPT-SoVITS, kiểm tra tệp tham chiếu và văn bản tương ứng.
- Đảm bảo dịch vụ TTS cục bộ đang chạy.
- Rút ngắn đoạn văn quá dài.

## Phụ đề lệch thời gian

- Tạo lại từ đúng tệp giọng đọc cuối cùng.
- Kiểm tra khoảng lặng đầu và cuối.
- Chia câu dài thành các đoạn nhỏ.
- Sửa thủ công các mốc ở cảnh chuyển nhanh.

## Video xuất ra không có tiếng

- Kiểm tra tệp giọng đọc và nhạc nền có tồn tại.
- Kiểm tra codec âm thanh.
- Xem log FFmpeg để phát hiện luồng bị thiếu.
- Thử xuất một đoạn ngắn với chỉ lời đọc.

## Giao diện vẫn hiện ngôn ngữ cũ

- Chọn lại ngôn ngữ trong **Cài đặt → Giao diện & ngôn ngữ**.
- Khởi động lại ứng dụng.
- Nếu dùng bản cũ, xóa thiết lập locale đã lưu hoặc cập nhật lên bản mới.

## Khi gửi báo lỗi

Cung cấp phiên bản ứng dụng, hệ điều hành, bước tái hiện, kết quả mong đợi, kết quả thực tế và log đã loại bỏ dữ liệu nhạy cảm.
