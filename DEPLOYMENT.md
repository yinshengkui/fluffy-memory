# DEPLOYMENT.md

> 项目：Piggy's Letter Adventure / fluffy-memory
> 本地目录：`~/.openclaw/workspace/tmp/peppa-alpha-game`
> GitHub 仓库：`yinshengkui/fluffy-memory`
> 当前线上地址：`https://yinshengkui.github.io/fluffy-memory/`

---

## 1. 项目类型

这是一个**纯前端静态站点**，核心文件只有：

- `index.html`
- `styles.css`
- `script.js`

特点：
- 无后端
- 无数据库
- 无构建步骤
- 适合 GitHub Pages / Vercel / Netlify / Cloudflare Pages / 任意静态文件服务器

---

## 2. 当前默认部署方式：GitHub Pages

### 线上地址

```text
https://yinshengkui.github.io/fluffy-memory/
```

### 对应仓库

```text
git@github.com:yinshengkui/fluffy-memory.git
```

### 当前推荐发布方式

**不要再依赖 GitHub 网页编辑器做主发布。**

以后默认走：
1. 本地修改
2. 本地验证
3. git commit
4. git push
5. 验证 GitHub Pages

---

## 3. 本地开发与预览

进入项目目录：

```bash
cd ~/.openclaw/workspace/tmp/peppa-alpha-game
```

启动本地静态服务：

```bash
python3 -m http.server 8765
```

本地访问：

```text
http://127.0.0.1:8765
```

---

## 4. 推荐发布流程（标准版）

### 第一步：确认 remote 使用 SSH

```bash
git remote -v
```

预期应看到：

```text
origin  git@github.com:yinshengkui/fluffy-memory.git (fetch)
origin  git@github.com:yinshengkui/fluffy-memory.git (push)
```

如果不是，切换为 SSH：

```bash
git remote set-url origin git@github.com:yinshengkui/fluffy-memory.git
```

---

### 第二步：确认 GitHub SSH 可用

```bash
ssh -T git@github.com
```

成功时会看到类似：

```text
Hi yinshengkui! You've successfully authenticated, but GitHub does not provide shell access.
```

说明 SSH 已经通了。

---

### 第三步：本地修改后检查状态

```bash
git status
```

建议先看 diff：

```bash
git diff
```

---

### 第四步：提交变更

```bash
git add index.html styles.css script.js README.md DEPLOYMENT.md TROUBLESHOOTING.md
git commit -m "Describe your change"
```

如果只改了部分文件，也可以按需 add。

---

### 第五步：推送到 GitHub

```bash
git push origin main
```

---

### 第六步：验证 GitHub Pages

访问：

```text
https://yinshengkui.github.io/fluffy-memory/
```

建议带 cache busting 参数：

```text
https://yinshengkui.github.io/fluffy-memory/?v=202604052200
```

每次发版都换一个时间戳，避免缓存干扰。

---

## 5. 每次发布后必须验证什么

不要只看仓库文件变了，要做**行为验证**。

### 最低验证链路

1. `Let's Go!`
2. 连续点击 intro 的 `Next`
3. 是否进入 round
4. `Find it!` 是否正常出现
5. 选择正确答案后是否进入 trace
6. `Done!` 后是否进入 celebrate
7. `Next Round` 是否进入下一关
8. 最终是否到结果页

---

## 6. 已踩坑：为什么不要再用 GitHub 网页编辑器做主发布

这次已经验证过：

### 问题 1：长文件覆盖不可靠
尤其是 `script.js` 这种较长文件，很容易：
- 看起来提交成功
- 实际并不是完整替换
- 线上留下残缺版本

### 问题 2：不方便真实 diff
网页编辑器很难稳定判断你到底改了什么。

### 问题 3：回滚和排错体验差
本地 git 明显更适合：
- 看 diff
- 合并冲突
- 回滚
- 重发版

**结论：网页编辑器只适合极小修改，不适合主工作流。**

---

## 7. SSH 配置记录（当前已打通）

当前机器已经验证通过：
- 本地已有 SSH key
- GitHub 已接受该 key
- `ssh -T git@github.com` 可成功认证

### 注意
SSH key comment 里用的邮箱不必等于 GitHub 绑定邮箱。
例如：

```text
ssh-ed25519 AAAA... yinshengkui@bytedance.com
```

即便 GitHub 主邮箱是 `yinshengkui123@163.com`，也不影响使用。

真正起作用的是公钥本体，不是后面的 comment。

---

## 8. 如果 push 失败，优先检查什么

### 情况 A：权限错误
比如：

```text
Permission denied (publickey)
```

先检查：

```bash
ssh -T git@github.com
```

---

### 情况 B：远程分支比本地新
比如：

```text
! [rejected] main -> main (fetch first)
```

说明远程有新提交，本地没同步。

先执行：

```bash
git fetch origin
git log --oneline --decorate --graph -5
git log --oneline --decorate --graph origin/main -5
```

再决定 merge / rebase。

---

### 情况 C：本地和远程是两条独立历史
比如：

```text
fatal: refusing to merge unrelated histories
```

这说明本地仓库不是从远程 clone 下来的，或者历史已经分叉得很厉害。

这时需要显式：

```bash
git merge origin/main --allow-unrelated-histories
```

然后手工解决冲突。

---

## 9. 当前项目在这次修复中确认的真实问题

### 问题一：CSS screen 隐藏逻辑错误
原来只用 `opacity: 0`，导致 screen 虽然看不见但还会挡点击。

正确做法：

```css
.screen {
  display: none;
}

.screen.active {
  display: flex;
}
```

### 问题二：线上 `script.js` 曾经是残缺版
这是线上切屏异常的核心原因之一。

这次已经通过本地完整文件 + git push 修复。

---

## 10. 备选部署方案

虽然当前默认是 GitHub Pages，但这个项目也很适合以下平台：

### Vercel
适合以后升级 React / Next.js，预览链接好用。

### Netlify
适合纯静态站点，拖拽部署简单。

### Cloudflare Pages
适合静态站加全球 CDN，后续可接 Workers。

### VPS / Nginx
适合以后做多个小游戏统一托管。

---

## 11. 当前推荐结论

这个项目当前最稳妥的部署方式是：

**本地开发 + 本地验证 + SSH push 到 GitHub + GitHub Pages 发布 + 带时间戳验证页面行为**

这是目前已经实际打通、且验证通过的主路径。
