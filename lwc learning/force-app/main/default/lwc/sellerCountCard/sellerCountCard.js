import { LightningElement,wire } from 'lwc';

import getSellerCount from '@salesforce/apex/AccountControllerLWC.getSellerCount';
//import getActiveSellerCount from '@salesforce/apex/AccountControllerLWC.getActiveSellerCount';

export default class AccountList extends LightningElement {
    
    @wire(getSellerCount)
    count;
}