import { AbstractControl } from '@angular/forms';

export function CellPhone(control: AbstractControl) {

  const regex = /^\((?:\d{2})\)\s[6-9]\d{4}[-]\d{4}$/gm;
  const regex2 = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

  if (!regex2.test(control.value)) {
    return { cellPhone: true};
  }
  return null;
}
