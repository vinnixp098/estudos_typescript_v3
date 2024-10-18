export function scape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let retornoMetodo = originalMethod.apply(this, args);
        if (typeof retornoMetodo === 'string') {
            retornoMetodo = retornoMetodo
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retornoMetodo;
    };
    return descriptor;
}
