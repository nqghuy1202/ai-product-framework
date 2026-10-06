# Mẫu: danh sách chuẩn (nhập trực tiếp) [CHỐT]

Mẫu gốc là trang "Đơn vị tính" của Tapetco. **Mọi danh sách danh mục** đều theo mẫu này. Trang mới chỉ cần khai cột, hành động lưu và (nếu có) đường mở chi tiết.

## Cấu trúc
1. `<main>` chỉ chứa **đầu trang** (breadcrumb, tiêu đề, vùng nút) rồi tới **khung danh sách**. Không có dòng mô tả.
2. Khung danh sách: thẻ `rounded-xl border bg-surface`, mặc định **tràn sát mép** (`data-bleed`) ở máy tính và tablet.
3. Thanh công cụ nằm trong khung (đệm 8 × 12 px, khe 8): ô tìm giãn hết bên trái; bên phải có nút `?` (hướng dẫn phím tắt), `Xoá n dòng` (chỉ hiện khi có dòng được tích) và `Lưu (n dòng)` (sáng lên khi có thay đổi).
4. Nút **Thêm {đối tượng}** đặt ở vùng nút đầu trang, chèn một dòng trống lên đầu lưới.
5. Lưới: tiêu đề cột dính, cao 44; bấm tiêu đề mở ô lọc của cột đó (gõ để lọc ngay, Sắp xếp tăng/giảm, Bỏ lọc cột). Hàng cao 36, chỉ kẻ ngang. Cột bút chì 40 px chỉ có khi trang có chi tiết riêng. Cột ⋮ 44 px ở cuối dòng (Nhân bản, Chèn dòng phía trên, Xoá).
6. Tương tác: bấm một lần là chọn dòng (cả dòng tô nền primary-container); bấm đúp, Enter hoặc F2 mới sửa ô; Esc huỷ; mũi tên và Tab để di chuyển; Shift để chọn vùng; Ctrl+C/V dán khối từ Excel; Delete xoá nội dung ô.
7. **Lưu thủ công** bằng nút Lưu hoặc Ctrl+S. Ô đã sửa có chấm vàng 6 px; ô sai kiểu dữ liệu có nền danger-container; dòng mới có nền grid-cell-edit; dòng đã bị người khác sửa có gạch đỏ dưới và báo "Tải lại trang".
8. Chiều cao: từ 768 px rộng và 560 px cao, khung giãn hết phần màn còn lại, bảng cuộn bên trong, tối thiểu 18rem. Lưới không nằm một mình trên trang thì cao cố định 8 dòng.
9. Trường phức tạp không nhập trên lưới mà mở trang hoặc hộp chi tiết bằng **bút chì**. Bấm vào dòng hay vào số phiếu **không** chuyển trang.
10. Trang có nhiều danh sách (ví dụ lưới trên lọc lưới dưới): mỗi lưới bọc trong một `section` có tiêu đề `h2` 15 px; lưới dưới có chip "Đang xem … · Bỏ lọc". Trang có phần thông tin chung phía trên thì tắt tràn mép.
11. Điện thoại: dùng thẻ thay cho bảng, thanh tìm 48 px, nút nổi ＋, sửa bằng tấm trượt từ đáy.

## Danh sách chỉ xem (hàng đợi, báo cáo, tồn kho) [CHỐT]
Kiểu dáng như trên, nhưng không nhập trực tiếp. Gồm ô tìm và nút **Lọc** (Từ ngày, Đến ngày, Trạng thái chọn nhiều có số đếm, Điều kiện khác; bấm Áp dụng mới lọc). Có các bộ lọc Đã lưu, dòng "Hiển thị [20] trên N", chip lọc có ✕ và nút "Xoá tất cả". Hàng 44 px, chỉ một mật độ Gọn. Bút chì ở đầu dòng, ⋮ ở cuối dòng, phân trang ở giữa chân.

## Phác code (Next.js + React)
```tsx
// app/<module>/<catalog>/page.tsx — Server Component
export default async function CatalogPage() {
  const { canWrite } = await requirePage('<menu-code>');
  const rows = (await listRecords()).map(toRow);
  return (
    <main>
      <PageHeader title="Tên danh mục" breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Nhóm' }, { label: 'Tên danh mục' }]} />
      <RecordsGrid rows={rows} canWrite={canWrite} />
    </main>
  );
}

// records-grid.tsx — 'use client'
const COLUMNS = [
  { key: 'code', label: 'Mã', kind: 'text' },
  { key: 'name', label: 'Tên', kind: 'text' },
  { key: 'group', label: 'Nhóm', kind: 'lookup', search: localSearch(groups) },
] as const;
export function RecordsGrid({ rows, canWrite }: Props) {
  return <SheetCatalog columns={COLUMNS} rows={rows} subject="danh mục" onSaveRows={saveRowsAction} readOnly={!canWrite} />;
}
```
```css
/* Tràn mép và cao hết màn */
.page [data-bleed] { margin-inline: calc(var(--page-pad-x) * -1); border-inline-width: 0; border-radius: 0; }
@media (min-width: 768px) and (min-height: 560px) {
  .page main:has(> [data-bleed]) { display: flex; flex-direction: column; height: calc(100dvh - var(--ds-size-app-header) - var(--ds-size-tabbar) - 46px); min-height: 24rem; }
  .page main > [data-bleed] { flex: 1 1 0; min-height: 18rem; display: flex; flex-direction: column; }
}
@media (max-width: 767px) { .page [data-bleed] { margin-inline: 0; } }
```
Mỗi lần lưu gửi kèm `requestId` (chống lưu đôi) và `rowVersion` (phát hiện xung đột).
