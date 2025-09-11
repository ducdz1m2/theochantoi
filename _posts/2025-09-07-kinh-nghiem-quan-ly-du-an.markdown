---
layout: post
title:  "Cách quản lý dự án phần mềm từ chuyên gia (phần 1)"
date:   2025-09-08 19:45:01 +0700
categories: ["Khác"]
image: /assets/images/posts/quan-ly-nhan-su/thumbnail.png
author: Lê Ngọc Đức
description: "Chia sẻ kinh nghiệm về quản lý dự án phần mềm từ thầy của tui tại CTU"
tags: [Quản lý dự án phần mềm, agile, scrum, quản trị nhân sự]
---

Xin chào anh em,

Trong bài viết này tui sẽ trình bày về kinh nghiệm quản lý dự án phầm mềm được học từ chuyên gia. Tui rất may mắn khi có dịp được học với thầy (tui xin phép được giấu tên), thầy là người có kinh nghiệm làm leader của các team làm nhiều công trình nghiên cứu, từ nghiên cứu khoa học cho sinh viên đến các dự án mang tầm cỡ quốc tế. Các kinh nghiệm được học từ thầy thông qua học phần `Software Project Management` sẽ được tui trình bày tại đây. Do vậy, nội dung sẽ được chia thành nhiều phần. 

Chúc các bạn học vui vẻ!!

Trước khi bắt đầu nội dung, tui muốn cho anh em thấy rằng để làm một người quản trị dự án phần mềm cần khá nhiều kinh nghiệm, đây là một công việc khó chứ không nhàn hạ như nhiều người nghĩ. Để làm dự án thành công (không gặp thử thách hoặc thất bại) thì đòi hỏi người leader phải tính toán, đo lường, vạch đường một cách chi tiết từng chiến lược, cách tiếp cận một. 


<strong>Kinh nghiệm thực chiến:</strong>
- Dự án phải có kế hoạch rõ ràng, mỗi hoạt động phải có một kết quả cụ thể.
- Nếu không đủ chuyên môn, phải mời chuyên gia trong lĩnh vực (domain expert).
- Khi thực hiện chức năng A phải biết được các yếu tố cần thiết (phạm vi, thời gian, chi phí, ...).
- Phải dễ sử dụng.
- Phải hiểu rõ yêu cầu thật kỹ lưỡng trước khi bắt đầu làm.
- Nắm rõ cái mình làm.
- Luôn viết rõ demo, test cho từng chức năng.
- Với mỗi chức năng bàn giao nên có một hợp đồng cụ thể (để sau này chứng minh toàn bộ hệ thống đã hoạt động tốt => dễ bàn giao hơn).
... 

<h2>Giới thiệu về quản lý dự án</h2>


<h3>Động cơ thúc đẩy nghiên cứu quản lý dự án công nghệ thông tin</h3>
Nhìn chung thì các dự án IT thường có thành tích khá kém. Theo số liệu từ *Standish Group (reports 1995 & 2007)*, ở những năm 1990, các dự án thường gặp nhiều khó khăn và gặp nhiều thất bại, nguyên nhân có thể từ một kế hoạch sai lầm, tầm nhìn hạn chế, đội ngũ chưa đủ giỏi, ... (sẽ được đề cập sau). Chính điều này đã làm tỷ lệ thành công rất thấp.

<table>
  <thead>
    <tr>
      <th></th>
      <th>1994</th>
      <th>1996</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dự án thành công</td>
      <td>16.20%</td>
      <td>35.00%</td>
    </tr>
    <tr>
      <td>Dự án gặp thử thách</td>
      <td>52.80%</td>
      <td>46.00%</td>
    </tr>
     <tr>
      <td>Dự án thất bại</td>
      <td>31.10%</td>
      <td>19.00%</td>
    </tr>
    
  </tbody>
</table>


Mặc khác, do càng về sau này, các dự án được đầu tư kỹ lưỡng nên tỷ lệ thành công đã tăng lên đáng lễ.
Cần lưu ý ở đây về *Dự án thành công*, nó có nghĩa là mọi việc đều cho ra kết quả đúng với kỳ vọng, không hề trễ thời gian, phát sinh thêm chi phí, ... Nếu có thì dự án đó thuộc nhóm *Dự án gặp khó khăn*.



