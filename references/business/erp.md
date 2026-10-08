---
title: Phân hệ ERP — mặc định nghiệp vụ và câu hỏi làm rõ
status: final
updated: 2026-10-08
sources:
  - Tapetco ERP — biên bản 03 Kho, 04 QC, 05 Bán hàng, 06 Tài chính, 07 Nhân sự, 08 Báo cáo, 09 Cutover, 10 Mua hàng–Bảo trì–AI, 11 Kiến trúc
  - Kiến thức ERP chung (các mục gắn nhãn [BỔ SUNG])
---

# Phân hệ ERP

File này đi sau [loi-chung-tu.md](loi-chung-tu.md), luôn đọc file lõi trước. Mọi phân hệ ở đây đều dùng chung 5 trạng thái, luật duyệt, cách cảnh báo thay cho cờ và luật ghi sổ khi Y của file lõi. File này chỉ ghi những gì riêng của từng phân hệ.

**Nhãn:**
- Không có nhãn: mặc định rút ra từ dự án Tapetco, đã qua làm rõ với BA. Cột "Nguồn" trỏ về mã quyết định gốc.
- `[BỔ SUNG]`: kiến thức ERP phổ biến, **chưa kiểm chứng qua dự án nào của mình**. Dùng làm điểm khởi đầu và phải hỏi khách xác nhận.
- `[KIỂM LẠI VĂN BẢN]`: có dẫn quy định pháp luật Việt Nam. Phải kiểm văn bản còn hiệu lực trước khi ghi vào PRD.

Bản đồ menu (phân hệ → luồng → menu, giữ mã trang GreenSys) nằm ở [menu/README.md](menu/README.md); dùng để chọn phạm vi cho dự án.

Mã luật dạng `E-<phân hệ><n>`: K kho, Q chất lượng, B bán, M mua, T tài chính, H nhân sự, R báo cáo, C chuyển đổi, X bảo trì, A AI.

---

## 1. Kho

| # | Mặc định | Nguồn |
|---|---|---|
| E-K1 | **Một trang Mặt hàng** cho hàng hoá, dịch vụ, vật tư, phụ tùng, phụ gia, phân biệt theo loại mặt hàng. | N-26 |
| E-K2 | **Bốn ô bật/tắt theo từng mặt hàng** (không theo loại): theo lô · kiểm chất lượng · đa số lượng (quy đổi theo thông số) · hạn dùng. Bốn ô này và **đơn vị cơ sở** (người dùng tự chọn cho từng mặt hàng) **khoá lại sau dòng sổ tồn đầu tiên**. | K-11, N-18 |
| E-K3 | **Phương tiện có sức chứa là kho di động** (xe bồn, xe tải, container…), có sổ tồn riêng: nạp lên phương tiện là chuyển kho; giao từ phương tiện trừ tồn phương tiện; hàng dư cuối ca hoàn về kho. | K-1 |
| E-K4 | **Giá vốn và lô xuất theo nhập trước xuất trước (FIFO)**. Kho trộn (nhiều lô lẫn nhau) thì chia số lượng cho các lô theo FIFO. Báo cáo truy vết hiện cả lô theo sổ lẫn tập lô thực có trong kho lúc giao. | K-3, K-5, T-10 |
| E-K5 | **Tồn âm:** chứng từ ghi nhận việc **đã xảy ra ngoài đời** (giao hàng đã giao) được phép làm âm tồn, kèm cảnh báo và bắt nhập lý do. **Phiếu xuất lập tay và phiếu chuyển kho** thì không cho âm. Kiểm lúc sang Y, có khoá theo kho nguồn (lõi L-30). | K-8, A-8 |
| E-K6 | **Nhập lệch so với chứng từ giao** (phiếu giao, vận đơn): phiếu lưu cả số theo chứng từ giao lẫn số đo thực và tự tính chênh lệch. Vượt dung sai (là tham số) thì cảnh báo và bắt lý do khi Hoàn thành. **Sổ ghi theo số đo thực.** Không có trạng thái "tranh chấp" riêng. | K-9 |
| E-K7 | **Xác nhận nhập kho, xác nhận xuất kho** là bước W của quy trình gắn vào loại phiếu, có **menu riêng cho thủ kho** (lõi L-20). Riêng phiếu nhập hàng, bước xác nhận có thể **bật sẵn trong dữ liệu khởi tạo**; đây là ngoại lệ có chủ đích và công ty tắt được. | K-6, K-18 |
| E-K8 | **Chuyển kho giữa điểm** có theo dõi **hàng đang đi đường**: xuất ở điểm đi, nhập ở điểm đến, ghi chênh lệch khi nhận. | K-14 |
| E-K9 | **Kiểm kê, đối soát:** phiếu đối soát (đầu: điểm, ngày; dòng: kho, số đo, chênh lệch) sang Y thì **tự sinh phiếu điều chỉnh** liên kết về nó. Vượt ngưỡng thì cảnh báo và bắt lý do. Ngưỡng là tham số theo cách đo. | K-10, K-15 |
| E-K10 | **Tồn tại một ngày trong quá khứ** chỉ có một chế độ: tính theo giờ sự kiện, kể cả phiếu nhập bù sau đó (lõi L-41). | K-12 |
| E-K11 | **Yêu cầu kho** (yêu cầu cung ứng, yêu cầu luân chuyển): bản đầu chỉ cần lưu và xuất danh sách để phòng mua xử lý. | K-16 |
| E-K12 | Pha sau: **kho bên thứ ba** (nhập số bên giữ kho báo, so với sổ, lệch thì sinh phiếu điều chỉnh); **cảnh báo tồn thấp, điểm đặt hàng lại**. | K-17 |
| E-K13 | Trang Tra cứu tồn có **Xem lọc sẵn "chứng từ chưa Hoàn thành theo kho"** (lõi L-32). | A-13 |
| E-K14 | `[BỔ SUNG]` Vị trí trong kho (dãy, kệ, ô) chỉ làm khi khách quản lý theo vị trí; mặc định không có. | |
| E-K15 | `[BỔ SUNG]` Số seri cho thiết bị bán ra hoặc tài sản: dùng chung cơ chế "theo lô" với mỗi lô một đơn vị, chỉ làm khi khách cần. | |

