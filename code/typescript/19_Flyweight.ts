/**
 * 享元模式 (Flyweight)
 */

/**
 * 享元接口，通过这个接口享元可以接受并作用于外部状态
 */
interface Flyweight {
    /**
     * 示例操作，传入外部状态
     * @param extrinsicState 示例参数，外部状态
     */
    operation(extrinsicState: string): void;
}

/**
 * 享元对象
 */
class ConcreteFlyweight implements Flyweight {
    /**
     * 示例，描述内部状态
     */
    private intrinsicState: string;

    /**
     * 构造方法，传入享元对象的内部状态的数据
     * @param state 享元对象的内部状态的数据
     */
    public constructor(state: string) {
        this.intrinsicState = state;
    }

    public operation(extrinsicState: string): void {
        // 具体的功能处理，可能会用到享元内部、外部的状态
    }
}

/**
 * 不需要共享的 flyweight 对象，
 * 通常是被共享的享元对象作为子节点组合出来的对象
 */
class UnsharedConcreteFlyweight implements Flyweight {
    /**
     * 示例，描述对象的状态
     */
    private allState: string;

    public operation(extrinsicState: string): void {
        // 具体的功能处理
    }
}

/**
 * 享元工厂
 * 
 * 在享元模式中，客户端不能直接创建共享的享元对象实例，
 * 必须通过享元工厂来创建。
 */
class FlyweightFactory {
    /**
     * 通常实现为单例
     */
    private static factory = new FlyweightFactory();

    public static getInstance(): FlyweightFactory {
        return FlyweightFactory.factory;
    }

    /**
     * 缓存多个 Flyweight 对象，这里只是示意一下
     */
    private fsMap: { [key: string]: Flyweight } = {};

    /**
     * 获取 Key 对应的享元对象
     * @param key 获取享元对象的 key，只是示意
     * @return key 对应的享元对象
     */
    public getFlyweight(key: string): Flyweight {
        // 这个方法基本的实现步骤如下：
        // 1：先从缓存中查找，是否存在 key 对应的 Flyweight 对象
        let f: Flyweight = this.fsMap[key];

        // 2：如果存在，就返回相应的 Flyweight 对象
        if (!f) {
            // 3：如果不存在
            // 3.1：创建一个心的 Flyweight 对象
            f = new ConcreteFlyweight(key);
            // 3.2：把这个新的 Flyweight 对象添加到缓存中
            this.fsMap[key] = f;
            // 3.3：然后返回这个新的 Flyweight 对象
        }

        return f;
    }
}

/**
 * 客户端
 */
;(() => {
    const fw1: Flyweight = FlyweightFactory.getInstance().getFlyweight("username-1");
    fw1.operation("params");

    const fw2: Flyweight = FlyweightFactory.getInstance().getFlyweight("username-2");
    fw2.operation("params")

    const fw1_B: Flyweight = FlyweightFactory.getInstance().getFlyweight("username-1");
    fw1_B.operation("params")
})();
