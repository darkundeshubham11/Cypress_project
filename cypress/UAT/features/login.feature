Feature: login
Scenario Outline: validate login and multiple users
Given open the browser and enter the url
When enter user name as <usernname>
And enter password as <password>
And click on submit
Then login should be successful

Examples:
    | username | password | 
    | ADmin | Admin123  |
    | admin | pass  |
    | Shubham | Shubham123  |
