# Dựng khung + test đỏ (việc của planner)

Mục tiêu: sau bước này, Sonnet **không còn phải thiết kế gì**. Mọi quyết định về hình dạng code đã nằm trong file khung. Sonnet chỉ viết phần thân để test chuyển từ đỏ sang xanh.

## 1. Opus viết đầy đủ (không để Sonnet viết)
- Kiểu dữ liệu, type, interface, enum, schema validate (zod...), schema DB (Drizzle...) **và migration**, vì migration là bề mặt rủi ro nhất.
- Chữ ký hàm, method, Server Action, route handler, kèm kiểu vào và ra đầy đủ.
- Mã lỗi, thông báo lỗi (ánh xạ mã sang tiếng Việt), hằng số luật nghiệp vụ.
- Chỗ đăng ký: route, menu, registry, permission, seed khung, tệp gom (`index.ts`).
- Component giao diện: props có kiểu, cấu trúc JSX tối thiểu (các vùng, `data-testid`), chọn component có sẵn trong `src/ui` hoặc của design system. Sonnet điền phần hiển thị và hành vi.
- Code nối dây tầm thường (gọi qua lại giữa các lớp, 1–3 dòng) thì viết luôn, không để `APF:IMPLEMENT`.

## 2. Thân hàm để lại cho Sonnet
```ts
export async function approveOrder(input: ApproveOrderInput): Promise<Result<Order, ApproveOrderError>> {
  // APF:IMPLEMENT — chuyển trạng thái submitted → approved; từ chối 'not_submitted' nếu khác submitted; ghi audit.
  throw notImplemented('orders.approveOrder');
}
```
- Mỗi chỗ để lại có đúng một dòng `APF:IMPLEMENT — <việc phải làm, luật nghiệp vụ, mã lỗi trả về>`.
- Dự án chưa có helper `notImplemented` thì planner tạo một lần (ví dụ `src/kernel/not-implemented.ts`). Helper ném lỗi có thông điệp thống nhất, để test đỏ cho ra cùng một dạng lỗi. Helper này là hạ tầng dùng lại cho mọi story sau: không khoá nó trong `locked`, không coi là nợ khi tạm thời không còn nơi nào import.
- Luật nào có thể đổi theo câu trả lời của người dùng thì đặt vào **một chỗ duy nhất** (hằng hoặc hàm luật). Đổi phương án khi đó chỉ chạm đúng một chỗ.

## 3. Test đỏ (test chấp nhận)
- Mỗi AC của story có ít nhất một test. Tên test bắt đầu bằng ID: `AC-1: …`.
- Test kiểm **hành vi quan sát được**: giá trị trả về, dữ liệu sau khi ghi, mã lỗi, nội dung hiện trên màn hình. Không kiểm chi tiết cài đặt. Không chỉ kiểm "không ném lỗi".
- Đủ ma trận trạng thái của luồng: thành công · rỗng · lỗi · không có quyền · dữ liệu cực đoan (dài, nhiều, số âm, số lẻ) · lặp lệnh hoặc đồng thời (nếu có).
- Theo đúng cách repo đang viết test: cùng runner, cùng helper, cùng thư mục. Test integration dùng database test riêng, **không bao giờ** dùng database dev hay production.
- Mọi test của story được khoá trong `locked`; Sonnet không được sửa.

## 4. Kiểm "đỏ đúng lý do" trước khi trình người dùng
1. `typecheck` **xanh**: khung phải biên dịch được.
2. `lint` xanh.
3. Chạy test của story: **mọi** test phải đỏ vì `notImplemented` hoặc vì assertion sai, **không** được đỏ vì import, biên dịch hay thiếu fixture.
4. Test cũ không đỏ thêm. Ghi lại danh sách test đã đỏ sẵn (đường nền) vào mục Test đỏ.

## 5. Ghi hợp đồng
Ghi khối `apf-contract` trong file story:
- `allow`: glob các file Sonnet được sửa, gồm file khung và một **vùng tự do** để Sonnet tạo file phụ (ví dụ `src/modules/orders/domain/**`).
- `locked`: mọi file test của story, cùng file schema và migration nếu muốn khoá cả chúng.
- `signatures`: file khung có export mà Sonnet không được đổi chữ ký.

Sau khi người dùng duyệt khung, phiên chính chạy `node .apf/bin/apf.mjs contract snapshot <id>`.
