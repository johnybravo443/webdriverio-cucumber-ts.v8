/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    constructor() {
    }

    async pause(pauseTime = 5000) {
        await browser.pause(pauseTime);
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    public async url(path: string) {
        await browser.url(path)
    }

    public async setValue(element: WebdriverIO.Element, text: string|number) {
        const elem = await element
        await elem.setValue(text)
    }

    public async getValue(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.getValue()
    }

    public async getText(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.getText()
    }

    public async click(element: WebdriverIO.Element) {
        const elem = await element
        await elem.click()
    }

    public async getAttribute(element: WebdriverIO.Element, attributeName: string) {
        const elem = await element
        return await elem.getAttribute(attributeName)
    }

    public async getCssProperty(element: WebdriverIO.Element, cssProperty: string) {
        const elem = await element
        return await elem.getCSSProperty(cssProperty)
    }

    public async isClickable(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.isClickable()
    }

    public async isDisplayed(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.isDisplayed()
    }

    public async isEnabled(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.isEnabled()
    }

    public async isExisting(element: WebdriverIO.Element) {
        const elem = await element
        return await elem.isExisting()
    }

    public async selectByVisibleText(element: WebdriverIO.Element, visibleText: string) {
        const elem = await element
        await elem.selectByVisibleText(visibleText)
    }

    public async waitForClickable(element: WebdriverIO.Element, timeout: number, reverse: boolean, interval: number) {
        const elem = await element
        return await elem.waitForClickable({
            timeout: timeout,
            reverse: reverse,
            timeoutMsg: `Element wasn't clickable within timeout ${timeout}`,
            interval: interval
        })
    }

    public async waitForDisplayed(element: WebdriverIO.Element, timeout: number, reverse: boolean, interval: number) {
        const elem = await element
        return await elem.waitForDisplayed({
            timeout: timeout,
            reverse: reverse,
            timeoutMsg: `Element wasn't displayed within timeout ${timeout}`,
            interval: interval
        })
    }

    public async waitForEnabled(element: WebdriverIO.Element, timeout: number, reverse: boolean, interval: number) {
        const elem = await element
        return await elem.waitForEnabled({
            timeout: timeout,
            reverse: reverse,
            timeoutMsg: `Element wasn't enabled within timeout ${timeout}`,
            interval: interval
        })
    }

    public async waitForExist(element: WebdriverIO.Element, timeout: number, reverse: boolean, interval: number) {
        const elem = await element
        return await elem.waitForExist({
            timeout: timeout,
            reverse: reverse,
            timeoutMsg: `Element doesn't exist within timeout ${timeout}`,
            interval: interval
        })
    }

    public async switchToFrame(element: WebdriverIO.Element) {
        const elem = await element
        await browser.switchToFrame(elem)
    }
}
