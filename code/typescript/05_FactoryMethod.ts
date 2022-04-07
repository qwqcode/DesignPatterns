/**
 * 工厂方法模式 (Factory Method)
 * 
 * 「延迟到子类来选择实现」
 */

/**
 * 工厂方法所创建的对象的接口
 */
interface Product {
    // 可定义 Product 的属性和方法
}

/**
 * 具体的 Product 对象
 */
class ConcreteProduct implements Product {
    // 实现 Product 要求的方法
}

/**
 * 创建器，声明工厂方法
 */
abstract class Creator {
    /**
     * 创建 Product 的工厂方法
     * @return Product 对象
     */
    protected abstract factoryMethod(): Product;

    /**
     * 示意方法，实现某些功能的方法
     */
    public someOperation(): void {
        // 通常在这些方法中需要调用工厂方法来获取 Product 对象
        let product: Product = this.factoryMethod();
    }
}

/**
 * 具体的创建器实现对象
 */
class ConcreteCreator extends Creator {
    protected factoryMethod(): Product {
        // 重定义工厂方法，返回一个具体的 Product 对象
        return new ConcreteProduct();
    }
}

/**
 * 客户端
 */
;(() => {
    let creator: Creator = new ConcreteCreator();
    creator.someOperation();
});