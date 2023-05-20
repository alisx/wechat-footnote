
## 微信外链转脚注

一个可以将微信外链替换成脚注的 JS 脚本和 CSS 样式，支持 Typora Html 导出。

## 特性

1. 自动查找文件中的所有链接
2. 只对微信外链进行操作
3. 自动对外链编号
4. 重复链接使用相同编号
5. 链接没有 title 属性的用 innerText 做标题

## 代码

- `src/footnote.css` 脚注样式
- `src/footnote.js` 脚注脚本

## 用法

### Typora

1. 打开 Typora，依次点击 `文件`-> `偏好设置` -> `导出`，在 `Export` 中选择 `HTML`
2. 复制 `reference.html` 文件中的内容，粘贴到 `在 <head /> 中添加` 的输入框中
3. 点击右上角 `X` 关闭设置页面
4. 编辑完文章后，点击 `文件`-> `导出`，选择 `HTML`，完成导出
5. 此时生成的 html 文件中的链接已经被替换成脚注

### Html

> **注意：**
> 脚本中，插入脚注的元素为 `#write`，即 Typora 中的内容块，请根据目标 Html 文件内容块标记修改插入目标元素选择方式，如用 `.content` 等。

1. 复制 `reference.html` 文件中的内容，粘贴到 html 文件的 `head` 中
2. 用浏览器打开 html 文件，即可查看效果

### 演示

[点击查看](./test.html)

## Todo

1. 支持 markdown 中 `<http://www.example.com>` 类的链接
