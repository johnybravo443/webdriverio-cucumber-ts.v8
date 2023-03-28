// @ts-nocheck
import Page from "./page.ts";
import { NavbarIFrame } from '../enum-constants/enums.ts'

export default class IframesPage extends Page {
    get navTitles() { return $$("#nav-title") }
    get iframeLocator() { return $("#frame") }
    get homeNavBarLocator() { return $("//a[text()='Home']") }
    get OurProductsNavBarLocator() { return $("//a[text()='Our Products']") }
    get ContactUsNavBarLocator() { return $("//a[text()='Contact Us']") }
    get findOutMoreButtonLocator() { return $("#button-find-out-more") }
    get modelDialogWindow() { return $(".modal-content") }
    get modelDialogFindOutMoreButton() { return $("//button[text()='Find Out More']") }
    get modelTitle() { return $(".modal-content .modal-title") }
    get modelDialogCloseButton() { return $("//button[text()='Close']") }
    get ourProductsSpecialOffers() { return $('#special-offers') }

    constructor() {
        super();
    }

    public async clickOptionOnNavbar(option) {
        switch(option) {
            case NavbarIFrame.Home:
                await this.click(this.homeNavBarLocator)
                break
            case NavbarIFrame.ContactUs:
                await this.click(this.ContactUsNavBarLocator)
                break
            case NavbarIFrame.OutProducts:
                await this.click(this.OurProductsNavBarLocator)
                break
            default:
                throw new error(`no such option ${option}`)
        }
    }
}
