import fibonaccy from "./q7";
import { expect, test } from "vitest";
test('7', ()=>{
    const arr = [1, 10, 2, 3, 5, 8]
    expect(()=>{fibonaccy(arr)}).toThrow(Error)
    expect(fibonaccy(arr)-(arr[arr.length-1]+arr[arr.length-2])).toBe(0)
})