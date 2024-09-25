
function LoggerDecorator(logMessage:string) {
     function Logger(target:Function) {
        console.log(logMessage+" : " + target);
    }
    return Logger;
}
function LoggerNumberField(target:any) {
    console.log("Prop Decorator..." + target);
}

@LoggerDecorator("from User")
class User {
    @LoggerNumberField
    name:string = "Boo";
    age:number = 31
    constructor(){
        console.log("User class construtor called...")
    }
}
const u = new User();
