import { AbstractControl } from '@angular/forms';

export function FullName(control: AbstractControl) {

  const regex = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

  if (!regex.test(control.value)) {
    return { 'fullName': true };
  }
  return null;
}
