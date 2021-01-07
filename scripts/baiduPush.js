/**
 * 生成百度链接推送文件
 * @example
 *  node ./script/baiduPush.js [domain] => 生成百度链接推送文件，默认 http://extend.roshin.cn，可以多个
 */
const path = require('path');
const fse = require('fs-extra'); // fs 扩展工具包
const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
const matter = require('gray-matter'); // FrontMatter 解析器 https://github.com/jonschlinkert/gray-matter

const args = minimist(process.argv.slice(2)); // 解析后的命令行参数
const domains = args._.length ? args._ : ['https://g.extend.roshin.cn', 'https://extend.roshin.cn']; // 目标域名

const docsReslove = (p) => path.resolve(__dirname, '../src', p || ''); // docs文件路径
const urlsReslove = (p) => path.resolve(__dirname, '../temp', p || ''); // docs文件路径

main();

/**
 * 主体函数
 */
function main() {
  domains.forEach((domain) => {
    const fileName = `${domain
      .replace(/^\w+:\/\//, '')
      .replace(/\/.*/g, '')
      .replace(/\s/g, '')}.txt`;
    fse.outputFileSync(urlsReslove(fileName), domain);
  });
  const files = getFiles(); // 拿到所有 md 文件
  files.forEach((_path) => {
    const filePath = docsReslove(_path);
    const { data } = matter(fse.readFileSync(docsReslove(filePath), 'utf8'));
    domains.forEach((domain) => {
      const fileName = `${domain
        .replace(/^\w+:\/\//, '')
        .replace(/\/.*/g, '')
        .replace(/\s/g, '')}.txt`;
      if (data.permalink) {
        return fse.appendFileSync(urlsReslove(fileName), `\r\n${domain}${data.permalink}`);
      }
      fse.appendFileSync(
        urlsReslove(fileName),
        `\r\n${domain}/${_path
          .replace(/\\/g, '/')
          .replace(/.md$/, '/')
          .replace(/\/(README|readmee)\/$/, '/')}`
      );
    });
  });
}

/**
 * 检测是否为文件夹
 * @param { string } _dir 路径
 * @returns { boolean } true | false
 */
function isDirectory(_dir) {
  return fse.statSync(_dir).isDirectory();
}

/**
 * 拿到所有 md 文件
 * @param { string } _path 路径
 * @returns { string[] } 文件列表
 */
function getFiles(_path = '') {
  let arr = [];
  /**
   * 整理当前文件路径
   * @param { string } v
   * @returns { string } 返回整理过后的路径
   */
  const pathJoin = (v) => path.join(_path || '', v);
  const readdirFiles = fse.readdirSync(docsReslove(_path));
  readdirFiles.forEach((filepath) => {
    if (filepath === '.vuepress') return;
    if (isDirectory(docsReslove(pathJoin(filepath)))) {
      arr = arr.concat(getFiles(pathJoin(filepath)));
      return;
    }
    if (filepath.endsWith('md')) {
      arr.push(pathJoin(filepath));
    }
  });
  return arr;
}
