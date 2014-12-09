Cut
===

Cut scenes

在HTML中定义场景，用CSS定义场景，通过JS控制。

PROJECT 目录结构:
-----------------
```
(project name)/app/
    index.html
    (project name).css
    img/
        图片音乐等静态资源
```

index.html标注
```
    <!-- build:css main.css -->
    <link href="../../../lib/normalize/normalize.css" rel="stylesheet" />
    <link href="../../../lib/animate/animate.css" rel="stylesheet" />
    <link href="../../../dist/css/cut.css" rel="stylesheet" />
    <link href="./memory.css" rel="stylesheet" />
    <!-- endbuild -->

    <!-- build:js main.js -->
    <script src="../../../lib/zepto/zepto.js"></script>
    <script src="../../../lib/zepto/data.js"></script>
    <script src="../../../lib/zepto/touch.js"></script>
    <script src="../../../src/js/support.js"></script>
    <script src="../../../src/js/cut.js"></script>
    <!-- endbuild -->
```


BUILD PROJECT:
--------------


// 对项目进行编译优化，分别生成iOS和Android对应的资源文件

builddemo:(project name)


// 清理项目中的冗余文件

cleardemo:(project name)


// 手动修改生成的HTML文件头部，使iOS和Android加载对应的资源文件
```
    <script>
    (function (ua) {
        if (/Linux|Android/.test(ua)) {
            document.write('<link rel="stylesheet" href="main.android.***.css">');
        } else {
            document.write('<link rel="stylesheet" href="main.***.css">');
        }
    }(navigator.userAgent));
    </script>
```