## 2. Chất lượng (khi có hàng cần chứng nhận)

| # | Mặc định | Nguồn |
|---|---|---|
| E-Q1 | **Đơn vị chứng nhận là cả kho chứa lẫn lô** (và phương tiện nếu là kho di động). Hàng chỉ xuất được khi kho chứa **và mọi lô đang có trong đó** đều ở Y. Không cấu hình chuyện này theo điểm. | K-2 |
| E-Q2 | **Nhập xong thì lô mới sinh ở N** (nhãn "Quarantine") và **kho nhận tự chuyển Y → N**. Đây là luật của nghiệp vụ nhập (lõi L-27). | K-7 |
| E-Q3 | **Đổi trạng thái chất lượng qua Phiếu QC**: đầu gồm loại (Release / Hold / Thử mẫu), lý do, số chứng nhận, kết quả thử; dòng là các kho, lô. **Phiếu sang Y thì đối tượng trên dòng mới đổi** Y ⇄ N. Một phiếu gom được nhiều đối tượng. | Q-1 |
| E-Q4 | **Số chứng nhận chất lượng (CoA…) bắt buộc và duy nhất** khi release lô nhập. Có bắt đính tệp hay không là tham số của loại phiếu. | Q-2 |
| E-Q5 | **Đạt hay không đạt do người phân tích chọn**, kèm thông số chính. Việc hệ thống tự so với giới hạn chuẩn để ở pha sau. | Q-3, Q-9 |
| E-Q6 | **Thử không đạt thì tự Hold đối tượng được thử** (lõi L-27). **Hold không tự lan sang chỗ khác**: hệ thống liệt kê kho, lô, chuyến bị ảnh hưởng (truy vết) để QC tự chọn. | Q-4, K-4 |
| E-Q7 | **Kiểm tra trước khi giao** là điều kiện thường, không bắt buộc: thiếu hoặc không đạt thì cảnh báo hoặc chặn theo chế độ. Mục kiểm, hiệu lực và khoảng chấp nhận khai báo tự do. Ai có quyền menu thì nhập được. **Ảnh bằng chứng là tuỳ chọn**, bật theo từng mục kiểm. | Q-5…Q-9 |
| E-Q8 | **Hàng trả về hoặc hàng thu hồi** có hai lối ra: tái chứng nhận (Phiếu QC Release kèm kết quả thử lại) hoặc chuyển về kho nhận như lô mới chờ release. | Q-13 |
| E-Q9 | Thứ tự pha sau: sổ giấy phép, chứng chỉ, audit → NC/CAPA → chuỗi thử đầy đủ. Chứng nhận bền vững (ISCC…) hoãn tới khi khách có nhu cầu. | Q-15 |
| E-Q10 | **Bỏ:** đối chiếu độc lập ngẫu nhiên, thời gian release mục tiêu. | Q-12, Q-14 |

