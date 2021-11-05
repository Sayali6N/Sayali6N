$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Login Functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters AccountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters InitialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountNumber as\"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters ContactPerson as\"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters PhoneNumber as\"\u003cphoneNumber\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters BankingURL\"\u003cbankingURL\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "bankingURL"
      ],
      "line": 23,
      "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "TF new account",
        "New account created",
        "$63434",
        "231414",
        "Benjaman",
        "37483483646",
        "https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go"
      ],
      "line": 24,
      "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2670568600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New Account",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters AccountTitle as \"TF new account\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"New account created\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters InitialBalance as \"$63434\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters AccountNumber as\"231414\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters ContactPerson as\"Benjaman\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters PhoneNumber as\"37483483646\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters BankingURL\"https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 1294511300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.User_enters_username_as(String)"
});
formatter.result({
  "duration": 2124477400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2092338800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Signin_Button()"
});
formatter.result({
  "duration": 3536528700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 232611900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Bank_and_Cash()"
});
formatter.result({
  "duration": 2080862100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_New_Account()"
});
formatter.result({
  "duration": 2721961100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TF new account",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 2153568500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New account created",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_Description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 2110710500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$63434",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_InitialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 2112701600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231414",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_AccountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 2128490400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benjaman",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_ContactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 2113847000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "37483483646",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_PhoneNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 2152985200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go",
      "offset": 23
    }
  ],
  "location": "LoginStepDefination.user_enters_BankingURL_in_accounts_page(String)"
});
formatter.result({
  "duration": 2240734300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Submit_Button()"
});
formatter.result({
  "duration": 3251605300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 261468700,
  "status": "passed"
});
formatter.after({
  "duration": 661380500,
  "status": "passed"
});
});