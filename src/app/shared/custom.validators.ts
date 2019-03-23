import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    // Using closures
    static emailDomain(domainName: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email: String = control.value;
            const domain = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || domain.toLocaleLowerCase() === domainName.toLocaleLowerCase()) {
                return null;
            } else {
                return { 'emailDomain': true };
            }
        };
    }
}
