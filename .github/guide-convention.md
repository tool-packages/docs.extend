# 协作指南

## 开发设置

你需要 [Node.js 10+](http://nodejs.org), 和 [Yarn 1.x](https://yarnpkg.com/en/docs/install)

克隆项目并切换到相应的开发分支

```bash
git clone https://github.com/tool-packages/docs.extend.git
```

安装依赖

```bash
yarn
```

## 脚本

运行 `yarn dev` 即可生成本地预览。除此之外，理论上你应该不需要执行任何定义的脚本，这些脚本都是在自动构建过程中自动执行的。

```bash
yarn dev
```

## 参与贡献

在提交一个 `pull request` 之前，请确认您按照以下的步骤来做：

1. Fork 这个仓库
2. 基于 `master` 分支创建一个新的分支进行修改
3. 使用符合 [Git 消息提交规范](https://github.com/tool-packages/docs.extend/.github/commit-convention.md) 的 commit
4. 确保您的代码通过了 ESLint 校验、符合 Prettier 格式规范
5. 我们不建议您更改 `src/api` 文件夹里面的 `globals.md` 文件，因为我们更推荐您自动生成这个文件，以免被下次更新覆盖。
