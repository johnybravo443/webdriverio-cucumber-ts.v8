Feature: IFrames page tests

  Background:
    Given I navigate to url /IFrame/index.html
    And I am on IFrames page

  @iframe
  Scenario: Our Products
    And I switch to iframe
    When I click on navbar option Out Products
    Then Special Offers page is displayed
