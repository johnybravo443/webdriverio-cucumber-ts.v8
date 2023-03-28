// @ts-nocheck
import {Given, When, Then} from '@wdio/cucumber-framework'
import {CONTACT_US_SUCCESS_MESSAGE, ERROR_ALL_FIELD_REQUIRED} from '../enum-constants/constants.ts'
import ContactUsPage from "../pageobjects/contact-us.page.ts"

const contactUsPage = new ContactUsPage()

Given(/^I am on contact us page$/, async () => {
    allureReporter.addStep('validate if contact us page is displayed')
    await expect(await contactUsPage.contactUsFormLocator).toBeDisplayed()
})

Given(/^I enter the following contact details$/, async (table) => {
    const details = table.hashes()
    await contactUsPage.setFirstname(details[0].firstName)
    await contactUsPage.setLastname(details[0].lastName)
    await contactUsPage.setEmail(details[0].email)
    await contactUsPage.setComment(details[0].comments)
})

When(/^I click on submit$/, async () => {
    allureReporter.addStep('clicking on submit button')
    await contactUsPage.submit()
})

Then(/^The form is submitted successfully$/, async () => {
    expect(await contactUsPage.contactSubmittedSuccessMsgLocator).toBeDisplayed()
    expect(await contactUsPage.contactSubmittedSuccessMsgLocator).toHaveText(CONTACT_US_SUCCESS_MESSAGE)
    await contactUsPage.pause(2000)
    allureReporter.addStep('The form was submitted successfully')
})

Then(/^Unsuccessful submission error message is displayed$/, async () => {
    expect(await contactUsPage.unsuccessfulSubmitErrorMsgLocator).toHaveTextContaining(ERROR_ALL_FIELD_REQUIRED)
    allureReporter.addStep('Unsuccessful submission error message is displayed')
})
