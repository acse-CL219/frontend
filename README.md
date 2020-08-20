## 學生綜合素質可視化系統（前端）

 學生綜合素質數據可視化系統,後端使用Python web 框架 Flask實現

實現流程:
(前端)
- 分析原始數據,列出所需的圖表,需要什麼圖
- 使用測試數據畫圖表，定義圖表需要的數據的json格式

(後端)
- 建立數據庫表
- 根據前端需要的數據的json格式，查詢數據數據返回對應數據
(最後)
前端請求後端數據，圖表顯示後端的數據


## 前端技術棧

1. Vue CLI
快速搭建基於webpack的vue開發環境
https://cli.vuejs.org/zh/
2. Vue.js
前端js框架，https://cn.vuejs.org/
3. VueRouter
vue官方支持的路由管理，用來實現頁面跳轉，參數傳遞
https://router.vuejs.org/zh/
4. Element-UI
前端UI框架，基於Vue 2.0的桌面端組件庫
https://element.eleme.cn/2.0/#/zh-CN/guide/design
5. vue-echarts
基於EChart封裝的Vue組件,在Vue裡使用起來很方便
https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md
6. Axios
基於Promise的HTTP庫，用來發送ajax請求和後台交互,支持請求和響應攔截
http://www.axios-js.com/docs/
https://www.jb51.net/article/145341.htm
7. EventBus
頂部導航組件和學院，班級等組件訂閱事件和發布事件,
https://www.w3cplus.com/vue/managing-state-in-vue-js.html?utm_source=tuicool&utm_medium=referral

## 實現功能

- 登錄註冊
- 上傳數據
- 可視化圖表界面(學院，班級，個人)


## 安裝使用
- IDE (推薦VSCode)
- 安裝Node.js環境
- npm 設置源為淘寶源(加快下載依賴速度)

### webstorm 插件安裝
- Vetur
.vue文件代碼高亮
- REST Client(可選)
http api測試
- Debugger for Chrome(可選)
chrome裡調試vue項目


### 修改配置
- 修改代理服務器
打開vue.config.js,修改proxy下面的target字段為後端服務器的地址


### 運行項目

在工程根目錄運行下面的命令

- 安裝依賴
```
npm install
運行調試
npm run serve
```
- 打包項目
```
npm run build
```


## 工程結構

### 目錄樹

```
📦src
 ┣ 📂api api封裝和每個頁面測試數據
 ┃ ┣ 📜api.js
 ┃ ┣ 📜dataApi.js
 ┃ ┣ 📜http.js
 ┃ ┣ 📜navdata.js
 ┃ ┣ 📜testclassdata.js
 ┃ ┣ 📜testdata.js
 ┃ ┗ 📜teststudent.js
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂components 組件
 ┃ ┗ 📜Logo.vue 首頁導航組件
 ┣ 📂images
 ┣ 📂utils
 ┃ ┗ 📜tools.js 工具類
 ┣ 📂views-------------------子視圖
 ┃ ┣ 📜Class.vue------------班級界面路由
 ┃ ┣ 📜College.vue----------學院界面路由
 ┃ ┣ 📜Data.vue-------------數據管理界面
 ┃ ┣ 📜Login.vue------------登錄界面
 ┃ ┣ 📜Register.vue---------註冊界面
 ┃ ┗ 📜Student.vue----------學生個人界面
 ┣ 📜App.vue-----------------首頁
 ┣ 📜event-bus.js------------event-bus封裝
 ┣ 📜main.js-----------------入口
 ┣ 📜router.js---------------路由配置
 ┗ 📜store.js----------------全局存儲

``
