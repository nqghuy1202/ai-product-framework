---
title: Phụ lục ngành — nhiên liệu hàng không (tra nạp, kho bồn, QC)
status: final
updated: 2026-10-08
sources:
  - Tapetco ERP — biên bản 02 Điều độ và tra nạp, 03 Kho, 04 QC, 05 Bán hàng, 06 Tài chính, 11 Kiến trúc
---

# Phụ lục: nhiên liệu hàng không

Chỉ đọc file này khi dự án thuộc ngành kinh doanh, tra nạp nhiên liệu (hàng không, hàng hải, bến xăng dầu, kho xăng dầu). Phần chung xem [loi-chung-tu.md](loi-chung-tu.md) và [erp.md](erp.md); ở đây chỉ ghi phần **đặc thù ngành** và cách nó khớp vào phần chung.

Nguồn duy nhất là dự án Tapetco: công ty tra nạp nhiên liệu hàng không ở các sân bay SGN, HAN, DAD, CXR/PQC, có tham chiếu chuẩn JIG.

## 1. Bản đồ thuật ngữ ngành → khái niệm chung

| Ngành | Khái niệm chung | Ghi chú |
|---|---|---|
| Bồn (tank) | Kho chứa (E-Q1) | Mang trạng thái chất lượng Release ⇄ Hold = Y ⇄ N |
| Xe tra nạp (refueller) | Kho di động (E-K3) + thiết bị (E-X4) | Hai trạng thái: thiết bị và chất lượng |
| Xe dispenser, hydrant | Thiết bị; ghi nhận trừ thẳng bồn nguồn | Điểm dùng hydrant không qua tồn xe |
| Bồn nhận (receipt tank) | Kho nhận hàng nhập | Nhập xong thì bồn tự Y → N chờ QC (E-Q2) |
| Bồn rút (defuel tank) | Kho chứa hàng thu hồi | Không phải Y nên chặn xuất; lối ra theo E-Q8 |
| Lô (batch) | Lô | Quarantine = N, Release = Y |
| CoA | Số chứng nhận chất lượng (E-Q4) | Bắt buộc và duy nhất khi release lô nhập |
| BOL | Chứng từ giao của nhà cung cấp (E-K6) | Dung sai tham chiếu ±0,5% |
| Kế hoạch tra nạp | Chứng từ kế hoạch (lõi L-34) | Đầu: điểm, ngày, ca; dòng: chuyến, giờ, sản lượng, xe, kíp, bồn |
| Lệnh tra nạp | Chứng từ thực hiện | Mỗi dòng kế hoạch sinh một lệnh; Y = "Được phép" |
| Ghi nhận tra nạp / rút | Chứng từ giao hàng đã xảy ra | Cùng một trang, ô Loại = Tra nạp / Rút |
| Kiểm tra trước tra nạp (JIG) | Kiểm tra trước khi giao (E-Q7) | Mỗi lệnh một lần |
| Hãng bay | Khách hàng / đối tác | Hãng vãng lai cũng dùng bảng giá |

## 2. Điều độ và tra nạp

