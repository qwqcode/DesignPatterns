/**
 * 备忘录模式 (Memento)
 */

/**
 * 备忘录的窄接口，没有任何方法定义
 */
interface Memento {
    //
}

/**
 * 原发器对象
 */
class Originator {
    /**
     * 示意，表示原发器的状态
     */
    private state: string = "";

    /**
     * 创建保存原发器对象的状态的备忘录对象
     * @return 创建好的备忘录对象
     */
    public createMemento(): Memento {
        return new MementoImpl(this.state);
    }

    /**
     * 重新设置原发器对象的状态，让其回到备忘录对象记录的状态
     * @param memento 记录有原发器状态的备忘录对象
     */
    public setMemento(memento: Memento) {
        const mementoImpl: MementoImpl = memento as MementoImpl;
        this.state = mementoImpl.getState();
    }
}

/**
 * 真正的备忘录对象，实现备忘录窄接口
 * 实现成私有的内部类，不让外部访问
 */
class MementoImpl implements Memento {
    /**
     * 示意，表示需要保存的状态
     */
    private state: string = "";
    
    public constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
        // ↑ 创建过后，一般只让外面来访问数据，
        // 而不再修改数据，因此只有 getter
    }
}

/**
 * 负责保存备忘录的对象
 */
class Caretaker {
    /**
     * 记录被保存的备忘录对象
     */
    private memento: Memento = null;

    /**
     * 保存备忘录对象
     * @param memento 被保存的备忘录对象
     */
    public saveMemento(memento: Memento): void {
        this.memento = memento;
    }

    /**
     * 获取被保存的备忘录对象
     * @return 被保存的备忘录对象
     */
    public retrieveMemento() {
        return this.memento;
    }
}

/**
 * 客户端
 */
;(() => {
    //...待补充
})();
