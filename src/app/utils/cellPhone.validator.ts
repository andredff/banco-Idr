import { AbstractControl } from '@angular/forms';

export function CellPhone(control: AbstractControl) {

  const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

  if (!regex.test(control.value)) {
    return { cellPhone: true};
  }
  return null;
}
