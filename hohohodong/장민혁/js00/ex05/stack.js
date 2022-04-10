const stackCreate = () => ({
    arr: [],
    top: -1
  });

function stackEmpty(stack){
  if (stack.top === -1)
    return true;
  else 
    return false;
}

function stackPush(stack, data){
    stack.arr[++stack.top] = data
}

function stackPeek(stack){
  if (stackEmpty(stack)){
    throw new Error('empty stack')
  }
  return stack.arr[stack.top]
}

function stackPop(stack){
  if (stackEmpty(stack)){
    throw new Error('empty stack')
  }
  return stack.arr[stack.top--]
}

let stac = stackCreate()

console.log(stackEmpty(stac));
stackPush(stac, 0)
stackPush(stac, 1)
stackPush(stac, 2)
console.log(stackPeek(stac));
console.log(stackPop(stac));
console.log(stackPop(stac));
console.log(stackPop(stac));