# 3D_test
### 主要就是一些3D库(webgl)的测试demo以及其他

## react

#####   1.react双向数据绑定,基于监听器和事件实现,目前存在小bug

## three.js
    three的demo,需要加载example文件夹下的一些工具(主要是loader),但是这些文件没有进行模块化处理,是没有挂载在THREE这个对象下面的,所以需要对源码的这部分进行模块化处理
##### 1.根目录下的three文件夹替换node_modules下的three文件夹,用来解决上述问题
##### 2.自制基于shader的飞线
![avatar](/public/image/WechatIMG55.png)
##### 3.法向贴图作为纹理还原光照效果(ing)
##### 4.镜头拉伸效果,贝塞尔曲线作为镜头切换的路径
##### 5.天空盒子、模型描边
![avatar](/public/image/WechatIMG56.png)

##### 6.后期效果之扫光
![avatar](/public/image/WechatIMG57.png)



## cesium.js

##### 1.cesium添加自定义shader,结合法向贴图实现水面
![avatar](/public/image/WechatIMG58.png)

##### 2.cesium与react框架整合

