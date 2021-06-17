# Web前端代码



## 注意

- 图标使用
  - msg对网络错误用2，其它错误用5
  - load使用1
- 由于app.js中更新了服务器地址，使用Chrome打开时需要按`Shift+F5`更新缓存
- 为了避免用户使用时读取的是缓存中的旧js，今后改动js后请修改js的文件名（加上版本号）



## TODO


- [x] **优先级高**：搜索（在前端做就行）
- [ ] 优先级中：组织审批拒绝理由
- [ ] 优先级低：登录后的欢迎页（welcome.html，本来是在index.html里的iframe处跳转，现在给注释了）

  - [ ] 暴改
- [ ] 优先级低：用户编辑时，修改成功、用户不存在时更新主页面
- [ ] 优先级低：组织审批完成后在页面更新审批状态（并且审批完的不再需要同意和拒绝按钮）
- [ ] 优先级低：同意审批后，对于该请求的响应需要重新进行处理
- [x] 优先级低：反馈详情、评论详情查看页面，把内容设成只读
- [x] 活动人数限制>=1
- [x] 起止时间格式限制（或者做选择框）
- [x] 起止时间范围限制（开始时间不早于当前时间）
- [x] 评分用layui组件写
- [x] 反馈、评论增加查看详情
- [x] 部署到域名
- [x] 活动添加和编辑页面的种类、地点的query待后端实现
- [x] 用户管理页面全选与取消全选的逻辑
- [x] 查看用户反馈时增加对选定的反馈查看详情
- [x] 课上意见：删除超级管理员注册功能



## BUG

- [x] 用户注册里，注册完成后关闭alert框时xadmin.close的调用会报错
- [x] **优先级高：**批量删除成功却提示部分xx未能删除
- [x] **优先级高：**活动编辑、创建页用鼠标点击打开的日期选择器会自动消失
  - [ ] backup：只能手动输入

- [x] **优先级高：**添加板块**确定**按钮无反应
