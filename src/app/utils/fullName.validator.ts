import { AbstractControl } from '@angular/forms';

export function FullName(control: AbstractControl) {

  // const regex = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s{1,2}[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;

  const regex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/g;

  if (!regex.test(control.value)) {
    return { 'fullName': true };
  }
  return null;
}