**Vậy thì đâu là những lý do dẫn đến sự thất bại của dự án?**
<pre>
- Không được huấn luyện thỏa đáng/hoặc sự thiếu kinh nghiệm của các nhà quản lý dự án.
- Thiếu khả năng thiết lập và quản lý yêu cầu.
- Thiếu khả năng lãnh đạo ở một số vị trí hay tất cả vị trí.
- Thiếu khả năng nhận dạng, chứng minh bằng tài liệu và theo dõi các yêu cầu.
- Các kế hoạch và các quá trình lập kế hoạch kém.
- Ước lượng nguồn lực kém.
- Văn hóa và nội quy không đồng nhất.
- Thiếu sự đồng nhất giữa đội thực hiện dự án và các thành phần liên quan khác.
- Sử dụng phương pháp không thích hợp.
- Sự truyền đạt thông tin không đủ, thiếu các tiến trình theo dõi và báo cáo.
</pre>


**Vậy thuận lợi của quản lý dự án mang lại là gi?**
<pre>
- Không gây bất ngờ cho chủ đầu tư, khách hàng, và các thành phần liên quan khác.
- Quản lý dự án tốt cung cấp sự tin tưởng và giảm thiểu rủi ro.
- Quản lý dự án cung cấp các công cụ và điều kiện để lập kế hoạch, giám sát, lưu vết (track), và quản lý lịch biểu, tài nguyên, giá cả, chất lượng.
- Quản lý dự án cung cấp các tài liệu, kinh nhiệm tốt để thực hiện các dự án trong tương lai.
- Các thành viên trong dự án học và phát triển được nhờ vào môi trường làm việc theo nhóm.
</pre>


<h3>Dự án là gì?</h3>

<pre>
Dự án là mọi công việc liên quan để tạo ra một sản phẩm hoặc một dịch vụ duy nhất trong một khoảng thời gian giới hạn.
</pre>

Theo PMI (2004), *dự án là một nỗ lực tạm thời được thực hiện để tạo ra một sản phẩm hay một dịch vụ duy nhất.*


PRINCE2 định nghĩa *dự án là một môi trường quản lý được tạo ra với mục đích cung cấp một hoặc nhiều sản phẩm kinh doanh theo một Business Case cụ thể*



hay theo cách tui nhớ ngắn gọn là: *Dự án là các công việc để tạo ra một sản phẩm duy nhất trong một khoảng thời gian.*


<h3>Các đặc điểm của một dự án</h3>


- Các hoạt động phải nhằm đạt được một mục tiêu rõ ràng.
- Kế hoạch phải được lập.
- Các mục tiêu cụ thể phải phù hợp hoặc sản phẩm phải được tạo ra.
- Có thời gian thực hiện ước tính trước, có ngày bắt đầu và kết thúc.
- Có sự ràng buộc về kinh phí, thời gian và các nguồn tài nguyên.
- Tồn tại nhiều rủi ro.
- Được thực hiện bởi một tổ chức cụ thể, với sự tham gia của nhiều cá nhân và tổ chức có mối quan tâm khác nhau.
- Công việc được giao cho nhiều người, hợp tác theo nhóm, bao gồm nhiều chuyên môn sâu.
- Công việc được chia ra nhiều giai đoạn.
- Tài nguyên dùng cho dự án bị giới hạn và thay đổi theo từng giai đoạn.
- Dự án thường có quy mô lớn hay phức tạp.


<h3>Các ràng buộc của dự án</h3>

Mọi dự án đều bị ràng buộc bởi **Phạm vi (Scope goal), Thời gian (Time goal) và Chi phí (Cost goal)**.


Trách nhiệm của người quản lý dự án là phải cân bằng sự tranh chấp của những ràng buộc này.


<h3>Dự án phần mềm khác biệt với những loại dự án khác</h3>


- Vô hình (Invisibility): Tiến trình không thể thấy tức thì được.
- Phức tạp (Complexity): Các sản phẩm phần mềm chứa nhiều sự phức tạp hơn những loại sản phẩm khác.
- Tuân theo (Conformity): Nhà phát triển phần mềm phải đáp ứng các yêu cầu của khách hàng, vốn thường không rõ ràng, hay bị thay đổi và mâu thuẫn.
- Tính linh hoạt (Flexibility): Phần mềm có thể được thay đổi một cách dễ dàng, điều này cũng có nghĩa là các hệ thống phần mềm là đối tượng có độ thay đổi cao

<h3>Một số vấn đề trong dự án phần mềm</h3>

- Ước lượng và lập kế hoạch kém.
- Thiếu tiêu chuẩn chất lượng và đo lường.
- Thiếu sự hướng dẫn về hệ thống ra quyết định.
- Thiếu kỹ thuật tạo các tiến trình rõ ràng, thiếu định nghĩa vai trò.
- Xác định công việc chưa rõ, thiếu hiểu biết về quản lý CNTT và lĩnh vực ứng dụng.
- Thiếu cập nhật tài liệu, công việc ưu tiên không được hoàn thành đúng hạn.
- Thiếu giao tiếp giữa người dùng và nhân viên kỹ thuật, thiếu sự cam kết.
- Hiểu biết về kỹ thuật chuyên môn hạn hẹp, sự thay đổi yêu cầu, môi trường phần mềm thay đổi, sức ép thời gian hoàn tất.
- Thiếu quản lý chất lượng, không quản lý sâu sát, thiếu huấn luyện


