/**
 * 抽象工厂模式 (Abstract Factory)
 * 「选择产品族的实现」
 */

/**
 * 抽象工厂的接口，声明创建抽象产品的操作
 */
interface AbstractFactory {
    /**
     * 示例方法，创建抽象产品 A 的对象
     * @return 抽象产品 A 的对象
     */
    createProductA(): AbstractProductA;

    /**
     * 示例方法，创建抽象产品 B 的对象
     * @return 抽象产品 B 的对象
     */
    createProductB(): AbstractProductB;
}

/**
 * 抽象产品 A 的接口
 */
interface AbstractProductA {
    // 定义抽象产品 A 相关的操作
}

/**
 * 抽象产品 B 的接口
 */
interface AbstractProductB {
    // 定义抽象产品 B 相关的操作
}

/**
 * 产品 A 的具体实现
 */
class ProductA1 implements AbstractProductA {
    // 实现产品 A 的接口中定义的操作
}

/**
 * 产品 A 的具体实现
 */
class ProductA2 implements AbstractProductA {
    // 实现产品 A 的接口中定义的操作
}

/**
 * 产品 B 的具体实现
 */
class ProductB1 implements AbstractProductB {
    // 实现产品 B 的接口中定义的操作
}

/**
 * 产品 B 的具体实现
 */
class ProductB2 implements AbstractProductB {
    // 实现产品 B 的接口中定义的操作
}

/**
 * 具体的工厂实现对象，实现创建具体产品对象的操作
 */
class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ProductB1();
    }
}

/**
 * 具体的工厂实现对象，实现创建具体的产品对象的操作
 */
class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ProductB2();
    } 
}

/**
 * 客户端
 */
;(() => {
    // 创建抽象工厂对象
    let af: AbstractFactory = new ConcreteFactory1();

    // 通过抽象工厂来获取一系列对象，如产品 A 和产品 B
    af.createProductA();
    af.createProductB();
});