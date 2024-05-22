# team-management-server

# To setup

1: Clone this repository
2: Run `npm install` command to install all the dependencies
3: Run npm start command to start the server
4: port is set: 6900

# To test

# 1: Using Postman collection: 
`https://www.postman.com/lunar-module-meteorologist-71082510/workspace/team-management/request/16965859-9c949fca-6692-4999-ab35-ad6df107734f`

# 2: Curls to API

1: Get Members: `curl --location --request GET 'localhost:6900/team/members?pageNo=1&pageSize=10'`

2: Add a member: `curl --location --request POST 'localhost:6900/team/addMember' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "Pankaj",
    "last_name": "Phogat",
    "phone": "+916789123456",
    "email": "pankajphogat@gmail.com",
    "role": "user"

}'`

3: Update Member: `curl --location --request PUT 'localhost:6900/team/updateMember/f5b10a5b-b452-4ac2-a474-f78244a7648e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "last_name": "Kumar"
}'`

4: Delete member: `curl --location --request DELETE 'localhost:6900/team/member/0bb1d740-32a6-49e4-ad6e-9156f3ef6e87'`
