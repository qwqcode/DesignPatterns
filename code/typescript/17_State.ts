/**
 * 状态模式 (State)
 */
interface State {
    /**
     * 状态对应的处理
     * @param sampleParameter 示例参数，说明可以传入参数，
     *                        具体传入什么样的参数，传入几个参数，由具体的应用来具体分析
     */
    handle(sampleParameter: string): void;
}

/**
 * 实现一个与 Context 的一个特定状态相关的行为
 */
class ConcreteStateA implements State {
    public handle(sampleParameter: string): void {
        // 实现具体的处理
    }
}

/**
 * 实现一个与 Context 的一个特定状态相关的行为
 */
class ConcreteStateB implements State {
    public handle(sampleParameter: string): void {
        // 实现具体的处理
    }
}

/**
 * 定义客户感兴趣的接口，通常会维护一个 State 类型的对象实例
 */
class Context {
    /**
     * 持有一个 State 类型的对象实例
     */
    private state: State;

    /**
     * 设置实现 State 的对象的实例
     * @param state 实现 State 的对象的实例
     */
    public setState(state: State) {
        this.state = state;
    }

    /**
     * 用户感兴趣的接口方法
     * @param sampleParameter 示意参数
     */
    public request(sampleParameter: string) {
        // 在处理中，会转调 state 来处理
        this.state.handle(sampleParameter);
    }
}

/**
 * 客户端
 */
;(() => {
    const context = new Context();
    const stateA: State = new ConcreteStateA();
    context.setState(stateA);

    context.request("param");
})();
