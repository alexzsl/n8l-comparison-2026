# 验收记录 · v1.0

## 静态检查

- HTML约56KB，15款车型，50个来源，无重复DOM id。
- 完整 `<script>` 块经 `node --check` 通过。
- `sources.json` 可解析，共50项。
- HTML SHA-256：`195200158e343523da899ba9c8a991c03beac094c3b00f5cddb1d5b07aed3cad`

## 浏览器交互（Camoufox实际页面）

- 首屏：15款车型、50个来源均渲染成功。
- 能源筛选：纯电5款；低预算纯电4款。
- 对比：N8L插混、智己LS9、小鹏GX增程三车成功加入，弹窗显示3个车型列。
- 上限：尝试加入第4款后仍保持3款。
- 弹窗关闭、清空选择、深浅色切换均通过。

## 390px移动视口（iframe实际渲染宽度）

- `innerWidth=390`，`body.scrollWidth=390`，无横向溢出。
- 车型卡为单列、KPI为双列、导航折叠、来源为单列。
- 标题按语义断行；主要按钮最小高度44px。
- 截图：`mobile-390.png`。

## 桌面截图

- `desktop-first.png`：首屏与结论卡、导航、按钮完整，无明显文字溢出。

## 边界

- 本地预览窗与Chrome DevTools通道不可用，改用Camoufox实际页面及390px iframe视口验收；未把静态代码检查冒充浏览器验收。
- 公网发布结果另见最终GitHub Pages回读。

## 公网发布验收

- URL：`https://alexzsl.github.io/n8l-comparison-2026/`
- GitHub Pages状态：`built`。
- 公网HTML与本地HTML SHA-256一致：`195200158e343523da899ba9c8a991c03beac094c3b00f5cddb1d5b07aed3cad`。
- 公网浏览器回读：15款车型、50个来源；纯电筛选5款。
- 公网对比弹窗：N8L纯电、蔚来ES8、乐道L90三车正常显示。
- `report.md`、`sources.json`均返回HTTP 200。
- 本地测试HTTP服务已关闭，并核验8765端口不再监听。
