/*--------------------------*/
// 添加一个按钮
function createCopyBtn() {
    let btn = document.createElement("button");
    btn.innerText = "复制";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = "100";
    btn.addEventListener('click', function () {
        document.addEventListener('copy', e => {
            e.preventDefault();
            debugger
            e.clipboardData.setData('text/html', document.copycontent);
            alert("已复制");
        });

        let html = document.querySelector(".typora-export-content").outerHTML;

        let style = getAllStyles();

        let options = {
            "applyStyleTags": true,
            "removeStyleTags": true,
            "preserveMediaQueries": true,
            "preserveFontFaces": true,
            "applyWidthAttributes": false,
            "applyHeightAttributes": false,
            "applyAttributesTableElements": true,
            "inlinePseudoElements": true,
            "xmlMode": false,
            "preserveImportant": true
        }
        let input = (`<style type="text/css">${style}</style>`) + html
        document.copycontent = document.juice(input, options)
        document.execCommand("copy");
    });
    document.querySelector(".typora-export").appendChild(btn);
}

// window.onload = function () {
//     var temp = "";
//     function myFunction(e) {
//         e.preventDefault();
//         debugger

//         e.clipboardData.setData('text/html', temp);
//         alert("已复制好，可贴粘。");
//     }
//     // // 给button加click事件，当被点击时则创建一个copy事件，来触发上面的copy监听事件
//     var btn = document.getElementById('btn');
//     btn.addEventListener('click', function () {
//         document.addEventListener('copy', myFunction);
//         let html = document.html;

//         let style = getAllStyles();

//         let options = {
//             "applyStyleTags": true,
//             "removeStyleTags": true,
//             "preserveMediaQueries": false,
//             "preserveFontFaces": false,
//             "applyWidthAttributes": false,
//             "applyHeightAttributes": false,
//             "applyAttributesTableElements": false,
//             "inlinePseudoElements": false,
//             "xmlMode": false,
//             "preserveImportant": false
//         }
//         let input = (`<style type="text/css">${style}</style>`) + html
//         temp = document.juice(input, options)
//         // temp = (`<style type="text/css">${style}</style>`) + html;
//         document.execCommand("copy");
//         // navigator.clipboard.writeText(html, { type: 'text/html' }).then(function () {
//         //     console.log('已成功复制 HTML 到剪贴板！');
//         // }, function () {
//         //     console.error('复制 HTML 到剪贴板失败！');
//         // });
//     });
// }

// function toInlineStyleHTML(node) {
//     // 新建一个 `div` 元素
//     // const div = document.createElement('div');

//     // 将要更新的节点 `clone` 到 `div` 中
//     // const clonedNode = node.cloneNode(true);
//     // div.appendChild(clonedNode);

//     // 将样式应用到 `div` 及其子孙节点
//     // toInlineStyle(clonedNode);
//     // toInlineStyle(node);

//     // 返回更新后的 `div` 中的 HTML 字符串，即原始节点及其子节点转换后的 HTML 字符串
//     return node.outerHTML;
// }
// function getCssRulesFromCssFile(element) {
//     const styles = window.getComputedStyle(element)
//     const cssRules = {}
//     for (let i = 0; i < styles.length; i++) {
//         const styleName = styles[i]
//         const styleValue = styles.getPropertyValue(styleName)
//         if (styleValue === 'initial') {
//             cssRules[styleName] = styles.getPropertyValue(styleName)
//         }
//     }
//     return cssRules
// }

// function toInlineStyle(node) {
//     // 获取节点的计算样式
//     const computedStyles = window.getComputedStyle(node);
//     // 将计算样式转换为 CSS 样式字符串
//     const cssStyles = [];

//     for (let i = 0; i < computedStyles.length; i++) {
//         let style = computedStyles[i];
//         if (!style.startsWith("-webkit")
//             && !style.startsWith("animation")
//             && !style.startsWith("transition")
//             && !style.startsWith("scroll")
//             && !style.startsWith("grid")) {
//             const propValue = computedStyles.getPropertyValue(style);
//             if (propValue && propValue != 'none' && propValue != 'auto') {
//                 cssStyles.push(`${style}:${propValue}`);
//             }
//         }


//         // cssStyles.push(`${style}:${propValue}`);
//         // result[style] = computedStyles.getPropertyValue(style);
//     };
//     // for (let i = 0; i < computedStyle.length; i++) {
//     //     const propName = computedStyle[i];
//     //     const propValue = computedStyle.getPropertyValue(propName);
//     //     cssStyles.push(`${propName}:${propValue}`);
//     // }
//     const cssText = cssStyles.join(';');

//     // 将样式应用到当前节点
//     node.style.cssText = cssText;

//     // 将样式应用到子节点
//     const childNodes = node.children;
//     for (let i = 0; i < childNodes.length; i++) {
//         const childNode = childNodes[i];
//         toInlineStyle(childNode);
//     }

//     // 返回更新后的 HTML
//     return node.outerHTML;
// }

function getAllStyles() {
    var styleSheets = document.styleSheets;
    var allStyles = "";
    for (var i = 0; i < styleSheets.length; i++) {
        var sheet = styleSheets[i];
        if (sheet.href == null) {
            var rules = sheet.rules || sheet.cssRules;
            for (var j = 0; j < rules.length; j++) {
                allStyles += rules[j].cssText;
            }
        }
    }
    return allStyles;
}