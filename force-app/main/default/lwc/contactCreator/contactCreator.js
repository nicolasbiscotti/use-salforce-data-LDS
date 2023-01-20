import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import CONTACT from "@salesforce/schema/Contact";
import FIRST_NAME from "@salesforce/schema/Contact.FirstName";
import LAST_NAME from "@salesforce/schema/Contact.LastName";
import EMAIL from "@salesforce/schema/Contact.Email";

export default class ContactCreator extends LightningElement {
  objectApiName = CONTACT;
  fields = [FIRST_NAME, LAST_NAME, EMAIL];
  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Contact created",
      message: "Contact ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }
}
