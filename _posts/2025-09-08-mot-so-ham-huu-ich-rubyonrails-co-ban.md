---
layout: post
title:  "Một số hàm hữu, mẹo vặt hữu ích khi mới bắt đầu với Ruby on rails"
date:   2025-09-08 05:51:01 +0700
categories: jekyll update
image: /assets/images/posts/meo-vat-ruby-on-rails.png
author: Lê Ngọc Đức
description: "Hướng dẫn một số cách tiện lợi để làm việc với ruby on rails, bootstrap5 cho người mới bắt đầu"
tags: [ruby on rails, helper, blog, seo]
keywords: "ruby on rails, mẹo vặt hữu ích, lập trình"
---

Hí anh em, <br>
Sáng nay tui vừa dọn dẹp lại máy để bắt đầu học học kỳ mới thì tìm được một vài đoạn note hữu ích trước đó tui từng làm với ruby on rails nè. Chỉ là căn bản thôi, bao gồm các mẹo, lỗi thường gặp. Hy vọng bài viết dưới đây hỗ trợ anh em mới bắt đầu với RoR một cách mượt mà hơn nhé!
(À mà do khó coi quá nên tui nhờ ChatGPT nó format lại ấy nhé!)

### 1️⃣ Hiển thị giá với định dạng tiền

Để hiển thị giá sản phẩm dưới dạng tiền tệ, bạn có thể sử dụng helper `number_to_currency` trong ERB.

Code snippet

```
<%= number_to_currency(
  product.price,
  format: "%n%u", # %n: số, %u: đơn vị
  unit: "₫",
  delimiter: ".",
  separator: ",",
  precision: 0
) %>
```

**Ví dụ:** `450.000₫`

---

### 2️⃣ Thêm font tùy chỉnh

Để thêm một font mới vào ứng dụng Rails, bạn làm theo các bước sau:

1. **Sao chép font:** Copy tệp tin font (`.ttf`, `.otf`, `.woff`,...) vào thư mục `public/fonts/<tên_font>`.
    
2. **Thêm CSS:** Thêm đoạn mã `@font-face` vào tệp `app/assets/stylesheets/application.css` để định nghĩa font mới.
    

CSS

```
@font-face {
  font-family: "Myfont"; /* Tên font tùy chọn */
  src: url('/fonts/<tên_font>');
}

.my-font {
  font-family: "Myfont", sans-serif; /* sans-serif làm font dự phòng */
}
```

---

### 3️⃣ Thêm route tùy chỉnh

Để tạo một route mới không theo chuẩn **scaffold** (CRUD), bạn làm như sau:

1. **Trong Controller:** Tạo một method mới, ví dụ `about`.
    
2. **Tạo View:** Tạo view tương ứng với method đó, ví dụ `about.html.erb`.
    
3. **Trong `config/routes.rb`:** Thêm route vào tệp này.
    

Ruby

```
get "about", to: "pages#about" # "about" là tên method
```

---

### 4️⃣ Kiểm tra và hiển thị ảnh

Sử dụng `attached?` để kiểm tra xem một model có đính kèm ảnh hay không trước khi hiển thị.

Code snippet

```
<% if product.images.attached? %>
  <%= image_tag product.images.first, style: "height: 100px; object-fit: cover;" %>
<% end %>
```

---

### 5️⃣ Kẻ đường ngang

Sử dụng thẻ `<hr>` và CSS để tạo đường kẻ ngang.

HTML

```
<hr style="border: 2px solid #ff0000ff; border-radius: 5px;">
```

---

### 6️⃣ Giới hạn số chữ

Sử dụng helper `truncate` để giới hạn độ dài của chuỗi.

Code snippet

```
<%= truncate(product.description, length: 50) %>
```

---

### 7️⃣ Badge (Bootstrap)

Sử dụng class **Bootstrap** để tạo một huy hiệu (badge).

HTML

```
<span class="badge bg-danger position-absolute top-0 start-0 m-2">Sale</span>
```

---

### 8️⃣ Carousel (Bootstrap 5)

Dưới đây là mã HTML/ERB cho một **Carousel** cơ bản sử dụng **Bootstrap 5**.

