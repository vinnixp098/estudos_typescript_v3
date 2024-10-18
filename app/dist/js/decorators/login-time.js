export function LoginTime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const time = performance.now();
            const retornoMetodo = originalMethod.apply(this, args);
            const timeNow = performance.now();
            console.log(`${propertyKey}, tempo de execução:  ${(timeNow - time / 1000)} s`);
            return retornoMetodo;
        };
        return descriptor;
    };
}
