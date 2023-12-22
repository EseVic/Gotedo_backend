import { test } from '@japa/runner'

//Fetching the '/' page
test('display Hello Gotedo', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ message: 'Hello Gotedo' })
})

// test('display users', async ({ client }) => {
//   const userDetails = {
//     email: 'odo@mail.com',
//     full_name: 'Odo Peter',
//   }

//   const response = await client.post('/user')

//   response.assertStatus(200)
//   response.assertBodyContains([
//     {
//       id: 1,
//       email: 'odo@mail.com',
//       full_name: 'Odo',
//       created_at: '2023-12-21T17:36:52.000+01:00',
//       updated_at: '2023-12-21T17:36:52.000+01:00',
//     },
//   ])
// })