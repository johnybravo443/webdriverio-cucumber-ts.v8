// @ts-nocheck
import Page from "./page.ts";

export default class DropdownRadioCheckboxPage extends Page {
    get navbarHeader() { return $(".navbar-header") }
    get dropdownone() { return $("#dropdowm-menu-1") }
    get dropdowntwo() { return $("#dropdowm-menu-2") }
    get dropdownthree() { return $("#dropdowm-menu-3") }

    constructor() {
        super();
    }

    public async selectFromDropdownOne(value) {
        await this.selectByVisibleText(this.dropdownone, value)
        await this.pause(2000)
    }

    public async selectFromDropdownTwo(value) {
        await this.selectByVisibleText(this.dropdowntwo, value)
        await this.pause(2000)
    }

    public async selectFromDropdownThree(value) {
        await this.selectByVisibleText(this.dropdownthree, value)
        await this.pause(2000)
    }
}
