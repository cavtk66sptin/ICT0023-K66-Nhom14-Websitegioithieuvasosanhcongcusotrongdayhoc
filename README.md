 `v1.0-final` Website Giới thiệu & So sánh Công cụ số trong Dạy học

Nhóm:14   
Lớp: K66 – ĐHSP Tin học, Trường Đại học Tây Bắc  
Đối tượng hướng tới: Giáo viên và Sinh viên sư phạm.  
Mục tiêu: Hỗ trợ tìm kiếm, đối chiếu và lựa chọn công cụ số phù hợp với từng mục tiêu và hoạt động dạy học.

# 1. Cấu trúc bộ trang web (6 Trang)

- `index.html` (Trang chủ): Giới thiệu mục tiêu dự án, các nhóm chức năng chính và danh sách 4 công cụ nổi bật.
- `congcu.html` (Thư viện công cụ): Không gian tra cứu 13+ công cụ số với bộ lọc theo danh mục, ô tìm kiếm thời gian thực (jQuery Live Search), sắp xếp và Modal xem chi tiết hồ sơ công cụ.
- `sosanh.html` (So sánh công cụ): Cho phép chọn từ 2 công cụ trở lên để tạo bảng so sánh đối chiếu trực quan về tính năng, ưu/nhược điểm và chi phí.
- `danhgia.html` (Bảng đánh giá có trọng số): Cho phép tùy chỉnh điểm số (thang 1–5) và trọng số từng tiêu chí để tự động tính điểm trung bình trọng số và xếp hạng tức thì.
- `huongdan.html` (Hướng dẫn & FAQ): Quy trình 4 bước sử dụng website, ví dụ tình huống áp dụng thực tế và bộ câu hỏi thường gặp dạng Accordion.
- `lienhe.html` (Liên hệ & Phản hồi): Biểu mẫu gửi góp ý có kiểm tra chuẩn định dạng họ tên (viết hoa đầu từ), email và độ dài tin nhắn (tích hợp SweetAlert2).

## 2. Thư viện & Công nghệ sử dụng
- HTML5 & CSS3: Cấu trúc ngữ nghĩa (Semantic HTML), giao diện phản hồi Responsive chuẩn hóa trong `style.css`.
- JavaScript (ES6+) & jQuery 3.7.1: Xử lý toàn bộ logic tính toán, so sánh, lọc dữ liệu động và bắt lỗi biểu mẫu trong `script.js`.
- Bootstrap 5.3.3: Hệ thống lưới (Grid), Navbar, Modal, Card, Accordion và Form styling.
- Font Awesome 6.7.2 & AOS (Animate On Scroll): Bộ biểu tượng minh họa và hiệu ứng cuộn trang mượt mà.
- SweetAlert2: Hiển thị thông báo Toast kết quả kiểm tra biểu mẫu thân thiện.

## 3. Các chức năng nghiệm thu chính
1. Hiển thị dữ liệu từ mảng (`tools`): Render tự động toàn bộ thẻ công cụ và Modal từ dữ liệu JavaScript.
2. Tìm kiếm & Lọc động: Tìm kiếm theo từ khóa và lọc danh mục không cần tải lại trang.
3. Tính điểm & So sánh tức thời: Bảng so sánh và xếp hạng đánh giá cập nhật ngay khi người dùng thao tác.
4. Kiểm tra dữ liệu Form: Bắt lỗi chính xác từng trường nhập liệu kèm thông báo SweetAlert2.

## 4. Hướng dẫn chạy & Kiểm thử
1. Giải nén thư mục dự án và mở trực tiếp file `index.html` trên trình duyệt (hoặc dùng Live Server trong VS Code).
2. Yêu cầu thiết bị có kết nối Internet để nạp các thư viện CSS/JS qua CDN.
3. Để xuất bản công khai: Tải toàn bộ mã nguồn lên repository GitHub và bật tính năng **GitHub Pages** từ nhánh `main`.

## 5. Quyền riêng tư & Giới hạn
- Sản phẩm hoàn toàn chạy phía Trình duyệt (Client-side), `không thu thập, không lưu trữ` bất kỳ thông tin hay dữ liệu cá nhân nào của người dùng.