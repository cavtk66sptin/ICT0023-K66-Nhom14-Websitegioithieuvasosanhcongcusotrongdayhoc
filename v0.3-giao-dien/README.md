# V3 – Ý tưởng giao diện website Nhóm 14

## 1. Định hướng phiên bản V3

V3 tập trung vào **thiết kế và hoàn thiện giao diện người dùng** cho website “Giới thiệu và so sánh công cụ số trong dạy học”. Đây là bản đề xuất giao diện phát triển từ cấu trúc website hiện có ở v0.2-html; ưu tiên cách trình bày rõ ràng, đồng bộ, thân thiện với giáo viên và sinh viên sư phạm. V0.3-giao-dien trước hết xác định giao diện và trải nghiệm sử dụng, không tự ý thay đổi mục tiêu chính hoặc thêm chức năng ngoài phạm vi dự án.

## 2. Người dùng hướng đến

- Giáo viên muốn tìm công cụ số phù hợp cho bài giảng.
- Sinh viên sư phạm muốn tìm hiểu và thử nghiệm công cụ phục vụ học tập, thực tập.
- Người mới sử dụng công nghệ giáo dục cần thông tin ngắn gọn, dễ tìm và dễ so sánh.

## 3. Ý tưởng thiết kế tổng thể

- **Phong cách:** hiện đại, gọn gàng, mang cảm giác giáo dục và công nghệ; tránh trang trí rườm rà.
- **Bố cục:** chia khu vực rõ ràng, có khoảng trắng hợp lý, nội dung quan trọng dễ nhận biết.
- **Tính nhất quán:** các trang dùng chung thanh điều hướng, màu sắc, kiểu chữ, nút bấm, thẻ nội dung và chân trang.
- **Thứ bậc thông tin:** tiêu đề trang nổi bật; mô tả ngắn; nội dung chính; thao tác tiếp theo được thể hiện bằng nút rõ ràng.
- **Ngôn ngữ:** tiếng Việt dễ hiểu, hạn chế thuật ngữ khó; tên nút thể hiện đúng hành động.

## 4. Màu sắc và chữ

- **Màu chủ đạo:** xanh dương đậm để gợi sự tin cậy và công nghệ.
- **Màu nền:** trắng hoặc xám xanh rất nhạt để nội dung dễ đọc.
- **Màu nhấn:** xanh ngọc hoặc xanh lam sáng cho liên kết, nút chính và trạng thái đang chọn.
- **Màu cảnh báo:** vàng/cam nhạt cho thông báo cần chú ý; đỏ chỉ dùng cho lỗi hoặc thao tác nguy hiểm.
- **Chữ:** dùng phông chữ sans-serif dễ đọc; cỡ chữ nội dung đủ lớn trên màn hình nhỏ; tiêu đề, đoạn văn và chú thích có cấp bậc rõ ràng.
- **Quy tắc:** giữ độ tương phản tốt giữa chữ và nền; không dùng quá nhiều màu hoặc nhiều kiểu chữ trong cùng một trang.

Các giá trị màu cụ thể sẽ được thống nhất trong `style.css` dưới dạng biến CSS để dễ điều chỉnh toàn bộ website.

## 5. Bố cục các trang

### 5.1. Trang chủ – `index.html`

1. **Thanh điều hướng:** tên/logo website ở bên trái; liên kết đến Trang chủ, Công cụ, So sánh, Đánh giá, Hướng dẫn và Liên hệ.
2. **Khu vực mở đầu (hero):** tiêu đề ngắn nêu rõ giá trị website, phần giới thiệu một đến hai câu và nút dẫn đến danh mục công cụ.
3. **Nhóm chức năng chính:** trình bày bằng các thẻ Card, ví dụ Tìm công cụ, So sánh công cụ và Xem đánh giá.
4. **Công cụ nổi bật hoặc nhóm công cụ:** hiển thị dạng lưới, mỗi thẻ có tên, mô tả ngắn, nhóm chức năng và liên kết xem chi tiết.
5. **Chân trang:** tên dự án, nhóm thực hiện và liên kết điều hướng cần thiết.

### 5.2. Danh mục công cụ – `congcu.html`

