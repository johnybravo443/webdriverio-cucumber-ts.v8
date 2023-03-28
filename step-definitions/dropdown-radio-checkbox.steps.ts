// @ts-nocheck
import {Given, When, Then} from '@wdio/cucumber-framework'
import DropdownRadioCheckboxPage from "../pageobjects/dropdown-radio-checkbox.page.ts";

const dropdownRadioCheckboxPage = new DropdownRadioCheckboxPage()

Given(/^I am on dropdown menu, checkboxes and radio buttons page$/, async () => {
    allureReporter.addStep('validate if dropdown menu, checkboxes and radio buttons page is displayed')
    await expect(dropdownRadioCheckboxPage.navbarHeader).toBeDisplayed()
})

Given(/^I select (.*) from dropdown one$/, async (value) => {
    allureReporter.addStep(`Selecting ${value} from dropdown one`)
    await dropdownRadioCheckboxPage.selectFromDropdownOne(value)
})

Given(/^I select (.*) from dropdown two$/, async (value) => {
    allureReporter.addStep(`Selecting ${value} from dropdown two`)
    await dropdownRadioCheckboxPage.selectFromDropdownTwo(value)
})

Given(/^I select (.*) from dropdown three$/, async (value) => {
    allureReporter.addStep(`Selecting ${value} from dropdown three`)
    await dropdownRadioCheckboxPage.selectFromDropdownThree(value)
})
