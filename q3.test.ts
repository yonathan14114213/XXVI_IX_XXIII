import sortArr from "./q3";
import { expect, test } from "vitest";
test('checked', ()=>{expect(sortArr([3, 5, 87, 1, 500])).toEqual([1, 3, 5, 87, 500])})