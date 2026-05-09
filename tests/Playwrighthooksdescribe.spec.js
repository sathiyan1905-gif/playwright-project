const { test, expect } = require('@playwright/test')


test.beforeAll(async () => {
    console.log('This is before all hooks')
})

test.afterAll(async () => {
    console.log('This is after all hooks')
})


test.beforeEach(async () => {
    console.log('This is before each hook')
})

test.afterEach(async () => {
    console.log('This is after each hook')
})



test.describe('group1', () =>{

    test('test1', async ({ page }) => {

    console.log('This is test1')
})

test('test2', async ({ page }) => {

    console.log('This is test2')
})
})

test.describe('group2', ()=> {

    test('test3', async ({ page }) => {

    console.log('This is test3')
})

test('test4', async ({ page }) => {

    console.log('This is test4')
})
})
