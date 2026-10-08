---
title: Lõi chứng từ — nguyên tắc nghiệp vụ mặc định cho hệ thống quản lý nghiệp vụ
status: final
updated: 2026-10-08
sources:
  - Tapetco ERP — 11 biên bản làm rõ nghiệp vụ (docs/product/nghiep-vu/01…11, 06–07/10/2026)
  - Tapetco ERP — PRD 0.18, tài liệu kiến trúc (AD-4, 7, 10, 19, 20)
---

# Lõi chứng từ

Bộ luật dùng chung cho **mọi hệ thống quản lý nghiệp vụ có chứng từ**: ERP, quản lý hồ sơ hành chính, quản lý vận hành… Phần riêng của ERP (kho, mua, bán, tài chính, nhân sự) nằm ở [erp.md](erp.md). Phần riêng ngành nhiên liệu hàng không nằm ở [phu-luc-nhien-lieu-hang-khong.md](phu-luc-nhien-lieu-hang-khong.md).

Mã luật dạng `L-n` là mã ổn định. Đánh số không liền nhau là có chủ đích, không đánh số lại. Cột "Nguồn" trỏ về mã quyết định ở dự án Tapetco (N, D, K, Q, B, T, H, R, C, X, A), dùng khi cần tra lý do gốc.

## 0. Cách dùng file này

**Với AI** (skill `prd`, `architecture`, `stories`, `elicit` khi `.apf/config.json` có `project.domain` là `business` hoặc `erp`):
1. Coi mọi luật ở đây là **mặc định đã chốt** `[CHỐT]`. Không hỏi lại những gì file đã trả lời.
2. Chỉ hỏi các câu ở **mục 13. Bộ câu hỏi làm rõ**. Khách không có ý kiến thì dùng cột "Mặc định".
3. Khách muốn khác mặc định thì ghi ngoại lệ vào PRD kèm lý do, và ghi vào Nhật ký quyết định. Nêu rủi ro **một lần**, sau đó làm theo quyết định của khách.
4. **Không tự đề xuất** kiểm soát cứng, cờ trên chứng từ, họ trạng thái riêng hay quy trình bắt buộc. Những thứ này đi ngược mục 1.
5. Khi viết PRD, chép mục **12. Rủi ro đã chấp nhận** vào phần rủi ro của PRD, ghi là "rủi ro do cấu hình mặc định".

**Với BA:** đọc mục 1–3 trước buổi làm rõ đầu tiên. Dùng mục 13 làm danh sách câu hỏi. Mỗi câu đã có sẵn phương án mặc định, khách chỉ cần gật đầu hoặc sửa.

## 1. Triết lý: hệ thống thích nghi với công ty

| # | Luật | Nguồn |
|---|---|---|
| L-1 | **Mọi thứ khai báo được, không có quy trình bắt buộc.** Nghiệp vụ nào cần duyệt, duyệt mấy bước, điều kiện nào chặn hay chỉ cảnh báo đều do người dùng khai và đổi được về sau. Áp dụng cho **mọi** nghiệp vụ, kể cả nhóm an toàn và chất lượng. | N-4, N-5 |
| L-2 | **Dữ liệu khởi tạo không bật sẵn kiểm soát nào.** Công ty tự bật khi triển khai. Muốn bật sẵn ngoại lệ (ví dụ bước thủ kho xác nhận phiếu nhập) thì phải ghi rõ là ngoại lệ có chủ đích, và vẫn tắt được. | N-5, K-18 |
| L-3 | **Đổi cấu hình không cần duyệt**, chỉ ghi nhật ký. Áp cho bật, tắt, sửa bước, đổi người duyệt, đổi chế độ chặn/cảnh báo. | N-7 |
| L-4 | Muốn biết công ty đang để hở chỗ nào thì dùng **báo cáo Rà soát kiểm soát** (chỉ đọc), xem L-25. Không xử lý bằng cách khoá cứng. | N-10 |

**Vì sao:** khách muốn ERP theo cách làm của công ty, và cách làm đó đổi theo thời gian. Kiểm soát viết cứng vào code thì mỗi lần đổi lại phải sửa phần mềm.

## 2. Năm trạng thái cho mọi đối tượng

