import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts"

Deno.test("get request works", async () => {
    console.log("testing get request works")

    const response = await fetch("http://localhost:1001")
    console.log(await response.body?.cancel())

    assertEquals(response.body?.cancel() && response.status, 200)
})

Deno.test("post request works", async () => {
    console.log("testing post request works")

    const response = await fetch("http://localhost:1001", {
        method: "POST",
        body: "test",
    })

    assertEquals(response.body?.cancel() && response.status, 200)
})
