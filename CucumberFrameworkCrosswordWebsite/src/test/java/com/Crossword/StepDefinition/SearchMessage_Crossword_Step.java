package com.Crossword.StepDefinition;

import com.Crossword.Pages.SearchMessage_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchMessage_Crossword_Step 
{

	SearchMessage_Crossword_Page MySearchMessage = new SearchMessage_Crossword_Page();
	
	@Given("^User launch the Chrome application$")
	public void user_launch_the_Chrome_application() throws Throwable
	{
		MySearchMessage.LaunchBrowser();
	}

	@When("^Open the Crossword Home page and login$")
	public void open_the_Crossword_Home_page_and_login() throws Throwable
	{
		MySearchMessage.HomePage();
	}

	@Then("^User search for the books to add wishlist and delete wishlist$")
	public void user_search_for_the_books_to_add_wishlist_and_delete_wishlist() throws Throwable 
	{
		MySearchMessage.searchWishlist();
		MySearchMessage.screenshot("src/test/resources//Screenshot//searchWishlist.png");
	}

	@Then("^User send a message to customer care$")
	public void user_send_a_message_to_customer_care() throws Throwable 
	{
		MySearchMessage.message();
		MySearchMessage.screenshot("src/test/resources//Screenshot//Message.png");
	}

	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable
	{
		MySearchMessage.closePage();
	}
}
