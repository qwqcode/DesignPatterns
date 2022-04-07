/**
 * 单例模式 (Singleton)
 * 
 * 「控制实例的数目」
 */

/**
 * 懒汉式单例模式的示例
 */
class SingletonLazy {
    /**
     * 定义一个变量来存储创建好的类实例
     */
    private static uniqueInstance: SingletonLazy = null;

    /**
     * 私有化构造方法，可以在内部控制创建实例的数目
     */
    private constructor() {
        //...
    }
    
    /**
     * 定义一个方法来为客户端提供类实例
     * @return 一个 Singleton 的实例
     */
    public static getInstance(): SingletonLazy {
        // 判断存储实例的变量是否有值
        if (this.uniqueInstance == null) {
            // 如果没有，就创建一个类实例，并把值赋值给存储类实例的变量
            this.uniqueInstance = new SingletonLazy();
        }

        // 如果有值，那就直接使用
        return this.uniqueInstance;
    }

    /**
     * 示意方法，单例可以有自己的操作
     */
    public singletonOperation(): void {
        // 功能处理
    }

    /**
     * 示意属性，单利可以有自己的属性
     */
    private singletonData: string;

    /**
     * 示意方法，让外部通过这些方法来访问属性的值
     * @return 属性的值
     */
    public getSingletonData(): string {
        return this.singletonData;
    }
}

/**
 * 饿汉式单例模式的示例
 */
class SingletonHungry {
    private static uniqueInstance: SingletonHungry = new SingletonHungry(); // 区别在于实例化的时期

    private constructor() {
        // ...
    }

    public static getInstance(): SingletonHungry {
        return this.uniqueInstance;
    }

    public singletonOperation(): void {
        // ...
    }

    private singletonData: string;

    public getSingletonData(): string {
        return this.singletonData;
    }
}
