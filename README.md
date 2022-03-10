# 设计模式

[《研磨设计模式》](https://book.douban.com/subject/5343318/) 阅读笔记

## 学习进度

[得分/10] 敲代码+1 理论阅读+1 理论评价(大概理解)+2 项目实践+1 自我感觉良好+5

1. [4] [简单工厂](./1_简单工厂.md)
2. [4] [外观模式 (Facade)](./2_外观模式.md)
3. [4] [适配器模式 (Adapter)](./3_适配器模式.md)
4. [ ] [单例模式 (Singleton)](./4_单例模式.md)
5. [ ] 工厂方法模式 (Factory Method)
6. [ ] 抽象工厂模式 (Abstract Factory)
7. [ ] 生成器模式 (Builder)
8. [ ] 原型模式 (Prototype)
9. [ ] 中介者模式 (Mediator)
10. [ ] 代理模式 (Proxy)
11. [ ] 观察者模式 (Observer)
12. [ ] 命令模式 (Command)
13. [ ] 迭代器模式 (Iterator)
14. [ ] 组合模式 (Composite)
15. [ ] 模版方法模式 (Template Method)
16. [ ] 策略模式 (Strategy)
17. [ ] 状态模式 (State)
18. [ ] 备忘录模式 (Memento)
19. [ ] 享元模式 (Flyweight)
20. [ ] 解释器模式 (Interpreter)
21. [ ] 装饰模式 (Decorator)
22. [ ] 职责链模式 (Chian of Responsibility)
23. [ ] 桥接模式 (Bridge)
24. [ ] 访问者模式 (Visitor)

## 设计模式是什么？

设计模式是指在软件开发中，经过验证的，用于解决在特定环境下、重复出现的、特定问题的解决方案。

简而言之：设计方面的模版、设计的方式方法。

- 设计模式是**解决方案**，解决问题的办法
- 解决方案不一定是设计模式，设计模式前有一些定语
    - 特定问题的：解决**特定问题**的解决方案才是设计模式
        - 设计模式不是**灵丹妙药**
        - 并不能解决所有问题，只能解决特定问题
    - 特定情况的：在**特定情况**选择合适的**设计模式**
        - 不要滥用，不要迷信
        - 设计模式是**待定问题**的解决方案
    - 重复出现的：设计模式是**重复出现**的解决方案
        - 前人总结的好办法
    - 特定环境的：设计模式是在**特定环境**下的解决方案
        - 不能脱离环境去讨论对问题的解决办法
        - 不同环境下但相同问题，解决方案不相同
    - 经过验证的：设计模式是**经过验证**的解决方案
        - 只有**经过验证**的解决方案才算得上设计模式
    - 软件开发中的：仅讨论在软件开发方面的设计模式
        - 事实上，很多行业也有自己的设计模式

总结：设计模式是在**特定问题**、**特定情况**和**特定环境**下**经过验证**的解决方案（模版）。

## 设计模式的一些理解

- 设计模式不是凭空想出来的，是经验的积累和总结
- 设计模式是相对优秀的，没有最优，只有更优（对于特定问题）
- 设计模式一直在发展，需要讨论学习经典设计模式
- 我们自己也能总结解决方案，如果得到了大家的认可和验证，也有可能成为公认的设计模式
- 设计模式不是软件行业独有，各行各业都有设计模式（例如药品监管）

## 学习设计模式

理解掌握设计模式重心在于：

1. 对这些方法的理解和掌握
2. 然后进一步深化到这些方法所体现的思想上
3. 将设计模式所体现的思考方式进行吸收和消化
4. 融入到自己的思维中

### 学设计模式有何用处？

1. 设计模式成为软件开发人员的 "标准词汇"（交流所需）
    - 交流中像汉语成语一样使用
    - 说设计模式的名称知道思想
    - 一个合格的软件开发人员，必须掌握设计模式这个标准词汇
2. 学习设计模式是个人技术提高的途径
    - 站在巨人的肩膀上：前人积累的经验
    - 吸收领会前人的设计思想
    - 掌握前人解决问题的方法
    - 让自己技术提升
3. 不重复发明轮子
    - 设计模式对于特定问题能很好的解决，面对这些问题能快速解决
    - 节约大量研究时间，把时间花在其他问题上

### 学习设计模式的层次

1. 基本入门级
    - 正确理解和掌握设计模式的基本知识
    - 能够识别在什么场景下、出现了什么问题、采用何种方案来解决它
    - 能够在实际程序设计和开发中套用相应的设计模式
2. 基本掌握级
    - 具备基本的要求外，还能结合实际应用场景，对设计模式变形使用
    - 很多场景不一样的情况，适当变形，而不是僵硬套用
    - 进行变形前提是要能准确深入地理解和把握设计模式的本质
    - 万变不离其宗，只有把握本质，才能确保正确变形而不是误用
3. 深入理解和掌握级
    - 除了具备基本掌握级别外，更主要的是：
        - 从思想和方法上吸收设计模式的精髓，并融入到自己的思路中
        - 在进行软件的分析和设计的时候，能随意地、自然而然地应用，就如同自己思维的一部分
        - 深入考虑：除了设计模式外，考虑系统整体地结构、实际功能的实现、与已有功能的结合。在应用设计模式时，不拘泥于设计模式本身，而是从思想和方法层面进行应用

简而言之，基本入门套用使用，基本掌握灵活运用、适当变形，深入理解掌握才算真正将设计模式精髓吸收，从思想和方法层面去理解和掌握设计模式，就犹如练习武功到达最高境界，“无招胜有招”。要想达到这个境界，需要足够的开发经验和设计经验，没有足够深入的思考不太可能达到。

设计模式觉得懂了，实际运用还是不会。认为设计模式是 "看上去很美" 的 "花拳绣腿"，其实他们正处于 "设计模式的了解级别"，根本没有入门。

### 如何学习设计模式？

- 心态：不要指望设计模式简单有趣，一看就懂（一看就懂属于科普性质的书）
- 思考：看了过后思考，应用，再看，再思考，循环反复
- 理论指导实践，实践反过来加深对理论的理解
- 反复思考，反复实践

学习步骤：

- 第一步：准确理解设计模式功能、基本结构、标准实现，了解适合它的场景及使用效果
- 第二步：实际开发中，尝试使用这些设计模式，并反复思考和总结是否使用得当，是否需要做一些变化
- 第三步：回头看设计模式的理论，有了实践再回头看会有不同感悟，一边看一边根据实践经验思考：设计模式的本质功能是什么？如何实现的？这些实现方式还可以在什么地方应用？如何才能把这个设计模式和具体应用结合起来？设计模式的出发点是什么？
- 第四步：重复二三步。实践后再思考，循环反复，直到达到设计模式基本掌握水平

实际上，最后达到高度因人而异，需要看个人思维水平和理解水平。

建议是：反复地、深入地思考，别无他法。到了思想层面，就得靠 "悟" 了。

就我个人而言，为什么要学习设计模式？因为在项目实践过程中，很多代码的写法 (组织方式) 很好，我逐渐意识到这些方式方法就是我需要学习的「设计模式」