# Backend Component of a Simple Customer Support Platform

A simple customer support platform developed to allow users send in their queries and awaits review

## Acknowledgements

- [Gotedo Management Software](https://about.gotedo.com/)

## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create user

```http
  POST /api/users
```

#### Get all support requests

```http
  GET /api/users/support_request
```

#### Get a support request

```http
  GET /api/users/support_request/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create a new support request

```http
  POST /api/users/support_request
```

| Parameter       | Type     | Description                                               |
| :-------------- | :------- | :-------------------------------------------------------- |
| `first_name`    | `string` | **Required**. User's first name                           |
| `last_name`     | `string` | **Required**. User's last name                            |
| `message_title` | `string` | **Required**. A short title of the request                |
| `message_text`  | `string` | **Required**. A short detailed description of the request |
| `file`          | `string` | **[Optional]**. A screenshot of the issues                |

## Authors

- [@EseVic](https://github.com/EseVic)

## Demo

TODO: Add a Demo of the REST API

## Development

To deploy this project run

```bash
  npm run dev
```
