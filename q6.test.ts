import fetchUserData from "./q6";
import { expect, test } from "vitest";
test('1',async()=>{
    const user = await fetchUserData(1)
    expect(user.id).toBe(1)
})