| # | Luật | Nguồn |
|---|---|---|
| L-5 | **Chỉ có 5 trạng thái** cho mọi chứng từ và mọi đối tượng (danh mục, kho chứa, lô, thiết bị, lệnh…): **N** Đang lập (xanh lá) · **W** Chờ duyệt (cam vàng) · **R** Trả lại (đỏ) · **Y** Hoàn thành (xanh dương) · **C** Huỷ (xám). | N-17, N-23 |
| L-6 | **Người dùng chỉ đổi nhãn hiển thị theo trang** (ví dụ Y hiện là "Release", "Được phép", "Đang dùng"). Luồng chuyển và logic do code của từng trang quyết định. | N-17, A-1 |
| L-7 | **Không có trường trạng thái riêng** và không có họ trạng thái riêng cho từng module. Các trạng thái như Hold, Quarantine, Bảo trì, Chưa đủ hồ sơ đều là **nhãn** của N hoặc Y. | N-23, C-2 |
| L-8 | **Luồng chuẩn:** N → Hoàn thành → (có quy trình duyệt) W → duyệt hết → Y; (không có quy trình duyệt) N → Y. Từ chối → R. Ở R, người lập Hoàn tác về N, sửa, rồi Hoàn thành lại; lần gửi lại **duyệt từ bước 1**. | N-9 |
| L-9 | **Hoàn tác W → N** được khi chưa ai duyệt bước nào; việc cần làm của người duyệt tự đóng. | N-22 |
| L-10 | **Y là chốt, không mở lại.** Muốn khác thì Huỷ (L-11) hoặc lập chứng từ điều chỉnh. | N-21 |
| L-11 | **Huỷ sau Hoàn thành (Y → C):** bắt buộc lý do; hệ thống ghi **dòng đảo**, giữ dòng gốc. **Không huỷ được khi đã có chứng từ sau sinh từ nó**: phải huỷ từ chứng từ cuối ngược lên. Riêng hoá đơn không tính là "chứng từ sau" (xem [erp.md](erp.md) E-T5). | N-20, D-21 |
| L-12 | **Ngoại lệ có chủ đích: trang có vòng lặp nghiệp vụ được đi ngược Y → N.** Ví dụ đối tượng chứng nhận Release ⇄ Hold, thiết bị khả dụng ⇄ bảo trì, lệnh cần sửa sau khi cấp, phiếu sự cố mở lại. Mỗi lần đi ngược bắt buộc lý do và ghi nhật ký; phần đã ghi sổ thì ghi đảo. Danh sách trang được đi ngược phải **liệt kê rõ trong PRD**. | N-23, Q-11, A-12 |
| L-13 | **Đối tượng phải ở Y mới được dùng cho nghiệp vụ "ra"** (xuất, giao, cấp). N, W, R, C đều chặn hoặc cảnh báo theo chế độ (L-21). | M-3, K-2 |
| L-14 | **Danh mục cũng đi 5 trạng thái.** Ví dụ đối tác mới chỉ có dữ liệu tối thiểu thì ở N ("chưa hoàn tất hồ sơ"), vẫn chọn được trên chứng từ nhưng kèm cảnh báo; đủ hồ sơ thì sang Y. | B-8 |

```
N Đang lập ──Hoàn thành──▶ (có quy trình duyệt) W Chờ duyệt ──duyệt hết──▶ Y Hoàn thành ──Huỷ (ghi đảo)──▶ C Huỷ
    ▲   │                                         │
    │   └──(không có quy trình duyệt)─────────────┼──────────────────────▶ Y
    │                                             └──từ chối──▶ R Trả lại
    └──────────────────Hoàn tác────────────────────────────────────┘
(trang có vòng lặp: Y ──đi ngược, lý do──▶ N)
```

**Vì sao:** khi mỗi module tự đặt trạng thái riêng, Tapetco từng có 12 họ trạng thái. Huy hiệu, bộ lọc và luồng duyệt phải làm lại ở từng trang, và người dùng phải học lại nghĩa trạng thái ở mỗi trang.

## 3. Duyệt

