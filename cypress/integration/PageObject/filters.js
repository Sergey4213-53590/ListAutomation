import { pageSelector, searchName, web, domElements} from '../../assertions/pageSelectors'
import { assertionHelpers} from '../../utils/assertionHelpers'



class Filter {

    clickBtnSuggest(){
        return cy.get(pageSelector.suggest)
    }

    clickBtnLookingFor(){
        return cy.get(pageSelector.lookingFor)
    }

    clickBtnWithPicture(){
        return cy.get(pageSelector.withPicture)
    }

    clickDistrict(){
        return cy.get(pageSelector.districtId)
    }
    districtArabkir(){
        return cy.contains(pageSelector.arabkir)
    }
    districtNorNorq(){
        return cy.contains(pageSelector.norNorq)
    }

    clickMinPrice(){
        return cy.get(pageSelector.minPrice)
    }

    clickMaxPrice(){
        return cy.get(pageSelector.maxPrice)
    }
    clickExChange(){
        return cy.get(pageSelector.exChange)
    }
    chooseCurrencyAmd(){
        return cy.contains(pageSelector.amd)
    }
    chooseCurrencyUsd(){
        return cy.contains(pageSelector.usd)
    }
    
}


export default Filter
