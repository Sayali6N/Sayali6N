package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {
	LoginPage loginPage;
	BankAndCashPage bankandcash;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		bankandcash = PageFactory.initElements(driver, BankAndCashPage.class);
	}

//	Given User is on Techfios login page
	@Given("^User is on Techfios login page$")
	public void User_is_on_Techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login");
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws InterruptedException {
		loginPage.enterPassword(password);
		Thread.sleep(2000);
	}

//	When User enters username as "demo@techfios.com"
	@When("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String username) throws InterruptedException {
		loginPage.enterUserName(username);
		Thread.sleep(2000);
	}

	@And("^User clicks on Signin Button$")
	public void user_clicks_on_Signin_Button() throws Throwable {
		loginPage.clickSignInButton();
		Thread.sleep(2000);
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		takeScreenshot(driver);
	}

	@Then("^User clicks on Bank and Cash$")
	public void user_clicks_on_Bank_and_Cash() throws Throwable {
		bankandcash.cilck_OnBankAndCash();
		Thread.sleep(2000);
	}

	@Then("^User clicks on New Account$")
	public void user_clicks_on_New_Account() throws Throwable {
		bankandcash.click_OnNewAccount();
		Thread.sleep(2000);
	}

	@Then("^User enters AccountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String accountTitle) throws Throwable {
		bankandcash.enter_AccountTitle();
		Thread.sleep(2000);
	}

	@Then("^User enters Description as \"([^\"]*)\" in accounts page$")
	public void user_enters_Description_as_in_accounts_page(String description) throws Throwable {
		bankandcash.enter_Description();
		Thread.sleep(2000);
	}

	@Then("^User enters InitialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_InitialBalance_as_in_accounts_page(String balance) throws Throwable {
		bankandcash.enter_Initial_Balance();
		Thread.sleep(2000);
	}

	@Then("^User enters AccountNumber as\"([^\"]*)\" in accounts page$")
	public void user_enters_AccountNumber_as_in_accounts_page(String accountNumber) throws Throwable {
		bankandcash.enter_AccountNumber();
		Thread.sleep(2000);
	}

	@Then("^User enters ContactPerson as\"([^\"]*)\" in accounts page$")
	public void user_enters_ContactPerson_as_in_accounts_page(String contactPerson) throws Throwable {
		bankandcash.enter_ContactPerson();
		Thread.sleep(2000);
	}

	@Then("^User enters PhoneNumber as\"([^\"]*)\" in accounts page$")
	public void user_enters_PhoneNumber_as_in_accounts_page(String phoneNumber) throws Throwable {

		bankandcash.enter_Phone();
		Thread.sleep(2000);
	}

	@Then("^User enters BankingURL\"([^\"]*)\" in accounts page$")
	public void user_enters_BankingURL_in_accounts_page(String bankingURL) throws Throwable {
		bankandcash.enter_InternetBanking_URL();
		Thread.sleep(2000);
	}

	@And("^User clicks on Submit Button$")
	public void user_clicks_on_Submit_Button() throws Throwable {
		bankandcash.click_OnSubmitButton();
		Thread.sleep(2000);
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
		String expectedTitle1 = "Accounts- iBilling";
		String actualTitle1 = bankandcash.getPageTitle();
		Assert.assertEquals(expectedTitle1, actualTitle1);
		takeScreenshot(driver);
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}


