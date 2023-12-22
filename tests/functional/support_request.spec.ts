import { test } from '@japa/runner'

test('display all users', async ({ client }) => {
  const response = await client.get('/request')

  response.assertStatus(200)
  response.assertBodyContains([
    {
      id: 2,
      firstname: 'Richard',
      lastname: 'Hendrix',
      user_id: 2,
      email: 'rich@mail.com',
      message_title: 'This is another request',
      full_message:
        'This should be a longer message format, it is not, so, boucne niqqa but hell yeah',
      user_file: 'file_uploads/1703228660821.png',
      created_at: '2023-12-22T08:04:21.000+01:00',
      updated_at: '2023-12-22T08:04:21.000+01:00',
    },
  ])
})