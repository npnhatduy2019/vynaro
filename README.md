<!-- markdownlint-disable MD060 MD040 MD041 MD047 -->

<div align="center">

<img src="assets/logo-horizontal.png" width="640" alt="Vynaro - công cụ AI tạo video kể chuyện và thuyết minh" />

[![Version](https://img.shields.io/badge/Version-v1.0.0-F5C842?style=flat-square)](https://github.com/npnhatduy2019/vynaro/releases)
[![Tauri](https://img.shields.io/badge/Tauri-v2.0-7C3AED?style=flat-square&logo=tauri&logoColor=white)](https://tauri.app)
[![Rust](https://img.shields.io/badge/Rust-1.85%2B-F97316?style=flat-square&logo=rust&logoColor=white)](https://www.rust-lang.org)
[![React](https://img.shields.io/badge/React-19-06B6D4?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![License](https://img.shields.io/badge/Giấy%20phép-MIT-10B981?style=flat-square)](LICENSE)

**Studio AI trên máy tính dành cho video kể chuyện, thuyết minh phim và nội dung ngắn.**

[Trang tài liệu](https://agions.github.io/vynaro/) · [Báo lỗi](https://github.com/npnhatduy2019/vynaro/issues) · [Bản phát hành](https://github.com/npnhatduy2019/vynaro/releases)

</div>

---

## Vynaro là gì?

**Vynaro** là ứng dụng desktop mã nguồn mở được xây dựng bằng **Tauri 2, Rust, React 19 và TypeScript**. Ứng dụng giúp chuyển video gốc thành sản phẩm kể chuyện hoặc thuyết minh hoàn chỉnh thông qua một quy trình trực quan gồm 7 bước.

Vynaro hướng tới người làm nội dung ngắn, kênh thuyết minh phim, biên tập viên video và nhóm sáng tạo cần một quy trình xử lý cục bộ, có thể kiểm soát và dễ mở rộng.

## Quy trình 7 bước

```mermaid
graph LR
    S1["1. Nhập tài nguyên"] --> S2["2. Phát hiện cảnh"]
    S2 --> S3["3. Viết kịch bản AI"]
    S3 --> S4["4. Tạo giọng đọc"]
    S4 --> S5["5. Đồng bộ phụ đề"]
    S5 --> S6["6. Phối hình và tiếng"]
    S6 --> S7["7. Xuất video / CapCut"]
```

| Bước | Chức năng | Kết quả chính |
| --- | --- | --- |
| 1 | Nhập video và kiểm tra định dạng | Thông tin codec, FPS, độ phân giải và ảnh thu nhỏ |
| 2 | Phát hiện chuyển cảnh bằng FFmpeg | Danh sách cảnh và đoạn nổi bật |
| 3 | Viết lời kể bằng LLM | Kịch bản ngôi thứ nhất hoặc thuyết minh |
| 4 | Tổng hợp giọng nói TTS | Tệp giọng đọc từ Edge TTS, OpenAI TTS hoặc GPT-SoVITS |
| 5 | Tạo và căn chỉnh phụ đề | SRT, VTT hoặc ASS theo mốc thời gian |
| 6 | Phối video, lời đọc và nhạc nền | Timeline nhiều lớp đã đồng bộ |
| 7 | Xuất thành phẩm | Video theo nền tảng hoặc bản nháp CapCut |

## Giao diện

<div align="center">

| Bảng điều khiển | Trung tâm dự án |
| :---: | :---: |
| <img src="assets/vynaro_dashboard_cover.png" width="460" alt="Bảng điều khiển Vynaro" /> | <img src="assets/vynaro_assets_cover.png" width="460" alt="Trung tâm dự án và tài nguyên Vynaro" /> |

| Quy trình sản xuất | Cài đặt AI và TTS |
| :---: | :---: |
| <img src="assets/vynaro_production_cover.png" width="460" alt="Quy trình sản xuất 7 bước của Vynaro" /> | <img src="assets/vynaro_settings_cover.png" width="460" alt="Cài đặt mô hình AI và giọng đọc" /> |

</div>

## Công nghệ và khả năng

- **Ứng dụng desktop đa nền tảng:** Tauri 2 + Rust.
- **Giao diện:** React 19, TypeScript và TanStack Router.
- **Xử lý video:** FFmpeg, phát hiện cảnh, trộn nhiều luồng âm thanh.
- **Mô hình AI:** OpenAI, Claude, Gemini, DeepSeek, Qwen, Kimi, GLM, Doubao, Hunyuan và mô hình cục bộ.
- **Giọng đọc:** Edge TTS, OpenAI TTS và GPT-SoVITS.
- **Phụ đề:** VAD, SRT, VTT và ASS.
- **Xuất bản:** video đa tỷ lệ và bản nháp CapCut.
- **Ngôn ngữ:** tiếng Việt, tiếng Anh và tiếng Trung giản thể.

## Cấu trúc dự án

```text
vynaro/
├── src/                  # Giao diện React + TypeScript
├── src-tauri/            # Ứng dụng desktop Tauri
├── crates/               # Các mô-đun Rust theo nghiệp vụ
├── docs/                 # Website tài liệu VitePress
├── resources/            # Biểu tượng và tài nguyên đóng gói
└── scripts/              # Công cụ kiểm tra và sinh mã
```

## Cài đặt môi trường phát triển

### Yêu cầu

- Node.js 20 trở lên
- pnpm
- Rust stable
- Các thư viện hệ thống theo yêu cầu của Tauri 2
- FFmpeg trong biến môi trường `PATH`

### Chạy ứng dụng

```bash
git clone https://github.com/npnhatduy2019/vynaro.git
cd vynaro
pnpm install
pnpm tauri dev
```

### Kiểm tra mã nguồn

```bash
pnpm typecheck
pnpm lint
pnpm test
cargo check --workspace
cargo test --workspace
```

## Tài liệu

- [Cài đặt](docs/guide/installation.md)
- [Bắt đầu nhanh](docs/guide/quick-start.md)
- [Làm quen giao diện](docs/guide/interface.md)
- [Cấu hình AI](docs/guide/ai-configuration.md)
- [Xuất video](docs/guide/exporting.md)
- [Khắc phục sự cố](docs/guide/troubleshooting.md)

## Đóng góp

Mọi đóng góp đều được hoan nghênh. Hãy tạo issue để mô tả lỗi hoặc đề xuất, sau đó gửi pull request với phạm vi thay đổi rõ ràng và kết quả kiểm tra tương ứng.

## Giấy phép

Dự án được phát hành theo [MIT License](LICENSE).

> Bản fork này ưu tiên trải nghiệm tiếng Việt và tiếp tục kế thừa giấy phép, kiến trúc cùng ghi nhận tác giả của dự án gốc.
