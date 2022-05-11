/**
 * 桥接模式 (Bridge)
 */

/**
 * 定义实现部分的接口，可以与抽象部分的方法不一样
 */
interface Implementor {
    /**
     * 示例方法，实现抽象部分需要的某些具体功能
     */
    operationImpl(): void;
}

/**
 * 定义抽象部分的接口
 */
abstract class Abstraction {
    /**
     * 持有一个实现部分的接口
     */
    protected impl: Implementor;

    /**
     * 构造方法，传入实现部分的对象
     * @param impl 实现部分的对象
     */
    public constructor(impl: Implementor) {
        this.impl = impl;
    }

    /**
     * 示例操作，实现一定的功能，可能需要转调实现部分的具体实现方法
     */
    public operation(): void {
        this.impl.operationImpl();
    }
}

/**
 * 真正的具体实现对象
 */
class ConcreteImplementorA implements Implementor {
    public operationImpl(): void {
        // 真正的实现
    }
}

/**
 * 另一个具体的实现对象
 */
class ConcreteImplementorB implements Implementor {
    public operationImpl(): void {
        // 真正的实现
    }
}

/**
 * 扩充由 Abstraction 定义的接口对象
 */
class RefinedAbstraction extends Abstraction {
    public constructor(impl: Implementor) {
        super(impl);
    }

    /**
     * 示例操作，实现一定的功能
     */
    public otherOperation(): void {
        // 实现一定的功能，可能会使用具体实现部分的实现方法
        // 但是本方法更大的可能是使用 Abstraction 中定义的方法
        // 通过组合使用 Abstraction 中定义的方法来完成更多的功能
    }
}

/**
 * 客户端
 */
;(() => {
    // 创建具体的实现对象
    const implA: Implementor = new ConcreteImplementorA();
    const implB: Implementor = new ConcreteImplementorB();

    const refinedA = new RefinedAbstraction(implA);
    refinedA.operation();
    refinedA.otherOperation();

    const refinedB = new RefinedAbstraction(implB);
    refinedB.operation();
    refinedB.otherOperation();
});
