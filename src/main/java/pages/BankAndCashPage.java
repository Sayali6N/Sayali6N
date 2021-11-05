package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashPage extends TestBase {
	WebDriver driver;
	
	public BankAndCashPage(WebDriver driver) {
		this.driver = driver;
	}
	//Data on Bank & Cash page
	String accountTitle = "TF new account";
	String description = "New account created";
	String balance = "$63434";
	String accountNumber = "231414";
	String contactPerson ="Benjaman";
	String phoneNumber = "37483483646";
	String bankingURL = "https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go";
	
	
	
	
	@FindBy(how=How.XPATH, using = "//span[text()='Bank & Cash']")WebElement BankAndCashButton;
	@FindBy(how=How.XPATH, using = "//a[text()='New Account']")WebElement NewAccountButton;
	@FindBy(how=How.XPATH, using = "//input[@id='account']")WebElement AccountTitle;
	@FindBy(how=How.XPATH, using = "//input[@id='description']")WebElement Description;
	@FindBy(how=How.XPATH, using = "//input[@id='balance']")WebElement Initial_Balance;
	@FindBy(how=How.XPATH, using = "//input[@id='account_number']")WebElement AccountNumber;
	@FindBy(how=How.XPATH, using = "//input[@id='contact_person']")WebElement ContactPerson;
	@FindBy(how=How.XPATH, using = "//input[@id='contact_phone']")WebElement Phone;
	@FindBy(how=How.XPATH, using = "//input[@id='ib_url']")WebElement InternetBanking_URL;
	@FindBy(how=How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button/i")WebElement  SubmitButton;
	
	
	public void cilck_OnBankAndCash() {
		BankAndCashButton.click();
	}
	
	public void click_OnNewAccount() {
		NewAccountButton.click();
	}
	
	public void enter_AccountTitle() {
//		AccountTitle.sendKeys(accountTitle);
		AccountTitle.sendKeys(accountTitle + randomNumber(9999));
	}
	
	public void enter_Description() {
		Description.sendKeys(description);
	}
	
	public void enter_Initial_Balance() {
		Initial_Balance.sendKeys(balance);
	}
	
	public void enter_AccountNumber() {
//		AccountNumber.sendKeys(accountNumber);
		AccountNumber.sendKeys(accountNumber + randomNumber(9999) );
	}
	
	public void enter_ContactPerson() {
		ContactPerson.sendKeys(contactPerson);
	}
	
	public void enter_Phone() {
		Phone.sendKeys(phoneNumber + "RN" + randomNumber(9999));
	}
	public void enter_InternetBanking_URL() {
		InternetBanking_URL.sendKeys(bankingURL);
	}
	
	public void click_OnSubmitButton() {
		SubmitButton.click();
	}
	
	
	public String getPageTitle() {
		return driver.getTitle();
		
	}
	
	
	
}

//Can do as below as well ----> pass the paremeter as below ---> below is most correct way.
//public void giveAccountTitle(String accountTitle) {
//	ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle + randomNumber(9999));
//}
//public void giveDescription(String description) {
//	DESCRIPTION_ELEMENT.sendKeys(description);
//}
//public void giveInitialBalance(String initialBalance) {
//	INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
//}
//public void giveAccountNumber(String accountNumber) {
//	ACCOUNT_NUMBER_ELEMENT.sendKeys(randomNumber(9999) + "NAN"+ accountNumber);
//}
//public void giveContactPerson(String contactPerson) {
//	CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
//}
//public void givePhoneNumber(String phone) {
//	PHONE_NUMBER_ELEMENT.sendKeys(randomNumber(9999)+"DPN"+ phone);
//}
//public void giveBankingURL(String bankURL) {
//	INTERNET_BANKING_URL_ELEMENT.sendKeys(bankURL);
//}
//public void clickOnSubmitButton() {
//	SUBMIT_BUTTON_ELEMENT.click();
//}
//public String getPageTitle() {
//	return driver.getTitle();
//}
