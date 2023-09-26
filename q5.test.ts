import sumArray from "./q5";
import { test, expect } from "vitest";


test('1',()=>{
        expect(sumArray([2, 56])).toBe(58);
})
test('2', ()=>{
    expect(sumArray([3,52])).toBeGreaterThan(18)

})