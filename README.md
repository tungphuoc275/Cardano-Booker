# Cardano-Booker
Room-Booker là một ứng dụng phi tập trung (DApp) giúp quản lý và thực hiện việc đặt phòng khách sạn một cách an toàn và minh bạch trên blockchain Cardano. Dự án tận dụng tính năng của smart contracts để ghi nhận và xác minh các giao dịch đặt phòng, đồng thời đảm bảo tính bảo mật cao trong thanh toán.
Tính năng chính
Đặt phòng khách sạn:
Người dùng có thể tìm kiếm và đặt phòng theo ngày check-in và check-out.
Thanh toán bằng Cardano (ADA):
Tích hợp thanh toán trực tiếp trên blockchain với sự đảm bảo từ smart contracts.
Minh bạch dữ liệu:
Tất cả các thông tin về phòng, giao dịch, và người đặt đều được ghi nhận trên blockchain, giúp tránh gian lận.
Giao diện trực quan:
Cung cấp một giao diện web đơn giản, dễ sử dụng để hỗ trợ người dùng thao tác nhanh chóng.
Kiến trúc hệ thống
Smart Contract: Viết bằng Plutus, chịu trách nhiệm ghi nhận giao dịch và xác thực dữ liệu đặt phòng.
Backend API: Sử dụng Node.js (Express.js), đóng vai trò trung gian giữa frontend và blockchain, cung cấp các API như đặt phòng, xem danh sách phòng.
Frontend: Xây dựng bằng React.js, giao diện thân thiện giúp người dùng tìm kiếm phòng, điền thông tin và xác nhận đặt phòng.
Mục tiêu dự án
Tính minh bạch: Mọi giao dịch được ghi nhận công khai nhưng đảm bảo tính riêng tư nhờ vào công nghệ blockchain.
Tính phi tập trung: Người dùng hoàn toàn làm chủ các giao dịch mà không cần thông qua trung gian.
Tối ưu hóa trải nghiệm: Mang lại một quy trình đặt phòng nhanh chóng và an toàn cho cả khách hàng và khách sạn.
Đối tượng sử dụng
Người dùng cá nhân: Tìm kiếm và đặt phòng khách sạn trực tuyến.
Các khách sạn: Cung cấp thông tin phòng và quản lý đặt phòng tự động qua blockchain.
Kế hoạch mở rộng
Tích hợp thêm nhiều khách sạn và các dịch vụ du lịch.
Phát triển ứng dụng di động (React Native).
Hỗ trợ các loại tiền mã hóa khác như USDT, BTC bên cạnh ADA.
Room-Booker là giải pháp lý tưởng cho ngành khách sạn, giúp tối ưu hóa quy trình đặt phòng, giảm chi phí trung gian, và tăng cường sự tin cậy cho cả khách hàng và nhà cung cấp dịch vụ.


## How to Run

### Prerequisites
- Node.js
- Cardano Node and CLI
- React.js
- Plutus SDK

### Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-repo/hotel-booking-cardano.git
   cd hotel-booking-cardano
Install Dependencies

bash
Copy code
npm install
Start Backend

bash
Copy code
cd backend
node index.js
Start Frontend

bash
Copy code
cd frontend
npm start
Deploy Smart Contract

Compile and deploy using Plutus tools.
