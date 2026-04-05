# TROUBLESHOOTING.md

> 适用项目：Piggy's Letter Adventure / fluffy-memory

---

## 1. 页面看起来有按钮，但点击没反应

### 现象
- 页面上能看到按钮
- 但点了像没反应
- 或者像点到了“空气”

### 根因
多个 `.screen` 同时占据布局层，隐藏 screen 虽然视觉上不明显，但仍然挡住点击。

### 正确修复方式
不要只写：

```css
.screen {
  opacity: 0;
}
```

应改成：

```css
.screen {
  display: none;
}

.screen.active {
  display: flex;
}
```

### 结论
**隐藏 screen 必须彻底脱离布局，而不是只透明。**

---

## 2. 页面一打开就同时看到 `Let's Go!`、`Next`、`Find it!`、`Play Again!`

### 现象
多个阶段按钮同时暴露，像整套 UI 叠在一起。

### 根因
通常有两个可能：

1. screen 层叠隐藏逻辑有问题
2. `script.js` 主逻辑不完整，导致切屏初始化失败

### 本项目这次的真实原因
两者都出现过，但**线上最核心问题是 `script.js` 曾经是残缺版**。

### 如何确认
检查线上 `script.js` 是否完整：

```text
https://raw.githubusercontent.com/yinshengkui/fluffy-memory/main/script.js
```

如果开头不是完整的：

```javascript
// Piggy's Letter Adventure - Main Game Script
(function () {
```

或者内容明显中断，就说明线上脚本不完整。

---

## 3. GitHub 仓库里文件更新了，但线上页面行为还是不对

### 现象
- GitHub 页面能看到 commit
- 仓库文件看起来更新了
- 但 Pages 页面行为不对

### 优先排查顺序
1. 先确认 raw 文件内容是否真的正确
2. 再用带时间戳参数的页面链接访问
3. 再做真实点击验证

### 推荐验证地址

```text
https://yinshengkui.github.io/fluffy-memory/?v=202604052210
```

每次换一个新时间戳。

### 结论
**验收标准是页面行为，不是“仓库里有 commit”。**

---

## 4. 本地能 commit，但不能 push

### 常见表现

```text
Permission denied (publickey)
```

或者 HTTPS 一直要凭证。

### 当前项目已知最优解
改用 SSH push，不要继续卡在 HTTPS 凭证。

### 检查方式

```bash
ssh -T git@github.com
```

成功时会看到：

```text
Hi yinshengkui! You've successfully authenticated, but GitHub does not provide shell access.
```

### 如果失败
去 GitHub 添加本机公钥：

```text
https://github.com/settings/keys
```

---

## 5. GitHub SSH key 的邮箱 comment 和 GitHub 绑定邮箱不一致

### 现象
公钥长这样：

```text
ssh-ed25519 AAAA... yinshengkui@bytedance.com
```

但 GitHub 主邮箱可能是：

```text
yinshengkui123@163.com
```

### 是否有影响
**没有功能影响。**

### 原因
SSH key 后面的邮箱只是注释/comment，不参与权限校验。
GitHub 真正认的是公钥本体，不是 comment。

### 结论
能用就行，不需要因为邮箱不同重新生成 key。

---

## 6. `git push origin main` 报错：`fetch first`

### 现象

```text
! [rejected] main -> main (fetch first)
```

### 含义
远程分支比本地更新，本地缺少远程提交。

### 处理方式
先看两边历史：

```bash
git fetch origin
git log --oneline --decorate --graph -5
git log --oneline --decorate --graph origin/main -5
```

再决定是否 merge。

---

## 7. `fatal: refusing to merge unrelated histories`

### 现象
本地 merge 远程时出现：

```text
fatal: refusing to merge unrelated histories
```

### 含义
本地仓库和远程仓库不是同一条历史发展出来的。

### 本项目为什么会这样
因为本地目录后来才初始化成 git 仓库，不是直接从远程 clone 下来的。

### 处理方式
显式允许合并独立历史：

```bash
git merge origin/main --allow-unrelated-histories
```

然后解决冲突。

---

## 8. merge 时 `README.md` / `index.html` / `script.js` 冲突怎么办

### 本项目这次的正确策略
- `README.md`：优先保留本地完整说明
- `index.html`：优先保留本地当前工作版本
- `script.js`：优先保留本地完整版本

### 为什么
因为远程历史里曾经有网页端不完整编辑，尤其 `script.js` 残缺过。

### 结论
这次项目里，**冲突处理原则是优先保留本地工作版，而不是盲信远程版。**

---

## 9. intro 阶段点一次 `Next` 没有马上进入关卡，是不是坏了？

### 不是 bug
本项目 intro 本来就是多段文案。

### 正常行为
流程应是：
- `Let's Go!`
- `Next`
- `Next`
- `Next`
- 进入第一关

### 结论
不要误把“多段 intro”当成“点击失效”。

---

## 10. 怎么判断这次线上修复真的成功了

至少做这条完整验证链路：

1. 打开 GitHub Pages（最好带时间戳）
2. 点击 `Let's Go!`
3. 连续点击 intro 的 `Next`
4. 出现 `Find it!`
5. 选择正确答案（A 关选 Apple）
6. 进入 trace
7. 点 `Done!`
8. 出现 `Next Round`

如果这条链路通了，就说明：
- screen 切换正常
- 主逻辑正常
- 线上 `script.js` 已恢复

---

## 11. 最重要的经验总结

### 经验 1
不要默认怪缓存，先查文件完整性和 DOM/CSS/JS 逻辑。

### 经验 2
GitHub 网页编辑器不适合整份覆盖长脚本。

### 经验 3
本地能 commit 不等于能 push，发布链路要单独验证。

### 经验 4
最终验收标准永远是：**页面真实行为是否正常。**
