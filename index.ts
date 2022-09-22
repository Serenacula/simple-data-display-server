import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { css } from "./css.ts"

const router = new Router()
const app = new Application()
const lineBreak = `
`

router.get("/", async (context) => {
    const records = await Deno.readTextFile("./records.txt")

    // adding li tags, so that it'll display nicely in html.
    const splitRecords = records.split(lineBreak)
    let recordsAsHtml = ""
    for (const record of splitRecords) {
        recordsAsHtml += `<li>${record}</li>${lineBreak}`
    }

    console.log("responding to get request")

    context.response.status = 200
    context.response.body = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Arduino Readout</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <style>${css}</style>
                </head>
    
                <body>
                    <h1>List of Records</h1>
                    <ol>${recordsAsHtml}</ol>
                </body>
            </html>
        `
})

router.post("/", async (context) => {
    const body = await context.request.body().value

    await Deno.writeTextFile("./records.txt", lineBreak + body, {
        append: true,
    })
    console.log(`writing data to record: ${body}`)

    context.response.body = "new record received successfully"
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 1001 })
