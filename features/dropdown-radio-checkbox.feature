Feature: Dropdown Menu(s), Checkboxe(s) & Radio Button(s)

  Background:
    Given I navigate to url /Dropdown-Checkboxes-RadioButtons/index.html
    And I am on dropdown menu, checkboxes and radio buttons page

  @dropradiocheck
  Scenario: Select following values from the dropdown
    And I select Python from dropdown one
    And I select JUnit from dropdown two
    And I select CSS from dropdown three

