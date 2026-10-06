# Bản đồ tài liệu (app-map)

> Mỗi file mô tả **một chủ đề** của hệ thống (một module, một luồng, một tích hợp), và khai `covers` cho phần code nó phụ trách.
> Trạng thái của các doc (VERIFIED / SUSPECT / BROKEN) do máy tính: `node .apf/bin/apf.mjs docs`. Doc SUSPECT thì phải đối chiếu với code trước khi tin.

## Việc → đọc file nào
| Khi làm | Đọc |
|---|---|
| … | `NN-<chủ-đề>.md` |
| Sự cố ở hệ thống chạy nền | `../ops/README.md` → runbook của dịch vụ **trước khi** sửa code |

## Danh mục
| # | File | Chủ đề | Load khi |
|---|---|---|---|

## Luật
- Một chủ đề một file. Tên file `NN-<slug-khong-dau>.md`. Trên 20 file thì chia thư mục theo domain.
- Tên symbol viết trong backtick (`tenHam`) để tìm được bằng grep.
- Đổi code trong `covers` thì sửa doc trong cùng commit. Doc vẫn đúng thì chạy `docs verify`.
- Không sửa tay các file trong `docs/_generated/`.