## 3. Bán hàng

| # | Mặc định | Nguồn |
|---|---|---|
| E-B1 | **Hợp đồng** là hồ sơ dài hạn của khách tại điểm: hiệu lực từ–đến, tiền tệ, điều khoản, tệp ký. Điều khoản là khai báo, không viết cứng theo mẫu nào. | B-5, B-10 |
| E-B2 | **Bảng giá bán thay cho đơn khung**: đầu gồm khách, điểm, tiền tệ, hợp đồng; dòng là **đơn giá theo loại khoản thu**. **Không có số lượng cam kết, không theo kỳ.** Mỗi khách tại một điểm có **một bảng đang dùng (Y)**; đổi giá bằng Nhân bản (lõi L-35). | B-12, X-2 |
| E-B3 | **Bỏ đơn theo chuyến** và **không tự sinh đơn tạm**: khách lẻ, khách vãng lai cũng dùng bảng giá. Chứng từ thực hiện thiếu bảng giá thì cảnh báo ở bước kế hoạch, và **khoá cứng ở bước Hoàn thành** chứng từ sẽ lên hoá đơn (lõi L-26). | B-1, D-32 |
| E-B4 | **Phí dịch vụ là dòng riêng** trên hoá đơn, mỗi loại là một loại khoản thu; tính theo sản lượng giao; bật/tắt từng loại theo hợp đồng. | B-9 |
| E-B5 | **Khách mới chưa đủ hồ sơ vẫn giao được**: đối tác tạo với dữ liệu tối thiểu (tên, mã số thuế, địa chỉ hoá đơn) ở N kèm cảnh báo (lõi L-14). | B-8 |
| E-B6 | **Hạn mức tín dụng chỉ làm khi có công nợ thật** (E-T9), kiểm theo giá và dư nợ thật. Không làm hạn mức với đơn giá tạm. | B-2 |
| E-B7 | **Xác nhận giao hàng** là việc người giao bấm Hoàn thành; không có chữ ký khách trên máy. Muốn lưu bản ký tay thì đính tệp. | D-20, B-3 |
| E-B8 | **Lịch giao nằm ở Kế hoạch** (lõi L-34), không nằm trên hợp đồng hay bảng giá. | B-4 |
| E-B9 | **Tranh chấp với khách** xử lý bằng huỷ rồi lập lại chứng từ giao (lõi L-36) cho tới khi có phân hệ ghi có/ghi nợ. Hoãn: ghi có/ghi nợ, bán lô bằng chào giá, giá theo chỉ số thị trường. | B-11 |
| E-B10 | Pha sau: **tính tiền cuối kỳ** theo hợp đồng. | B-11 |
| E-B11 | `[BỔ SUNG]` Luồng bán chuẩn khi khách không có kế hoạch giao lặp lại: Báo giá → Đơn bán → Phiếu xuất → Hoá đơn → Thu tiền, mỗi bước sinh bước sau và có liên kết (lõi L-33). | |
| E-B12 | `[BỔ SUNG]` Chiết khấu, khuyến mãi: mặc định là dòng giảm trừ trên bảng giá hoặc hoá đơn; chương trình khuyến mãi phức tạp chỉ làm khi khách cần. | |
| E-B13 | `[BỔ SUNG]` Hàng bán trả lại: phiếu nhập trả lại liên kết về phiếu xuất gốc, kèm hoá đơn điều chỉnh (E-T6). | |

