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

---

# v1.1 · 三电与车身工程深度更新

## 本次新增与纠错

- 新增“04 / 三电、车身结构与用料深拆”：12组插混/增程电池、6组纯电池、15款车身结构与用料分析，覆盖整备质量、SOC充电区间、第三排防护、独立碰撞与媒体拆解。
- 纠正N8L纯电后轮转向：由误套插混的±10°/4.58m改为官方资料支持的±7°/5.45m；插混仍保留±10°/4.58m。
- 明确V9X总/可用电量口径、领克900两种电池均为三元锂、LS9 Hyper与52版差异、理想L9供应批次变化；无公开数据处保留“未公开/按交付铭牌”。

## 引用与静态验收

- `grounded-citations` render与verify通过：75个实际引用来源；未引用登记源[60][64]保留在账本但不进入公开来源表。
- HTML无重复DOM id；完整脚本 `node --check` 通过；`sources.json`可解析且75项。
- 本地HTML SHA-256：`7ed7e404c4bcd70a5e9369f0a81c9c62c45d64546e9f06921e1569245e8c09e0`。
- `report.md` SHA-256：`39d70d81df250f3095be32627b0f409fb9185dd75613746d46cd98a2ed3aade9`。
- `sources.json` SHA-256：`796eb212cc0e547ca3cfa3d323c3e57a7067bc0e46f2881de4da4db2df3e905a`。

## 浏览器实测

- Camoufox桌面页：15款车型、75个来源；工程章节三张表分别12/6/15行。
- 能源筛选：纯电5款；N8L纯电、ES8、L90三车对比弹窗正常；清空后“已选0款”；深浅色切换正常。
- 390px iframe实际渲染：页面宽390、视口宽390，无页面横向溢出；首表容器366px、内容1120px，实际横滑至`scrollLeft=754`可到最右列。
- 顶栏改为不透明背景，修复锚点定位时内容透出；工程正文/表格字号提高，手机端增加横滑提示。
- 截图：`engineering-desktop.png`、`engineering-mobile-390.png`。

## 公网验收

- 待本次提交发布后回读填写。