| # | Luật | Nguồn |
|---|---|---|
| L-15 | **Điểm gắn duyệt dựng sẵn** ở **mọi lệnh Hoàn thành** của mọi loại chứng từ, cộng với các hành động nhạy cảm (đổi trạng thái đối tượng chứng nhận, ghi đè chặn, cấp vai trò nhạy cảm, đặt lại mật khẩu, đổi tham số thuế, dung sai, quy đổi…). **Tất cả mặc định tắt.** | N-11 |
| L-16 | **Trang khai báo Quy trình duyệt**: mỗi quy trình gắn vào một điểm, gồm các bước, người hoặc nhóm duyệt từng bước. Muốn bật duyệt thì bật trên trang này. Duyệt là bước theo luật (thủ tục hành chính, quy chế nội bộ) cũng **khai báo trên trang này** khi triển khai, không viết cứng vào code. | N-4, N-11 |
| L-17 | **Tự duyệt là cờ của từng quy trình**: "cho người lập tự duyệt", quy trình mới tạo mặc định **không** cho. "Người lập không tự duyệt" không phải luật cứng. | N-6 |
| L-18 | **Chứng từ đang chờ khi đổi cấu hình** thì đi hết quy trình cũ. Cấu hình mới chỉ áp cho chứng từ Hoàn thành sau lúc đổi. | N-8 |
| L-19 | **Từ chối bắt buộc lý do**; người lập nhận việc cần làm kèm lý do. | N-9 |
| L-20 | **Bước xác nhận chuyên trách** (ví dụ thủ kho xác nhận nhập/xuất) vẫn là một bước W của quy trình, nhưng có **menu riêng** cho người làm, tách khỏi hàng đợi duyệt chung. | K-6 |
| L-20a | **Không đòi nhập lại mật khẩu** khi duyệt hay làm hành động nhạy cảm. Xác thực hai bước cho vai trò nhạy cảm làm ở pha sau. | A-16 |

## 4. Điều kiện kiểm soát: cảnh báo lúc bấm, không lưu cờ

| # | Luật | Nguồn |
|---|---|---|
| L-21 | **Không lưu cờ nào trên chứng từ.** Ngoài 5 trạng thái, không có "cờ an toàn", "cờ dữ liệu", "tạm", "vượt", "nhập thay", "nhập trễ", "khẩn"… Điều kiện được **kiểm lúc bấm** (gán nguồn lực, Lưu, cấp, Hoàn thành) theo **chế độ khai báo cho từng loại điều kiện**: cảnh báo hoặc chặn. | N-27, D-24, D-26 |
| L-22 | **Chế độ mặc định là cảnh báo cho mọi điều kiện.** Công ty tự bật chặn trên trang **Chế độ điều kiện kiểm soát**. | D-17 |
| L-23 | **Chế độ cảnh báo:** hiện lý do, bắt nhập lý do để tiếp tục, ghi vào **bảng lý do vượt cảnh báo** (mỗi điều kiện bị vượt một dòng: ai, lúc nào, chứng từ nào, loại điều kiện, lý do), xem được ở Xem lịch sử. **Chế độ chặn:** không cho làm. **Ghi đè ở chế độ chặn** khai báo theo từng loại điều kiện (cho hay không, nhóm quyền nào), luôn bắt lý do. | D-16, D-26, A-3 |
| L-24 | **Kiểm lại lúc Hoàn thành**: điều kiện đã kiểm lúc gán hay Lưu được kiểm lại khi bấm Hoàn thành; người bấm nhập lý do của mình. | D-31 |
| L-25 | **Không tự mở sự cố, không tự sinh việc khẩn.** Ai thấy cần thì tự lập phiếu sự cố. Thay cho báo cáo "vượt cảnh báo", dùng tra cứu nhật ký và báo cáo Rà soát kiểm soát (quy trình nào đang tắt duyệt, quy trình nào cho tự duyệt). | D-26, D-29, N-10 |
| L-26 | **Khoá cứng chỉ dành cho thiếu dữ liệu làm hỏng chứng từ sau.** Ví dụ thiếu bảng giá thì không Hoàn thành được chứng từ sẽ lên hoá đơn; thiếu mã thuế thì không phát hành được hoá đơn; thiếu thông số bắt buộc để ghi sổ thì không Hoàn thành được. Khoá cứng không theo chế độ và không ghi đè được. Mọi điều kiện khác đi theo L-21. | D-27, D-32, T-13 |
| L-27 | **Luật của nghiệp vụ không phải cờ.** Hệ quả tự động khi chứng từ sang Y là hành vi của chính nghiệp vụ đó và được ghi trong PRD. Ví dụ nhập hàng xong thì lô mới về N chờ kiểm, kết quả thử không đạt thì đối tượng được thử về N. | K-7, Q-4 |
| L-28 | **Chứng từ khoá khi có phiếu liên quan chưa đóng** thì đọc thẳng trạng thái của phiếu đó, không cần cờ. Ví dụ phiếu sự cố liên kết chưa Y thì nút Hoàn thành bị khoá. | D-28 |

