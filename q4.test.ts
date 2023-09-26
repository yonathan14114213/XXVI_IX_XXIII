import sqrt from "./q4";
import { describe, expect, test } from "vitest";
test('should first', () => {
    expect(()=>{sqrt(-2)}).toThrow(Error);
    expect(sqrt(1)).toBe(1)
})