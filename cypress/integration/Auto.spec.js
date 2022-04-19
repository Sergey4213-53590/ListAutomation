/// <reference types="cypress" />

import { majorPageConstants, resultsPageConstants } from '../assertions/constPage';
import { pageSelector, expressionData, searchName, domElements, web } from '../assertions/pageSelectors';
import assertionHelpers from "../../cypress/utils/assertionHelpers";
import searchHelpers from "../../cypress/utils/searchHelpers"
import Search from './PageObject/search'
import Filter from './PageObject/filters'

import { data } from '../fixtures/data'
import Language from './PageObject/language';



describe("testList", () => {

    const language = new Language()
    const search = new Search()
    const filter = new Filter()

    it("visit webSite", () => {
        language.visitPage()
        cy.wait(3000);
        language.chooseLanguageAm().click();
    })

    it("headerAssertions", () => {
        language.assertionsAm()
    })



    // it("search", () => {
    //     // search.checkSearchBoxVisibility().should(expressionData.visible)  //check searchBox visibility
    //     // search.typeText().type(`${data.typeText1}`)
    //     // search.checkSearchSuggest().should(expressionData.containText, `${data.typeText1}`) //check search suggest
    //     // search.checkTextVisibility().should(expressionData.visible) //check text visibility
    //     // search.clickBtnSearch().click()
    //     // search.checkSearchResult().should(expressionData.containText, `${data.typeText1}`); //check search result
    //     // search.searchBoxClear().clear()
    //     // search.listAmButton().click()
    //     // search.typeText().click()
    //     // search.checkSearchHistory().should(expressionData.containText, `${data.typeText1}`) // check search history
        
    // })

    it("searchBoxVisibility", () =>{
        //check search box visibility
        search.checkSearchBoxVisibility().should(expressionData.visible) 

        // check placeholder visible
        search.placeholderVisible().should('contain', data.placeholder) 

        // check letter visibility
        search.typeText().type(`${data.typeText1}`) 

        // check placeholder invisible
        search.placeholderVisible().should('contain', '') 

        // check border radius
        search.typeText().should(domElements.haveCss, domElements.borderRadius, domElements.radiusPx)

        // check searchBox size
        search.typeText().should(domElements.haveCss, domElements.height, domElements.heightPx,)  

        // check font size
        search.typeText().should(domElements.haveCss, domElements.fontSize, domElements.fontPx) 

        // check font color
        search.typeText().should(domElements.haveCss, domElements.color, domElements.colorRgb) 
        
        // check placeholder after delete keyword
        search.searchBoxClear().clear()
        search.placeholderVisible().should('contain', data.placeholder)
    })

    it("searchBoxHistory", () =>{

        // check search history 
        search.typeText().type(`${data.typeText1}`)
        search.clickBtnSearch().click()
        search.searchBoxClear().clear()
        search.listAmButton().click()
        search.typeText().click()
        search.checkSearchHistory().should(expressionData.containText, `${data.typeText1}`)

        // check without history
        search.typeText().click()
        search.clearListBtn().click()
        search.checkSearchHistory().should(expressionData.containText, '')

        //check search history
        search.checkSearchHistory().should(expressionData.containText, `${data.typeText1}`) 

        //check clear search history
        search.clearListBtn().click()
        search.checkSearchHistory().should(expressionData.containText, '')

    })

    it("searchboxFlexibility", () =>{
        //check search result
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check search result
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check click enter
        search.clickBtnSearch().type('{enter}') 
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check press enter
        search.clickBtnSearch().type('{enter}') 
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        // check different word order
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

         // check word order without space
         search.typeText().type(`${data.typeText}`)
         search.clickBtnSearch().click()
         search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

         // check word wrong keyboard layout
         search.typeText().type(`${data.typeText}`)
         search.clickBtnSearch().click()
         search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

         // check word with foreign language shrift
         search.typeText().type(`${data.typeText}`)
         search.clickBtnSearch().click()
         search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        
    })

    it("specialCharacters", () =>{
        
        // check any special characters
         search.typeText().type(`${data.typeText2}`)
         search.clickBtnSearch().click()
         cy.get(domElements.homePage).reload()
         
        // check reload page
        search.clickBtnSearch().type('{enter}')
        cy.get(domElements.homePage).reload()

        //check any positive number
         search.typeText().type(`${data.typeText}`)
         search.clickBtnSearch().click()
         search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check any negative number
         search.typeText().type(`${data.typeText}`)
         search.clickBtnSearch().click()
         search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check maxLength searchBox
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        cy.get(`${data.typeText}`).should('not.have.length', 33)
        
    })

    it("resultPage", () =>{
        //check result page title
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, 'result title element')

        //check result page reload
        search.typeText().type(`${data.typeText}`)
        search.clickBtnSearch().click()
        search.clickBtnSearch().type('{enter}')

        
    })

    it("searchResult", () =>{

        //check suggest keyword 
        search.typeText().type(`${data.typeText}`)
        search.checkSearchSuggest().should(expressionData.containText, `${data.typeText}`)

        // check search results
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, `${data.typeText}`)

        //check one letter
        search.typeText().type(`${data.typeText3}`)
        search.checkSearchSuggest().should(expressionData.containText, `${data.typeText3}`)
    })





    // it("filters", () => {
        // assertionHelpers.location(web.pathName,web.path)
    //     filter.clickBtnLookingFor().click()
    //     filter.clickBtnSuggest().click()
    //     filter.clickBtnWithPicture().click()
    //     filter.clickDistrict().click()
    //     filter.districtNorNorq().click()
    //     filter.clickMinPrice().click()
    //     filter.clickMinPrice().type(`${data.typeMinPrice}`)
    //     filter.clickMaxPrice().click()
    //     filter.clickMaxPrice().type(`${data.typeMaxPrice}`)
    //     filter.clickExChange().click()
    //     filter.chooseCurrencyAmd().click()

    // })

    // it("resultAssertions", () => {
    //     assertionHelpers.checkTextFirst(pageSelector.offerId, resultsPageConstants.offer)
    //     assertionHelpers.checkTextEq(pageSelector.offerId, resultsPageConstants.lookingFor)
    //     assertionHelpers.checkTextLast(pageSelector.offerId, resultsPageConstants.withPhoto)
    //     assertionHelpers.checkTextFindFirst(pageSelector.regionId, resultsPageConstants.region)
    //     assertionHelpers.checkTextWithoutFind(pageSelector.norNorqId, resultsPageConstants.norNorq)

    // })
});