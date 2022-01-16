package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;

	}

	// login data
	String userName = "demo@techfios.com";
	String password = "abc123";

//	//storing element with by class
//	By userNameField = By.xpath("//input[@id='username']");
//	By passWordField = By.xpath("//*[@id=\"password\"]");
//	By signInButtonField = By.xpath("/html/body/div/div/div/from/div/");

	// Element Library //storing elements using @FindBy
	@FindBy(how = How.XPATH, using = "//input[@id='username']")WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")WebElement SignInButton;

//Methods to interact with the elements
	public void enterUserName(String userName) {
		UserName.sendKeys(userName);
	}

	public void enterPassword(String password) {
		Password.sendKeys(password);
	}

	public void clickSignInButton() {
		SignInButton.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}
}
