/// <reference types="cypress" />

import { majorPageConstants, resultsPageConstants } from '../assertions/constPage';
import { pageSelector, expressionData, searchName, web } from '../assertions/pageSelectors';
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



    it("search", () => {
        search.checkSearchBoxVisibility().should(expressionData.visible)  //check searchBox visibility
        search.typeText().type(`${data.typeText1}`)
        search.checkSearchSuggest().should(expressionData.containText, `${data.typeText1}`) //check search suggest
        search.checkTextVisibility().should(expressionData.visible) //check text visibility
        search.clickBtnSearch().click()
        search.checkSearchResult().should(expressionData.containText, `${data.typeText1}`); //check search result
        search.searchBoxClear().clear()
        search.listAmButton().click()
        search.typeText().click()
        search.checkSearchHistory().should(expressionData.containText, `${data.typeText1}`) // check search history
        
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