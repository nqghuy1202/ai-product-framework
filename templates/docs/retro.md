---
epic: "{{NN}}"
date: {{YYYY-MM-DD}}
verdict: accepted | accepted-with-open-items | rejected
criteria: declared | profiled
---

# Retro epic {{NN}} — {{tên}}

> Trần ≤ 150 dòng. Phát hiện nào cũng phải có nguồn (file:dòng, commit, story). Không trỏ được nguồn thì bỏ.

## Tóm tắt epic
Kết quả mong muốn · số story xong/dở · khoảng commit `{{base}}..{{head}}`.

## Đối chiếu "Xong khi"
| Điều kiện | Đạt? | Bằng chứng |
|---|---|---|

## Phát hiện
| # | Góc nhìn | Phát hiện | Nguồn | Xử lý lần này | Phòng lần sau |
|---|---|---|---|---|---|
| 1 | spec ↔ code / phình file / trùng lặp / lệch quy ước / ranh giới story / hành vi thật | … | … | sửa ngay / hoãn / chấp nhận | sửa spec / cỡ story / thêm luật hoặc gate / không |

Ghi rõ phần nào **đã kiểm và sạch**, phần nào **chưa kiểm**.

## Thử hành vi thật
Luồng nào đã chạy thử, kết quả ra sao.

## Theo dõi việc của retro trước
| Việc | Kết quả (đã làm, kèm bằng chứng / không thấy bằng chứng) |
|---|---|

## Việc cần làm
| Việc | Người làm | Hạn |
|---|---|---|

## Kết luận
accepted / accepted-with-open-items / rejected — lý do. Còn story dở dang thì kết luận là rejected. Người dùng có quyền ghi đè kết luận.
