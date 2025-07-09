# 开发指南

## 代码质量工具

本项目配置了完整的代码质量工具链，包括 ESLint、Prettier、TypeScript 和 Git hooks。

### 工具说明

- **ESLint**: 代码质量检查和错误检测
- **Prettier**: 代码格式化工具
- **TypeScript**: 类型检查（支持 JS/JSX 文件）
- **Husky**: Git hooks 管理
- **lint-staged**: 只对暂存文件运行 lint

### 可用命令

#### Lint 相关

```bash
# 运行 ESLint 检查
pnpm run lint

# 运行 ESLint 并自动修复
pnpm run lint:fix
```

#### 格式化相关

```bash
# 格式化所有文件
pnpm run format

# 检查格式化状态（不修改文件）
pnpm run format:check
```

#### 类型检查

```bash
# 运行 TypeScript 类型检查
pnpm run type-check
```

#### 综合检查

```bash
# 运行所有检查（lint + format + type-check）
pnpm run code-quality

# 运行所有检查并自动修复
pnpm run code-quality:fix
```

### 自动化

#### Git Hooks

- **pre-commit**: 提交前自动运行 lint-staged，对暂存的文件进行 lint 和格式化

#### VS Code 集成

- 保存时自动格式化
- 保存时自动修复 ESLint 错误
- 自动导入排序

### 配置文件

- `.eslintrc.json` - ESLint 配置
- `.prettierrc` - Prettier 配置
- `.prettierignore` - Prettier 忽略文件
- `tsconfig.json` - TypeScript 配置
- `.vscode/settings.json` - VS Code 工作区设置
- `.vscode/extensions.json` - 推荐的 VS Code 扩展
- `.husky/pre-commit` - Git pre-commit 钩子

### 推荐的 VS Code 扩展

安装以下扩展以获得最佳开发体验：

- ESLint
- Prettier - Code formatter
- TypeScript and JavaScript Language Features
- styled-components
- Auto Rename Tag
- Path Intellisense
- TODO Tree

### 代码规范

#### JavaScript/TypeScript

- 使用单引号
- 语句末尾加分号
- 使用 2 个空格缩进
- 行宽限制 80 字符
- 使用 ES6+ 语法
- 优先使用 `const`，其次 `let`，避免 `var`

#### React

- 组件名使用 PascalCase
- 文件名使用 PascalCase（组件）或 camelCase（工具函数）
- Props 使用 camelCase
- 使用函数组件和 Hooks

#### 样式

- 使用 styled-components
- 组件样式紧邻组件定义
- 使用语义化的组件名

### 故障排除

#### ESLint 错误

如果遇到 ESLint 错误，可以：

1. 运行 `pnpm run lint:fix` 自动修复
2. 手动修复代码
3. 在特殊情况下使用 `// eslint-disable-next-line` 注释

#### Prettier 冲突

如果 Prettier 和 ESLint 有冲突：

1. 确保安装了 `eslint-config-prettier`
2. 检查 `.eslintrc.json` 中是否正确配置了 prettier

#### TypeScript 错误

对于 TypeScript 错误：

1. 运行 `pnpm run type-check` 查看详细错误
2. 逐步添加类型注解
3. 使用 `// @ts-ignore` 作为临时解决方案（不推荐）

### 最佳实践

1. **提交前检查**: 确保运行 `pnpm run code-quality` 无错误
2. **小步提交**: 频繁提交小的更改，便于代码审查
3. **描述性提交信息**: 使用清晰的提交信息描述更改
4. **代码审查**: 提交 PR 前进行自我审查
5. **保持一致**: 遵循项目的代码风格和约定
