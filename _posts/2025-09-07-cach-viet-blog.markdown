---
layout: post
title:  "Cú pháp viết blog với Jekyll"
date:   2025-09-07 15:26:01 +0700
categories: ["Khác"]
author: Lê Ngọc Đức
description: "Hướng dẫn cú pháp viết blog với Jekyll: highlight code, chèn file, chèn ảnh, danh sách, ..."
tags: [jekyll, markdown, blog]
---

Xin chào anh em, hôm nay tui vừa bắt đầu viết blog nên là cũng có tìm hiểu rồi note lại một số cú pháp
để tạo nội dung nè. Tui đã bold topic lên để dễ nhìn, anh em tham chiếu nhé.

<h1><strong>Để highlight một từ nào đó trong câu</strong> thì dùng:</h1>
<pre>
{% raw %}
`Some topic`  *<- usually it is next to `number 1` and above the `tab key` on the keyboard*
{% endraw %}
</pre>

<h1><strong>Để highlight cú pháp của một ngôn ngữ lập trình</strong>, ví dụ như ruby thì dùng cú pháp:</h1>
<pre>
{% raw %}
{% highlight ruby %}

#Your code

{% endhighlight %}
{% endraw %}
</pre>

Output sẽ trông như thế này:
{% highlight ruby %}

def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

<h1><strong>Để tham chiếu link</strong> thì cũng có vài cách:</h1>
{% raw %}
Use: `[Display name][variable]`, then at the end of the file you must define: `[Variable name]: URL`

Example: `[jekyll-docs]: https://jekyllrb.com/docs/home`

*OR*

Use: `[Display name](url)`, I prefer this way, very convenient.
{% endraw %}

<h1><strong>Để chèn file</strong> (vd: pdf, ...) vào thì có vài cách:</h1>

Chèn file vào, có cả preview:  
(Cả 2 cách đều giống nhau)  
`<iframe src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" width="100%" height="600px"></iframe>`

`<embed src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px"/>`

Output sẽ có như sau:

<iframe src="{{ '/assets/pdfs/1.dart-apprentice.pdf' | relative_url }}" width="100%" height="600px"></iframe>

Nếu chỉ chèn link thì:  
`[PDF]( {{ "/assets/pdfs/1.dart-apprentice.pdf" | relative_url }} )`

<h1><strong>Để chèn ảnh</strong> ta copy ảnh vào thư mục (vd: assets/images), rồi dùng thẻ:</h1>
<pre>
{% raw %}
![Alt text content]({{ '/assets/images/yasuo.png' | relative_url }})
{% endraw %}
</pre>
![Alt text content]({{ '/assets/images/yasuo.png' | relative_url }})

<h1><strong>Để tạo nội dung dạng liệt kê, danh sách dạng chấm (không thứ tự)</strong> thì dùng dấu `-` ở đầu, muốn tạo sub-list thì anh em `Tab` vào là được.</h1>

Ví dụ:

<pre> 
- Main topic 
  - Sub topic
</pre>

thì nó ra:
- Main topic
    - Sub topic

<h1><strong>Để tạo nội dung dạng liệt kê, danh sách dạng số</strong>:</h1>
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

(Nhớ là `2 tabs` nhé anh em)

... (đang cập nhật thêm)
