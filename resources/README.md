# Tài nguyên ứng dụng

Thư mục này chứa biểu tượng và tài nguyên dùng khi đóng gói Vynaro cho Windows, macOS và các nền tảng được Tauri hỗ trợ.

## Cấu trúc

- `app_icon.svg`: bản vector nguồn của biểu tượng.
- `icon.ico`: biểu tượng đóng gói cho Windows.
- `icon.icns`: biểu tượng đóng gói cho macOS.
- `icons/`: các phiên bản PNG theo kích thước.

## Nguyên tắc cập nhật

1. Giữ một tệp vector nguồn có chất lượng cao.
2. Không kéo giãn hoặc thay đổi tỷ lệ logo.
3. Duy trì khoảng trống an toàn quanh biểu tượng.
4. Kiểm tra khả năng hiển thị trên nền sáng và tối.
5. Tạo lại đầy đủ các kích thước trước khi phát hành.

## Tạo biểu tượng bằng Tauri

Từ thư mục gốc dự án:

```bash
pnpm tauri icon resources/app_icon.svg
```

Lệnh này tạo các biến thể cần thiết trong thư mục biểu tượng của Tauri. Kiểm tra diff để tránh ghi đè nhầm tài nguyên đã được tùy chỉnh.

## Lưu ý bản quyền

Chỉ đưa vào kho mã nguồn các hình ảnh, biểu tượng và phông chữ mà dự án có quyền phân phối. Không commit tệp nguồn chứa dữ liệu cá nhân hoặc tài nguyên thương mại chưa được cấp phép.