- Tiêu đề và phần mô tả ngắn ở đầu trang.
- Khu vực tìm kiếm và lọc theo nhóm chức năng được đặt phía trên danh sách.
- Các công cụ trình bày theo lưới responsive: một cột trên điện thoại, hai cột trên màn hình vừa và ba cột khi đủ rộng.
- Mỗi Card có tên công cụ, mô tả ngắn, mục đích sử dụng và nút xem thêm.
- Có trạng thái thông báo dễ hiểu khi không tìm thấy kết quả.

### 5.3. Trang so sánh – `sosanh.html`

- Giới thiệu ngắn cách chọn công cụ để so sánh.
- Khu vực chọn công cụ được trình bày rõ ràng, có nhãn cho từng trường.
- Bảng so sánh có các tiêu chí dễ đối chiếu như mục đích, ưu điểm, hạn chế, chi phí và khả năng ứng dụng trong dạy học.
- Trên màn hình nhỏ, bảng được đặt trong vùng cuộn ngang có chủ đích; toàn bộ trang không bị tràn ngang.
- Nút xóa lựa chọn/đặt lại được đặt cạnh thao tác so sánh.

### 5.4. Trang đánh giá – `danhgia.html`

- Các tiêu chí đánh giá được nhóm thành từng khối hoặc Card.
- Mỗi tiêu chí có nhãn và cách nhập điểm dễ hiểu.
- Nút tính điểm và nút đặt lại có kiểu dáng nhất quán.
- Kết quả được hiển thị trong khu vực riêng, có tiêu đề, điểm số và diễn giải ngắn; không chỉ dùng màu sắc để biểu thị kết quả.
- Có thông báo khi dữ liệu thiếu hoặc nằm ngoài phạm vi cho phép.

### 5.5. Trang hướng dẫn – `huongdan.html`

- Nội dung được chia thành các bước tuần tự, mỗi bước có tiêu đề và hướng dẫn ngắn.
- Dùng Accordion của Bootstrap cho câu hỏi thường gặp hoặc phần nội dung dài để trang gọn hơn.
- Liên kết và nút thao tác cần có tên dễ hiểu.

### 5.6. Trang liên hệ – `lienhe.html`

- Biểu mẫu được đặt trong một khu vực riêng, không quá rộng.
- Mỗi ô nhập có nhãn; trường bắt buộc được ghi rõ.
- Thông báo thành công hoặc lỗi hiển thị gần biểu mẫu và dùng câu dễ hiểu.
- Trên điện thoại, các trường nhập và nút bấm chiếm chiều rộng phù hợp để dễ thao tác.

## 6. Thành phần giao diện và Bootstrap

V3 dự kiến sử dụng Bootstrap 5.3.3 để tạo giao diện nhất quán và responsive:

- **Navbar:** điều hướng chính; thu gọn thành nút menu trên màn hình nhỏ.
- **Grid (`container`, `row`, `col-*`):** chia bố cục theo kích thước thiết bị.
- **Card:** trình bày công cụ, nhóm chức năng và khối thông tin.
- **Accordion/Collapse:** tổ chức hướng dẫn và câu hỏi thường gặp.
- **Alert:** thông báo kết quả, lỗi nhập liệu hoặc trạng thái không có kết quả.
- **Form controls:** tìm kiếm, lọc, chọn công cụ và nhập điểm đánh giá.
- **Button:** thống nhất kiểu nút chính, phụ và đặt lại.

Chỉ sử dụng thành phần khi có ích cho nội dung; không thêm hiệu ứng hoặc thành phần chỉ để trang trí.

## 7. Yêu cầu responsive

- Thiết kế theo hướng **mobile-first**; ưu tiên nội dung dễ đọc trên điện thoại trước khi mở rộng lên máy tính.
- Dùng Bootstrap Grid và các breakpoint phù hợp thay vì cố định chiều rộng theo pixel.
- Ảnh, thẻ, biểu mẫu và nút không vượt khỏi màn hình.
- Không để xuất hiện thanh cuộn ngang cho toàn bộ trang; chỉ bảng so sánh hoặc vùng dữ liệu rộng mới có vùng cuộn riêng.
- Menu trên điện thoại có thể mở/đóng và không che nội dung.
- Khoảng cách giữa các nút đủ để người dùng chạm dễ dàng.
- Kiểm tra tối thiểu ở chiều rộng khoảng 360 px, 768 px và 1280 px.

