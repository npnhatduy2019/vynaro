# Cấu hình AI và giọng đọc

## Cấu hình mô hình ngôn ngữ

Mở **Cài đặt → Mô hình ngôn ngữ** và chọn nhà cung cấp phù hợp.

Các trường chính:

- **Nhà cung cấp:** OpenAI, Claude, Gemini, DeepSeek, Qwen hoặc mô hình cục bộ.
- **API Key:** khóa truy cập của tài khoản dịch vụ.
- **Base URL:** chỉ cần thay đổi khi dùng proxy, dịch vụ tương thích hoặc Ollama.
- **Model:** mã mô hình. Để trống nếu muốn dùng cấu hình mặc định của ứng dụng.

::: warning Bảo mật
Không đưa khóa API vào ảnh chụp màn hình, issue, log hoặc tệp được commit lên Git.
:::

## Dùng mô hình cục bộ

Với Ollama hoặc máy chủ tương thích OpenAI:

1. Khởi động dịch vụ cục bộ.
2. Chọn nhà cung cấp **Local / Ollama**.
3. Nhập Base URL, ví dụ `http://localhost:11434/v1`.
4. Nhập tên mô hình đã tải.
5. Chạy kiểm tra kết nối.

## Cấu hình TTS

### Edge TTS

Phù hợp để bắt đầu nhanh, không cần khóa API. Chọn một giọng tiếng Việt, ví dụ giọng nam hoặc nữ có mã locale `vi-VN`.

### OpenAI TTS

Cần API Key. Chọn model và voice theo tài khoản đang sử dụng. Luôn nghe thử trước khi tạo toàn bộ dự án.

### GPT-SoVITS

Dùng khi cần nhân bản giọng cục bộ. Cần:

- Dịch vụ GPT-SoVITS đang chạy.
- Tệp âm thanh tham chiếu sạch.
- Văn bản khớp với âm thanh tham chiếu.
- Base URL chính xác.

## Chọn cấu hình phù hợp

| Nhu cầu | Gợi ý |
| --- | --- |
| Thử nghiệm nhanh | Edge TTS + mô hình AI có sẵn |
| Chất lượng lời kể cao | LLM mạnh + OpenAI TTS |
| Bảo mật và xử lý cục bộ | Ollama + GPT-SoVITS |
| Khối lượng lớn | Nhà cung cấp có giới hạn tốc độ và chi phí phù hợp |

## Kiểm tra kết nối

Sau khi lưu, dùng nút **Kiểm tra kết nối**. Khi có lỗi, kiểm tra lần lượt API Key, Base URL, tên model, mạng và hạn mức tài khoản.
