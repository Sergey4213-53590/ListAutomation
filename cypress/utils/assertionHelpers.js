import {domElements} from '../assertions/pageSelectors';

export default {
    checkPageOne: (selector,text) => {
        cy.get(selector).invoke(domElements.text).should(domElements.equal,text)
    },

    click: (pageSelector) => {
        cy.get(pageSelector).click();
    },

    location: (web,webPath) => {
        cy.location(web).should(domElements.equal,webPath)
    },

    checkTextFirst: (pageSelector,text) => {
        cy.get(pageSelector).find(domElements.div).first().find(domElements.label).invoke(domElements.text).should(domElements.equal,text)
    },

    checkTextEq: (pageSelector,text) => {
        cy.get(pageSelector).find(domElements.div).eq(1).find(domElements.label).invoke(domElements.text).should(domElements.equal,text)
    },

    checkTextLast: (pageSelector,text) => {
        cy.get(pageSelector).find(domElements.div).last().find(domElements.label).invoke(domElements.text).should(domElements.equal,text)
    },

    checkTextFindFirst: (pageSelector,text) => {
        cy.get(pageSelector).find(domElements.div).first().invoke(domElements.text).should(domElements.equal,text)
    },

    checkTextWithoutFind:(pageSelector,text) => {
        cy.get(pageSelector).first().invoke(domElements.text).should(domElements.equal,text)
    }

}