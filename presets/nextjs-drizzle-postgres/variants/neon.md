# Biến thể Neon

- **Kết nối**: URL pooled cho app (serverless), URL direct (`DATABASE_URL_UNPOOLED`) cho migration. Cần giao dịch tương tác thì dùng `@neondatabase/serverless` với WebSocket (`ws`) qua Pool, không dùng driver HTTP.
- **Branch**: mỗi môi trường một branch (dev, test, demo, production). Test integration chạy trên Postgres Docker cục bộ hoặc branch test riêng; **không bao giờ** chạy trên branch production.
- **Auth**: Better Auth (bảng của thư viện được miễn các quy ước đặt tên riêng của dự án).
- **Vùng**: đặt vùng hàm của hosting (ví dụ Vercel `sin1`) cùng vùng với database.
- **Scale-to-zero**: lần gọi đầu sau khi ngủ sẽ chậm. Health check và cron cần timeout đủ dài.
- Các thao tác branch (tạo, reset, xoá) trên branch dùng chung là ĐỎ.
