// 创建脚注元素
function CreateFootnoteItem(num, title, url) {
    var span = document.createElement('span');
    span.setAttribute("id", "fn" + num);
    span.setAttribute("class", "footnote-item");

    var nspan = document.createElement('span');
    nspan.setAttribute("class", "footnote-num");
    nspan.innerText = "[" + num + "]";
    var p = document.createElement('p');
    p.innerHTML = '<span class="footnote-title">' + title + ':</span> <em class="footnote-em">' + url + "</em>";

    span.appendChild(nspan);
    span.appendChild(p);
    return span;
}
// 替换链接
function replaceLink(num, link) {
    var span = document.createElement('span');
    span.setAttribute("class", "footnote-word");
    span.innerHTML = link.innerHTML;
    var sup = document.createElement('sup');
    sup.setAttribute("class", "footnote-ref");
    sup.innerText = "[" + num + "]";
    link.parentNode.replaceChild(span, link);
    span.append(sup);
}

// 微信内链判断正则表达式
const wxLinkRegex = /^https?:\/\/(?:www\.)?(?:(?:mp\.weixin|pay\.weixin)\.qq\.com|weixin\.qq\.com\/).*$/i;

function createFootnoteSection() {
    var h3 = document.createElement('h3');
    h3.setAttribute("class", "footnotes-sep");
    h3.innerText = "参考资料";
    return {
        section: document.createElement('section'),
        title: h3
    }
}
// 创建脚注
function CreateFootnote() {
    const links = document.querySelectorAll("a");
    if (links.length > 0) {
        var linknum = 1;
        var linkmap = {};
        var section = null;
        links.forEach(link => {
            if (!wxLinkRegex.test(link.href)) { // 检查是否微信链接
                // 对链接进行排重，如果已经有了就沿用之前的序号
                var num = linkmap[link.href];
                if (num == null) {
                    // 生成元素 如果没有 title 属性就用 text 代替
                    section = section || document.createElement('section');
                    section.appendChild(CreateFootnoteItem(linknum, (link.title || link.text), link.attributes.href.value));
                    linkmap[link.href] = linknum;
                    num = linknum;
                    console.log(num);
                    linknum += 1;
                    console.log(num);
                }
                replaceLink(num, link);// 替换链接
            }
        });
        if (section) {
            var h3 = document.createElement('h3');
            h3.setAttribute("class", "footnotes-sep");
            h3.innerText = "参考资料";
            // 插入脚注元素 请查看 Html 文件中，文章内容块的标记，将 #write 换成目标内容块的标记
            document.querySelector('#write').appendChild(h3)
            document.querySelector('#write').appendChild(section);
        }
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     CreateFootnote();
// });
