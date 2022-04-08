/**
 * 原型模式 (Prototype)
 * 
 * 「克隆生成对象」
 */

/**
 * 声明一个克隆自身的接口
 */
interface Prototype {
    /**
     * 克隆自身的方法
     * @return 一个从自身克隆出来的对象
     */
    clone(): Prototype;
}

/**
 * 克隆的具体实现对象
 */
class ConcretePrototype1 implements Prototype {
    public clone(): Prototype {
        // 最简单的克隆，新建一个自生对象，由于没有属性，就不再复制了
        let prototype: ConcretePrototype1 = new ConcretePrototype1();
        return prototype;
    }
}

/**
 * 克隆的具体实现对象
 */
class ConcretePrototype2 implements Prototype {
    private value1: string;

    public getValue1(): string {
        return this.value1;
    }

    public setValue1(val: string): void {
        this.value1 = val;
    }

    public clone(): Prototype {
        // 最简单的克隆，新建一个自身对象
        let prototype: ConcretePrototype2 = new ConcretePrototype2();
        // 复制属性
        prototype.setValue1(this.value1);
        return prototype;
    }
}

let prototype1 = new ConcretePrototype1()
let prototype2 = new ConcretePrototype2()

/**
 * 客户端
 * 
 * @param prototype 需要克隆的原型
 */
;((prototype: Prototype) => {
    // 克隆原型
    let newPrototype: Prototype = prototype.clone();
})(prototype2);
