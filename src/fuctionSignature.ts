let Add: (num1: number, num2: number, action: string) => number;
Add = (a: number, b: number, action: string) => {
    if (action === "=") return a + b
    return a-b
}


let rs = Add(20,40,"=")
console.log(rs);