## 5. Hiệu lực và ghi sổ chỉ khi Y

| # | Luật | Nguồn |
|---|---|---|
| L-29 | **Chứng từ chỉ có hiệu lực (ghi sổ, cộng trừ tồn, sinh công nợ, cấp quyền…) khi sang Y.** Áp cả cho nghiệp vụ đã xảy ra ngoài đời. Lúc Lưu (N) chỉ kiểm và cảnh báo, **không giữ chỗ**. | A-7, A-8 |
| L-30 | **Chứng từ nào sang Y trước thì có hiệu lực trước.** Luật số lượng (không âm, không vượt hạn mức) được kiểm lại lúc sang Y, có **khoá theo nguồn** (kho, bồn, tài khoản) để hai người không cùng vượt. | A-6, A-8, A-14 |
| L-31 | **Huỷ (Y → C) hay đi ngược (Y → N) thì ghi đảo phần đã có hiệu lực**; sang Y lại thì ghi lại. Chứng từ con sinh kèm (ví dụ phiếu xuất tạo sẵn) **đi theo trạng thái của chứng từ cha**. | A-5, A-12 |
| L-32 | Phần đã làm mà chưa sang Y được xem qua chế độ **Xem lọc sẵn "chứng từ chưa Hoàn thành"** (theo nguồn), chỉ để hiển thị. | A-13 |

## 6. Liên kết chứng từ và sinh chứng từ

| # | Luật | Nguồn |
|---|---|---|
| L-33 | **Bảng liên kết chứng từ chung** (nguồn → đích) làm **từ bản đầu tiên**, kể cả bản demo, để luật huỷ L-11 chạy đúng. | A-9 |
| L-34 | **Chứng từ sinh chứng từ:** chứng từ kế hoạch sang Y thì **mỗi dòng sinh một chứng từ thực hiện** (ví dụ kế hoạch → lệnh), có liên kết nguồn–đích; sau đó mỗi chứng từ đi 5 trạng thái riêng. Phát sinh sau khi kế hoạch đã Y thì lập **kế hoạch bổ sung**. Không có đường nhập tắt bỏ qua kế hoạch. | D-8, D-11, D-12 |
| L-35 | **Đổi giá trị đang dùng bằng Nhân bản:** nhân bản, sửa, Hoàn thành; bản mới thành đang dùng, bản cũ tự ngừng. Chứng từ đã lập **chụp giá trị lúc lập**, nên số cũ không đổi theo. | B-7, X-2 |
| L-36 | **Sai số phát hiện sau khi chứng từ đã đi tiếp** thì huỷ chứng từ gốc rồi lập chứng từ mới đúng số, liên kết về bản huỷ. Không sửa đè. | D-21 |

## 7. Nhật ký, lịch sử, thời điểm

| # | Luật | Nguồn |
|---|---|---|
| L-37 | **Nhật ký kiểm toán** ghi mọi thao tác thay đổi dữ liệu. Mọi chứng từ và danh mục có nút **Xem lịch sử**, gồm nhật ký và lý do vượt cảnh báo. | N-7, A-3 |
| L-38 | **Trạng thái chỉ là một cột trên bảng**; lịch sử đổi trạng thái (kể cả đi ngược) nằm ở nhật ký, không có bảng lịch sử riêng. | A-2 |
| L-39 | **Hạn giữ nhật ký bằng hạn lưu của loại hồ sơ** mà nhật ký đó thuộc về. | N-19 |
| L-40 | **Lưu người nhập**, không lưu cờ: người nhập khác người thực hiện tức là nhập thay. | D-1 |
| L-41 | **Giờ sự kiện do người nhập khai** (giờ bắt đầu, giờ kết thúc…). Không có nút "bắt đầu" lấy giờ máy chủ. Báo cáo tại một ngày trong quá khứ tính theo giờ sự kiện, kể cả chứng từ nhập bù sau. Muốn giữ số đã báo cáo thì xuất file lúc gửi. | D-23, K-12 |

