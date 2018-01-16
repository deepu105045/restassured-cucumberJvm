package demo.webservice.automation.stepdefs;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static io.restassured.path.json.JsonPath.from;
import static org.hamcrest.Matchers.*;

import io.restassured.RestAssured.*;
import io.restassured.matcher.RestAssuredMatchers.*;
import org.hamcrest.Matcher.*;
import org.hamcrest.Matchers;
import org.junit.Assert;


public class UserManagementStepDefinition {

    private RequestSpecification request;
    private Response response;
    private String baseUri = "https://reqres.in";
    private String json;

    @Before
    public void setup(){
        RestAssured.baseURI = baseUri;
        request = given();
    }

    @When("^Client performs a GET on (.*)$")
    public void performGetOnPath(String path)  {
        response = request.when().get(path);
        json = response.body().asString();
    }

    @Then("^Service should return status code (\\d+)$")
    public void service_should_return_status_code(int statusCode)  {
        response.then().assertThat().statusCode(statusCode);
    }

    @Then("^Response body should have attribute (.*) with integer value as (.*)$")
    public void response_body_should_have_attribute_with_value_as(String attribute, int expectedValue)  {
        Assert.assertEquals(from(json).get(attribute),expectedValue);
    }

    @Then("^All the items in the array \"([^\"]*)\" has \"([^\"]*)\" field$")
    public void all_the_items_in_the_array_has_field(String root, String attribute)  {
        response.then().assertThat().body("data.any { it.containsKey('"+attribute+"') }", is(true));
    }
}
