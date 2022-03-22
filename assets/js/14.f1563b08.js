(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{495:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"开发流程总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发流程总结"}},[a._v("#")]),a._v(" 开发流程总结")]),a._v(" "),t("h2",{attrs:{id:"确定需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定需求"}},[a._v("#")]),a._v(" 确定需求")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("确定需求能不能实现，大概需要多少时间，\n")])])]),t("h2",{attrs:{id:"划分任务粒度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#划分任务粒度"}},[a._v("#")]),a._v(" 划分任务粒度")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("跟任务相关的同事沟通，划分任务粒度，自己计划任务实现时间。\n")])])]),t("h2",{attrs:{id:"commit规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit规范"}},[a._v("#")]),a._v(" commit规范")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('以上一个流程的任务粒度为基准依次实现一个小task，每个task在commit的时候，根据规范提交代码例如:\n"new: xxx" 表示新的功能\n"fix: xxx" 表示修复bug\n"des: xxx" 表示文档的修改\n')])])]),t("h2",{attrs:{id:"代码合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码合并"}},[a._v("#")]),a._v(" 代码合并")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("在自己工作的分支合并主分支之前，一定要先merge主分支.  \n然后在上一步的小人物合成一个稍微大一点的更新或者完整的功能的时候， 合并到测试服务器.  \n合并到测试服务器的时候，需要至少一个团队其他成员去做代码review.  \n这个通过gitlab啊网站的功能实现，并且可以配合任务管理的系统优化此流程.  \n代码合并之后如果有自动化部署可以配置自动化部署让服务器自动更新，优化流程。\n自动化部署可以使用 husky `npm install husky --save-de` 然后在package.json 里面配置\n")])])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('    "husky": {\n        "hooks": {\n        "pre-push": "bash deploy.sh"\n        }\n    }\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);