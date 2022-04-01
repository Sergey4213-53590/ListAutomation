/// <reference types="cypress" />

import { majorPageConstants,resultsPageConstants } from '../assertions/constPage';
import { pageSelector, searchName, web,domElements} from '../assertions/pageSelectors';
import assertionHelpers from "../../cypress/utils/assertionHelpers"


describe("testList", () => {

    it("visit webSite", () => {
        cy.visit(web.website)
    })

    it("search", () => {
        cy.get(pageSelector.searchId).type(searchName.searching);
        cy.get(pageSelector.buttonId).click();
        
    })

    it("majorAssertions", () => {
        assertionHelpers.checkPageOne(pageSelector.jobId,majorPageConstants.job);
        assertionHelpers.checkPageOne(pageSelector.serviceId,majorPageConstants.service);
        assertionHelpers.checkPageOne(pageSelector.realEstateId,majorPageConstants.realEstate);
        assertionHelpers.checkPageOne(pageSelector.transportId,majorPageConstants.transport);
        assertionHelpers.checkPageOne(pageSelector.elektronicsId,majorPageConstants.elektronics);
        assertionHelpers.checkPageOne(pageSelector.fashionId,majorPageConstants.fashion);
        assertionHelpers.checkPageOne(pageSelector.homeGardenId,majorPageConstants.homeGarden);
        assertionHelpers.checkPageOne(pageSelector.houseHoldAppliancesId,majorPageConstants.houseHoldAppliances);
        assertionHelpers.checkPageOne(pageSelector.equipmentId,majorPageConstants.equipment);

    })

    it("choose car", () => {
        assertionHelpers.location(web.pathName,web.path)
        assertionHelpers.click(pageSelector.lookingFor)
        assertionHelpers.click(pageSelector.withPicture)
        assertionHelpers.click(pageSelector.districtId)
        assertionHelpers.click(pageSelector.districtName)
        
    })

    it("resultAssertions", () => {
        assertionHelpers.checkTextFirst(pageSelector.offerId,resultsPageConstants.offer)
        assertionHelpers.checkTextEq(pageSelector.offerId,resultsPageConstants.lookingFor)
        assertionHelpers.checkTextLast(pageSelector.offerId,resultsPageConstants.withPhoto)
        assertionHelpers.checkTextFindFirst(pageSelector.regionId,resultsPageConstants.region)
        assertionHelpers.checkTextWithoutFind(pageSelector.norNorqId,resultsPageConstants.norNorq)

    })
});