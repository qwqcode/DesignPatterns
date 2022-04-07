/**
 * 简单工厂模式
 * 
 * 「选择实现」
 */

/**
 * 接口的定义，该接口可以通过简单工厂来创建
 */
interface Api {
    /**
     * 示意，具体功能方法的定义
     * @param s 示意，需要的参数
     */
    operation(s: string): void;
}

/**
 * 接口的具体实现对象 A
 */
class ImplA implements Api {
    public operation(s: string): void {
        // 实现功能的代码，示意一下
        console.log("ImplA s=="+s);
    }
}

/**
 * 接口的具体实现对象 B
 */
class ImplB implements Api {
    public operation(s: string): void {
        // 实现功能的代码，示意一下
        console.log("ImplB s=="+s);
    }
}

/**
 * 工厂类，用来创建 Api 对象
 */
class Factory {
    /**
     * 具体创建 Api 对象的方法
     * @param condition 示意，从外部传入的选择条件
     */
    public static createApi(condition: number): Api {
        // 应该根据某些条件去选择究竟创建哪一个具体的实现对象，
        // 这些条件可以从外部传入，也可以从其他的途径来获取。
        // 如果只有一个实现，可以省略条件，因为没有选择的必要。
        // 示意使用条件
        let api: Api = null;
        if (condition == 1) {
            api = new ImplA();
        } else if (condition == 2) {
            api = new ImplB();
        }

        return api;
    }
}

/**
 * 客户端，使用 Api 接口
 */
;(() => {
    // 通过简单工厂来获取接口对象
    let api: Api = Factory.createApi(1);
    api.operation("正在使用简单工厂");
})();