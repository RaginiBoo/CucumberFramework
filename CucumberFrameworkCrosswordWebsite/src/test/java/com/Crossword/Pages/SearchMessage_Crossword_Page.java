package com.Crossword.Pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.Crossword.ExcelUtility.Crossword_Excel;

public class SearchMessage_Crossword_Page 
{

	WebDriver driver;
	 
	//Adding books to the wishlist
	By newSellers = By.xpath("//*[@id=\"content-slot\"]/div[4]/div/div/div/div[2]/div/a/img");
	By books =By.xpath("//*[@id=\"content-slot\"]/div[2]/div/div[4]/ul/div/div/li[2]/div/div[2]/span[1]/a");
	By wishlist = By.className("button");
	
	//Deleting the book in the wishlist
	By mywishlist = By.linkText("My Wish List");
	By delete1 = By.linkText("Delete");
	
	public void LaunchBrowser() throws IOException 
	{ 
		System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe"); //Declaration and instantiation of objects/variables
		driver = new ChromeDriver(); //Browser we want to launch
		driver.manage().window().maximize(); //To maximize the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); //Wait for mentioned time
	}
	
	//To take the screenshot
	public void screenshot(String path) throws IOException
	{
		TakesScreenshot ts =((TakesScreenshot)driver); //Convert web driver object to TakeScreenshot
		File SrcFile = ts.getScreenshotAs(OutputType.FILE); //Call getScreenshotAs method to create image file
		FileUtils.copyFile(SrcFile, new File(path)); //Copy file at destination
	}
	
	//Using webdriver get visting the testing Website and login
	public void HomePage() throws IOException 
	{
		driver.get("https://www.crossword.in/"); //Launch Chrome and direct it to the URL
		System.out.println(driver.getTitle()); //Gett the actual value of the title
		
		Crossword_Excel data = new Crossword_Excel(); 
		driver.findElement(By.linkText("Login")).click();
		driver.findElement(By.id("user_session_email")).sendKeys(data.excel_username(1)); 
		driver.findElement(By.id("user_session_password")).sendKeys(data.excel_password(1));
		driver.findElement(By.xpath("//*[@id=\"user_session_submit\"]")).click();
	}
	
	//Searching for the books to add and delete wishlist
	public void searchWishlist() throws InterruptedException 
	{
		driver.findElement(newSellers).click(); //Adding the book in the wishlist
		driver.findElement(books).click();
		Thread.sleep(2000);
		driver.findElement(wishlist).click();
		Thread.sleep(2000);
		driver.findElement(mywishlist).click(); //Deleting the book in the wishlist
		driver.findElement(delete1).click();
	}
	
	//To send message to the customer care
	public void message() 
	{
		driver.findElement(By.linkText("Feedback")).click();
		driver.findElement(By.xpath("//*[@id=\"somethingElseQueryLink\"]/span")).click();
		driver.findElement(By.id("contact_us_name")).sendKeys("Ragini Boobalan");
		driver.findElement(By.id("contact_us_email")).sendKeys("raginiboo@gmail.com");
		driver.findElement(By.id("contact_us_state")).sendKeys("Puducherry");
		driver.findElement(By.id("contact_us_mobile_number")).sendKeys("9445600481");
		driver.findElement(By.id("contact_us_landline")).sendKeys("04132655743");
		driver.findElement(By.id("contact_us_category")).sendKeys(Keys.DOWN);
		driver.findElement(By.id("contact_us_category")).sendKeys(Keys.ENTER);
		driver.findElement(By.id("contact_us_message")).sendKeys("Have some problem in adding to cart and removing it again");
		driver.findElement(By.id("contact_us_submit")).click();
	}
	
	public void closePage()
	{
		driver.findElement(By.linkText("Logout")).click(); //Logout Operation
		driver.close(); //To closes the current open window
	}
}
