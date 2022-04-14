import { pageSelector,web} from '../../assertions/pageSelectors'
import assertionHelpers from "../../utils/assertionHelpers"
import { majorPageConstants,resultsPageConstants } from '../../assertions/constPage';



class Language {

    visitPage() {
        return cy.visit(web.website);
    }
    chooseLanguageAm() {
        return cy.get(".bar > a").eq(0)
    }
    assertionsAm() {
        assertionHelpers.checkPageOne(pageSelector.jobId,majorPageConstants.jobAm);
        assertionHelpers.checkPageOne(pageSelector.serviceId,majorPageConstants.serviceAm);
        assertionHelpers.checkPageOne(pageSelector.realEstateId,majorPageConstants.realEstateAm);
        assertionHelpers.checkPageOne(pageSelector.transportId,majorPageConstants.transportAm);
        assertionHelpers.checkPageOne(pageSelector.elektronicsId,majorPageConstants.elektronicsAm);
        assertionHelpers.checkPageOne(pageSelector.fashionId,majorPageConstants.fashionAm);
        assertionHelpers.checkPageOne(pageSelector.homeGardenId,majorPageConstants.homeGardenAm);
        assertionHelpers.checkPageOne(pageSelector.houseHoldAppliancesId,majorPageConstants.houseHoldAppliancesAm);
        assertionHelpers.checkPageOne(pageSelector.equipmentId,majorPageConstants.equipmentAm);
    }
    chooseLanguageRu() {
        return cy.get(".bar > a").eq(1)

    }
    assertionsRu() {
        assertionHelpers.checkPageOne(pageSelector.jobId,majorPageConstants.jobRu);
        assertionHelpers.checkPageOne(pageSelector.serviceId,majorPageConstants.serviceRu);
        assertionHelpers.checkPageOne(pageSelector.realEstateId,majorPageConstants.realEstateRu);
        assertionHelpers.checkPageOne(pageSelector.transportId,majorPageConstants.transportRu);
        assertionHelpers.checkPageOne(pageSelector.elektronicsId,majorPageConstants.elektronicsRu);
        assertionHelpers.checkPageOne(pageSelector.fashionId,majorPageConstants.fashionRu);
        assertionHelpers.checkPageOne(pageSelector.homeGardenId,majorPageConstants.homeGardenRu);
        assertionHelpers.checkPageOne(pageSelector.houseHoldAppliancesId,majorPageConstants.houseHoldAppliancesRu);
        assertionHelpers.checkPageOne(pageSelector.equipmentId,majorPageConstants.equipmentRu);
    }
    chooseLanguageEn() {
        return cy.get(".bar > a").eq(2)
    }
    assertionsEn() {
        assertionHelpers.checkPageOne(pageSelector.jobId,majorPageConstants.jobEn);
        assertionHelpers.checkPageOne(pageSelector.serviceId,majorPageConstants.serviceEn);
        assertionHelpers.checkPageOne(pageSelector.realEstateId,majorPageConstants.realEstateEn);
        assertionHelpers.checkPageOne(pageSelector.transportId,majorPageConstants.transportEn);
        assertionHelpers.checkPageOne(pageSelector.elektronicsId,majorPageConstants.elektronicsEn);
        assertionHelpers.checkPageOne(pageSelector.fashionId,majorPageConstants.fashionEn);
        assertionHelpers.checkPageOne(pageSelector.homeGardenId,majorPageConstants.homeGardenEn);
        assertionHelpers.checkPageOne(pageSelector.houseHoldAppliancesId,majorPageConstants.houseHoldAppliancesEn);
        assertionHelpers.checkPageOne(pageSelector.equipmentId,majorPageConstants.equipmentEn);
    }
}

export default Language