# Bẫy kỹ thuật đã gặp (Next.js + Tailwind v4 + shadcn/Radix)

1. **CSS toàn cục nằm ngoài layer luôn thắng tiện ích Tailwind v4.** Tailwind v4 đặt tiện ích trong `@layer utilities`, nên CSS không thuộc layer nào sẽ đè lên. Luật chung cho điện thoại (ví dụ nút chính cao 48) sẽ đè lên `size-10` của từng nút. Cách xử lý: dùng thuộc tính loại trừ (`:not([data-fab])`), thuộc tính đánh dấu kiểu (`data-primary`, `data-soft`), hoặc luật có phạm vi hẹp (`.board-page .btn`).
2. **Radix Dialog tự định vị** (`top-1/2 left-1/2 translate`). Muốn thành tấm trượt từ đáy trên điện thoại thì phải đè `inset/translate/transform`. Popover của Radix nằm trong `[data-radix-popper-content-wrapper]` có `transform` nội tuyến, phải đè bằng `!important`.
3. **Cột lưới `auto` hoặc `1fr` phình theo chữ dài nhất** và làm thẻ, ô chọn, biểu mẫu rộng hơn khung chứa. Dùng `grid-cols-[minmax(0,1fr)]` kèm `min-w-0`. `select` có bề rộng tự nhiên theo lựa chọn dài nhất, nên cần thêm `max-width: 100%; min-width: 0`.
4. **Chế độ tràn mép của khung con đè mất viền khung cha**, còn `-m-4` làm đáy lưới trùng viền dưới. Dùng `-mx-4 -mt-4`.
5. **Đệm gấp đôi**: thanh công cụ có đệm riêng lại nằm trong khung bọc cũng có đệm. Chỉ giữ đệm ở một tầng.
6. **Bật `tnum` cho toàn trang** làm mã chứng từ trông giãn với font Inter. Chỉ bật chữ số đều cho cột số, ô số và KPI.
7. **Điểm ngắt Tailwind lệch với CSS**: CSS dùng 768/1200, còn Tailwind mặc định `lg` 1024 và `xl` 1280. Khai `--breakpoint-*` trong `@theme` để khớp.
8. **SSR không biết bề rộng màn hình**: `useIsPhone()` trả `false` ở server và ở lần vẽ đầu. Danh sách dạng thẻ chỉ dựng sau khi trình duyệt biết bề rộng; trong lúc chờ thì ẩn bảng bằng CSS. Không dựng cả hai bản cùng lúc trong HTML từ server.
9. **Ranh giới server/client**: hàm (ví dụ `render` của cột) không truyền qua props từ Server Component được. Hằng dùng chung cho trang server phải nằm ở file không có `'use client'`.
10. **Phần tử cố định chồng nhau trên điện thoại**: nút nổi phải nằm trên thanh dưới, và còn cao hơn nữa khi trang có thanh Lưu cố định. Trang có thanh cố định cần `padding-bottom` tương ứng. Luôn tính `env(safe-area-inset-bottom)`.
11. **Thứ tự lớp**: đầu trang dính phải thấp hơn thanh tab, nếu không danh sách thả xuống của tab bị che. Lớp phủ ở z 50 thì menu thả xuống bên trong phải cao hơn 50.
12. **Chọn phần tử bằng lớp Tailwind trong CSS** (`[class~="bg-primary"]`) dễ vỡ khi đổi lớp. Ưu tiên `data-slot` hoặc `data-*`, và kiểm selector có thật sự khớp phần tử không (đã có trường hợp CSS nhắm `data-slot` mà component đặt tên khác).
13. **Chú thích trong code có thể lỗi thời** (ví dụ ghi "nút 40 px" trong khi token là 32). Đọc token, đừng tin chú thích.
14. **Mở bằng rê chuột** phải có đường thay thế bằng bấm hoặc Enter; đóng sau 250 ms kể từ lúc chuột rời đi.
15. **Gọi `focus()` trong lưới cao làm trang tự cuộn.** Dùng `focus({ preventScroll: true })`. Hộp chi tiết thu gọn nên tự focus vào ô nhập đầu tiên thay vì nút ✕.
16. **Bấm đúp trong lưới vẽ lại ngay khi nhấn chuột** nên không bắt được `dblclick`. Bắt `e.detail === 2` trong `mousedown`.
17. **Chiều cao "hết màn" bằng `calc(100dvh - …)`** phụ thuộc biến chiều cao của thanh đầu, thanh tab và các dải khác. Thêm hay bớt một thanh cố định thì phải cập nhật biến.
18. **Playwright `page.evaluate`**: truyền hàm dạng chuỗi, vì tsx chèn `__name` làm hỏng hàm. e2e chạy `next build` vào chung thư mục `.next`, nên phải tắt `next dev` trước. Ca duyệt nhiều trang cần `test.setTimeout`.
19. **Đo tràn tự động** phải bỏ qua phần tử `fixed`/`absolute`, `svg`, các vùng tự cuộn ngang (bảng, hàng tab) và các khối có lề âm theo quy ước tràn mép.
20. **Prop lỗi thời** (ví dụ `description` không còn được vẽ): khi dựng dự án mới thì bỏ hẳn, đừng giữ cho tương thích.
21. **Hằng lấy từ tệp `'use client'` vào trang server thành tham chiếu client, không phải giá trị** (v2, Tapetco 09/10/2026: khoá cột lưới import từ tệp client nên mọi ô rỗng). Hằng, khoá cột, hàm dựng dòng dùng ở trang server phải nằm ở tệp thường (không `'use client'`).
22. **CSS ngoài layer đè cả kiểu thẻ điện thoại.** Lớp bảng mới (vd `table.lv2-static td { padding… }`) có độ ưu tiên cao hơn luật biến bảng thành thẻ của `PhoneTable` (`[data-slot="phone-table"] td`). Giới hạn lớp mới bằng `@media (min-width: 768px)`.
23. **Tên token kết thúc bằng `-dark` hay `-hc` bị bộ sinh token hiểu là biến thể chế độ màu** (hình minh hoạ đen thui vì `scene-dark`). Đặt tên khác (`-deep`, `-shade`).
24. **Chữ tiếng Việt "BẢN DEMO" in hoa** vướng luật cấm nhãn in hoa; viết "Bản demo".
25. **React tách chữ có biến thành nhiều nút văn bản** khi vẽ tĩnh (`Đã chọn {n}/{max}` thành ba nút), test so chuỗi sẽ trượt. Dùng template string cho câu có số.
26. **Bố cục lưu theo người dùng phải chịu được khối mới**: khi thêm khối (vd Bảng tin), bộ đọc bố cục đã lưu phải nối khối thiếu vào cuối thay vì coi bố cục cũ là sai và bỏ.
27. **Ngăn xem trước ngay trên trang** thì phải giữ bản "đã lưu" riêng để Đóng/✕/Esc trả lại; đừng chỉ giữ một state.
28. **Đổi kiểu dáng lớn (màu icon, bố cục) nên thử trên một hai chỗ và hỏi trước** khi áp toàn hệ thống: người dùng có thể bỏ, và lệnh khôi phục tệp chưa commit bị hook bảo vệ chặn.
