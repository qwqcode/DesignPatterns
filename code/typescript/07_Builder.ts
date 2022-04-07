/**
 * 生成器模式
 */

/**
 * 生成器接口，定义创建一个产品对象所需的各个部件的操作
 */
interface Builder {
    /**
     * 示意方法，构建某个部件
     */
    buildPart(): void;
}

/**
 * 被构建的产品对象的借口
 */
interface Product {
    // 定义产品的操作
}

/**
 * 具体的生成器实现对象
 */
class ConcreteBuilder implements Builder {
    /**
     * 生成器最终构建的产品对象
     */
    private resultProduct: Product;

    /**
     * 获取生成器最终构建的产品对象
     * @returns 生成器最终构建的产品对象
     */
    public getResult(): Product {
        return this.resultProduct;
    }

    public buildPart(): void {
        // 构建某个部件的功能处理
    }
}

/**
 * 指导者，指导使用生成器的接口来构建输出的文件的对象
 */
class Director {
    /**
     * 持有当前需要使用的生成器对象
     */
    private builder: Builder;

    /**
     * 构造方法，传入生成器对象
     * @param builder 生成器对象
     */
    public constructor(builder: Builder) {
        this.builder = builder;
    }

    /**
     * 示意方法，指导生成器构建最终的产品对象
     */
    public construct(): void {
        // 通过使用生成器接口来构建最终的产品对象
        this.builder.buildPart();
    }
}

/**
 * 客户端
 */
;(() => {
    let concreteBuilder = new ConcreteBuilder();
    let director = new Director(concreteBuilder);
    director.construct();
    console.log(concreteBuilder.getResult());
})();
