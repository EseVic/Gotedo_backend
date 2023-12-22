import { test } from '@japa/runner'

// Testing the /user, to get all users details
test('display all users', async ({ client }) => {
  const response = await client.get('/user')

  response.assertStatus(200)
  response.assertBodyContains([
    {
      id: 2,
      email: 'rich@mail.com',
      full_name: 'Richard Hendrix',
      created_at: '2023-12-22T07:45:32.000+01:00',
      updated_at: '2023-12-22T07:45:32.000+01:00',
    },
    {
      id: 1,
      email: 'odo@mail.com',
      full_name: 'Odo Peter',
      created_at: '2023-12-22T07:44:48.000+01:00',
      updated_at: '2023-12-22T07:44:48.000+01:00',
    },
  ])
})

//Create a new user at /user
test('create a new user', async ({ client }) => {
  const response = await client.post('/user').form({
    id: 1,
    email: 'odo@mail.com',
    full_name: 'Odo Kendrick',
  })

  response.assertStatus(201)
  response.assertTextIncludes('odo@mail.com')
})