/**
 * 中介者模式 (Mediator)
 * 
 * 「封装交互」
 */

/**
 * 同事类的抽象父类
 */
abstract class Colleague {
  /**
   * 持有中介者对象，每一个同事类都知道它的中介者对象
   */
  private mediator: Mediator;

  /**
   * 构造方法，传入中介者对象
   * @param mediator 中介者对象
   */
  public constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  /**
   * 获取当前同事类对应的中介者对象
   * @return 对应的中介者对象
   */
  public getMediator(): Mediator {
    return this.mediator;
  }
}

/**
 * 具体的同事类 A
 */
class ConcreteColleagueA extends Colleague {
  public constructor(mediator: Mediator) {
    super(mediator);
  }

  /**
   * 示例方法，执行某些业务功能
   */
  public someOperation(): void {
    // 在需要跟其他同事通信的时候，通知中介者对象
    this.getMediator().changed(this);
  }
}

/**
 * 具体的同事类 B
 */
class ConcreteColleagueB extends Colleague {
  public constructor(mediator: Mediator) {
    super(mediator);
  }

  /**
   * 示意方法，执行某些业务功能
   */
  public someOperation(): void {
    // 在需要跟其他同事通信的时候，通知中介者对象
    this.getMediator().changed(this);
  }
}

/**
 * 中介者，定义各个同事对象通知的接口
 */
interface Mediator {
  /**
   * 同事对象在自身改变的时候来通知中介者的方法
   * 让中介者去负责相应的与其他同事对象的交互
   * @param colleague 同事对象自身，好让中介者对象通过对象实例
   *                  去获取同事对象的状态
   */
  changed(colleague: Colleague): void;
}

class ConcreteMediator implements Mediator {
  /**
   * 持有并维护同事 A
   */
  private colleagueA: ConcreteColleagueA;

  /**
   * 持有并维护同事 B
   */
  private colleagueB: ConcreteColleagueB;

  /**
   * 设置中介者需要了解并维护的同事 A 对象
   * @param colleague 同事 A 对象
   */
  public setConcreteColleagueA(colleague: ConcreteColleagueA): void {
    this.colleagueA = colleague;
  }

  /**
   * 设置中介者需要了解并维护的同事 B 对象
   * @param colleague 同事 B 对象
   */
  public setConcreteColleagueB(colleague: ConcreteColleagueB) {
    this.colleagueB = colleague;
  }

  public changed(colleague: Colleague): void {
    // 某个同事类发生了变化，通常需要与其他同事交互
    // 具体协调相应的同事对象来实现协作行为
  }
}

/**
 * 客户端
 */
;(() => {
    // 创建中介者对象
    const mediator = new ConcreteMediator();

    // 创建同事类
    const colleagueA = new ConcreteColleagueA(mediator);
    const colleagueB = new ConcreteColleagueB(mediator);

    // 让中介者知道所有的同事
    mediator.setConcreteColleagueA(colleagueA);
    mediator.setConcreteColleagueB(colleagueB);

    // 执行操作
    colleagueA.someOperation()
    colleagueB.someOperation()
})();
