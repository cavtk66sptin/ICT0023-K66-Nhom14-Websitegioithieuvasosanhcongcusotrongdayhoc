v0.4-tuong-tac — Công cụ số trong dạy học
1. Giới thiệu
Đây là website tĩnh của Nhóm Học Tập 14, giới thiệu và hỗ trợ người dùng tìm kiếm, so sánh các công cụ số phục vụ dạy học. Phiên bản v0.4-tương-tác phát triển từ định hướng giao diện của v0.3-giao-dien, tiếp tục sử dụng phong cách xanh teal và bổ sung các chức năng tương tác để người dùng tra cứu và cân nhắc công cụ phù hợp.
Đối tượng hướng tới là giáo viên và sinh viên sư phạm. Nội dung công cụ là dữ liệu mẫu được lưu trong JavaScript; thông tin về giá và tính năng có thể thay đổi theo thời gian, vì vậy nên kiểm tra lại trên trang chính thức của từng công cụ.

2. Cấu trúc thư mục
index.html — Trang chủ, giới thiệu mục tiêu website, các điểm nổi bật và liên kết khám phá.
congcu.html — Thư viện công cụ; hỗ trợ tìm kiếm, lọc theo danh mục, sắp xếp và xem thông tin chi tiết.
sosanh.html — Trang lựa chọn và so sánh các công cụ.
danhgia.html — Trang chấm điểm công cụ theo tiêu chí, điều chỉnh trọng số và xem thứ hạng.
huongdan.html — Trang hướng dẫn sử dụng và câu hỏi thường gặp.
lienhe.html — Biểu mẫu liên hệ có kiểm tra dữ liệu ở phía trình duyệt.
style.css — Quy tắc giao diện, bố cục, màu sắc và hiển thị responsive.
script.js — Dữ liệu công cụ mẫu và xử lý các chức năng tương tác.
assets/logo.png — Logo của Nhóm 14.
CONTRIBUTIONS.md — Mô tả đóng góp/phân công của thành viên.
3. Chức năng chính
Điều hướng: liên kết giữa sáu trang của website.
Tra cứu công cụ: nhập từ khóa, lọc theo danh mục và sắp xếp danh sách.
Xem chi tiết: mở thông tin về mục đích sử dụng, ưu điểm, điểm cần lưu ý, chi phí tham khảo và độ dễ sử dụng.
So sánh: chọn các công cụ để đối chiếu thông tin.
Đánh giá: chấm điểm theo tiêu chí, thay đổi trọng số và xem kết quả xếp hạng dựa trên dữ liệu mẫu.
Hướng dẫn/FAQ: đọc hướng dẫn và mở/đóng câu trả lời thường gặp.
Liên hệ: kiểm tra định dạng họ tên, email và nội dung trước khi hiển thị thông báo kết quả.
4. Công nghệ sử dụng
HTML5 và CSS3.
JavaScript cho dữ liệu mẫu và xử lý tương tác.
Bootstrap 5.3.3 cho lưới bố cục responsive và các thành phần giao diện.
jQuery 3.7.1 hỗ trợ cập nhật kết quả tìm kiếm/lọc.
AOS cho hiệu ứng khi cuộn.
SweetAlert2 cho thông báo.
Font Awesome cho biểu tượng.
Swiper được nạp qua CDN để hỗ trợ thành phần trình chiếu nếu được sử dụng trong giao diện.
Các thư viện được tải qua CDN nên cần kết nối Internet khi chạy thử.

5. Giới hạn và quyền riêng tư
Đây là website demo tĩnh; dữ liệu công cụ được khai báo cục bộ trong script.js.
Không có đăng nhập, backend hoặc cơ sở dữ liệu.
Biểu mẫu liên hệ chỉ kiểm tra dữ liệu trong trình duyệt, không gửi thông tin tới máy chủ; nội dung không được lưu lại sau khi tải lại trang.
Kết quả đánh giá phụ thuộc vào dữ liệu mẫu và trọng số người dùng chọn, không phải kết luận độc lập về chất lượng thực tế của công cụ.
Giá, gói miễn phí và tính năng của các nền tảng có thể thay đổi; hãy xác minh trên website chính thức trước khi sử dụng.
6. Đóng góp
Thông tin về vai trò và phân công của các thành viên được mô tả trong `CONTRIBUTIONS.md`. 

7. Tài liệu tham khảo
Tài liệu Bootstrap: https://getbootstrap.com/docs/5.3/
Tài liệu jQuery: https://api.jquery.com/
Tài liệu AOS: https://michalsnik.github.io/aos/
SweetAlert2: https://sweetalert2.github.io/
Font Awesome: https://fontawesome.com/


