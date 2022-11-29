class strategy {
    execute (a,b);
}
class adcstrategy extends strategy{
    execute (a,b){
        return (a + b);
    }
}
class substrategy extends strategy{
    execute (a,b){
        return (a - b);
    }
}
class multstrategy extends strategy{
    execute (a,b){
        return (a * b);
    }
}
class divstrategy extends strategy{
    execute (a,b){
        return (a / b);
    }
}
class supstrategy{
    super (strategy);
    setStrategy(strategy){
        this.strategy = strategy
        executeStrategy(a,b);{
            return strategy.execute(a,b)
        }
    }
}
class app{
    execstrategy = new supstrategy
    main(){
        if (action === addition) then
        execstrategy.setStrategy(new adcstrategy())
        if (action === subtraction) then
        execstrategy.setStrategy(new substrategy())
        if (action === multiplication) then
        execstrategy.setStrategy(new multstrategy())
        if (action === division) then
        execstrategy.setStrategy(new divstrategy())
        result = context.executeStrategy(n1, n2)
    }
}