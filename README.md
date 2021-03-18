# wizeacademy2021
Repo to host the exercises made during the Wizeline Academy Training

Project: testcafe
Examples provided during the first training session.
Using HTML reporter.

Project: jmt_challenge_one
Challenge to automate the workflows of the SauceLabs test page
1 - Valid loging (Verify product page's title)
2 - Invalid loging (Verify login's error message)
3 - Logout from products page (Verify login's logo is displayed)
4 - Open the shopping cart (Verify cart page's title)
5 - Add a single item to the shopping cart (Verify an item is present in the cart)
6 - Add multiple items to the shopping cart (Verify an items are present in the cart)
7 - Invalid zipcode in the checkout information page (Verify the error message is displayed)
8 - Verify the payment overview page (Verify the overview page is opened)
9 - Verify item in the overview page (Verify the item's details)
10 - Complete the workflow and reach the final page (End to End test to complete the purchase)


Additionals:

Execute test in multi-browser with HTML reporter.
command: testcafe chrome,firefox 10_finalsale.test.js --reporter html:../reports/finaltest.html


Project: jmt_challenge_two
Challenge in Postman and Newman
Postman Cases:
1.Get_Active_Tasks_PositiveScenario
2.Post_New_Task_PositiveScenario
2.1.Post_New_Task_NegativeScenario
3.Get_Active_Task_PositiveScenario
4.Post_Update_Task_PositiveScenario
4.1.Post_Update_Task_NegativeScenario
5.Post_Complete_Task_PositiveScenario
5.1.Get_Active_Task_NegativeScenario
6.Post_Reopen_Task_PositiveScenario
7.Post_Delete_Task_PositiveScenario
7.1.Post_Delete_Task_NegativeScenario

Newman Execution:


Jenkins Integration:
Created a new jenkins project.
Integrated a reporter for results.