## 8. Tổ chức, tài khoản, phân quyền

| # | Luật | Nguồn |
|---|---|---|
| L-42 | **Cây tổ chức:** Công ty → Trụ sở (các phòng) và các Chi nhánh. **Mỗi chi nhánh là một điểm vận hành**, dưới điểm là tổ hoặc đội. | N-1 |
| L-43 | **Phạm vi dữ liệu theo đơn vị gốc của người dùng**; người ở tổ, đội thấy tới điểm cha. Ai ở trụ sở cần thấy mọi chi nhánh thì đặt đơn vị gốc là Công ty. **Quyền menu** quyết người đó xem được trang nào. | N-24, AD-14 |
| L-44 | **Nhân viên tách khỏi tài khoản.** Nhân viên có thể có hoặc không có tài khoản. Tài khoản trỏ tới một nhân viên khi người đó cần dùng hệ thống. | H-1 |
| L-45 | **Đăng nhập bằng mã nhân viên hoặc email công ty.** Email công ty bắt buộc với mọi tài khoản và là duy nhất. | N-13, N-16 |
| L-46 | **Cấp tài khoản:** quản trị viên tạo thẳng được; trang Yêu cầu cấp tài khoản vẫn có và gắn được quy trình duyệt (L-16). | N-14 |
| L-47 | **Dữ liệu cá nhân nhạy cảm** (số định danh, tài khoản ngân hàng…) để ở cột riêng, có **lớp đọc công khai** và **test bảo đảm** ngoài phân hệ được phép, không truy vấn nào chọn các cột đó. | H-4 |

## 9. Danh mục, dữ liệu khởi tạo, nạp Excel

| # | Luật | Nguồn |
|---|---|---|
| L-48 | **Một trang cho một họ đối tượng, phân biệt theo loại** (một trang Thiết bị cho mọi loại thiết bị, một trang Mặt hàng cho hàng hoá, dịch vụ, vật tư). Dùng **một bộ trường chung**; loại nào không dùng trường nào thì để trống. | N-2, K-13, N-26 |
| L-49 | **Danh sách con gắn với một đối tượng** (ví dụ chứng chỉ của nhân viên) là **lưới trong trang chi tiết** của đối tượng đó, không làm trang riêng. Danh sách cha có cột tóm tắt (ví dụ "Chứng chỉ gần hết hạn nhất"). | H-2 |
| L-50 | **Thuộc tính quyết định cách ghi sổ khoá lại sau dòng sổ đầu tiên** (đơn vị cơ sở, theo lô, đa số lượng…). Muốn đổi thì tạo đối tượng mới và chuyển bằng chứng từ. | N-18, K-11 |
| L-51 | **Mọi danh sách danh mục có nút Tải mẫu và Nạp Excel**, báo lỗi theo từng dòng. Dùng cho cả triển khai lần đầu lẫn mở điểm mới. | C-5 |
| L-52 | **Số liệu đầu kỳ là một chứng từ** ("Số dư đầu kỳ") có dòng, dán hoặc nạp từ Excel, đi 5 trạng thái, Hoàn thành là ghi sổ; gắn duyệt tuỳ chọn; sai thì huỷ và lập lại. Đối tượng cần chứng nhận thì nạp vào ở N, chờ xác nhận. | C-2, C-5, C-6 |
| L-53 | **Tham số thay cho số viết cứng:** dung sai, ngưỡng, thuế suất, quy đổi là tham số theo hợp đồng, theo điểm hoặc theo loại. Chưa có số thật thì demo dùng số tham chiếu, ghi rõ là tham chiếu. | D-18, K-10, T-4 |

## 10. Báo cáo và chỉ số

