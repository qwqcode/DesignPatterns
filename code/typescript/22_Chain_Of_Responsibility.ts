/**
 * 职责链模式 (Chain of Responsibility)
 */

/**
 * 职责的接口，也就是处理请求的接口
 */
abstract class Handler {
    /**
     * 持有后继的职责对象
     */
    protected successor: Handler;

    /**
     * 设置后继的职责对象
     * @param successor 后继的职责对象
     */
    public setSuccessor(successor: Handler) {
        this.successor = successor;
    }

    /**
     * 示意处理请求的方法，虽然这个示意方法是没有传入参数的
     * 但实际是可以传入参数的，根据具体需求来选择是否传入参数
     */
    public abstract handleRequest(): void;
}

/**
 * 具体的职责对象，用来处理请求
 */
class ConcreteHandler1 extends Handler {
    public handleRequest(): void {
        // 根据某些条件来判断是否属于自己处理的职责范围
        // 判断条件比如，从外部传入的参数，或者这里主动去获取的外部数据，
        // 如从数据库中获取等，下面这句话是个示意
        const someCondition: boolean = false;

        if (someCondition) {
            // 如果属于自己处理的职责范围，就在这里处理请求
            // 具体的处理代码
            console.log("ConcreteHandler1 handle request");
        } else {
            // 如果不属于自己处理的职责范围，那就判断是否还有后继的职责对象
            // 如果有，就转发请求给后继的职责对象
            // 如果没有，什么都不做，自然结束
            if (this.successor !== null) {
                this.successor.handleRequest();
            }
        }
    }
}

/**
 * 职责链的客户端
 */
;(() => {
    // 先要组装职责链
    const h1: Handler = new ConcreteHandler1();
    const h2: Handler = new ConcreteHandler2();

    h1.setSuccessor(h2);
    // 然后提交请求
    h1.handleRequest();
})();
