@Login 
Feature: Techfios Login Functionality Validation 

@Scenario1 
Scenario Outline: 1 User should be able to login with valid credentials 
	Given User is on Techfios login page 
	When User enters username as "<username>" 
	When User enters password as "<password>" 
	And User clicks on Signin Button 
	Then User should land on Dashboard page 
	Then User clicks on Bank and Cash     
	Then User clicks on New Account   
	Then User enters AccountTitle as "<accountTitle>" in accounts page   
	Then User enters Description as "<description>" in accounts page  
	Then User enters InitialBalance as "<initialBalance>" in accounts page 
	Then User enters AccountNumber as"<accountNumber>" in accounts page 
	Then User enters ContactPerson as"<contactPerson>" in accounts page 
	Then User enters PhoneNumber as"<phoneNumber>" in accounts page  
	Then User enters BankingURL"<bankingURL>" in accounts page 
	And User clicks on Submit Button  
	Then User should be able to validate account created successfully 
	Examples: 
		|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|phoneNumber|bankingURL|
		|demo@techfios.com|abc123|TF new account|New account created|$63434|231414|Benjaman|37483483646|https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go|
		
		
		