Code snippet

```
<div id="carouselExampleIndicators" class="carousel slide mx-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <%= image_tag "team1.jpg", class: "d-block w-100 carousel-img" %>
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
        <h5 class="text-warning">First Slide Title</h5>
        <p class="text-light">This is a description with a darker background.</p>
      </div>
    </div>

    <div class="carousel-item">
      <%= image_tag "team2.jpg", class: "d-block w-100 carousel-img" %>
    </div>

    <div class="carousel-item">
      <%= image_tag "team3.jpg", class: "d-block w-100 carousel-img" %>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

---

### 9️⃣ Đăng xuất với Devise

Đối với Rails 7 và Devise, phương thức **logout phải là `delete`** để hoạt động chính xác. Flash message có thể không hiển thị do **Turbo** mặc định redirect.

Code snippet

```
<%= link_to "Sign out", destroy_user_session_path, class: "nav-link", data: { turbo_method: :delete } %>
```

---

### 1️⃣0️⃣ Thêm `role` vào Model User

Để thêm một trường `role` vào bảng `Users`, bạn có thể tạo migration và sau đó tạo người dùng có role tương ứng.

Bash

```
rails g migration AddRoleToUsers role:string
rails db:migrate
```

**Tạo admin:**

Ruby

```
User.create!(
  email: "admin@example.com",
  password: "12345678",
  password_confirmation: "12345678",
  role: "admin"
)
```

---

### 1️⃣1️⃣ Navbar mẫu

Dưới đây là một ví dụ về **Navbar** cơ bản với các liên kết đăng nhập/đăng ký/đăng xuất sử dụng **Devise** và **Bootstrap**.

Code snippet

```
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item">
      <%= link_to "Browse store", products_path, class: "nav-link" %>
    </li>
  </ul>

  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <% if !user_signed_in? %>
      <li class="nav-item">
        <%= link_to "Sign in", new_user_session_path, class: "nav-link text-primary" %>
      </li>
      <li class="nav-item">
        <%= link_to "Sign up", new_user_registration_path, class: "nav-link text-success" %>
      </li>
    <% else %>
      <li class="nav-item">
        <%= link_to "Sign out", destroy_user_session_path, class: "nav-link text-danger", data: { turbo_method: :delete } %>
      </li>
    <% end %>
  </ul>
</div>
```

---

### 1️⃣2️⃣ Validations

Bạn có thể thêm các **validations** vào model để đảm bảo dữ liệu hợp lệ.

Ruby

```
validates :name, presence: true
validates :description, presence: true, length: { minimum: 3 }
validates :price, numericality: { greater_than: 0 }
```

---

### 1️⃣3️⃣ Modal chuyên nghiệp

Đây là một ví dụ về cách tạo **modal** để phóng to ảnh khi click, sử dụng **Bootstrap** và một vòng lặp.

Code snippet

```
<div class="mt-2 d-flex flex-row gap-2 flex-wrap">
  <% product.images.each_with_index do |image, index| %>
    <div>
      <%= image_tag image,
        style: "height: 200px; object-fit: cover; cursor: pointer;",
        class: "rounded",
        data: { bs_toggle: "modal", bs_target: "#imageModal#{index}" } %>
    </div>

    <div class="modal fade" id="imageModal<%= index %>" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen">
        <div class="modal-content bg-dark">
          <div class="modal-body d-flex justify-content-center align-items-center p-0">
            <%= image_tag image, class: "img-fluid" %>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  <% end %>