## 4. Mua hàng

| # | Mặc định | Nguồn |
|---|---|---|
| E-M1 | **Đề nghị mua → Yêu cầu báo giá → Đơn mua** (có đợt giao) → mỗi đợt giao sinh một **phiếu nhập**. | X-1 |
| E-M2 | **Bảng giá mua** theo nhà cung cấp tại điểm, đối xứng với Bảng giá bán (E-B2). Đơn mua chụp giá lúc lập. | X-2 |
| E-M3 | Hoãn ra sau: trả lại hàng mua, hoá đơn nhà cung cấp, đối chiếu ba chiều, thẻ điểm nhà cung cấp. Trong thời gian đó, thanh toán nhà cung cấp chỉ dựa vào phiếu nhập và hoá đơn giấy. | X-1 |
| E-M4 | `[BỔ SUNG]` **Đối chiếu ba chiều** (đơn mua – phiếu nhập – hoá đơn nhà cung cấp): lệch số lượng hoặc đơn giá quá dung sai thì cảnh báo hoặc chặn ghi nhận phải trả, theo chế độ (lõi L-21). | |
| E-M5 | `[BỔ SUNG]` **Phải trả** sinh từ hoá đơn nhà cung cấp đã Y; thanh toán đối trừ theo từng hoá đơn; có tuổi nợ phải trả. | |
| E-M6 | `[BỔ SUNG]` Chi phí mua (vận chuyển, bảo hiểm, thuế nhập khẩu) phân bổ vào giá vốn lô nhập theo giá trị hoặc số lượng; hỏi khách cách phân bổ. | |

## 5. Tài chính – kế toán

| # | Mặc định | Nguồn |
|---|---|---|
| E-T1 | **Hoá đơn do công ty phát hành chung**: một mã số thuế, một ký hiệu cho mọi điểm; hoá đơn ghi địa điểm giao. Sổ và báo cáo vẫn lọc theo điểm. | T-1 |
| E-T2 | **Cổng nhà cung cấp hoá đơn điện tử dùng chung**, gọi ngoài giao dịch ghi sổ. Việc chọn nhà cung cấp phải xong trước khi chạy thật. | T-2, A-15 |
| E-T3 | **Nhịp lập hoá đơn khai báo theo hợp đồng** (mỗi lần giao, ngày, tuần, nửa tháng, tháng). Hoá đơn **gom chứng từ giao đã Y** của khách tại điểm trong kỳ. Không lập trùng: chứng từ đã nằm trên một hoá đơn còn hiệu lực thì không chọn được lần nữa. | T-3, R-8 |
| E-T4 | **Đơn giá trên hoá đơn tự điền từ Bảng giá** theo loại khoản thu; kế toán sửa được trước khi phát hành. | T-5 |
| E-T5 | **Sai số sau khi đã lên hoá đơn:** huỷ chứng từ giao (ghi đảo). Hệ thống tạo việc cho kế toán và **mở sẵn hoá đơn điều chỉnh ở N**; sau đó lập chứng từ giao mới đúng số. Hoá đơn **không** tính là "chứng từ sau" theo luật huỷ (lõi L-11). | D-21, T-6 |
| E-T6 | **Hoá đơn điều chỉnh và hoá đơn thay thế làm trên ERP ngay từ bản chạy thật đầu tiên**, có liên kết tới hoá đơn gốc. `[KIỂM LẠI VĂN BẢN]` NĐ 123/2020/NĐ-CP sửa đổi bởi NĐ 70/2025/NĐ-CP. | T-6 |
| E-T7 | **Thuế là bảng khai báo** (GTGT, BVMT, …): mỗi loại khoản thu có mã thuế; mức thuế do kế toán trưởng xác nhận. **Thiếu mã thuế thì không phát hành được hoá đơn** (khoá cứng); chứng từ giao vẫn Hoàn thành bình thường. | T-4, T-12, T-13 |
| E-T8 | **Tiền tệ mặc định theo hợp đồng.** **Tỷ giá do kế toán nhập trên từng hoá đơn**, không có bảng tỷ giá. Hoá đơn ngoại tệ ghi cả số quy đổi VND. | T-7 |
| E-T9 | **Đơn vị tính tiền khai báo theo hợp đồng** (ví dụ lít, kg, tấn…). Chứng từ giao đã lưu đủ các số lượng quy đổi, nên chỉ cần chọn cột. | T-8 |
| E-T10 | **Không khoá kỳ.** Kỳ chỉ để lọc báo cáo và xuất dữ liệu. Muốn sửa số sau kỳ thì phải qua huỷ và lập lại (lõi L-36). | D-22 |
| E-T11 | **Công nợ phải thu tối thiểu**: phải thu sinh từ hoá đơn, ghi thu chi thủ công, tuổi nợ, số còn lại theo từng hoá đơn; vẫn xuất được Excel. Đây là nguồn dư nợ thật cho hạn mức tín dụng (E-B6). | T-9 |
| E-T12 | **Giá vốn FIFO**, đi theo lô trên từng dòng sổ kho (E-K4). | T-10 |
| E-T13 | Pha sau: sổ chi tiết (phải thu, phải trả, kho, giá vốn, tiền), kế toán tổng hợp và ngoại tệ, hoá đơn đầy đủ. Trước pha đó, kế toán dùng phần mềm kế toán riêng, nhận dữ liệu từ ERP qua xuất Excel. | T-11 |
| E-T14 | **Bỏ kế toán tài sản cố định** khỏi phạm vi, trừ khi khách yêu cầu. | T-11 |
| E-T15 | `[BỔ SUNG]` `[KIỂM LẠI VĂN BẢN]` Chế độ kế toán doanh nghiệp: hỏi khách đang theo TT 200/2014 hay TT 133/2016, hoặc văn bản thay thế (TT 99/2025/TT-BTC). Hệ thống tài khoản là danh mục khai báo, không viết cứng. | |
| E-T16 | `[BỔ SUNG]` `[KIỂM LẠI VĂN BẢN]` Hạn lưu chứng từ kế toán theo Luật Kế toán (thường 10 năm với chứng từ ghi sổ). Dùng làm hạn giữ nhật ký (lõi L-39). | |
| E-T17 | `[BỔ SUNG]` Cấn trừ công nợ, tạm ứng, hoàn ứng: hỏi quy chế nội bộ trước khi làm kế toán đầy đủ. | TM-3 |

