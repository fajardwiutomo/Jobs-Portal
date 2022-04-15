const request = require('supertest')
const app = require('../app')
const {Customer} = require('../models')

// afterAll(async () => {
//     await Customer.destroy({
//       truncate: true,
//       cascade: true,
//       restartIdentity: true
//     })
//   })

describe('POST /pub/register', () => {
    describe('POST /pub/register - success register', () => {
        it("must return object with status code 201", 
        async (done)=> {
            const payload = {
                username: 'testing',
                email: 'testing@mail.com',
                password:'testing',
                address: 'jakarta',
                phoneNumber: '0987654321'
            }

            const res = await request(app)
            .post('/pub/register')
            .send(payload)
            expect(res.status).toBe(201)
            expect(res.body).toHaveProperty('id')
            expect(res.body).toHaveProperty('id', expect.any(Number))
            // expect(res.body).toHaveProperty('id', payload.id)
            expect(res.body).toHaveProperty('email')
            expect(res.body).toHaveProperty('email', expect.any(String))
            // expect(res.body).toHaveProperty('email', payload.email)
            done()
        })
    })

    // descri('POST /register - fail test', () => {
    //     done()
    // })
    
}) 