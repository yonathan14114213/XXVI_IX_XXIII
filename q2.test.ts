import isPalindrome from "./q2";
import { expect, test } from "vitest"
test('true', ()=>{
    expect(isPalindrome('aba')).toBe(true)
})