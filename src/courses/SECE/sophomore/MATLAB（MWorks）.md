---
icon: calculator 
---
# MATLAB / MWorks

::: info 课程变动提示
本课程目前可能已调整为使用国产替代软件 **MWorks** 进行教学。
不过无需担心，两者的语法和逻辑高度相似，MATLAB 的资料依然具有极高的参考价值。
:::

::: tip 学习建议
*   **适用人群**：致力于在 **雷达、通信、控制** 等仿真领域深入研究的同学是必学的。
*   **普通用户**：对于非相关方向的同学，可以把它当作一个带有强大绘图和仿真功能的高级计算器，某些方向毕业后可能完全用不到**MATLAB**。
:::

## 1. 工具定位
MATLAB 虽然在语法上是一门完备的编程语言，但受限于开发环境（闭源、体积大、启动慢），它并不适合作为像 C++/Java/Python 那样的“通用编程语言”。

**它的核心是：实用的仿真与科研工具。**
*   **核心优势**：针对矩阵运算做了极致优化，且拥有海量的专业工具箱（Toolbox）。
*   **主要场景**：适合快速实现算法，跑通一个 Idea 做验证（Rapid Prototyping）。
*   **软件获取**：[中山大学信息技术服务台](https://inc.sysu.edu.cn/) 提供了正版 MATLAB 下载（包含全套工具箱），请务必利用好学校的资源。

## 2. 核心学习经验
在这门课及后续的使用中，请注意以下几点：

1.  **多用矩阵**：
    老师会反复强调**“多用矩阵，少写循环”**。MATLAB 的底层优化使得矩阵运算比 `for` 循环快得多。但真正关键的是，写MATLAB代码需要将计算
    
2.  **文档是“神”**：
    MATLAB 的官方文档被公认为软件界的标杆。非常详细且包含大量可运行的示例。遇到不会的函数，直接看文档底部的 Examples 即可，**通常只需要记住函数名**。

3.  **文件格式选择**：
    *   **`.m`**：传统的纯代码文件。
    *   **`.mlx` (Live Script)**：**推荐**。类似 Jupyter Notebook，支持代码、公式、文字说明和运行结果（图片）混排，非常适合做笔记和作业。
    *   **App Designer**：如果需要制作带 UI 界面的演示程序，可以使用此功能。
4.  **进阶语法**
    **Lambda函数**（匿名函数） 和 **图像句柄**（直接操作图想的Handles）、逻辑索引（Logical Indexing）、元胞数组（Cell Arrays） 以及 ODE 求解都是考试常客。

5.  **行业趋势**：
    相当多的课程（通信编码、信号处理、概率仿真）依然依赖 MATLAB。但需要注意的是，目前在深度学习和数据科学领域，科研界有集体向 **Python** 迁移的趋势。建议在掌握 MATLAB 应对课程之余，多关注 Python 生态。

---

## 3. 快速上手 (Quick Ref)
如果你想要快速上手，或者速查最基础的语法，可以参考以下 Cheat Sheet：

[MATLAB速查](../../../.vuepress/public/resources/quickref.m)，内容如下：

::: details 🟢 第1部分：变量定义和基本运算 (点击展开)
```matlab
%% 基础准备
% 建议有C语言或其他编程基础，了解线性代数和矩阵相关知识
% 官方文档: https://ww2.mathworks.cn/help/matlab/

%% 1. 生成矩阵
% 直接法
a = [1,2,3; 4,5,6; 7,8,9];

% 冒号一维矩阵 a = 开始:步长:结束 (步长为1可省略)
b = 1:1:10;  % 1,2,...10
b = 1:10;    % 与上一个等价

% 函数生成
% linspace(开始,结束,元素个数)，等差生成指定元素数的一维矩阵，省略个数则生成100个
c = linspace(0,10,5);

% 特殊矩阵
e = eye(4);      % eye(维数)单位阵
z = zeros(1,4);  % zeros(维数)全零阵
o = ones(4,1);   % ones(维数)全1阵
r = rand(4);     % rand(维数)0~1分布随机阵
rn = randn(4);   % randn(维数)0均值Gaussian分布随机阵

%% 2. 矩阵运算
diag_a = diag(a,1);  % diag(行向量，主对角线上方第k条斜线)用行向量生成对角阵
tril_a = tril(a,1);  % tril(矩阵，主对角线上方第k条斜线)生成矩阵的下三角阵，triu上三角阵

% 加、减、乘、乘方
% a*a (矩阵乘法)

% 点运算 (非常重要)
% a.*b , a./b , a.\b , a.^b  对应元素的*,/,\,^运算
res_dot = a .* a;

% 线性代数
pinv(a);      % 伪逆矩阵，当a不是方阵，求广义逆矩阵；当a是可逆方阵，结果与逆矩阵相同
[v,D] = eig(a); % 输出v为特征向量，D为特征值对角阵
det(a);       % *行列式
rank(a);      % *秩
compan(b);    % *伴随

%% 3. 矩阵的修改
% 部分替换
chg_a = a;
chg_a(2,3) = 4;        % (行，列)元素替换
chg_a(1,:) = [2,2,2];  % (行,:)替换行，为[]删除该行
chg_a(:,1) = [];       % (:,列)替换列，为[]删除该列

% 转置
T_a = a';

% 指定维数拼接
c1_a = cat(1,a,a);     % 垂直拼接
c2_a = cat(2,a,a);     % 水平拼接

% *变维
rs_a = reshape(a,1,9); % 元素个数不变，矩阵变为m*n

%% 4. 信息获取
[row_a, col_a] = size(a); % [行数，列数]
len_a = length(a);        % 行列中最大的

%% 5. 多维数组
% 直接法
mul_1(:,:,1) = [1,2,3;2,3,4];
mul_1(:,:,2) = [3,4,5;4,5,6];

% *扩展法
mul_2 = [1,2,3;2,3,4];
mul_2(:,:,2) = [3,4,5;4,5,6];  % 若不赋值第一页，第一页全为0

% cat法
mul_31 = [1,2,3;2,3,4];
mul_32 = [3,4,5;4,5,6];
mul_3 = cat(3,mul_31,mul_32);  % 把a1a2按照“3”维连接

%% 6. *字符串操作
% 创建
str0 = 'hello world';            % 单引号引起
str1 = 'I''m a student';         % 字符串中单引号写两遍
str3 = ['I''m' 'a' 'student'];   % 方括号链接多字符串
str4 = strcat(str0, str1);       % strcat连接字符串函数
str5 = strvcat(str0, str1);      % strvcat连接产生多行字符串
str6 = double(str0);             % 取str0的ASCII值，也可用abs函数
str7 = char(str6);               % 把ASCII转为字符串

% 比较
strcmp(str0, str1);       % 相等为1，不等为0
strncmp(str0, str1, 3);   % 比较前3个是否相等(n)
strcmpi(str0, str1);      % 忽略大小写比较(i)
strncmpi(str0, str1, 3);  % 忽略大小写比较前3个是否相等

% 查找替换
strfind(str0, str1);      % 在str0找到str1的位置
strmatch(str1, str0);     % 在str0字符串数组中找到str1开头的行数
strtok(str0);             % 截取str0第一个分隔符（空格，tab，回车）前的部分
strrep(str0, str1, str2); % 在str0中用str2替换str1

% 其他
upper(str0);              % 转大写，lower转小写
strjust(str0, 'right');   % 将str0右对齐，left左对齐，center中间对齐
strtrim(str0);            % 删除str0开头结尾空格
eval(str0);               % 将str0作为代码执行

%% 7. 转换
% ___2___  -->  如num2str，将数字转字符串； dec2hex，将十进制转十六进制
str_b = num2str(b);
% abs，double取ASCII码；char把ASCII转字符串
abs_str = abs('aAaA');
```

:::

::: details 🟠 第2部分：程序结构 (点击展开)
```matlab
%% 变量准备
a = 5;
x = [1, 2]; y =[3, 4];

%% 1. 选择结构
% if-elseif-else-end
if a > 0
    disp(x);
elseif a == 0
    disp(a);
else
    disp(a-1);
end

% switch-case-otherwise-end
switch a
    case 0
        disp(a);
    case 1
        disp(a+1);
    otherwise
        disp('aaa');
end

% try-catch
try
    z = x*y;   % 维度不匹配可能出错
catch
    z = x.*y;  % 若try出错，则执行
end
disp(z);

%% 2. 循环结构
% for 循环变量=初值:步长:终值 - end
for i = 0:1:10  % 步长为负，则初值大于终值
    disp(i);    % 循环体内不可对循环变量做修改
end

% while-end
while a > 2
    disp(a);
    a = a - 1;
end

%% 3. 程序控制
% continue 跳过当次循环剩下语句，进入下一循环
% break 跳出当前循环
% return 跳出程序并返回

%% 4. m文件类型
% 脚本文件：没有输入输出参数，执行后变量结果返回工作空间，可直接运行
% 假设文件名为 exp.m
% **********************************************
    % clear
    % r = 5;
    % s = pi*r*r;
    % p = 2*pi*r;
    % disp(s)
    % disp(p)
% **********************************************
% 调用方式：直接输入 exp

% 函数文件：以function开头，有输入输出，变量为局部变量
% **********************************************
    function [s, p] = circ(r)  % 文件命名应与函数名一致，系统找文件名circ.m
    %CIRC 计算圆面积和周长  % 简单说明
    %参数：输入参数r:圆半径；输出参数s:圆面积，p:周长  % 详细说明
        s = pi*r*r;
        p = 2*pi*r;
    end
% **********************************************
% 调用方式：[a, b] = circ(5);

% 带子函数的函数文件
% **********************************************
function y = key(w)  % 主函数放第一个，函数名为key
    if w==0
        y = type0(w);  % 调用子函数type0
    else
        y = type1(w);
    end
end
function y0 = type0(a)  % 子函数，各子函数之间顺序无所谓
    y0 = a+1;
end
function y1 = type1(a)
    y1 = a+4;
end
% **********************************************

% 不定参数输入输出
% nargin：输入参数个数，nargout：输出参数个数
% varargin：输入参数内容的元胞数组，varargout：输出参数
% **********************************************
function varargout = idk(varargin)
    x = length(varargin);
    varargout{1} = x;
    varargout{2} = x+1;
end
% **********************************************
```
:::
::: details 🔵 第3部分：图像绘制 (点击展开)
```matlab
%% 数据准备
x = 0:0.1:2*pi;
y1 = sin(x);
y2 = cos(x);

%% 1. 二维曲线绘制
% 基本函数 plot(y)
% y为向量
plot(y1);  % 纵坐标为y的值；横坐标自动为元素序号(角标+1)

% y为矩阵
figure;    % 开启新绘图窗口
y = [y1', y2'];
plot(y);   % 当y为矩阵，按每一列画出曲线，颜色自动区分

% plot(x, y)
plot(x, y1);  % 先绘制曲线

% plot(x1, y1, x2, y2...)
plot(x, y1, x, y2);  % 在同一个窗口同一坐标轴绘制多条曲线

%% 2. 线性图形格式设置
% 线形颜色数据点
plot(x, y1, 'b:o');  % 蓝色 点线 圆圈
% 颜色: b蓝 g绿 r红 c青 m紫 y黄 k黑 w白
% 线型: -实线 :点线 --虚线 -.点画线
% 标记: .实点 o圆圈 x叉 +十字 *星号 s方块 d钻石 v下三角 ^上三角 <左三角 >右三角 p五角星 h六角星

% 坐标轴
plot(x, y1);
axis([-1*pi, 3*pi, -1.5, 1.5]);  % 规定横纵坐标范围

%% 3. 图形修饰
title('a title');      % 图像标题
xlabel('this is x');   % x轴标记，同理还有ylabel，zlabel

% 图例设置
legend('hahaha', 'location', 'best');  % str的顺序与绘图顺序一致; 'best'指图例位置最佳化

% 图形保持
plot(x, y1);
hold on;    % 在原有窗口y1曲线上增加绘制下一个图形
plot(x, y2);
hold off;

% 分割绘制 (Subplot)
subplot(2, 2, 1);  % 分割成2x2区域，在第一块区域绘制下一个图形
plot(x, y1);
subplot(2, 2, 2);  % 分割方法相同，区域改变
plot(x, y2);

%% 4. *二维特殊图形绘制
% 柱状图
bar(x, y, width, 'grouped');  % width宽度默认0.8; grouped分组式，stacked堆栈式
% bar垂直柱状图, barh水平柱状图, bar3三维柱状图

% 饼形图
pie(x, explode, 'lable'); % explode为1表示该元素被分离突出显示

% 直方图
hist(y, n);  % y为向量，把横坐标分为n段绘制

% 离散数据图
stairs(x, y, 'b-o');     % 阶梯图
stem(x, y, 'fill');      % 火柴杆图，参数fill是填充火柴杆
candle(HI, LO, CL, OP);  % 蜡烛图 (金融常用)

% 向量图
compass(u, v, 'b-o');    % 罗盘图
feather(u, v, 'b-o');    % 羽毛图
quiver(x, y, u, v);      % 向量场图

% 极坐标图
theta = -pi:0.01:pi;
rho = sin(theta);
polar(theta, rho, 'b');

% 对数坐标图
semilogx(x1, y1, 'b-o'); % x轴对数刻度 (还有 semilogy, loglog)

% 双纵坐标 (注：新版MATLAB推荐用 yyaxis)
plotyy(x1, y1, x2, y2, 'plot', 'stem');

% 函数绘图
f = 'sin(2*x)';
ezplot(f, [0, 2*pi]);    % 绘制符号函数f

%% 5. 三维曲线曲面绘制
% 三维曲线
x = 0:0.1:2*pi;
y = sin(x); z = cos(x);
plot3(x, y, z, 'b-*');

% 三维曲面
x = -5:0.1:5;
y = -4:0.1:4;
[X, Y] = meshgrid(x, y);  % 得到了xoy面网格点
Z = X.^2 + Y.^2;

mesh(X, Y, Z);  % 网格图
surf(X, Y, Z);  % 表面图 (带填充色)
```
:::
::: details 🟣 第4部分：多项式与数据分析 (点击展开)
```
%% 1. 多项式
% 创建
p = [1, 2, 3, 4];       % 系数向量，按x降幂排列，最右边是常数
f1 = poly2str(p, 'x');  % 生成好看的字符串
f2 = poly2sym(p);       % 生成可用的符号函数

% 求值
x = 4;
y1 = polyval(p, x);     % 代入求值

% 求根
r = roots(p);           % 由系数求根
p0 = poly(r);           % 由根求系数

%% 2. 数据插值
% 一维插值 yi = interp1(X, Y, xi, 'method')
X = [-3, -1, 0, 1, 3];
Y = [9, 1, 0, 1, 9];    % XY为已知点
y2 = interp1(X, Y, 2);  % 线性插值
y2m = interp1(X, Y, 2, 'spline');  % 三次样条插值

%% 3. 数据统计
X = [2, 3, 9, 15, 6, 7, 4];
A = [1, 7, 2; 9, 5, 3; 8, 4 ,6];

% 矩阵最大最小值
y = max(X);
[y, k] = max(X);         % y为值，k为角标
[y, k] = max(A, [], 2);  % '2'时返回每行最大值；'1'为每列

% 均值和中值
y = mean(X);       % 均值
y = median(X);     % 中值
y = mean(A, 2);    % 按行求均值

% 排序
Y = sort(A, 1, 'ascend');       % 1按列排序，2按行；ascend升序
[Y, I] = sort(A, 1, 'ascend');  % I保留了元素之前的位置

% 累积运算
y = sum(X);        % 求和
y = prod(X);       % 求积
y = cumsum(X);     % 累加
y = cumprod(X);    % 累乘

%% 4. *数值计算
% 最(极)值：多元函数在给定初值附近找最小值点
x = fminsearch(fun, x0);

% 函数零点：在给定初值x0附近找零点
x = fzero(fun, x0);
```
:::
::: details 🟤 第5部分：符号函数 (Symbolic Math) (点击展开)
```
%% 1. 符号对象创建
% sym函数
p = sin(pi/3);
P = sym(p, 'r');  % 用数值p创建符号常量；'d'浮点 'r'有理数

% syms函数
syms x;           % 声明符号变量
f = 7*x^2 + 2*x + 9;

% 符号运算
% 常规加减乘除外，还有：
% conj复数共轭；real实部；imag虚部；abs模；angle幅角
% diag, triu, tril, inv, det, rank, poly, eig, svd 等矩阵运算均支持符号

% 精度转换
digits(16);          % 设定计算精度为16位
a16 = vpa(sqrt(2));  % 按照规定精度执行
a8 = vpa(sqrt(2), 8);

%% 2. 符号多项式运算
% 展开与整理
g = expand(f);       % 展开
h = collect(g);      % 整理(默认按x)
h1 = collect(f, x);  % 按x降幂整理

% 因式分解
fac = factor(h);

% 符号多项式求根
syms a b c;
n = [a, b, c];
roots(n);            % 求 ax^2+bx+c 的根

% *反函数
fi = finverse(f, x);

%% 3. 符号微积分
% 极限
limit(f, x, 4);          % x->4
limit(f, x, 4, 'right'); % 右极限 x->4+

% 级数求和
symsum(s, x, 3, 5);      % 变量x从3到5求和

% 泰勒展开
taylor(f, x, 4);         % 在x=4处展开

% 符号微分
diff(f, x);      % f对x的1阶导
diff(f, x, n);   % f对x的n阶导
diff(f, x, y);   % 多元偏导：先x后y

% 符号积分
int(f, x);       % 不定积分
int(f, x, 1, 2); % 定积分 [1, 2]

%% 4. *符号方程求解
% 代数方程
eqn1 = a*x == b;
S = solve(eqn1);             % 返回解

% 方程组
eqn21 = x - y == a;
eqn22 = 2*x + y == b;
[Sx, Sy] = solve(eqn21, eqn22, x, y);

% 非线性 fsolve (数值解)
X = fsolve(fun, X0, optimset('Display','off'));
```
:::
