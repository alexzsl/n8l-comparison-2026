
const MODELS=[
{id:'n8l-dm',name:'腾势N8L插混闪充',energy:'phev',energyLabel:'插混',min:31.98,max:34.98,price:'31.98–34.98万',range:'430km',acc:'3.7s',turn:'4.58m',suspension:'云辇-A＋后轮转向',luggage:'364–1128L',tag:'驾驶/长途',desc:'长纯电续航＋三电机＋高性价比'},
{id:'ls9',name:'智己LS9（当前两款）',energy:'phev',energyLabel:'增程',min:34.98,max:37.98,price:'34.98–37.98万',range:'320/390km',acc:'4.9/3.9s',turn:'4.95/4.77m',suspension:'双腔＋双向24°',luggage:'372–1030L',tag:'驾驶/豪华座舱',desc:'全线控底盘＋三把零重力'},
{id:'v9x',name:'魏牌V9X',energy:'phev',energyLabel:'插混',min:33.18,max:38.98,price:'33.18–38.98万',range:'310–470km',acc:'4.9/4.6s',turn:'约5.0–5.1m',suspension:'双腔＋双向20°',luggage:'244–1024L',tag:'后排舒适',desc:'全系右侧零重力＋31扬'},
{id:'voyah',name:'岚图泰山六座',energy:'phev',energyLabel:'插混',min:37.99,max:45.99,price:'37.99–45.99万',range:'350km',acc:'5.2–5.5s',turn:'Max无；Max+ 5.4m',suspension:'三腔空悬',luggage:'305–1193L',tag:'舒适/华为',desc:'Max+才有后轮转向与右侧零重力'},
{id:'m8',name:'问界M8现款六座增程',energy:'phev',energyLabel:'增程',min:36.98,max:44.98,price:'36.98–44.98万',range:'201/310km',acc:'5.2–5.3s',turn:'无后轮转向',suspension:'双腔空悬',luggage:'392–1323L＋39L',tag:'华为生态',desc:'ADS 5＋鸿蒙座舱；焕新版11/13上市'},
{id:'lynk',name:'领克900六座',energy:'phev',energyLabel:'插混',min:30.99,max:41.69,price:'30.99–41.69万',range:'220/268/280km',acc:'4.8/4.6/4.3s',turn:'探索版<5m',suspension:'双腔空悬',luggage:'约281–1070L',tag:'第三排/旋转座椅',desc:'后轮转向仅探索版；三排加热按摩'},
{id:'gx-dm',name:'小鹏GX增程',energy:'phev',energyLabel:'增程',min:28.98,max:35.98,price:'28.98–35.98万',range:'430km',acc:'4.98s',turn:'5.4m',suspension:'双腔＋后轮转向',luggage:'673–1748L',tag:'六人＋行李',desc:'满员装载与第三排机构突出'},
{id:'n8l-ev',name:'腾势N8L纯电',energy:'ev',energyLabel:'纯电',min:29.98,max:32.98,price:'29.98–32.98万',range:'960km',acc:'6.4s',turn:'±10°后轮转向',suspension:'云辇-A',luggage:'208L前备厢',tag:'长续航/闪充',desc:'账面续航强，独立高速实测待补'},
{id:'es8',name:'蔚来ES8六座',energy:'ev',energyLabel:'纯电',min:40.68,max:44.68,price:'40.68–44.68万',range:'635km',acc:'3.97s',turn:'无；5.7m',suspension:'双腔空悬',luggage:'547L＋230L前备舱',tag:'空间/换电',desc:'四驱520kW；主驾座椅争议需核验'},
{id:'i8',name:'理想i8六座',energy:'ev',energyLabel:'纯电',min:30.98,max:33.98,price:'30.98–33.98万',range:'780/720km',acc:'6.6/4.5s',turn:'无后轮转向',suspension:'双腔空悬',luggage:'394–1396L',tag:'家庭座舱',desc:'5C补能；后驱/四驱配置不同'},
{id:'l90',name:'乐道L90六座',energy:'ev',energyLabel:'纯电',min:26.58,max:29.98,price:'26.58–29.98万',range:'605/570km',acc:'后驱5.9s',turn:'无后轮转向',suspension:'全系空悬',luggage:'430L＋240L前备舱',tag:'低预算换电',desc:'Pro纯视觉；Max+起神玑＋激光雷达'},
{id:'ls8-neo',name:'智己LS8 NEO六座',energy:'ev',energyLabel:'纯电',min:26.98,max:28.98,price:'26.98/28.98万',range:'684/752km',acc:'300kW后驱',turn:'4.85m',suspension:'闭式空悬＋双向24°',luggage:'168L前备厢',tag:'低价尝新',desc:'11月5日刚上市，长期数据不足'},
{id:'s09',name:'深蓝S09（2026款）',energy:'phev',energyLabel:'增程',min:25.99,max:25.99,price:'25.99万',range:'310km',acc:'7.9s',turn:'无后轮转向',suspension:'按版本核验',luggage:'427–1392L',tag:'低预算华为',desc:'ADS 4.1 SE无城区NCA'},
{id:'l9',name:'理想L9',energy:'phev',energyLabel:'增程',min:45.98,max:50.98,price:'45.98–50.98万',range:'420km',acc:'4.9s',turn:'5.3m',suspension:'线控/主动底盘',luggage:'官方未统一',tag:'豪华家庭旗舰',desc:'四把零重力（Livis展示）＋11气囊'},
{id:'9x',name:'极氪9X六座',energy:'phev',energyLabel:'插混',min:46.59,max:59.99,price:'46.59–59.99万',range:'288–380km',acc:'3.9/3.1s',turn:'无后轮转向',suspension:'双腔空悬',luggage:'470–2148L',tag:'高预算性能',desc:'高价性能与豪华硬件；养护成本高'}
];
const state={energy:'all',budget:'all',selected:new Set()};
const $=id=>document.getElementById(id);
function budgetOk(m){if(state.budget==='all')return true;const ranges={low:[0,33],mid:[34,36],high:[37,46],premium:[46,Infinity]};const [lo,hi]=ranges[state.budget];return m.max>=lo&&m.min<=hi;}
function visibleModels(){return MODELS.filter(m=>(state.energy==='all'||m.energy===state.energy)&&budgetOk(m));}
function renderModels(){const list=visibleModels();$('resultCount').textContent=`${list.length}款车`;$('emptyState').style.display=list.length?'none':'block';$('modelGrid').innerHTML=list.map(m=>`<article class="model-card"><div class="model-top"><div><h3 class="model-name">${m.name}</h3><span class="tag ${m.energy==='ev'?'green':'amber'}">${m.energyLabel}</span></div><div class="model-price">${m.price}</div></div><p class="model-desc">${m.desc}</p><div class="specs"><div class="spec"><b>${m.range}</b><span>CLTC</span></div><div class="spec"><b>${m.acc}</b><span>零百/驱动</span></div><div class="spec"><b>${m.turn}</b><span>灵活性</span></div></div><p class="model-desc">${m.suspension} · ${m.luggage}</p><div class="model-foot"><span class="tag">${m.tag}</span><button type="button" class="compare-btn ${state.selected.has(m.id)?'selected':''}" data-compare="${m.id}">${state.selected.has(m.id)?'已加入对比':'＋ 加入对比'}</button></div></article>`).join('');}
function renderTray(){const n=state.selected.size;$('compareTray').classList.toggle('show',n>0);$('compareText').textContent=`已选${n}款${n===3?'（已达上限）':''}`;$('openCompare').disabled=n===0;}
function renderCompare(){const selected=MODELS.filter(m=>state.selected.has(m.id));$('compareBody').innerHTML=`<div class="table-shell"><table class="data-table"><thead><tr><th>维度</th>${selected.map(m=>`<th>${m.name}</th>`).join('')}</tr></thead><tbody>${[['价格',m=>m.price],['能源',m=>m.energyLabel],['CLTC',m=>m.range],['零百/驱动',m=>m.acc],['灵活性',m=>m.turn],['底盘',m=>m.suspension],['装载',m=>m.luggage],['定位',m=>m.tag],['核心描述',m=>m.desc]].map(([label,fn])=>`<tr><td>${label}</td>${selected.map(m=>`<td>${fn(m)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
$('energyFilters').addEventListener('click',e=>{const b=e.target.closest('[data-energy]');if(!b)return;state.energy=b.dataset.energy;document.querySelectorAll('[data-energy]').forEach(x=>x.classList.toggle('active',x===b));renderModels();});
$('budgetSelect').addEventListener('change',e=>{state.budget=e.target.value;renderModels();});
$('modelGrid').addEventListener('click',e=>{const b=e.target.closest('[data-compare]');if(!b)return;const id=b.dataset.compare;if(state.selected.has(id))state.selected.delete(id);else if(state.selected.size<3)state.selected.add(id);renderModels();renderTray();});
$('clearCompare').addEventListener('click',()=>{state.selected.clear();renderModels();renderTray();});
$('openCompare').addEventListener('click',()=>{if(!state.selected.size)return;renderCompare();$('compareDialog').showModal();});
$('closeCompare').addEventListener('click',()=>$('compareDialog').close());
$('compareDialog').addEventListener('click',e=>{if(e.target===$('compareDialog'))$('compareDialog').close();});
function applyTheme(theme){document.documentElement.dataset.theme=theme;$('themeBtn').textContent=theme==='dark'?'浅色':'深色';try{localStorage.setItem('n8l-theme',theme)}catch(e){}}
$('themeBtn').addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
try{applyTheme(localStorage.getItem('n8l-theme')||'light')}catch(e){applyTheme('light')}
renderModels();renderTray();