| # | Luật | Nguồn |
|---|---|---|
| L-54 | **Mọi danh sách và báo cáo xuất được Excel, CSV, PDF.** Cần dữ liệu thì xuất từ danh sách; không làm "bộ xuất dữ liệu" riêng. | R-5, R-8 |
| L-55 | **Xem lọc sẵn thay cho trạng thái ảo và báo cáo lẻ.** Ví dụ "quá hạn chưa thực hiện" là một bộ lọc lưu sẵn trên danh sách, không lưu gì trên chứng từ. | D-5, R-3 |
| L-56 | **Chỉ số kiểm soát đo từ nhật ký và trạng thái**, không đo từ cờ: số lần vượt cảnh báo trên tổng chứng từ, thời gian từ lập tới đóng sự cố, số chứng từ có hiệu lực khi thiếu bước kiểm tra. | R-1 |
| L-57 | **Mỗi chỉ số có một chỉ số đối trọng chống làm đẹp số.** Ví dụ tỷ lệ nhập thay thấp không được đạt bằng cách đăng nhập hộ hay dùng chung tài khoản; kiểm bằng đối chiếu giờ nhập với ca và vị trí người nhập. | R-7 |
| L-58 | **Dashboard quản trị** có khối "chứng từ chưa Hoàn thành (N, W, R) theo điểm". **Dashboard lãnh đạo** chạy trên web, dùng được cả máy tính lẫn điện thoại; không gửi email định kỳ trừ khi khách yêu cầu. | R-4, R-6 |

## 11. Giao diện gắn với nghiệp vụ (bản ngắn)

Chi tiết thiết kế xem `design-baseline/` của plugin. Ở đây chỉ ghi các điểm giao diện mà nghiệp vụ phụ thuộc vào:

- **Danh sách là lưới nhập trực tiếp** (theo mẫu trang Đơn vị tính): thêm, sửa ngay trên lưới; trường phức tạp mở trang chi tiết bằng nút bút chì. Nhóm hàng đợi, báo cáo và tra cứu tồn chỉ đọc, không nhập trực tiếp.
- **Chứng từ có đầu và dòng:** đầu phiếu giữ dạng form, dòng là lưới; **lưu cả đơn một lần**, không lưu từng dòng.
- **Bộ nút chuẩn trên chứng từ:** Lưu · Hoàn thành · Hoàn tác · Huỷ (hỏi lý do) · Nhân bản · Xem lịch sử. Nút nào không hợp trạng thái hiện tại thì ẩn hoặc khoá, kèm lý do khi rê chuột.
- **Huy hiệu trạng thái** dùng màu cố định của 5 trạng thái (L-5), chữ là nhãn theo trang.
- **Hộp nhập lý do** khi gặp cảnh báo, khi Huỷ, Từ chối, đi ngược Y → N, ghi đè chặn. Nội dung nhập vào hộp này ghi vào nhật ký và bảng lý do vượt cảnh báo.
- **Xem lọc sẵn** là bộ lọc có tên trên danh sách (L-55). **Nạp Excel** và **Tải mẫu** có trên mọi danh sách danh mục (L-51).
- **Màn hiện trường dùng đủ trên điện thoại** (máy tính bảng công ty, điện thoại cá nhân) ngay từ khi chạy thật.

## 12. Rủi ro đã chấp nhận của bộ mặc định

Chép mục này vào phần rủi ro của PRD, ghi là "rủi ro do cấu hình mặc định, khách đã chấp nhận".

