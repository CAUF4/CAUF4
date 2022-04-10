const stackCreate = () => ({
    arr: [],
    top: -1
})

function stackEmpty(stack){
    if (stack.top == -1)
        return true
    else
        return false
}

function stackPush(stack,data){
    stack.top++
    stack.arr[stack.top] = data
}

function stackPeek(stack){
    return stack.arr[stack.top]
}

function stackPop(stack){
    if (stackEmpty(stack))
    {
        const error = new Error("this arr is empty")
    }
    else
    {
        stack.top--
    }
}
let stack = stackCreate()

console.log(stackEmpty(stack))
stackPush(stack, 0)
stackPush(stack, 1)
stackPush(stack, 3)
console.log(stackPeek(stack))
stackPop(stack)
stackPop(stack)
console.log(stackPeek(stack))