## 6. Nhân sự

| # | Mặc định | Nguồn |
|---|---|---|
| E-H1 | **Danh mục Nhân viên riêng** (mã, tên, điểm, vai trò trong tổ đội), có hoặc không có tài khoản (lõi L-44). | H-1 |
| E-H2 | **Chứng chỉ là lưới trong chi tiết nhân viên** (loại, số, hiệu lực từ–đến). Danh sách nhân viên có cột "Chứng chỉ gần hết hạn nhất". Không làm trang chứng chỉ riêng và báo cáo chứng chỉ riêng. | H-2, H-3 |
| E-H3 | **Cảnh báo khi gán người** có chứng chỉ đã hết hoặc sắp hết hạn; chỉ cảnh báo, không có chế độ chặn. **Không có chứng chỉ bắt buộc theo vai trò.** | D-15, H-3 |
| E-H4 | **Dữ liệu cá nhân** đi theo lõi L-47. `[KIỂM LẠI VĂN BẢN]` NĐ 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân 2025. | H-4 |
| E-H5 | Pha sau: hồ sơ và hợp đồng lao động, chấm công và lương, định biên, tuyển dụng, bổ nhiệm, khen thưởng, kỷ luật. **Bỏ** xếp ca phức tạp (nghỉ giữa ca, trần tăng ca, mượn người liên điểm). | H-3, H-5 |
| E-H6 | `[BỔ SUNG]` `[KIỂM LẠI VĂN BẢN]` Lương: bảo hiểm xã hội, y tế, thất nghiệp và thuế TNCN là bảng tham số theo năm (mức lương cơ sở, lương tối thiểu vùng, giảm trừ gia cảnh), không viết cứng. Bảng lương là chứng từ có dòng, đi 5 trạng thái. | |

## 7. Báo cáo

