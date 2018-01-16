package demo.webservice.automation.testrunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty","html:target/cucumber-html-report"},
        glue = {"demo.webservice.automation.stepdefs"},
        features = {"src/test/java/demo/webservice/automation/features/"})
public class CucumberTest {
}
