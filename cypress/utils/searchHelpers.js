import {domElements} from '../assertions/pageSelectors';
import { pageSelector, searchName, web} from '../assertions/pageSelectors';


export default {
    search: (text) => {
        cy.get(pageSelector.searchId).type(text);
    }
    
}