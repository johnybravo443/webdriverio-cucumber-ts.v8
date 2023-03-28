Feature: contact us page tests

  Background:
    Given I navigate to url /Contact-Us/contactus.html
    And I am on contact us page

  @contactus
  Scenario: Submit the form successfully with valid data
    And I enter the following contact details
      | firstName | lastName  | email             | comments    |
      | John      | Man       | johnman@gmail.com | this is it  |
    When I click on submit
    Then The form is submitted successfully

  @contactus
  Scenario: Submit a blank form throws validation errors
    When I click on submit
    Then Unsuccessful submission error message is displayed
