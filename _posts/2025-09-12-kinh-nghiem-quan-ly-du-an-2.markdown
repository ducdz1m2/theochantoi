---
layout: post
title:  "Cách quản lý dự án phần mềm từ chuyên gia (phần 2)"
date:   2025-09-12 21:27:01 +0700
categories: ["Khác"]
image: /assets/images/posts/quan-ly-nhan-su/thumbnail.png
author: Lê Ngọc Đức
description: "Chia sẻ kinh nghiệm về quản lý dự án phần mềm từ thầy của tui tại CTU"
tags: [Quản lý dự án phần mềm, agile, scrum, quản trị nhân sự]
---

Xin chào anh em,

Ở **phần trước**, mình đã chia sẻ một số góc nhìn tổng quát về quản lý dự án phần mềm. Như đã hứa, hôm nay chúng ta sẽ đi sâu hơn vào **các giai đoạn quan trọng của một dự án tin học**.  

Một dự án phần mềm thường không chỉ đơn giản là “có ý tưởng rồi code luôn”, mà sẽ trải qua nhiều chặng đường có hệ thống. Trong thực tế, có hai cách tiếp cận chính để mô tả vòng đời này:

- **Merise**: một mô hình phương pháp luận của Pháp, khá “học thuật” và được sử dụng nhiều trong môi trường nghiên cứu, đào tạo.  
- **Bảy giai đoạn phổ biến**: đây là cách tiếp cận thực tiễn hơn, sát với những gì anh em dev, PM, tester thường gặp trong các công ty phần mềm.

---

## Mô hình Merise

Theo Merise, vòng đời của một dự án phần mềm sẽ đi qua 6 bước chính:

1. **Nghiên cứu khả thi**  
   - Xem xét dự án có đáng để đầu tư hay không.  
   - Phân tích tính khả thi về tài chính, kỹ thuật, nhân lực, và lợi ích mang lại.  

2. **Nghiên cứu sơ khởi ứng dụng**  
   - Xác định phạm vi ứng dụng và mục tiêu ban đầu.  
   - Xem dự án này giải quyết được vấn đề gì và cho ai.  

3. **Nghiên cứu chi tiết**  
   - Phân tích kỹ yêu cầu nghiệp vụ.  
   - Đưa ra mô hình dữ liệu, luồng xử lý, chức năng sơ bộ.  

4. **Nghiên cứu kỹ thuật**  
   - Chọn nền tảng công nghệ, ngôn ngữ lập trình, cơ sở hạ tầng.  
   - Đưa ra thiết kế kiến trúc hệ thống.  

5. **Thực hiện**  
   - Bắt đầu lập trình, triển khai cơ sở dữ liệu, phát triển các module.  

6. **Bảo hành**  
   - Sau khi bàn giao, vẫn cần theo dõi, sửa lỗi, và bảo trì hệ thống.  

→ Điểm mạnh của Merise là tính **cấu trúc và logic**, nhưng trong thực tế phát triển nhanh, nhiều công ty thường thích cách tiếp cận ngắn gọn và linh hoạt hơn.

---

## Bảy giai đoạn phổ biến (thực tế hơn)

Đây là mô hình thường gặp trong ngành, gồm **7 bước cơ bản**. Anh em để ý là mỗi bước sẽ đi kèm với **mức độ chính xác trong ước lượng** (thời gian, chi phí), càng về sau càng ít sai số.

### 1. Xác định (Initiation)  
- Hiểu rõ vấn đề, gom yêu cầu từ người dùng, phân tích bối cảnh.  
- Viết đề cương dự án, nghiên cứu khả thi, lập danh sách rủi ro, đề xuất giải pháp thay thế.  
- Mục tiêu: quyết định có nên đầu tư không.  

> 💡 Lưu ý: Ở giai đoạn này ước lượng chi phí/thời gian sai số rất cao, có thể lệch tới ±100%.

---

### 2. Phân tích (Analysis)  
- Bóc tách chức năng hệ thống, viết tài liệu đặc tả chức năng (SRS).  
- Thiết kế kiến trúc tổng thể sơ bộ.  
- Lúc này ước lượng chính xác hơn, sai số khoảng ±25%.  

---

### 3. Thiết kế (Design)  
- Vẽ chi tiết hệ thống: từ kiến trúc tổng thể → phân rã subsystem → module cụ thể.  
- Làm tài liệu thiết kế (HLD, LLD) để dev có “kim chỉ nam” khi code.  
- Yêu cầu: rõ ràng, thống nhất, dễ hiểu, tránh mơ hồ.  
- Sai số ước lượng giảm còn khoảng ±10%.  

---

### 4. Thực hiện (Implementation)  
- Lập trình các module theo thiết kế, tích hợp dần.  
- Thiết lập môi trường phát triển, mua sắm thiết bị (nếu cần).  
- Viết tài liệu hướng dẫn sử dụng cơ bản.  

> ❌ Sai lầm thường gặp: **code khi phân tích/thiết kế chưa xong**, dễ dẫn tới “vỡ trận” giữa chừng.

---

### 5. Kiểm thử hệ thống (System Testing)  
- Tích hợp các module và kiểm tra tính đúng đắn.  
- Test chức năng, hiệu năng, bảo mật, tính ổn định.  
- Lập biên bản kiểm thử, ghi nhận bug, fix liên tục.  
- Cần có kế hoạch kiểm thử và bộ dữ liệu test chuẩn ngay từ đầu.  

---

### 6. Kiểm thử chấp nhận (Acceptance Testing)  
- Mời người dùng/khách hàng test thử.  
- Xác nhận hệ thống có chạy đúng với yêu cầu ban đầu hay không.  
- Nếu đạt yêu cầu → ký biên bản nghiệm thu, coi như bàn giao chính thức.  

---

### 7. Vận hành & khai thác (Operation & Maintenance)  
- Cài đặt rộng rãi, đào tạo user sử dụng.  
- Hỗ trợ khai thác, xử lý sự cố, bảo hành.  
- Tài liệu đi kèm: hướng dẫn sử dụng, tài liệu bảo trì, tài liệu đào tạo, hồ sơ quản lý bảo hành.  
- Đánh giá hiệu quả dự án sau một thời gian vận hành.  

---

## Tóm lại

Một dự án phần mềm **không thể nhảy thẳng vào code** ngay khi có ý tưởng. Nó là cả một hành trình:  
**Từ xác định ý tưởng → phân tích → thiết kế → lập trình → kiểm thử → bàn giao → vận hành.**  

Nếu bỏ qua bước nào thì rủi ro dự án thất bại càng cao. Những công ty chuyên nghiệp thường coi trọng từng giai đoạn, kết hợp với phương pháp quản lý (Agile, Scrum, hay Waterfall) để thích ứng với tình hình thực tế.  

---

<div style="text-align: center;">
  <img src="{{ 'assets/images/posts/quan-ly-nhan-su/minhhoa.png' | relative_url }}" style="width: 400px;" alt="Bảy bước tiếp cận phổ biến">
</div>

Cảm ơn anh em đã theo dõi! 🙌  
Trong bài viết tiếp theo, mình sẽ chia sẻ cách **phân tích tài chính trong dự án phần mềm** – một mảng cực kỳ quan trọng mà nhiều dev thường bỏ qua.  

Hẹn gặp lại nhé!  

ありがと！！！
