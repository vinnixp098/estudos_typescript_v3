export function scape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retornoMetodo  = originalMethod.apply(this, args);
    if(typeof retornoMetodo === 'string'){
      retornoMetodo = retornoMetodo
      .replace(/<script>[\s\S]*?<\/script>/, '')
    }
    return retornoMetodo; 
  };
  return descriptor;
}
 