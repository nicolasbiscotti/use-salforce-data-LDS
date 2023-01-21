import getAccounts from "@salesforce/apex/AccountController.getAccounts";
import { LightningElement, wire } from "lwc";
import Name from "@salesforce/schema/Account.Name";
import AnnualRevenue from "@salesforce/schema/Account.AnnualRevenue";
import Industry from "@salesforce/schema/Account.Industry";
import { reduceErrors } from "c/ldsUtils";

const COLUMNS = [
  { label: "Account Name", fieldName: Name.fieldApiName, type: "text" },
  {
    label: "Anual Revenue",
    fieldName: AnnualRevenue.fieldApiName,
    type: "currency"
  },
  { label: "Industry", fieldName: Industry.fieldApiName, type: "text" }
];

export default class AccountList extends LightningElement {
  columns = COLUMNS;
  @wire(getAccounts)
  accounts;
  get errors() {
    return this.accounts.error ? reduceErrors(this.accounts.error) : [];
  }
}
