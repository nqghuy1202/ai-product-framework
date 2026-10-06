# Mẫu: chứng từ có đầu và dòng (đơn hàng, phiếu kho...) [CHỐT]

Quy tắc của người dùng: **phần đầu giữ dạng biểu mẫu; phần còn lại thành danh sách giống mẫu chuẩn; cả chứng từ lưu một lần, không lưu từng dòng.**

1. **Danh sách chứng từ**: lưới chuẩn (`list.md`). Sửa trực tiếp được các trường đầu đơn đơn giản; trường tính toán và trạng thái chỉ xem; chứng từ đã chốt thì khoá cả dòng. Bút chì mở chi tiết. Nếu chứng từ mới bắt buộc phải có dòng thì không cho thêm trên lưới, mà đi qua nút "Tạo …" (`?id=new`).
2. **Chi tiết**: khung trang chi tiết (`detail.md`), gồm vùng "Đầu" (lưới trường) và vùng "Dòng". Vùng Dòng là lưới chuẩn chạy ở chế độ *đưa thay đổi lên form cha*: không có nút Lưu riêng, form cha lưu cả chứng từ một lần.
3. Lưới trong vùng chi tiết **triệt lề trái, phải, trên** để sát mép mà viền khung vẫn hiện. **Không** triệt lề dưới (đáy lưới sẽ trùng viền khung), và **không** dùng chế độ tràn mép của khung (sẽ đè mất viền).
4. Thanh công cụ của vùng Dòng nằm cùng hàng với tiêu đề vùng "Chi tiết dòng (n)": Tìm, Lọc, ?, Xoá dòng, Thêm dòng. Có cột ô tích ở đầu dòng. Lưới cao 8 dòng. Không có phần Tổng bên dưới lưới (tổng đặt ở vùng Đầu nếu cần).
5. Lưới phụ chỉ xem (ví dụ các phiếu nhập theo đơn) dùng cùng lưới ở chế độ readOnly; bút chì mở phiếu.
6. Điện thoại: mỗi dòng là một thẻ; nút ＋ của lưới đặt cao hơn thanh Lưu/Hoàn thành.

```tsx
<DetailSection title="Dòng đơn" storageKey="order-lines">
  {/* sát mép trái, phải, trên; giữ lề dưới để đáy lưới không trùng viền khung */}
  <div className="-mx-4 -mt-4">
    <SheetGrid columns={lineColumns} rows={initialLines} readOnly={locked} onRowsChange={setLineRows} />
  </div>
</DetailSection>
```
