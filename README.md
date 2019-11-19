# ATA

## Accounting-web
1. 安装create-react-app
~~~
npm install -g create-react-app
create-react-app accounting-web
cd accounting-web
# 解包配置
yarn eject
~~~
2. 安装raact-router、mobx、antd
~~~
yarn add react-router react-router-dom
yarn add mobx
yarn add antd
~~~
3.配置按需加载和装饰器
~~~
yarn add @babel/plugin-proposal-decorators
修改package.json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  },
~~~


参考
https://github.com/WinmezzZ/react-admin.git