</div>
```

---

### 1️⃣4️⃣ Cài đặt Gems

Có hai cách để cài đặt **gems**:

- **Cách 1:** Thêm vào `Gemfile` và chạy `bundle install`.
    
    Bash
    
    ```
    bundle add gem-name
    ```
    
- **Cách 2:** Cài đặt trực tiếp.
    
    Bash
    
    ```
    gem install gem-name
    ```
    

---

### 1️⃣5️⃣ Workflow tùy chỉnh

Nếu không sử dụng **scaffold** có sẵn, bạn có thể tự tạo **workflow** như sau:

1. **Tạo controller:** `rails generate controller Pages`
    
2. **Định nghĩa routes:** Thêm route vào `config/routes.rb`.
    
    Ruby
    
    ```
    get '/download', to: 'pages#download'
    ```
    
3. **Định nghĩa hàm:** Viết method tương ứng trong controller.
    

---

### 1️⃣6️⃣ Đính kèm ảnh vào Model

Để thêm ảnh vào một model đã có sẵn (sau khi chạy **scaffold**), bạn thực hiện các bước sau:

1. **Trong model:** Thêm `has_one_attached :thumnail` hoặc `has_many_attached :images` vào tệp model (`.rb`).
    
    Ruby
    
    ```
    class Product < ApplicationRecord
      has_one_attached :thumbnail
      has_many_attached :images
    end
    ```
    
2. **Trong controller:** Thêm trường ảnh vào `strong_parameters` trong method `product_params`.
    
    Ruby
    
    ```
    def product_params
      params.require(:product).permit(:name, :price, :thumbnail, images: [])
    end
    ```
    

---

### 1️⃣7️⃣ Định nghĩa Route với Parameter

Một **route** có thể có thêm các tham số (ví dụ: `:id`).

Ruby

```
get 'post/pdf/:id', to: 'posts#pdf', as: 'post_pdf'
```

- `as: 'post_pdf'` sẽ tạo một **helper path** là `post_pdf_path`.
    
- Trong view, bạn có thể gọi path này với tham số: `post_pdf_path(post)`.
    

---

### 1️⃣8️⃣ Tạo PDF với Prawn

Để tạo một tệp **PDF** bằng **Prawn**, bạn có thể sử dụng đoạn mã sau:

Ruby

```
pdf = Prawn::Document.new
pdf.text 'Đây là nội dung văn bản', size: 20, style: :bold
...
send_data(pdf.render, filename: "#{@post.title}.pdf", type: 'application/pdf', disposition: 'inline')
```

- `disposition: 'inline'` sẽ hiển thị PDF trong trình duyệt thay vì tải xuống.
    

**Thêm ảnh vào PDF:**

Bạn có thể thêm ảnh vào tệp PDF bằng cách đọc tệp ảnh và thêm vào tài liệu Prawn.

Ruby

```
thumbnail_image = StringIO.open(@post.thumbnail.download)
pdf.image thumbnail_image, fit: [100, 100] # Giữ tỷ lệ ảnh và vừa với kích thước đã cho
```

---

### 1️⃣9️⃣ `before_action`

`before_action` là một callback trong **controller** được sử dụng để chạy một method trước một hoặc nhiều action khác.

Ruby

```
class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]
  ...
  private
  def set_post
    @post = Post.find(params[:id])
  end
end
```

- `:set_post` là tên method sẽ được gọi.
    
- `only: %i[...]` chỉ áp dụng callback cho các action được liệt kê (ví dụ: `show`, `edit`, `update`, `destroy`).
    
- Nếu không có `only`, callback sẽ chạy cho **mọi action** trong controller.
    

---

### 2️⃣0️⃣ Một số lỗi thường gặp với Devise

- **Lỗi khi sử dụng Devise:**
    
    - **Tên lỗi:** `undefined local variable or method 'user_signed_in?'`
        
    - **Nguyên nhân:** Bạn chưa định nghĩa helper `current_user` hoặc `user_signed_in?` trong file `application_helper.rb`.
        
- **Lỗi không nhận diện phương thức:**
    
    - **Tên lỗi:** `No route matches [GET] "/users/sign_out"`
        
    - **Nguyên nhân:** Devise cần phương thức `DELETE` để đăng xuất. Bạn cần dùng `data: { turbo_method: :delete }` thay vì `<%= link_to "Sign out", destroy_user_session_path, method: :delete %>`.
        
- **Lỗi hiển thị flash message:**
    
    - **Nguyên nhân:** Turbo mặc định redirect nên flash message không hiện. Bạn có thể tạm thời tắt Turbo hoặc sử dụng một gem hỗ trợ.


Ok, hết rùi. Cảm ơn anh em đã theo dõi nhé~~