| # | Mặc định | Nguồn |
|---|---|---|
| F-1 | Hãng gửi lịch bay (thường bằng Excel), nhưng **không nạp Excel**: điều độ nhập thẳng vào **trang Kế hoạch**. Không có trang "nhập nhanh lệnh". | D-4, D-12 |
| F-2 | **Gán xe, kíp, bồn trên dòng kế hoạch**; điều kiện được kiểm ngay khi gán. Kế hoạch sang Y thì chép sang lệnh; đổi sau đó thì sửa trên lệnh (lệnh ở N). | D-13 |
| F-3 | **Lệnh sinh ra ở N.** Gần giờ bơm, kíp làm kiểm tra trước tra nạp, điều độ **cấp lệnh N → Y** (từng lệnh hoặc nhiều lệnh). Lệnh Y tạo sẵn phiếu xuất, chưa trừ tồn. Đổi ETA hay sản lượng thì Hoàn tác Y → N, sửa rồi cấp lại; phiếu xuất tạo sẵn bị huỷ và tạo lại. | D-5, D-6, D-14 |
| F-4 | **"Quá ETA chưa bơm"** là Xem lọc sẵn trên danh sách lệnh, không phải trạng thái. | D-5 |
| F-5 | **Một lệnh có nhiều ghi nhận** (bơm bổ sung, bơm hai lần); mỗi ghi nhận có nhiều dòng thiết bị. | D-7 |
| F-6 | **Ghi nhận sang Y khi kíp hoặc trưởng ca bấm Hoàn thành**, và việc bấm này là xác nhận sản lượng. **Không có chữ ký phi công.** Nút Hoàn thành bị khoá khi: thiếu tỷ trọng hoặc nhiệt độ · có phiếu sự cố liên kết chưa Y · lệnh chưa gắn Bảng giá bán (khoá cứng). | D-10, D-20, D-27, D-28, D-32 |
| F-7 | **Không có nút "Bắt đầu bơm".** Giờ bắt đầu và giờ kết thúc bơm do người nhập khai (lõi L-41). | D-23 |
| F-8 | **Người nhập tuỳ điểm**: ở điểm lớn kíp tự nhập tại tàu bay; ở điểm nhỏ kíp ghi phiếu giấy, điều độ nhập thay. Thiết bị là máy tính bảng công ty cấp và điện thoại cá nhân; mạng 4G hoặc wifi ổn định. | D-1, D-2, D-3 |
| F-9 | **Mất mạng:** in kế hoạch và danh sách lệnh có ghi giờ in; nhập bù sau là ghi nhận bình thường. Bản in và trạng thái tải trước ghi "hiệu lực đến giờ H"; quá giờ H thì kíp xác nhận lại với điều độ trước khi bơm. Không làm phiếu giấy đánh số in sẵn, sổ phát phiếu hay cửa sổ sự cố. Chạy offline để pha sau. | D-30, N-15 |
| F-10 | **Rút nhiên liệu** dùng chung trang ghi nhận, số lượng ngược chiều, nhiên liệu đổ vào bồn rút. | D-19 |
| F-11 | **Sai số sau khi đã lên hoá đơn:** huỷ ghi nhận, mở sẵn hoá đơn điều chỉnh, lập ghi nhận mới (E-T5). | D-21 |
| F-12 | **Chứng chỉ của kíp chỉ cảnh báo**, không có chế độ chặn. | D-15 |
| F-13 | Bỏ: phân loại nguyên nhân trễ, hoạt động ngoài kế hoạch. Giữ cho pha sau: dự báo đơn giản từ kế hoạch và lệnh. | D-25 |

## 3. Kho nhiên liệu

| # | Mặc định | Nguồn |
|---|---|---|
| F-14 | **Ba số lượng:** lít thực tế, lít ở 15°C và kg, tính từ tỷ trọng và nhiệt độ theo chuẩn quy đổi. Thiếu tỷ trọng hoặc nhiệt độ thì vẫn Lưu được (N), nhưng không Hoàn thành được; khi đã sang Y thì sổ luôn có đủ ba số lượng. | D-27, A-7 |
| F-15 | **Chưa có chuẩn quy đổi đã đăng ký thì không tự đặt một chuẩn.** Ghi nhận dừng ở N; trên bản demo, tồn không giảm theo tra nạp. Phải giải thích trước điều này cho người xem demo. | A-11 |
| F-16 | **Cách đo bồn tuỳ điểm**: có điểm dùng ATG, có điểm đo tay. Ngưỡng đối soát tham chiếu là 0,1% với ATG, 0,5% với đo tay và 50 lít mỗi xe. Số đọc ATG nhập tay, chưa tích hợp. | K-10 |
| F-17 | **Dung sai tham chiếu** (chưa có số thật thì dùng số này cho demo): ±0,5% so với BOL, ±1% so với đồng hồ. | D-18 |
| F-18 | **Điểm có từ hai bồn trở lên mà chưa có bồn nhận riêng** thì chỉ cảnh báo khi khai báo, vẫn cho lưu. | N-3 |
| F-19 | **Bồn trộn** chia số lượng cho các lô theo FIFO; báo cáo truy vết hiện cả tập lô thực có trong bồn lúc giao (E-K4). | K-3, K-5 |
| F-20 | **Khoá theo bồn hoặc xe nguồn** khi chứng từ xuất sang Y, áp cho mọi chứng từ xuất kể cả ghi nhận tra nạp (lõi L-30). | A-6, A-14 |

## 4. QC nhiên liệu

