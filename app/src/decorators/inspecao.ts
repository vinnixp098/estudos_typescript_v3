export function inspecao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
        
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...arg: any[]){
            console.log(`--- Método: ${propertyKey}`);
            console.log(`--- Argumentos: ${JSON.stringify(arg)}`);
            const retorno = originalMethod.apply(this, arg);
            console.log(`--- Retorno: ${JSON.stringify(retorno)}`);
            const retornoMetodo =  originalMethod.apply(this, arg);
            return retornoMetodo;
        }

        return descriptor
    }
}