| # | Rủi ro | Hệ quả từ luật | Lớp bù |
|---|---|---|---|
| RR-1 | Kiểm soát hoàn toàn phụ thuộc cấu hình. Mặc định không có duyệt, không có chặn, nên kiểm toán viên hỏi "làm sao biết bước kiểm là thật" thì chỉ còn nhật ký và ảnh (nếu bật). | L-1, L-2, L-22 | Báo cáo Rà soát kiểm soát (L-25); bật chặn theo từng điều kiện |
| RR-2 | Không cờ, không tự mở sự cố: người dùng vượt cảnh báo mà không ai lập sự cố thì chứng từ vẫn đi tiếp được tới hoá đơn. | L-21, L-25 | Bảng lý do vượt cảnh báo; chỉ số L-56; phát hiện bất thường bằng AI ở pha sau |
| RR-3 | Hiệu lực chỉ khi Y: lúc chứng từ còn N thì số trên sổ cao hơn thực tế (đã giao mà chưa trừ), dễ lệch khi đối soát cuối ngày và dễ nạp lố sức chứa. | L-29 | Xem lọc sẵn chứng từ chưa Hoàn thành (L-32) |
| RR-4 | Thứ tự có hiệu lực theo thứ tự bấm Y, không theo giờ sự kiện, nên FIFO và kiểm âm tính theo thứ tự ghi sổ. | L-30 | Giờ sự kiện vẫn lưu cho báo cáo (L-41) |
| RR-5 | Giờ sự kiện do người nhập khai: khai lùi giờ thì hệ thống không phát hiện được. | L-41 | Nhật ký có giờ máy chủ của thao tác |
| RR-6 | Lịch sử trạng thái nằm trong nhật ký: truy ngược "lúc đó đối tượng đang ở trạng thái gì" chậm và dễ sai hơn so với có bảng lịch sử riêng. | L-38 | Hạn giữ nhật ký đủ dài (L-39) |
| RR-7 | Dữ liệu cá nhân nằm chung bảng với dữ liệu đọc hằng ngày: một truy vấn viết sai có thể làm lộ. | L-47 | Lớp đọc công khai và test |

## 13. Bộ câu hỏi làm rõ (lõi)

Hỏi theo thứ tự. Cột "Mặc định" là đáp án dùng khi khách không có ý kiến.

| # | Câu hỏi | Mặc định | Vì sao hỏi |
|---|---|---|---|
| QL-1 | Cây tổ chức: công ty có những chi nhánh, điểm vận hành, tổ đội nào? Có nhiều pháp nhân không? | Một pháp nhân; Trụ sở + Chi nhánh = điểm; tổ đội dưới điểm (L-42) | Quyết phạm vi dữ liệu và cách lọc báo cáo |
| QL-2 | Nghiệp vụ nào **bắt buộc theo luật hay quy chế** phải có duyệt hoặc xác nhận? | Không có; mọi duyệt khai trên trang Quy trình duyệt khi triển khai (L-16) | Cần biết để đưa vào dữ liệu khởi tạo, không viết cứng |
| QL-3 | Có quy trình nào cần bật sẵn khi chạy thật (ngoại lệ của L-2)? | Không; ngoại lệ thường gặp là bước thủ kho xác nhận phiếu nhập | Ghi rõ là ngoại lệ có chủ đích |
| QL-4 | Người lập có được tự duyệt ở quy trình nào không? | Không cho, bật theo từng quy trình (L-17) | |
| QL-5 | Điều kiện kiểm soát nào cần **chặn** ngay từ ngày chạy thật, ai được ghi đè? | Cảnh báo hết, không ai ghi đè (L-22, L-23) | Chặn sai chỗ làm đứng vận hành |
| QL-6 | Có thông tin nào **thiếu thì không được đi tiếp** vì làm hỏng chứng từ sau (giá, thuế, thông số bắt buộc)? | Chỉ những khoá cứng loại L-26 | Khoá cứng là ngoại lệ, phải liệt kê đủ |
| QL-7 | Trang nào có **vòng lặp nghiệp vụ** cần đi ngược Y → N? | Đối tượng chứng nhận, thiết bị, lệnh thực hiện, phiếu sự cố (L-12) | Danh sách phải liệt kê rõ trong PRD |
| QL-8 | Nhãn hiển thị của từng trạng thái ở các trang đặc thù (ví dụ Y = "Release", "Được phép")? | N Đang lập, W Chờ duyệt, R Trả lại, Y Hoàn thành, C Huỷ | |
| QL-9 | Ai nhập chứng từ hiện trường: người làm tự nhập hay nhập thay? Thiết bị gì, mạng ra sao, mất mạng làm thế nào? | Tuỳ điểm; máy tính bảng và điện thoại; trực tuyến, mất mạng ghi giấy rồi nhập bù (L-40) | Quyết giao diện điện thoại và việc có cần offline |
| QL-10 | Đăng nhập bằng gì; mọi người có email công ty không; có cần trang Yêu cầu cấp tài khoản không? | Mã nhân viên hoặc email; email bắt buộc; quản trị viên tạo thẳng (L-45, L-46) | Email bắt buộc kéo theo việc phải cấp email cho cả nhân viên hiện trường |
| QL-11 | Người không dùng hệ thống (kíp, công nhân) có cần nằm trong danh mục nhân viên không? | Có, không cần tài khoản (L-44) | Gán nguồn lực, cảnh báo chứng chỉ |
| QL-12 | Dữ liệu cá nhân nào sẽ lưu (số định danh, ngân hàng, sức khoẻ)? | Cột riêng + lớp đọc công khai (L-47) | Quy định bảo vệ dữ liệu cá nhân |
| QL-13 | Hạn lưu hồ sơ của từng loại chứng từ là bao lâu? | Theo luật lưu trữ của loại hồ sơ; nhật ký giữ bằng hạn đó (L-39) | Ảnh hưởng dung lượng, cách lưu trữ |
| QL-14 | Dữ liệu khởi tạo đang ở đâu (Excel, phần mềm cũ, giấy)? | Excel, nạp bằng nút Nạp Excel từng danh sách (L-51) | Quyết công cụ chuyển đổi |
| QL-15 | Có cần kênh báo khẩn ngoài ứng dụng (SMS, Zalo, email) không? | Không; chấp nhận rủi ro, bản in có "hiệu lực đến giờ H" (N-15) | Tích hợp ngoài tốn công |
| QL-16 | Chỉ số nào ban lãnh đạo muốn xem, trên kênh nào? | Web cả máy tính lẫn điện thoại, không email định kỳ (L-58) | |
| QL-17 | Có cần bản demo cho khách xem không; demo tách khỏi bản thật thế nào? | Môi trường và cơ sở dữ liệu riêng (APP_ENV); không đóng dải chữ DEMO lên màn hình hay bản in | Rủi ro: bản in demo trông giống bản thật |

