# Carrer Portal API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /jobs`
- `GET /jobs`
- `GET /jobs/:id` 
- `PUT /jobs/:id`
- `DELETE /jobs/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{ 
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "username can't empty"
}
OR
{
  "message": "Email can't empty"
}
OR
{
  "message": "must email format"
}
OR
{
  "message": "Email must unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "username is required"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid username, email or password"
}
```

_Response (404 - Invalid)_

```json
{
  "message": "username or email or password must required"
}
```

&nbsp;



## 3. POST /jobs

Request:

- body:

```json
{
   "title": "string",
    "description": "string",
    "imgUrl": "string",
    "companyId": "integer",
    "authorId": "integer",
    "jobType": "string",
}
```

_Response (201 - OK)_

```json
[
  {
    "title": "Manager Produksi",
    "description": "mengatur tim dalam produksi",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "companyId": "1",
    "authorId": "1",
    "jobType": "staf produksi",
  }
]
{
  "message": "Success Create Job"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title must require"
}
OR
{
  "message": "Description must require"
}
{
  "message": "Image Url must require"
}
OR
{
  "message": "job type must require"
}
```

_Response (500 - internal server error)_

```json
{
  "message": "internal server error"
}
```


&nbsp;




## 3. GET /jobs

Description:
- Get all job from database

_Response (200 - OK)_

```json
[
  {
    "title": "Manager",
    "description": "mengatur supervisor dalam produksi",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "companyId": 1,
    "authorId": 6,
    "jobType": "Manager"
  },
  {
    "title": "Supervisor",
    "description": "mengatur tim",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "companyId": 1,
    "authorId": 1,
    "jobType": "Staff"
  }
]
```
_Response (200 - OK)_


&nbsp;


## 4. GET /jobs/:id

Description:
- Get job by Id

Request:

- params


```json
{
  "id": "integer(example : 3)"
}
```

_Response (200 - OK)_

```json
{
    "title": "Manager",
    "description": "mengatur supervisor dalam produksi",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "companyId": 1,
    "authorId": 6,
    "jobType": "Manager"
  }
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title must require"
}
OR
{
  "message": "Description must require"
}
{
  "message": "Image Url must require"
}
OR
{
  "message": "job type must require"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Job not found with id 8}"
}
```
&nbsp;



## 4. PUT /jobs/:id

Description:
- update job

Request:

- params

```json
{
  "id": "integer(example : 3)"
}
```

- body

```json
{
    "title": "Manager",
    "description": "mengatur supervisor dalam produksi",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "jobType": "Manager"
  }
```

_Response (200 - OK)_

```json
{
    "title": "Manager Produksi",
    "description": "mengatur supervisor dalam produksi",
    "imgUrl": "https://st.depositphotos.com/1104991/3727/i/600/depositphotos_37273107-stock-photo-supervisor-with-tablet-pc-in.jpg",
    "companyId": ,
    "authorId": ,
    "jobType": "Manager"
  }
```

_Response (404 - Not Found)_

```json
{
  "message": "Job not found with id 8}"
}
```
&nbsp;


## 4. DELETE /movies/:id

Description:
- Delete job by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "job success to delete"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Job not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```