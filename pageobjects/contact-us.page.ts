// @ts-nocheck
import Page from "./page.ts";

export default class ContactUsPage extends Page {

    get contactUsFormLocator() { return $("#contact_form") }
    get firstNameLocator() { return $("[name='first_name']")}
    get lastNameLocator() { return $("[name='last_name']") }
    get emailLocator() { return $("[name='email']") }
    get commentsLocator() { return $("[name='message']") }
    get submitButtonLocator() { return $("[type='submit']") }
    get resetButtonLocator() { return $("[type='reset']") }

    get contactSubmittedSuccessMsgLocator() { return $('h1') }
    get unsuccessfulSubmitErrorMsgLocator() { return $('body') }

    constructor() {
        super();
    }

    public async isContactUsFormDisplayed() {
        return await this.isDisplayed(this.contactUsFormLocator)
    }

    public async setFirstname(firstname: string) {
        allureReporter.addStep('set firstname')
        await this.setValue(this.firstNameLocator, firstname)
    }

    public async setLastname(lastname: string) {
        allureReporter.addStep('set lastname')
        await this.setValue(this.lastNameLocator, lastname)
    }

    public async setEmail(email: string) {
        allureReporter.addStep('set email')
        await this.setValue(this.emailLocator, email)
    }

    public async setComment(comment: string) {
        allureReporter.addStep('set comment')
        await this.setValue(this.commentsLocator, comment)
    }

    public async submit() {
        allureReporter.addStep('clicking on submit button')
        await this.click(this.submitButtonLocator)
    }

    public async getSuccessMessage() {
        return await this.getText(this.contactSubmittedSuccessMsgLocator)
    }
}
