将APP中的代码，用babel转为es5 放入server中
关于目录结构： 

tasks ---  存放所有构建任务

server --- node express相关

app ----前端静态资源文件


tasks/util/args   ----解析命令行参数  比如命令行中输入 gulp.production 
tasks/scripts.js  ---- 处理js任务
tasks/pages.js    -----处理 ejs模板任务
tasks/css.js     ------ 处理 css
tasks/browser.js  ---- 监听 js ejs css刷新浏览器
tasks/clean.js   ----
tasks/build.js    ---- 按关联顺序运行任务
tasks/default.js    ---- 命令输入gulp 后边什么都不写 默认会执行的任务


运行 gulp --watch

loacalhost:3000
 
