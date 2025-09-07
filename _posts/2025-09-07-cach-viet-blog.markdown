---
layout: post
title:  "Cú pháp viết blog với Jekyll"
date:   2025-09-07 15:26:01 +0700
categories: jekyll update
author: Lê Ngọc Đức
description: "Hướng dẫn cú pháp viết blog với Jekyll: highlight code, chèn file, chèn ảnh, danh sách, ..."
tags: [jekyll, markdown, blog, seo]
keywords: "jekyll blog, viết blog với jekyll, markdown jekyll, seo jekyll"
---

Xin chào anh em, hôm nay tui vừa bắt đầu viết blog nên là cũng có tìm hiểu rồi note lại một số cú pháp
để tạo nội dung nè. Tui đã bold topic lên để dễ nhìn, anh em tham chiếu nhé.

## **Để highlight một từ nào đó trong câu** thì dùng: 
{% raw %}
\`Topic nao do\`  *<- thường thì nó nằm kế `số 1` và trên `nút tab` của máy á*
{% endraw %}
## **Để highlight cú pháp của một ngôn ngữ lập chỉnh**, ví dụ như ruby thì dùng cú pháp:


{% raw %}
{% highlight ruby %}

#Code của bạn

{% endhighlight %}
{% endraw %}


Output sẽ trông như thế này:
{% highlight ruby %}


def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

## **Để tham chiếu link** thì cũng có vài cách:
{% raw %}
Dùng: `[Tên hiển thị][biến]`, xong rồi cuối file phải định nghĩa: `[Tên biến]: URL`

Ví dụ: `[jekyll-docs]: https://jekyllrb.com/docs/home`


*HOẶC*

Dùng: `[Tên hiển thị](url)`, tui thích dùng cách này, tiện vl.
{% endraw %}


## **Để chèn file** (vd: pdf, ...) vào thì có vài cách:

Chèn file vào, có cả preview:
(Cả 2 cách đều giống nhau)
`<iframe src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" width="100%" height="600px"></iframe>`

`<embed src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px"/>`

Output sẽ có như sau:

<iframe src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" width="100%" height="600px"></iframe>


Nếu chỉ chèn link thì: 
`[PDF]( {{ "/assets/pdfs/1.dart-apprentice.pdf" | relative_url }} )`


## **Để chèn ảnh** ta copy ảnh vào thư mục (vd: assets/images), rồi dùng thẻ:

<pre>
{% raw %}
![Nội dung chữ thay thế]({{ '/assets/images/yasuo.png' | relative_url }})
{% endraw %}
</pre>
![Nội dung chữ thay thế]({{ '/assets/images/yasuo.png' | relative_url }})


## **Để tạo nội dung dạng liệt kê, danh sách dạng chấm (không thứ tự)** thì dùng dấu `-` ở đầu, muốn tạo sub-list thì anh em `Tab` vào là được.


Ví dụ:

<pre> 
- Main topic 
  - Sub topic</pre>

thì nó ra:
- Main topic
    - Sub topic





## **Để tạo nội dung dạng liệt kê, danh sách dạng số**:
<pre>
1. First topic
    1. sub 1
    1. sub 2
2. Second...
</pre>


1. First topic
    1. sub 1
    2. sub 2
2. Second...

(Nhớ là 2 tab lận nhé anh em)


... (đang cập nhật thêm)