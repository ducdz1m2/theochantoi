---
layout: post
title:  "Cú pháp viết blog với Jekyll"
date:   2025-09-07 15:26:01 +0700
categories: jekyll update
---

**Để highlight một từ nào đó trong câu** thì dùng: 
{% raw %}
\`Topic nao do\`  *<- thường thì nó nằm kế số 1 và trên nút tab của máy á*
{% endraw %}
**Để highlight cú pháp của một ngôn ngữ lập chỉnh**, ví dụ như ruby thì dùng cú pháp:


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

**Để tham chiếu link** thì cũng có vài cách:
{% raw %}
Dùng: `[Tên hiển thị][biến]`, xong rồi cuối file phải định nghĩa: `[Tên biến]: URL`

Ví dụ: `[jekyll-docs]: https://jekyllrb.com/docs/home`


*HOẶC*

Dùng: `[Tên hiển thị](url)`, tui thích dùng cách này, tiện vl.
{% endraw %}

