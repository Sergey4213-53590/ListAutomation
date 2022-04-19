import { pageSelector, searchName, web, domElements} from '../../assertions/pageSelectors'
import { assertionHelpers} from '../../utils/assertionHelpers'
import {data} from '../../fixtures/data'
class Search {


    typeText(){
        return cy.get(pageSelector.searchId)
    }
    clickBtnSearch(){
        return cy.get(pageSelector.buttonId)
    }
    checkSearchResult(){
        return cy.get(pageSelector.resultId)
    }
    checkSearchHistory(){
        return cy.get(pageSelector.historyId).eq(0).find('a')
    }
    checkSearchSuggest(){
        return cy.get(pageSelector.suggestId).eq(0).find('a')
    }
    checkTextVisibility(){
        return cy.contains(`${data.typeText1}`)
    }
    checkSearchBoxVisibility(){
        return cy.get(searchName.searchBoxId)
    }
    searchBoxClear(){
        return cy.get(searchName.searchBoxId)
    }
    listAmButton(){
        return cy.get(searchName.listId)
    }
    placeholderVisible(){
        return cy.get(pageSelector.searchId).invoke(domElements.attr, searchName.placeHolderId)
    }
    clearListBtn(){
        return cy.get(pageSelector.clearListId)
    }
    
}

export default Search