| # | Mặc định | Nguồn |
|---|---|---|
| E-R1 | **Tổng hợp nhập xuất tồn**, bấm xuống được **thẻ kho**. | R-5 |
| E-R2 | **Truy xuất nguồn gốc lô**: hiện cả lô theo FIFO lẫn tập lô thực có trong kho (E-K4). | R-5, K-5 |
| E-R3 | **Chênh lệch đối soát kho**, lấy từ phiếu đối soát (E-K9). | R-5 |
| E-R4 | **Kiểm soát doanh thu** gồm hai dòng: chứng từ giao bị huỷ sau khi đã lên hoá đơn (kèm hoá đơn điều chỉnh đã lập chưa), và sản lượng giao đối chiếu với biến động tồn trong kỳ. | R-3 |
| E-R5 | Chỉ số kiểm soát và chỉ số đối trọng theo lõi L-56, L-57. | R-1, R-2, R-7 |

## 8. Chuyển đổi và go-live

| # | Mặc định | Nguồn |
|---|---|---|
| E-C1 | **Nguồn dữ liệu đầu là Excel**: chuẩn hoá trước, rồi nạp bằng nút Nạp Excel của từng danh sách (lõi L-51). | C-1, C-5 |
| E-C2 | **Tồn đầu kỳ là chứng từ Số dư đầu kỳ** (lõi L-52). Đối tượng cần chứng nhận nạp vào ở N ("Di sản – chờ QC"); QC làm Phiếu QC Release với hồ sơ hiện có. Lô nạp qua số dư đầu kỳ là **lô di sản**, nhận biết từ loại nhập, không cần cờ. | C-2, C-8, C-9 |
| E-C3 | **Một mốc go-live cho mỗi điểm**: đo kho tại mốc, lấy số đo làm số dư; giao dịch trong lúc chuyển ghi giấy rồi nhập bù. **Không có cửa sổ đóng băng.** | C-3 |
| E-C4 | **Không chạy song song** với hệ thống cũ. Go-live là chuyển hẳn. | C-4 |
| E-C5 | **Danh sách kiểm trước go-live, không chặn**: đã nạp số dư chưa, kho nào đã Y, thiết bị còn hạn không, nhân viên có chứng chỉ chưa. Người dùng tự quyết; không có chữ ký lãnh đạo. | C-7 |

**Rủi ro của E-C3, E-C4, E-C5:** nếu tuần đầu có lỗi, không còn bộ số cũ để đối chiếu, chỉ còn kiểm bằng đối soát kho. Một điểm có thể go-live khi chưa kho nào được release.

## 9. Bảo trì thiết bị

| # | Mặc định | Nguồn |
|---|---|---|
| E-X1 | **Một trang Thiết bị**, một bộ trường chung: mã, tên, loại, điểm, biển số hoặc số seri, sức chứa (nếu có), sở hữu hay thuê và hạn thuê, hạn kiểm tra, hạn hiệu chuẩn, khả dụng. | K-13 |
| E-X2 | **Tiếp nhận → xử lý → trả**: tiếp nhận thì thiết bị Y → N (nhãn "Bảo trì"), trả xong thì N → Y. Bước QC ký hạng mục chất lượng là duyệt tuỳ chọn. | X-3 |
| E-X3 | **Chu kỳ kiểm tra, hiệu chuẩn**, có cảnh báo khi gán thiết bị quá hạn. | X-3 |
| E-X4 | Phương tiện vừa là thiết bị vừa là kho di động thì có **hai trạng thái**: trạng thái thiết bị (khả dụng ⇄ bảo trì) và trạng thái chất lượng (Release ⇄ Hold). Chỉ dùng được khi cả hai đều Y. | A-4 |
| E-X5 | Hoãn: checklist trước ca, thiết bị của bên ngoài. | X-3 |

## 10. AI

| # | Mặc định | Nguồn |
|---|---|---|
| E-A1 | Ba đợt: **hỏi đáp tiếng Việt và OCR chứng từ** → **phát hiện bất thường và hao hụt** → **dự báo và gợi ý điều phối**. | X-4 |
| E-A2 | Dữ liệu nhạy cảm thì **chạy tại chỗ** trên máy chủ của khách. | X-4 |
| E-A3 | Phát hiện bất thường là **lớp bù** cho việc bỏ cờ, bỏ báo cáo vượt cảnh báo và bỏ đối chiếu độc lập (lõi RR-1, RR-2). Nhắc khách điều này khi bàn ưu tiên. | X-4 |

