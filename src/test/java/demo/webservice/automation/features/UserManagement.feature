Feature: User management functionalities
Scenario Outline: Get list of user
When Client performs a GET on /api/users?page=<pageId>
Then Service should return status code 200
And Response body should have attribute page with integer value as <pageId>
And Response body should have attribute per_page with integer value as <per_page>
And Response body should have attribute total with integer value as <total>
And All the items in the array "data" has "id" field

Examples:
|pageId|per_page|total|
|2|3|12|
|3|3|12|
|4|3|12|