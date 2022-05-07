/**
 * 命令模式 (Command)
 * 
 * 「封装请求」
 */

/**
 * 命令接口，声明执行的操作
 */
interface Command {
    /**
     * 执行命令对应的操作
     */
    execute(): void;
}

/**
 * 具体的命令实现对象
 */
class ConcreteCommand implements Command {
    /**
     * 持有相应的接收者对象
     */
    private receiver: Receiver = null

    /**
     * 示意，命令对象可以有自己的状态
     */
    private state: string;

    /**
     * 构造方法，传入相应的接收者对象
     * @param receiver 相应的接收者对象
     */
    public constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    public execute(): void {
        // 通常会转调接收者对象的相应方法，让接收者来真正执行功能
        this.receiver.action();
    }
}

/**
 * 接收者对象
 */
class Receiver {
    /**
     * 示意方法，真正执行命令相应的操作
     */
    public action(): void {
        // 真正执行命令操作的功能代码
    }
}

/**
 * 调用者
 */
class Invoker {
    /**
     * 持有命令对象
     */
    private command: Command = null;

    /**
     * 设置调用者持有的命令对象
     * @param command 命令对象
     */
    public setCommand(command: Command): void {
        this.command = command;
    }

    /**
     * 示意方法，要求命令执行请求
     */
    public runCommand(): void {
        // 调用命令对象的执行方法
        this.command.execute();
    }
}

/**
 * 客户端
 */
;(() => {
    // 创建接收者
    const receiver = new Receiver();

    // 创建命令对象，设定它的接收者
    const command = new ConcreteCommand(receiver);

    // 创建 Invoker，把命令对象设置进去
    const invoker = new Invoker();
    invoker.setCommand(command);

    invoker.runCommand();
})();