---

## 11. Bộ câu hỏi làm rõ theo phân hệ

Hỏi sau bộ câu hỏi lõi (lõi mục 13). Cột "Mặc định" là đáp án dùng khi khách không có ý kiến.

### Kho
| # | Câu hỏi | Mặc định |
|---|---|---|
| QK-1 | Có những loại mặt hàng nào? Mặt hàng nào quản lý theo lô, có hạn dùng, cần kiểm chất lượng, cần quy đổi nhiều đơn vị? | Khai theo từng mặt hàng (E-K2) |
| QK-2 | Đơn vị cơ sở của từng mặt hàng là gì? | Khách tự khai khi triển khai; khoá sau dòng sổ đầu (E-K2) |
| QK-3 | Có phương tiện chở hàng mà tồn trên đó cần theo dõi không? | Có thì là kho di động (E-K3) |
| QK-4 | Giá vốn tính theo cách nào? | FIFO (E-K4) |
| QK-5 | Chứng từ nào được làm âm tồn? | Chỉ chứng từ ghi nhận việc đã xảy ra (E-K5) |
| QK-6 | Nhập hàng có đối chiếu với chứng từ giao không, dung sai bao nhiêu? | Lưu cả hai số, dung sai là tham số (E-K6) |
| QK-7 | Thủ kho có phải xác nhận nhập/xuất trên hệ thống không? | Phiếu nhập bật sẵn, phiếu xuất tắt (E-K7) |
| QK-8 | Có chuyển kho giữa các điểm không, có hàng đi đường không? | Có, theo dõi hàng đi đường (E-K8) |
| QK-9 | Kiểm kê theo nhịp nào, cách đo nào, ngưỡng lệch bao nhiêu? | Tham số theo cách đo (E-K9) |
| QK-10 | Có gửi hàng ở kho của bên thứ ba không? | Pha sau (E-K12) |

### Chất lượng
| # | Câu hỏi | Mặc định |
|---|---|---|
| QQ-1 | Hàng nào cần chứng nhận trước khi xuất? Chứng nhận theo kho chứa, theo lô hay cả hai? | Cả hai (E-Q1) |
| QQ-2 | Chứng nhận dựa trên hồ sơ gì (CoA, kết quả thử)? Có bắt buộc đính tệp không? | Số chứng nhận bắt buộc, tệp là tham số (E-Q4) |
| QQ-3 | Có bước kiểm tra trước khi giao không? Gồm những mục nào? Ai kiểm? Có cần ảnh không? | Điều kiện thường, mặc định cảnh báo, ảnh tuỳ chọn (E-Q7) |
| QQ-4 | Hàng trả về hoặc hàng thu hồi xử lý thế nào? | Tái chứng nhận hoặc chuyển về kho nhận (E-Q8) |
| QQ-5 | Công ty đang chịu những chuẩn, cuộc audit nào (ISO, chuẩn ngành)? Mốc audit gần nhất là khi nào? | Ghi vào PRD; kiểm lại rủi ro lõi RR-1 với kiểm toán viên |

### Bán hàng
| # | Câu hỏi | Mặc định |
|---|---|---|
| QB-1 | Bán theo hợp đồng dài hạn, theo đơn lẻ hay cả hai? Có số lượng cam kết không? | Hợp đồng + Bảng giá, không cam kết (E-B1, E-B2) |
| QB-2 | Giá theo khách, theo điểm, theo kỳ hay theo chỉ số thị trường? | Theo khách tại điểm, không theo kỳ (E-B2) |
| QB-3 | Có những loại khoản thu nào ngoài hàng hoá (phí dịch vụ, phí hạ tầng…)? | Mỗi loại một dòng hoá đơn (E-B4) |
| QB-4 | Khách mới chưa đủ hồ sơ có được giao hàng không? | Được, kèm cảnh báo (E-B5) |
| QB-5 | Có kiểm hạn mức tín dụng không, từ khi nào? | Chỉ khi có công nợ thật (E-B6) |
| QB-6 | Xác nhận giao hàng bằng cách nào (chữ ký khách, ảnh, người giao bấm)? | Người giao bấm Hoàn thành (E-B7) |
| QB-7 | Có trả hàng, chiết khấu, khuyến mãi không? | `[BỔ SUNG]` E-B12, E-B13 |
| QB-8 | Điều khoản hợp đồng: hạn thanh toán, nhịp hoá đơn, bảo lãnh, take-or-pay? | Khai báo trên hợp đồng (E-B1) |

