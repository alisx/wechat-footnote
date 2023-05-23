// 去掉代码前的序号
function removeLineNumber() {
    let nums = document.querySelectorAll(".CodeMirror-gutter-elt");
    nums.forEach(num => {
        num.parentNode.removeChild(num);
    });
    let numblanks = document.querySelectorAll(".CodeMirror-gutters");
    numblanks.forEach(num => {
        num.parentNode.removeChild(num);
    });
    let codes = document.querySelectorAll(".CodeMirror-sizer");
    codes.forEach(code => {
        code.style.marginLeft = "6px";
    });
    let textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        let p = textarea.parentNode;
        p.parentNode.removeChild(p);
    })
}