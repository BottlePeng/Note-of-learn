# Windows 右键菜单添加 cmd 窗口以及自定义菜单的方法

## 操作方法

<hr>

### 1.Windows 的右键菜单主要是通过【注册表（regedit）】控制，所以首先要打开【注册表编辑器】。

- 在键盘上按【Win+R】打开【运行】窗口

- 在【打开(<ins>O</ins>):】的输入框中输入：regedit

- 点击【确定】或【按回车键】打开【注册表编辑器】

<div align=center>
    <img src="./Image/从【运行】启动注册表编辑器.png">
    <p>从【运行】启动注册表编辑器</p>
</div>

<div align=center>
    <img src="./Image/注册表编辑器.png">
    <p>注册表编辑器</p>
</div>

<hr>

### 2.找到控制右键菜单的文件夹

在注册表中有 4 个路径负责控制右键菜单，4 个路径分别对应 4 个场景：

> // 右键单击桌面背景：  
> HKEY_CLASSES_ROOT\DesktopBackground\Shell

> // 右键单击文件：  
> HKEY_CLASSES_ROOT\*\shell

> // 右键单击文件夹：  
> HKEY_CLASSES_ROOT\Directory\shell

> // 右键单击文件夹背景：(在文件资源管理器中右键单击文件夹背景空白区域)  
> HKEY_CLASSES_ROOT\Directory\Background\shell

这里要在文件夹背景右键菜单中添加,所以我们在【地址栏】中输入:

> HKEY_CLASSES_ROOT\Directory\Background\shell

或依次点击【HKEY_CLASSES_ROOT】->【 Directory】->【Background】->【shell】

找到【shell】文件夹

<div align=center>
    <img src="./Image/找到shell文件夹.png">
    <p>找到shell文件夹</p>
</div>

<hr>

### 3.创建右键菜单选项

右键【shell】文件夹，选择【新建】，选择【项】，会创建一个文件夹,将其命名为"OpenCMD"(这个名称可以随便取)。

<div align=center>
    <img src="./Image/shell下新建项.png">
    <br>
    <img src="./Image/新建OpenCMD文件夹.png">"
    <p>shell下新建OpenCMD文件夹</p>
</div>

使用相同操作在【OpenCMD】下面再新建一个项命名为【command】（必须是 command，但不区分大小写）的文件夹。

<div align=center>
    <img src="./Image/新建command文件夹.png">
    <p>OpenCMD下新建OpenCMD文件夹</p>
</div>

此时右键任意文件夹背景就可以看到【OpenCMD】选项了。

<div align=center>
    <img src="./Image/1.png">
</div>

<hr>

### 4.修改右键菜单选项名称以及添加默认图标

> 注册表编辑器左侧为目录树,右侧为属性清单

点击【OpenCMD】，在右侧属性清单中右键【默认】，点击【修改】，在弹出的【编辑字符串】窗口的【数值数据】中填写 “在此处打开命令窗口” (可随意填写)。

<div align=center>
    <img src="./Image/2.png">
    <img src="./Image/修改默认名称.png">
    <p>修改右键菜单选项名称</p>
</div>

右键属性清单空白处,点击【新建】，点击【字符串值】，并重命名为“Icon”，将其数据值改为“cmd.exe”，点击确定。

<div align=center>
    <img src="./Image/3.png">
    <img src="./Image/添加图标.png">
    <p>修改右键菜单选项名称以及图标</p>
</div>

此时右键任意文件夹背景就可以看到带有图标的【在此处打开命令窗口】选项了。

<div align=center>
    <img src="./Image/4.png">
</div>

<hr>

### 5.将选项与命令窗口关联

点击【OpenCMD】文件夹下的【command】文件夹，使用与上一步相同的操作，将属性清单中的【默认】的【数值数据】修改为 【cmd.exe】即可。

<hr>

## 结果演示

<div align=center>
    <img src="./Image/演示.gif">
</div>

<hr>

## 多级右键菜单的创建

按照上面创建右键选项的方式在【shell】下创建出【主菜单】（名称随意）文件夹。

1. 要创建多级菜单，则【主菜单】的显示名称不能使用修改【默认】的【数值数据】的方式，具体操作如下

   - 在【主菜单】的属性清单中创建【字符串值(S)】；
   - 设置属性名称为【MUIVerb】；
   - 修改【MUIVerb】的【数值数据(V)】的值，这个值就是菜单展示的名称。

   <div align=center>
       <img src="./Image/5.png">
   </div>

2. 创建子菜单

   - 在【主菜单】的属性中添加一个名为【SubCommands】的【字符串值(S)】；
   - 在【我的菜单】的项的下级创建一个名为【shell】的项，其他的项都删掉，只保留这一个。
   - 在这个【shell】文件夹下按照上面创建选项的方法创建选项即可。

   <div align=center>
       <img src="./Image/6.png">
   </div>

如果要添加多级菜单，也可以按照相同方法向下嵌套。

<div align=center>
    <img src="./Image/7.png">
</div>

### 演示

<div align=center>
    <img src="./Image/演示2.gif">
</div>
