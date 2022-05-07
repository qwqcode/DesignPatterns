/**
 * 迭代器模式 (Iterator)
 * 
 * 「控制访问聚合对象的元素」
 */

/**
 * 迭代器接口，定义访问和遍历元素的操作
 */
interface IteratorAPI {
    /**
     * 移动到聚合对象的某一个位置
     */
    first(): void;

    /**
     * 移动到聚合对象的下一个位置
     */
    next(): void;

    /**
     * 判断是否已经移动到聚合对象的最后一个位置
     */
    isDone(): boolean;

    /**
     * 获取迭代的当前元素
     */
    currentItem(): any;
}

/**
 * 具体的迭代器实现对象，示意的是聚合对象为数组的迭代器
 * 不同的聚合对象相应的迭代器实现是不一样的
 */
class ConcreteIterator implements IteratorAPI {
    /**
     * 持有被迭代的具体的聚合对象
     */
    private aggregate: ConcreteAggregate;

    /**
     * 内部索引，记录当前迭代到的索引位置
     * -1 表示刚开始的时候，迭代器指向聚合对象第一个对象之前
     */
    private index: number = -1;

    /**
     * 构造方法，传入被迭代的具体的聚合对象
     * @param aggregate 被迭代的具体的聚合对象
     */
    public constructor(aggregate: ConcreteAggregate) {
        this.aggregate = aggregate;
    }

    public first(): void {
        this.index = 0;
    }

    public next(): void {
        if (this.index < this.aggregate.size()) {
            this.index = this.index + 1;
        }
    }

    public isDone(): boolean {
        if (this.index === this.aggregate.size()) {
            return true;
        }

        return false;
    }

    public currentItem() {
        return this.aggregate.get(this.index);
    }
}

/**
 * 聚合对象的接口，定义创建相应迭代器对象的接口
 */
abstract class Aggregate {
    /**
     * 工厂方法，创建相应迭代器对象的接口
     * @return 相应迭代器对象的接口
     */
    public abstract createIterator(): IteratorAPI;
}

/**
 * 具体的聚合对象，实现创建相应迭代器对象的功能
 */
class ConcreteAggregate extends Aggregate {
    /**
     * 示意，表示聚合对象具体的内容
     */
    private ss: string[] = null;

    /**
     * 构造方法，传入构造对象具体内容
     * @param ss 聚合对象具体的内容
     */
    public constructor(ss: string[]) {
        super();
        this.ss = ss;
    }

    public createIterator(): IteratorAPI {
        // 实现创建 Iterator 的工厂方法
        return new ConcreteIterator(this);
    }

    /**
     * 获取索引所对应的元素
     * @param index 索引
     * @return 索引对应的元素
     */
    public get(index: number): any {
        let retObj: any = null;
        if (index < this.ss.length) {
            retObj = this.ss[index];
        }
        return retObj;
    }

    /**
     * 获取聚合对象的大小
     * @return 聚合对象的大小
     */
    public size(): number {
        return this.ss.length;
    }
}

/**
 * 客户端
 */
;(() => {
    /**
     * 示意方法，使用迭代器的功能
     * 这里示意使用迭代器来迭代聚合对象
     */

    const names: string[] = ["Kevin", "Tom", "Tony"];

    // 创建聚合对象
    const aggregate = new ConcreteAggregate(names);

    // 循环输出聚合对象中的值
    const it = aggregate.createIterator();

    // 首先设置迭代器到第一个元素
    it.first();

    while(!it.isDone()) {
        // 取出当前的元素
        const obj = it.currentItem();
        console.log("the obj is " + obj);
        // 如果还没有迭代到最后，那么就向下迭代一个
        it.next();
    }
})();
