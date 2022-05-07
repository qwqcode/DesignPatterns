/**
 * 模板方法模式 (Template Method)
 * 
 * 「固定算法骨架」
 */

/**
 * 定义模板方法、原语操作等的抽象类
 */
abstract class AbstractClass {
    /**
     * 原语操作 1，所谓原语操作就是抽象的操作，必须要由子类提供实现
     */
    public abstract doPrimitiveOperation1(): void;

    /**
     * 原语操作 2
     */
    public abstract doPrimitiveOperation2(): void;

    /**
     * 模板方法，定义算法骨架
     */
    public templateMethod(): void {
        this.doPrimitiveOperation1();
        this.doPrimitiveOperation2();
    }
}

/**
 * 具体实现类，实现原语操作
 */
class ConcreteClass extends AbstractClass {
    public doPrimitiveOperation1(): void {
        // 具体的实现
    }

    public doPrimitiveOperation2(): void {
        // 具体的实现
    }
}
