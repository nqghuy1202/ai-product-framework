# Biến thể Supabase

- **Auth**: Supabase Auth (`@supabase/ssr` cho Next.js). Kiểm phiên ở middleware, đọc user ở server, không tin dữ liệu user từ client.
- **RLS**: bảng nào cũng bật RLS. **Mọi thay đổi policy trên bảng đang phục vụ người dùng là ĐỎ**: nới thì lộ dữ liệu, siết thì khoá người dùng. Policy mới trên bảng mới là VÀNG. Có test integration kiểm policy bằng hai vai khác nhau.
- **Khoá**: `service_role` chỉ dùng ở server, không bao giờ có tiền tố `NEXT_PUBLIC_`. `anon key` là khoá công khai.
- **Migration**: chọn **một** nguồn sự thật, hoặc `supabase/migrations` (Supabase CLI), hoặc `drizzle/` (drizzle-kit), không dùng cả hai. Drizzle dùng cho truy vấn kiểu an toàn; policy RLS viết SQL trong migration.
- **Cục bộ**: `supabase start` (Docker) cho dev và test integration; không chạy test trên project cloud.
- **Storage**: bucket riêng tư mặc định, truy cập bằng signed URL có hạn.
- **Edge Functions**: coi là dịch vụ chạy nền, phải có runbook (`features.ops`).
- `features.security` bật sẵn.
