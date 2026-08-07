# Hướng dẫn cài đặt

## Yêu cầu hệ thống

Vynaro được xây dựng bằng Tauri 2 nên cần cả môi trường JavaScript và Rust.

- Node.js 20 trở lên.
- pnpm.
- Rust stable và Cargo.
- FFmpeg cùng FFprobe.
- Git.

## Windows

1. Cài Node.js và pnpm.
2. Cài Rust bằng `rustup`.
3. Cài Visual Studio Build Tools với workload **Desktop development with C++**.
4. Cài FFmpeg và thêm thư mục `bin` vào biến `PATH`.

Kiểm tra:

```powershell
node --version
pnpm --version
rustc --version
cargo --version
ffmpeg -version
ffprobe -version
```

## macOS

Cài Xcode Command Line Tools:

```bash
xcode-select --install
```

Sau đó cài các công cụ cần thiết:

```bash
brew install node pnpm rust ffmpeg
```

## Linux

Cài các thư viện hệ thống theo hướng dẫn Tauri 2 cho bản phân phối của bạn, sau đó cài Node.js, pnpm, Rust và FFmpeg.

Ví dụ trên Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y build-essential curl wget file libssl-dev \
  libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev ffmpeg
```

## Lấy mã nguồn

```bash
git clone https://github.com/npnhatduy2019/vynaro.git
cd vynaro
pnpm install
```

## Chạy chế độ phát triển

```bash
pnpm tauri dev
```

## Xây dựng bản phát hành

```bash
pnpm tauri build
```

Tệp cài đặt được tạo trong thư mục `src-tauri/target/release/bundle`.

## Kiểm tra dự án

```bash
pnpm typecheck
pnpm lint
pnpm test
cargo check --workspace
cargo test --workspace
```

## Lỗi thường gặp

- Không tìm thấy `ffmpeg`: kiểm tra lại biến `PATH`.
- Tauri không biên dịch trên Windows: kiểm tra Visual Studio Build Tools.
- Thiếu thư viện WebKit trên Linux: cài đúng gói phụ thuộc của Tauri cho bản phân phối.
- `pnpm install` lỗi: kiểm tra phiên bản Node.js và xóa thư mục `node_modules` trước khi thử lại.

Xem thêm [Khắc phục sự cố](./troubleshooting.md).
