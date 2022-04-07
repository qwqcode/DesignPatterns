/**
 * 适配器模式 (Adapter)
 * 
 * 「转换匹配，复用功能」
 */

/**
 * 定义客户端使用的接口，与特定领域相关
 */
interface Target {
    /**
     * 示意方法，客户端请求处理的方法
     */
    request(): void;
}

/**
 * 已经存在的接口，这个接口需要被适配
 */
class Adaptee {
    /**
     * 示意方法，原本已经存在，已经实现的方法
     */
    public specificRequest(): void {
        // 具体的功能处理
    }
}

/**
 * 适配器
 */
class Adapter implements Target {
    /**
     * 持有需要被适配的接口对象
     */
    private adaptee: Adaptee;

    /**
     * 构造方法，传入需要被适配的对象
     * @param adaptee 需要被适配的对象
     */
    public constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    public request(): void {
        // 可能转调已经实现了的方法，进行适配
        this.adaptee.specificRequest();
    }
}

/**
 * 使用适配器的客户端
 */
;(() => {
    // 创建需要被适配的对象
    let adaptee: Adaptee = new Adaptee();
    // 创建客户端需要调用的接口对象
    let target: Target = new Adapter(adaptee);
    // 请求处理
    target.request();
});