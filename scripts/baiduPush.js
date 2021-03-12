/**
 * 生成百度链接推送文件
 * @example
 *  node ./script/baiduPush.js [domain] => 生成百度链接推送文件，默认 http://extend.roshin.cn，可以多个
 */
const fse = require('fs-extra'); // fs 扩展工具包
const chalk = require('chalk'); // node终端样式库
const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
const matter = require('gray-matter'); // FrontMatter 解析器 https://github.com/jonschlinkert/gray-matter

const { tempReslove, readFileList } = require('./utils');

const args = minimist(process.argv.slice(2)); // 解析后的命令行参数
const domain = args._[0]; // 目标域名

if (!domain) {
  console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node ./scripts/baiduPush.js https://roshin.cn'));
  process.exit(1);
}

// 生成的文件名
const fileName = `${domain
  .replace(/^\w+:\/\//, '')
  .replace(/\/.*/g, '')
  .replace(/\s/g, '')}.txt`;

// 先创建文件，写入主域名
fse.outputFileSync(tempReslove(fileName), domain);

main();

/**
 * 主体函数
 */
function main() {
  const files = readFileList(); // 拿到所有 md 文件
  files.forEach((file) => {
    const { data } = matter(fse.readFileSync(file.intact_path, 'utf-8'));
    // 挨个插入页面链接
    if (data.permalink) {
      return fse.appendFileSync(tempReslove(fileName), `\r\n${domain}${data.permalink}`);
    }
    fse.appendFileSync(
      tempReslove(fileName),
      `\r\n${domain}/${file.path
        .replace(/\\/g, '/')
        .replace(/.md$/, '/')
        .replace(/\/(README|readmee)\/$/, '/')}`
    );
  });
}
