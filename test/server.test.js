// Test the routes from server.js

const {app} = require("../src/server");

//import supertes so we can manage the app/server in tests properly
const request = require('supertest');

describe("Server root route exists and returns hello world", ()=> {
    test("Root route exists and returns status 200", async ()=>{
        const responseResult = await request(app).get("/");
        expect(responseResult.statusCode).toEqual(200);
    })
    test("Root route exists and returns hello world as a message", async ()=>{
        const resonse = await request(app).get("/");
        expect(resonse.body.message).toEqual("Hello World!")
    });
});