### Mua hàng
| # | Câu hỏi | Mặc định |
|---|---|---|
| QM-1 | Quy trình mua có đề nghị mua, báo giá nhiều nhà cung cấp không? | Có cả hai (E-M1) |
| QM-2 | Giá mua theo bảng giá hay nhập tay trên từng đơn? | Bảng giá mua (E-M2) |
| QM-3 | Có cần đối chiếu ba chiều và theo dõi phải trả trên hệ thống không? | Pha sau (E-M3, E-M4) |
| QM-4 | Chi phí mua (vận chuyển, thuế nhập khẩu) có tính vào giá vốn không? | `[BỔ SUNG]` E-M6 |

### Tài chính
| # | Câu hỏi | Mặc định |
|---|---|---|
| QT-1 | Hoá đơn phát hành tập trung hay theo từng chi nhánh? Một hay nhiều ký hiệu? | Tập trung, một ký hiệu (E-T1) |
| QT-2 | Dùng nhà cung cấp hoá đơn điện tử nào? | `[CHẶN]` phải chọn trước khi chạy thật (E-T2) |
| QT-3 | Nhịp lập hoá đơn cho từng khách là gì? | Khai theo hợp đồng (E-T3) |
| QT-4 | Thuế suất GTGT và các loại thuế khác theo từng loại khoản thu là bao nhiêu? | `[CHẶN]` kế toán trưởng xác nhận (E-T7) |
| QT-5 | Có giao dịch ngoại tệ không, tỷ giá lấy từ đâu? | Theo hợp đồng, kế toán nhập trên hoá đơn (E-T8) |
| QT-6 | Có khoá kỳ kế toán không? | Không (E-T10) |
| QT-7 | Phần mềm kế toán đang dùng là gì? ERP thay hẳn hay chỉ đẩy dữ liệu sang? | Bản đầu đẩy dữ liệu bằng Excel; kế toán đầy đủ làm ở pha sau (E-T13) |
| QT-8 | Đang theo chế độ kế toán nào? | `[BỔ SUNG]` E-T15 |

### Nhân sự
| # | Câu hỏi | Mặc định |
|---|---|---|
| QH-1 | Có chứng chỉ, giấy phép hành nghề nào cần theo dõi hạn không? | Lưới trong chi tiết nhân viên, cảnh báo khi gán (E-H2, E-H3) |
| QH-2 | Có vai trò nào bắt buộc phải có chứng chỉ không? | Không (E-H3) |
| QH-3 | Lương, chấm công có làm trên ERP không, từ khi nào? | Pha sau (E-H5) |

### Chuyển đổi
| # | Câu hỏi | Mặc định |
|---|---|---|
| QC-1 | Ngày go-live của từng điểm là khi nào? Có trùng mốc audit không? | `[CHẶN]` ban lãnh đạo chốt |
| QC-2 | Có chạy song song với hệ thống cũ không? | Không (E-C4) |
| QC-3 | Go-live có cần điều kiện bắt buộc hay chữ ký không? | Danh sách kiểm, không chặn (E-C5) |

## Nhật ký quyết định

- 2026-10-08 — Tạo bộ phân hệ ERP từ biên bản Tapetco; bổ sung kiến thức ERP chung, có gắn nhãn [BỔ SUNG] — người dùng chọn "bổ sung, đánh dấu rõ" — người dùng chốt
- 2026-10-08 — Không đưa khung chia pha (P0…P4) của Tapetco vào; chia pha tuỳ từng dự án — người dùng chốt
