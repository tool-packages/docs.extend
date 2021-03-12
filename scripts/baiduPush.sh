# !/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @temp/extend.roshin.cn.txt "http://data.zz.baidu.com/urls?site=https://extend.roshin.cn&token=ROK9cgog73ab4l49"

rm -rf ./temp # 删除文件