/**
 * 组合模式 (Composite)
 * 
 * 「统一叶子对象和组合对象」
 */

/**
 * 抽象的组件对象，为组合中的对象声明接口，实现接口的缺省行为
 */
abstract class Component {
    /**
     * 示意方法，子组件对象可能有的功能方法
     */
    public abstract someOperation(): void;

    /**
     * 向组合对象中加入组件对象
     * @param child 被加入组合对象中的组件对象
     */
    public addChild(child: Component): void {
        // 缺省的实现，抛出例外，因为叶子对象没有这个功能
        // 或者子组件没有实现这个功能
        throw new Error("对象不支持这个功能");
    }

    /**
     * 从组合对象中移出某个组件对象
     * @param child 被移出的组件对象
     */
    public removeChild(child: Component) {
        // 缺省的实现，抛出例外，因为叶子对象没有这个功能
        // 或者子组件没有实现这个功能
        throw new Error("对象不支持这个功能");
    }

    /**
     * 返回某个索引对应的组件对象
     * @param index 需要获取的组件对象的索引，索引从 0 开始
     * @return 索引对应的组件对象
     */
    public getChildren(index: number): Component {
        // 缺省的实现，抛出例外，因为叶子没有这个功能
        // 或者子组件没有实现这个功能
        throw new Error("对象不支持这个功能");
    }
}

/**
 * 组合对象，通常需要存储子对象，定义有子部件的部件行为
 * 并实现在 Component 里面定义的与子组件有关的操作
 */
class Composite extends Component {
    /**
     * 用来存储组合对象中包含的子组件对象
     */
    private childComponents: Component[] = null;

    /**
     * 示意方法，通常在里面需要实现递归调用
     */
    public someOperation(): void {
        if (this.childComponents !== null) {
            this.childComponents.forEach((c) => {
                // 递归地进行子组件相应方法的调用
                c.someOperation();
            })
        }
    }

    public addChild(child: Component): void {
        // 延迟初始化
        if (this.childComponents == null) {
            this.childComponents = [];
        }

        this.childComponents.push(child);
    }

    public removeChild(child: Component): void {
        if (this.childComponents !== null) {
            this.childComponents.splice(this.childComponents.indexOf(child), 1);
        }
    }

    public getChildren(index: number): Component {
        if (this.childComponents !== null) {
            if (index >= 0 && index < this.childComponents.length) {
                return this.childComponents[index];
            }

            return null;
        }
    }
}

/**
 * 叶子对象，叶子对象不再包含其他子对象
 */
class Leaf extends Component {
    /**
     * 示意方法，叶子对象可能有自己的功能方法
     */
    public someOperation(): void {
        // do something
    }
}

/**
 * 客户端
 */
;(() => {
    // 定义多个 Composite 对象
    const root: Component = new Composite();
    const c1: Component = new Composite();
    const c2: Component = new Composite();

    // 定义多个叶子对象
    const leaf1: Component = new Leaf();
    const leaf2: Component = new Leaf();
    const leaf3: Component = new Leaf();

    // 组合成为树形的对象结构
    root.addChild(c1);
    root.addChild(c2);
    root.addChild(leaf1);
    c1.addChild(leaf2);
    c1.addChild(leaf3);

    // 操作 Component 对象
    const o: Component = root.getChildren(1);
    console.log(o);
})();
