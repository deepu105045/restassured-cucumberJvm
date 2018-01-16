$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserManagement.feature");
formatter.feature({
  "line": 1,
  "name": "User management functionalities",
  "description": "",
  "id": "user-management-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Get list of user",
  "description": "",
  "id": "user-management-functionalities;get-list-of-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Client performs a GET on /api/users?page\u003d\u003cpageId\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Service should return status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Response body should have attribute page with integer value as \u003cpageId\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Response body should have attribute per_page with integer value as \u003cper_page\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Response body should have attribute total with integer value as \u003ctotal\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "All the items in the array \"data\" has \"id\" field",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-management-functionalities;get-list-of-user;",
  "rows": [
    {
      "cells": [
        "pageId",
        "per_page",
        "total"
      ],
      "line": 11,
      "id": "user-management-functionalities;get-list-of-user;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "12"
      ],
      "line": 12,
      "id": "user-management-functionalities;get-list-of-user;;2"
    },
    {
      "cells": [
        "3",
        "3",
        "12"
      ],
      "line": 13,
      "id": "user-management-functionalities;get-list-of-user;;3"
    },
    {
      "cells": [
        "4",
        "3",
        "12"
      ],
      "line": 14,
      "id": "user-management-functionalities;get-list-of-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 705716356,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get list of user",
  "description": "",
  "id": "user-management-functionalities;get-list-of-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Client performs a GET on /api/users?page\u003d2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Service should return status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Response body should have attribute page with integer value as 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Response body should have attribute per_page with integer value as 3",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Response body should have attribute total with integer value as 12",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "All the items in the array \"data\" has \"id\" field",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 25
    }
  ],
  "location": "UserManagementStepDefinition.performGetOnPath(String)"
});
formatter.result({
  "duration": 1373993982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "UserManagementStepDefinition.service_should_return_status_code(int)"
});
formatter.result({
  "duration": 45697523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "page",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 63
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 288114276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per_page",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 67
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 16306671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "total",
      "offset": 36
    },
    {
      "val": "12",
      "offset": 64
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 14311764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 28
    },
    {
      "val": "id",
      "offset": 39
    }
  ],
  "location": "UserManagementStepDefinition.all_the_items_in_the_array_has_field(String,String)"
});
formatter.result({
  "duration": 109189113,
  "status": "passed"
});
formatter.before({
  "duration": 562155,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get list of user",
  "description": "",
  "id": "user-management-functionalities;get-list-of-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Client performs a GET on /api/users?page\u003d3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Service should return status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Response body should have attribute page with integer value as 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Response body should have attribute per_page with integer value as 3",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Response body should have attribute total with integer value as 12",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "All the items in the array \"data\" has \"id\" field",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d3",
      "offset": 25
    }
  ],
  "location": "UserManagementStepDefinition.performGetOnPath(String)"
});
formatter.result({
  "duration": 328869840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "UserManagementStepDefinition.service_should_return_status_code(int)"
});
formatter.result({
  "duration": 546357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "page",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 63
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 13637595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per_page",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 67
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 13883575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "total",
      "offset": 36
    },
    {
      "val": "12",
      "offset": 64
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 17445615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 28
    },
    {
      "val": "id",
      "offset": 39
    }
  ],
  "location": "UserManagementStepDefinition.all_the_items_in_the_array_has_field(String,String)"
});
formatter.result({
  "duration": 17829826,
  "status": "passed"
});
formatter.before({
  "duration": 1056443,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get list of user",
  "description": "",
  "id": "user-management-functionalities;get-list-of-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Client performs a GET on /api/users?page\u003d4",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Service should return status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Response body should have attribute page with integer value as 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Response body should have attribute per_page with integer value as 3",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Response body should have attribute total with integer value as 12",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "All the items in the array \"data\" has \"id\" field",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d4",
      "offset": 25
    }
  ],
  "location": "UserManagementStepDefinition.performGetOnPath(String)"
});
formatter.result({
  "duration": 298502463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "UserManagementStepDefinition.service_should_return_status_code(int)"
});
formatter.result({
  "duration": 452276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "page",
      "offset": 36
    },
    {
      "val": "4",
      "offset": 63
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 14874325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per_page",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 67
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 18204935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "total",
      "offset": 36
    },
    {
      "val": "12",
      "offset": 64
    }
  ],
  "location": "UserManagementStepDefinition.response_body_should_have_attribute_with_value_as(String,int)"
});
formatter.result({
  "duration": 14503126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 28
    },
    {
      "val": "id",
      "offset": 39
    }
  ],
  "location": "UserManagementStepDefinition.all_the_items_in_the_array_has_field(String,String)"
});
formatter.result({
  "duration": 24431879,
  "status": "passed"
});
});