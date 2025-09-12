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

Như cuối bài trước đã nói, hôm nay tui sẽ đi sâu nói chi tiết về *các giai đoạn của một dự án tin học*.

tụi mình sẽ nói về mấy chặng đường mà một dự án phần mềm thường phải đi qua. Có hai cách tiếp cận chính:

- Một cái theo Merise (mô hình phương pháp luận bên Pháp hay dùng).

- Một cái là bảy giai đoạn chi tiết mà đa phần anh em trong ngành đều quen.

<h3>Mô hình Merise</h3>


Theo Merise thì dự án sẽ đi qua mấy bước:

- Nghiên cứu khả thi (xem có làm được không, có lời không).

- Nghiên cứu sơ khởi ứng dụng.

- Nghiên cứu chi tiết.

- Nghiên cứu kỹ thuật.

- Thực hiện.

- Bảo hành.


<h3>Bảy giai đoạn phổ biến</h3>

Cái này thì chi tiết và thực tế hơn, gồm 7 bước:

- Xác định

    - Hiểu rõ vấn đề, gom yêu cầu từ người dùng, ước lượng tiền bạc với thời gian.

    - Viết đề cương dự án, nghiên cứu khả thi, danh sách rủi ro, đề xuất giải pháp.

    - Kết quả là biết có nên đầu tư hay không.

<pre>Lưu ý: ước lượng lúc này dễ sai lắm, ±100% là chuyện bình thường.</pre>

- Phân tích

    - Bóc tách chức năng hệ thống, viết tài liệu đặc tả chức năng, lên kế hoạch chuẩn.

    - Làm thiết kế tổng thể sơ sơ (kiểu phác thảo kiến trúc).

    - Lúc này ước lượng chính xác hơn, sai số khoảng ±25%.

- Thiết kế

    - Vẽ chi tiết hệ thống: tổng thể → giữa → module.

    - Làm tài liệu thiết kế để dev bám theo mà code.

    - Phải rõ ràng, nhất quán, dễ hiểu. Đội thiết kế nên có kinh nghiệm.

    - Sai số ước lượng giảm còn ±10%.

- Thực hiện (code + ráp hệ thống)

    - Viết code theo module, ráp nối, kiểm tra từng phần.

    - Mua sắm thiết bị, viết tài liệu người dùng.

<pre>Lưu ý: không code khi phân tích/thiết kế chưa xong, kẻo vỡ trận.</pre>

- Kiểm thử hệ thống

    - Tích hợp module, test từng phân hệ rồi test tổng thể.

    - Viết biên bản kiểm thử, fix bug, chỉnh lại hệ thống.

    - Cần có kế hoạch kiểm thử chi tiết, dữ liệu test chuẩn.

- Kiểm thử chấp nhận (người dùng test)

    - Cho user/khách hàng test thử, xác nhận hệ thống chạy đúng như yêu cầu.

    - Có biên bản ký nhận, coi như bàn giao chính thức.

- Vận hành & khai thác

    - Cài đặt rộng rãi, đào tạo user, hỗ trợ khai thác.

    - Bảo hành, đánh giá sau khi kết thúc dự án.

    - Tài liệu lúc này gồm: hướng dẫn sử dụng, bảo trì, đào tạo, quản lý, hồ sơ bảo hành.

Nói gọn lại: một dự án phần mềm không phải muốn code là code ngay. Nó đi từ lúc nghĩ ý tưởng, phân tích, thiết kế, rồi mới tới làm, sau đó phải test, bàn giao, và cuối cùng là chạy thực tế.


<div style="text-align: center;">
  <img src="{{ 'assets/images/posts/quan-ly-nhan-su/minhhoa.png' | relative_url }}" style="width: 400px;" alt="Bảy bước tiếp cận phổ biến">
</div>


Cảm ơn anh em đã theo dỗi nhé, trong bài viết sau tui sẽ đề cập về cách để  *phân tích tài chánh* nhé~~~


ありがと！！！