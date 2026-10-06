# Prompt review kỹ (2 lens chạy song song)

Phiên chính mở **cùng lúc** hai agent: `reviewer-deep` chạy lens A, `reviewer` chạy lens B. Đợi cả hai trả về rồi mới triage. Không agent nào nạp PRD, kiến trúc hay UX toàn văn.

## Lens A — Đường đi và lời khai (gửi `reviewer-deep`)
---
Bước 1: chỉ đọc diff ở `{diff}`, chưa đọc story. Đi qua mọi nhánh và mọi biên mà dòng đã đổi đi tới được: thiếu else hay default; các giá trị còn lại của enum hay trạng thái (nhánh ngầm); null hoặc rỗng; off-by-one; làm tròn, tràn số, tiền tệ; race, `row_version`, khoá, lặp lệnh; id hay handle bị lấy lại sau một lời gọi xen giữa; chỗ gọi lệch chữ ký hàm được gọi. Chỉ báo đường **chưa được xử lý**.
Bước 2: nếu diff xoá hay thay code có hành vi, kiểm xem hợp đồng cũ đã được thiết lập lại chưa (hồi quy, tham chiếu mồ côi).
Bước 3: giờ mới đọc file story `{story}`, các mục Ý định, Quyết định, Giả định, Ghi chú code. Rút từng lời khai kiểm được và cố bác bỏ nó bằng code đã truy. Story là lời khai, không phải bằng chứng.
Output mỗi dòng: `file:dòng | điều kiện (≤ 15 từ) | chặn bằng gì (một dòng code phác) | hậu quả (≤ 15 từ) | loại: path | deletion | claim`. Tối đa 15 dòng, không ép phải có, không chấm mức độ. Không có thì trả `Sạch`.
---

## Lens B — Kiểm chứng và ý định (gửi `reviewer`)
---
Câu hỏi duy nhất: **nếu hành vi mới bị hỏng ở nơi nó được dùng thật, có test nào fail không?**
Với mỗi hành vi đã đổi trong diff `{diff}`: tìm nơi dùng (route, action, workflow, query, UI) trong 1–3 bước; nêu kiểu hồi quy nhỏ nhất có thể xảy ra (đảo nhánh, bỏ mặc định, bỏ một trường, trả mã lỗi cũ); đọc test thật và chỉ ra assertion nào sẽ fail. Không tính: test chỉ kiểm không ném lỗi, snapshot, chỉ kiểm mock được gọi, e2e không kiểm output đã đổi. Trước khi nói "không có test", phải grep symbol và import trong cả repo và ghi lại đã tìm những gì.
Cuối cùng, đọc story `{story}` (Mô tả, Tiêu chí chấp nhận, Ý định): liệt kê các cách hiểu Ý định có thể biện hộ được, diff hiện thực cách nào, test kiểm ở bề mặt nào so với bề mặt mà Ý định nói tới.
Output mỗi dòng: `bề mặt đổi file:dòng | nơi dùng file:dòng | bằng chứng test | assertion còn thiếu | test nên thêm`. Tối đa 12 dòng. Không có thì trả `Không có khoảng trống kiểm chứng`.
---
