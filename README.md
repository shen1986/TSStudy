# TypeScript 基础学习
- 最新一直在学习TypeScript, 想学习的朋友可以看看这篇基础的教学，另外借鉴别人的代码，利用TypeScript模仿一个Axios（不包括NodeJs中的使用）。主要目的是为了学习TypeScript在实际项目中的运用。因为步骤很详细，有兴趣的朋友，可以一起写写看。最后如果觉得不错，请点 `Star`。
- TypeScript的基础也可以到[官网](https://www.tslang.cn/)去查看，我这里只是简单的列举一些重要的知识点。

## 初识TypeScript
- [Introduction](/docs/chapter1/README.md)
- [安装TypeScript](/docs/chapter1/install.md)
- [编写第一个TypeScript程序](/docs/chapter1/start.md)

## TypeScript常用语法
- [基础类型](/docs/chapter2/type.md)
- [变量声明](/docs/chapter2/declare.md)
- [接口](/docs/chapter2/interface.md)
- [类](/docs/chapter2/class.md)
- [函数](/docs/chapter2/function.md)
- [泛型](/docs/chapter2/generic.md)
- [类型推断](/docs/chapter2/inference.md)
- [高级类型](/docs/chapter2/advance.md)

## ts-axios项目初始化
- [需求分析](/docs/chapter3/require.md)
- [初始化项目](/docs/chapter3/init.md)
- [编写基础请求代码](/docs/chapter3/base.md)

## ts-axios基础功能实现
- [处理请求url参数](/docs/chapter4/url.md)
- [处理请求body数据](/docs/chapter4/data.md)
- [处理请求header](/docs/chapter4/header.md)
- [获取响应数据](/docs/chapter4/response.md)
- [处理响应header](/docs/chapter4/response-header.md)
- [处理响应data](/docs/chapter4/response-data.md)

## ts-axios 异常情况处理
- [错误处理](/docs/chapter5/error.md)
- [错误信息增强](/docs/chapter5/enhance.md)

## ts-axios 接口扩展
- [扩展接口](/docs/chapter6/extend.md)
- [函数重载](/docs/chapter6/overload.md)
- [响应数据支持泛型](/docs/chapter6/generic.md)

## ts-axios 拦截器实现
- [拦截器设计与实现](/docs/chapter7/interceptor.md)

## ts-axios 配置化实现
- [合并配置的设计与实现](/docs/chapter8/merge.md)
- [请求和响应配置化](/docs/chapter8/transform.md)
- [扩展axios.create静态接口](/docs/chapter8/create.md)

## ts-axios 取消功能实现
- [取消功能的设计与实现](/docs/chapter9/cancel.md)

## ts-axios 更多功能实现
- [withCredentials](/docs/chapter10/withCredentials.md)
- [XSRF防御](/docs/chapter10/xsrf.md)
- [上传和下载的进度监控](/docs/chapter10/upload-download.md)
- [HTTP授权](/docs/chapter10/auth.md)
- [自定义合法状态码](/docs/chapter10/validateStatus.md)
- [自定义参数序列化](/docs/chapter10/paramsSerializer.md)
- [baseURL](/docs/chapter10/baseURL.md)
- [静态方法扩展](/docs/chapter10/static.md)

## ts-axios 单元测试
- [前言](/docs/chapter11/preface.md)
- [Jest 安装和配置](/docs/chapter11/jest.md)
- [辅助模块单元测试](/docs/chapter11/helpers.md)
- [请求模块单元测试](/docs/chapter11/requests.md)
- [headers 模块单元测试](/docs/chapter11/headers.md)
- [Axios 实例模块单元测试](/docs/chapter11/instance.md)
- [拦截器模块单元测试](/docs/chapter11/interceptor.md)
- [mergeConfig 模块单元测试](/docs/chapter11/mergeConfig.md)
- [请求取消模块单元测试](/docs/chapter11/cancel.md)
- [剩余模块单元测试](/docs/chapter11/more.md)

## ts-axios 部署与发布
- [ts-axios 编译与发布](/docs/chapter12/build-deploy.md)
- [引用 ts-axios 库](/docs/chapter12/demo.md)