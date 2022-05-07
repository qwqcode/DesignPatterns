/**
 * 观察者模式 (Observer)
 * 
 * 「触发联动」
 */

/**
 * 目标对象，它知道它的观察者，并提供注册和删除观察者的接口
 */
class Subject {
    /**
     * 用来保存注册观察者对象
     */
    private observers: Observer[] = [];

    /**
     * 注册观察者对象
     * @param observer 观察者对象
     */
    public attach(observer: Observer) {
        this.observers.push(observer);
    }

    /**
     * 删除观察者对象
     * @param observer 观察者对象
     */
    public detach(observer: Observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    /**
     * 通知所有注册的观察者对象
     */
    protected notifyObservers(): void {
        this.observers.forEach((observer) => {
            observer.update(this);
        });
    }
}

/**
 * 具体的目标对象，负责把有关状态存入到相应的观察者对象
 * 并把自己状态发生改变时，通知各个观察者
 */
class ConcreteSubject extends Subject {
    /**
     * 示意，目标对象的状态
     */
    private subjectState: string;
    
    public getSubjectState(): string {
        return this.subjectState;
    }
    
    public setSubjectState(subjectState: string) {
        this.subjectState = subjectState;
        // 状态发生了改变，通知各个观察者
        this.notifyObservers();
    }
}

/**
 * 观察者接口，定义一个更新的接口给那些在目标发生改变的时候被通知的对象
 */
interface Observer {
    /**
     * 更新的接口
     * @param subject 传入目标对象，方便获取相应的目标对象的状态
     */
    update(subject: Subject): void;
}

/**
 * 具体观察者对象，实现更新的方法，使自身的状态和目标状态保持一致
 */
class ConcreteObserverA implements Observer {
    /**
     * 示意，观察者的状态
     */
    private observerState: string;

    public update(subject: Subject): void {
        // 具体的更新实现
        // 这里可能需要更新观察者的状态，使其与目标的状态保持一致
        this.observerState = (subject as ConcreteSubject).getSubjectState();
    }
}

class ConcreteObserverB implements Observer {
    private observerState: string;

    public update(subject: Subject): void {
        this.observerState = (subject as ConcreteSubject).getSubjectState();
    }
}

/**
 * 客户端
 */
;(() => {
    // 创建被观察者
    const subject = new ConcreteSubject();

    // 创建观察者
    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();

    // 注册观察者
    subject.attach(observerA);
    subject.attach(observerB);

    // 执行状态发生改变操作
    subject.setSubjectState("新的状态");
})();