## 14. Gợi ý cho kiến trúc

Dành cho `/apf:architecture`. Mỗi gạch đầu dòng là một ứng viên AD:

- **Kiểu trạng thái chung ở lõi** (kernel): một kiểu `N|W|R|Y|C`; mỗi trang khai luồng chuyển (state pattern) và nhãn riêng. Huy hiệu, bộ lọc, luồng duyệt làm một lần (L-5, L-6).
- **Điểm gắn duyệt** đăng ký theo `(loại chứng từ, hành động)`; mặc định tắt (L-15).
- **Bảng liên kết chứng từ** (nguồn, đích, loại liên kết), có từ bản đầu (L-33).
- **Nhật ký kiểm toán** và **bảng lý do vượt cảnh báo** tách riêng; cả hai hiện ở Xem lịch sử (L-23, L-37).
- **Ghi sổ trong một giao dịch lúc sang Y**, có **khoá theo nguồn** (khoá dòng hoặc advisory lock theo kho, bồn, tài khoản) (L-29, L-30).
- **Ghi đảo, không xoá dòng sổ** (L-11, L-31).
- **Cổng tích hợp bên ngoài** (hoá đơn điện tử, ngân hàng…) gọi **ngoài giao dịch ghi sổ**, có hàng đợi và thử lại.
- **Cách ly môi trường** demo, thử, thật bằng biến môi trường, nhãn DB và cơ sở dữ liệu riêng (L-58, QL-17).
- **Test kiến trúc**: không module nào tự khai họ trạng thái; không bảng nào có cột cờ kiểu `is_flagged`, `*_flag`; truy vấn ngoài phân hệ được phép không chọn cột dữ liệu cá nhân (L-7, L-21, L-47).

## Nhật ký quyết định

- 2026-10-08 — Tạo bộ lõi từ 11 biên bản Tapetco; mọi quyết định Tapetco thành mặc định — người dùng muốn tái sử dụng cho dự án ERP và hệ thống nghiệp vụ khác — người dùng chốt
- 2026-10-08 — Duyệt mặc định tắt, dự án nào có duyệt theo luật thì khai trên trang Quy trình duyệt, không viết cứng — người dùng chốt
