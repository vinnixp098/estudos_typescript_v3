export function LoginTime() {

    return function (
        target:  any,
        propertyKey:  string,
        descriptor:  PropertyDescriptor
    ){
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: Array<any>){
            const time = performance.now();
            const retornoMetodo  = originalMethod.apply(this, args);
            const timeNow = performance.now();
            console.log(`${propertyKey}, tempo de execução:  ${(timeNow - time/1000)} s`);
            return retornoMetodo;
        }
        return descriptor 
    }
}
