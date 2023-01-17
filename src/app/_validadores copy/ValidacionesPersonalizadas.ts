import { AbstractControl } from '@angular/forms';

export class ValidacionesPersonalizadas {

    static passwordMatcher(c: AbstractControl) {
        if (!c.get('contrasenia') || !c.get('confirmeContrasenia')) return null;
        return c.get('contrasenia').value === c.get('confirmeContrasenia').value ? null : { 'nomatch': true };
    }
}