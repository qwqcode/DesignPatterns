/**
 * 策略模式 (Strategy)
 */
interface Strategy {
    /**
     * 某个算法的接口，可以有传入参数，也可以有返回值
     */
    algorithmInterface(): void;
}

/**
 * 实现具体的算法 A
 */
class ConcreteStrategyA implements Strategy {
    public algorithmInterface(): void {
        // 具体的算法实现
    }
}

/**
 * 实现具体的算法 B
 */
class ConcreteStrategyB implements Strategy {
    public algorithmInterface(): void {
        // 具体的算法实现
    }
}

/**
 * 实现具体的算法 C
 */
class ConcreteStrategyC implements Strategy {
    public algorithmInterface(): void {
        // 具体的算法实现
    }
}

/**
 * 上下文对象，通常会持有一个具体的策略对象
 */
class Context {
    /**
     * 持有一个具体的策略对象
     */
    private strategy: Strategy;
    
    /**
     * 构造方法，传入一个具体的策略对象
     */
    public constructor(aStrategy: Strategy) {
        this.strategy = aStrategy;
    }

    /**
     * 上下文对客户端提供的操作接口，可以有参数和返回值
     */
    public contextInterface(): void {
        // 通常会转调具体的策略对象进行算法运算
        this.strategy.algorithmInterface();
    }
}

/**
 * 客户端
 */
;(() => {
    // 1. 选择并创建需要使用的策略对象
    const strategy: Strategy = new ConcreteStrategyA();

    // 2. 创建上下文
    const context: Context = new Context(strategy);

    // 3. 执行操作
    context.contextInterface();
})();
