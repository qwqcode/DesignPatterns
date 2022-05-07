/**
 * 代理模式 (Proxy)
 * 
 * 「控制对象访问」
 */

/**
 * 抽象的目标接口，定义具体的目标对象和代理公用的接口
 */
interface Subject {
    /**
     * 示意方法：一个抽象的请求方法
     */
    request(): void;
}

/**
 * 具体的目标对象，是真正被代理的对象
 */
class RealSubject implements Subject {
    public request(): void {
        // 执行具体的功能处理
    }
}

/**
 * 代理对象
 */
class MyProxy implements Subject {
    /**
     * 持有被代理的具体目标对象
     */
    private realSubject: RealSubject = null;

    /**
     * 构造方法，传入被代理的具体目标对象
     * @param realSubject 被代理的具体目标对象
     */
    public constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        // 在转调具体的目标对象前，可以执行一些功能处理

        // 转调具体的目标对象的方法
        this.realSubject.request();

        // 在转调具体的目标对象后，可以执行一些功能处理
    }
}

/**
 * 客户端
 */
;(() => {
    const realSubject = new RealSubject();

    const proxy = new MyProxy(realSubject);
    proxy.request();
})();