| # | Mặc định | Nguồn |
|---|---|---|
| F-21 | Bồn, xe và lô đều mang trạng thái chất lượng; **nguồn chỉ xuất được khi bồn (hoặc xe) và mọi lô trong đó đều ở Y** (E-Q1). | K-2 |
| F-22 | **Hold không tự lan.** Khi Hold một nguồn, hệ thống liệt kê xe, bồn, lô và chuyến bị ảnh hưởng để QC tự chọn (E-Q6). | K-4 |
| F-23 | **Kiểm tra trước tra nạp tính cho từng lệnh**, kết quả gắn đúng lệnh, xe hoặc dispenser, vòi; đổi nguồn hay thiết bị thì kết quả hết hiệu lực. Mục đo được thì kíp tự chọn đạt hay không đạt, giá trị đo chỉ để tham khảo. | Q-5, Q-9 |
| F-24 | **Sự cố kết luận "ngoài chuẩn":** sự cố sang Y thì ghi nhận liên kết hết bị khoá và vẫn Hoàn thành được. Hệ thống tạo việc cho kế toán và Kinh doanh để họ quyết huỷ, xuất hoá đơn hay giảm trừ. | Q-10 |
| F-25 | **Bồn rút** có hai lối ra: tái chứng nhận (Phiếu QC Release kèm kết quả thử lại, không đòi CoA của nhà cung cấp) hoặc chuyển về bồn nhận. Không có xuất huỷ hay bán giảm cấp. | Q-13 |
| F-26 | **Tồn di sản lúc go-live**: QC tự quyết hồ sơ dùng để xác nhận. Không giới hạn tuổi hồ sơ, không bắt thử lại khi chỉ có hồ sơ giấy. | C-8 |
| F-27 | Hoãn chứng nhận ISCC EU, CORSIA cho tới khi khách xác nhận có nhu cầu. | Q-15 |

## 5. Bán hàng và hoá đơn nhiên liệu

| # | Mặc định | Nguồn |
|---|---|---|
| F-28 | **Ba loại khoản thu**: nhiên liệu · dịch vụ tra nạp · phí hạ tầng hydrant. Có ngay từ bản chạy thật đầu tiên; phí tính theo sản lượng của ghi nhận. | B-9 |
| F-29 | **Mẫu hợp đồng**: IATA AFSMA và hợp đồng song phương đều dùng được, vì điều khoản là khai báo (E-B1). | B-10 |
| F-30 | **Đơn vị tính tiền theo hợp đồng**: lít thực tế, lít ở 15°C, kg, gallon Mỹ hoặc tấn. **Tiền tệ**: USD với hãng quốc tế, VND với hãng nội địa. | T-7, T-8 |
| F-31 | **Thuế**: mức GTGT cho chuyến quốc tế và chuyến nội địa, thuế BVMT (đồng/lít) là tham số; kế toán trưởng chốt trước khi chạy thật. `[KIỂM LẠI VĂN BẢN]` | T-4, T-12 |

## 6. Rủi ro riêng ngành

- **Kiểm toán JIG:** kiểm tra trước tra nạp không bắt buộc, không có sàn tham số, ai có quyền menu cũng nhập được, không có đối chiếu độc lập. Khi auditor hỏi "làm sao biết kiểm tra là thật", câu trả lời chỉ còn nhật ký và ảnh (nếu bật). Hỏi khách có muốn bật chặn hoặc bắt ảnh cho mục này trước mốc audit không.
- **Vượt cảnh báo "bồn đang Hold"** mà không ai lập sự cố thì ghi nhận vẫn Hoàn thành và lên hoá đơn được (lõi RR-2).
- **Ghi nhận còn N** (thiếu thông số, sự cố đang mở, thiếu bảng giá) thì sổ vẫn ghi xe, bồn còn nhiên liệu; nạp thêm vào xe lúc đó có thể lố dung tích (lõi RR-3).
- **Người chưa từng khai chứng chỉ JIG** vẫn được xếp làm kíp trưởng mà không có cảnh báo; chỉ người đã khai rồi hết hạn mới bị cảnh báo.

## 7. Câu hỏi riêng ngành

| # | Câu hỏi | Mặc định |
|---|---|---|
| QF-1 | Những sân bay hoặc điểm nào đang tra nạp thật, điểm nào đang chuẩn bị? | `[CHẶN]` ban lãnh đạo |
| QF-2 | Điểm nào dùng hydrant, điểm nào chỉ dùng xe tra nạp? | Khai theo điểm (mục 1) |
| QF-3 | Bồn đo bằng ATG hay đo tay? | Khai theo bồn (F-16) |
| QF-4 | Dùng chuẩn quy đổi nào (bảng ASTM / API)? | `[CHẶN]` để trừ tồn được trên bản thật (F-15) |
| QF-5 | Dung sai thật so với BOL và so với đồng hồ là bao nhiêu? | Tham chiếu ±0,5% và ±1% (F-17) |
| QF-6 | Hãng có đòi phi công ký xác nhận sản lượng không? | Không (F-6) |
| QF-7 | Có thu riêng phí dịch vụ tra nạp và phí hydrant không? | Có (F-28) |
| QF-8 | Mức GTGT cho chuyến quốc tế và nội địa, thuế BVMT là bao nhiêu? | `[CHẶN]` kế toán trưởng (F-31) |
| QF-9 | Có cần ISCC EU, CORSIA hoặc SAF không? | Hoãn (F-27) |

## Nhật ký quyết định

- 2026-10-08 — Tách phần đặc thù nhiên liệu hàng không thành phụ lục riêng — người dùng chọn "tách phụ lục ngành" — người dùng chốt