<h3> Quản lý dự án là gì?</h3>

<pre> Quản lý dự án là "Sự ứng dụng kiến thức, các kỹ năng, các công cụ và kỹ thuật vào các hoạt động dự án theo một thứ tự thích hợp nhằm đáp ứng các yêu cầu dự án"</pre>


<h3>Các hoạt động trong quản lý dự án</h3>

- Lập kế hoạch: quyết định công việc gì sẽ được thực hiện.
- Tổ chức: thực hiện sắp đặt công việc.
- Bố trí nhân viên: chọn lựa người thích hợp cho công việc.
- Điều khiển: ra các chỉ thị.
- Kiểm tra/giám sát: kiểm tra trên các tiến trình.
- Điều chỉnh: thực hiện hành động để cung cấp biện pháp chống đỡ.
- Đổi mới: nêu ra các giải pháp mới.
- Trình bày: giữ liên lạc với người dùng.

<h3>Các thành phần tham gia dự án (Stakeholders)</h3>

- Là những cá nhân hay tổ chức có liên quan hay bị ảnh hưởng bởi các hành động của dự án.
- Bao gồm: thành viên nhóm, quản lý dự án, nhà bảo trợ, các công ty hợp tác, khách hàng, tổ chức thực hiện, nhà quản lý cung cấp, các bộ phận nội bộ có liên quan.
- Các bước để phân tích các thành phần tham gia: Nhận dạng, xác định mong đợi và mối quan tâm, xác định ảnh hưởng và vai trò.


<h3>Vai trò của nhà quản trị dự án</h3>

- Sứ mệnh: Đưa dự án đến sự thành công, đạt được kết quả làm thỏa mãn các nhu cầu trong thời gian và ngân sách giới hạn.
- Các trách nhiệm cụ thể: Là người chịu trách nhiệm sau cùng về mặt pháp lý, điểm giao tiếp với bên ngoài, sắp xếp các nhu cầu khác nhau, giải quyết vấn đề, lập kế hoạch, theo dõi và điều hành, quản lý sự thay đổi, đánh giá mức độ hoàn thành, tích lũy kinh nghiệm và huấn luyện nhân viên.


<h3>Vùng kiến thức về quản lý dự án</h3>

-  Bốn phần kiến thức cốt lõi: Quản lý phạm vi (Project Scope Management), Quản lý thời gian (Project Time Management), Quản lý chi phí (Project Cost Management), Quản lý chất lượng (Project Quality Management).


- Bốn lĩnh vực kiến thức hữu ích: Quản lý nguồn nhân lực (Project Human Resource Management), Quản lý truyền thông (Project Communications Management), Quản lý rủi ro (Project Risk Management), Quản lý mua sắm (Project Procurement Management).

- Một lĩnh vực kiến thức liên quan đến sự tích hợp: Quản lý tích hợp (Project Integration Management).


<h3>Các công cụ và kỹ thuật quản lý dự án</h3>

- Quản lý phạm vi: Thể chế dự án (Project Charter) và WBS (Work Breakdown Structure).
- Quản lý thời gian: Biểu đồ Gantt, biểu đồ PERT, phân tích đường tới hạn (critical path).
- Quản lý chi phí: Ước lượng giá và phân tích lợi nhuận.

<h3> Vòng đời của dự án (Project Life Cycle)</h3>

- Tại thời điểm bắt đầu, đường cong về chi phí và số nhân viên tham gia ở dạng thoai thoải, sau đó tăng lên trong giai đoạn lập kế hoạch và thực hiện, và giảm nhanh chóng ở giai đoạn kết thúc.
- Giai đoạn bắt đầu có nhiều điều chưa rõ ràng, nhiều rủi ro.
- Các thành phần tham gia dự án quan tâm mạnh đến sản phẩm cuối cùng và chi phí ở thời điểm bắt đầu.
- PRINCE2 bao gồm chu trình sống của dự án cộng với một số công việc chuẩn bị trước dự án.


Ok, nội dung trên cũng đã trình bày cho anh em cái nhìn tổng quát về việc quản lý dự án nói chung và quản lý dự án phần mềm nói riêng. Hy vọng anh em sẽ sử dụng được kinh nghiệm trên trong công việc của mình. Ở bài viết sau tui sẽ nói chi tiết về *các giai đoạn của một dự án tin học*.

Cảm ơn anh em đã theo dõi!!!

Bye byeee~~~