## 8. Khả năng tiếp cận và trải nghiệm người dùng

- Dùng cấu trúc HTML có ý nghĩa: `header`, `nav`, `main`, `section` và `footer` khi phù hợp.
- Duy trì thứ tự tiêu đề hợp lý; mỗi trang có tiêu đề chính rõ ràng.
- Các ô nhập có nhãn; nút và liên kết có tên mô tả hành động.
- Không chỉ dùng màu sắc để truyền đạt trạng thái; kèm văn bản giải thích.
- Đảm bảo độ tương phản chữ/nền, trạng thái focus dễ nhận biết và điều hướng cơ bản bằng bàn phím.
- Nội dung ưu tiên ngắn gọn, dễ quét mắt; tránh các đoạn văn dài không chia mục.

## 9. Tổ chức mã nguồn phục vụ giao diện

- `index.html`, `congcu.html`, `sosanh.html`, `danhgia.html`, `huongdan.html`, `lienhe.html`: cấu trúc và nội dung từng trang.
- `style.css`: quy tắc giao diện dùng chung, biến màu, kiểu chữ, khoảng cách và điều chỉnh responsive.
- `script.js`: tương tác giao diện như mở menu do Bootstrap hỗ trợ, tìm kiếm/lọc, hiển thị thông báo và xử lý biểu mẫu.
- Bootstrap 5.3.3 được nạp qua CDN; cần Internet để tải thư viện nếu chưa lưu bản cục bộ.

Không đặt CSS hoặc JavaScript dài trực tiếp trong từng trang HTML nếu có thể dùng các tệp ngoài dùng chung.

## 10. Phạm vi thực hiện V3

V3 ưu tiên hoàn thiện giao diện trước:

1. Chuẩn hóa màu sắc, chữ, nút, Card, biểu mẫu và chân trang.
2. Đồng bộ thanh điều hướng giữa các trang.
3. Sắp xếp lại khoảng cách và thứ tự thông tin để người dùng dễ tìm nội dung.
4. Hoàn thiện bố cục responsive và kiểm tra lỗi tràn ngang.
5. Kiểm tra hiển thị, trạng thái hover/focus, thông báo và các thành phần Bootstrap.
6. Giữ các chức năng hiện có hoạt động; nếu có thay đổi chức năng thì ghi rõ trong lịch sử phiên bản, không giả định chức năng chưa được kiểm thử là đã hoàn tất.

## 11. Tiêu chí nghiệm thu giao diện V3

- [ ] Các trang dùng chung hệ thống màu sắc, kiểu chữ, nút, Navbar và Footer.
- [ ] Trang chủ thể hiện rõ mục đích website và đường dẫn đến chức năng chính.
- [ ] Các trang có tiêu đề, mô tả và nội dung được phân cấp dễ nhìn.
- [ ] Có Bootstrap Grid responsive và ít nhất ba thành phần phù hợp, chẳng hạn Navbar, Card, Accordion, Alert hoặc Form.
- [ ] CSS được đặt trong `style.css`; JavaScript được đặt trong `script.js`.
- [ ] Không có tràn ngang toàn trang ở kích thước điện thoại.
- [ ] Nội dung và nút bấm đọc được, dễ thao tác trên màn hình nhỏ.
- [ ] Các liên kết điều hướng hoạt động và thông báo lỗi/thành công dễ hiểu.
- [ ] Các chức năng cũ được kiểm tra lại sau khi chỉnh giao diện.

## 12. Kết quả mong đợi

Sau V3, website có giao diện thống nhất, hiện đại, dễ sử dụng và phù hợp với chủ đề công cụ số trong dạy học. Người dùng có thể nhanh chóng tìm công cụ, xem thông tin, so sánh và đánh giá trên cả máy tính lẫn điện thoại. Đây là **tài liệu ý tưởng và tiêu chí giao diện** để định hướng triển khai, không phải tuyên bố rằng mọi hạng mục đã hoàn thành.
