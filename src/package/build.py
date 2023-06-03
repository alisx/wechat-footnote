import os
import glob

# 指定 CSS 和 JS 文件所在的目录
css_dir = '../css'
cssfiles = ["footnote", "image"]
js_dir = '../js'
jsfiles = ["juice", "footnote", "codelinenum", "copy", "imgcaption", "index"]

# 合并后的文件名
output_file = 'all.css'

# 遍历 CSS 文件并将内容写入合并文件
with open(output_file, 'w') as f:
    f.write("<style type='text/css'>\n")
    for css_file in cssfiles:
        # print("css:", css_file)
        with open(f"{css_dir}/{css_file}.css", 'r') as css:
            f.write(css.read())
    f.write("</style>\n")

# 遍历 JS 文件并将内容写入合并文件
# with open(output_file, 'a') as f:
#     f.write("<script>\n")
#     for js_file in jsfiles:
#         # print("js:", js_file)
#         with open(f"{js_dir}/{js_file}.js", 'r') as js:
#             f.write(js.read())
#     f.write("</script>\n")
