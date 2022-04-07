/**
 * 外观模式 (Facade)
 * 
 * 「封装交互，简化调用」
 */

/**
 * A 模块的接口
 */
interface AModuleApi {
    /**
     * 示意方法，A 模块对外的一个功能方法
     */
    testA(): void;
}

class AModuleImpl implements AModuleApi {
    public testA(): void {
        console.log("现在在 A 模块里操作 testA 方法");
    }
}

interface BModuleApi {
    testB(): void;
}

class BModuleImpl implements BModuleApi {
    public testB(): void {
        console.log("现在在 B 模块里面操作 testB 方法");
    }
}

interface CModuleApi {
    testC(): void;
}

class CModuleImpl implements CModuleApi {
    public testC(): void {
        console.log("现在在 C 模块里面操作 testC 方法");
    }
}

/**
 * 外观对象
 */
class Facade {
    /**
     * 示意方法，满足客户端需要的功能
     */
    public test(): void {
        // 在内部实现的时候，可能会调用到内部的多个模块
        let a: AModuleApi = new AModuleImpl();
        a.testA();
        let b: BModuleApi = new BModuleImpl();
        b.testB();
        let c: CModuleApi = new CModuleImpl();
        c.testC();
    }
}

/**
 * 客户端
 */
;(() => {
    // 使用 Facade
    new Facade().test();
});
