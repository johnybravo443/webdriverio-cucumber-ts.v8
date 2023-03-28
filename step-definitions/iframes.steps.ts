// @ts-nocheck
import {Given, When, Then} from '@wdio/cucumber-framework'
import {IFRAME_PAGE_HEADER} from '../enum-constants/constants.ts'
import IframesPage from "../pageobjects/iframes.page.ts";

const iframesPage = new IframesPage()

Given(/^I am on IFrames page$/, async () => {
    allureReporter.addStep('I am on IFrames page')
    await expect(await iframesPage.navTitles[0]).toHaveText(IFRAME_PAGE_HEADER)
})

Given(/^I switch to iframe$/, async () => {
    allureReporter.addStep('I switch to iframe')
    await iframesPage.switchToFrame(iframesPage.iframeLocator)
})

When(/^I click on navbar option (.*)$/, async (option) => {
    allureReporter.addStep('II click on navbar option')
    await iframesPage.clickOptionOnNavbar(option)
})

Then(/^Special Offers page is displayed$/, async () => {
    allureReporter.addStep('I verify that special Offers page is displayed')
    await expect(iframesPage.ourProductsSpecialOffers).toBeDisplayed()
})
