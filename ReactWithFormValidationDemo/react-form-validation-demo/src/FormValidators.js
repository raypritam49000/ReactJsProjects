import validator from 'validator';

export default class FormValidator {

    constructor(validtns) {
        this.validations = validtns
        console.log(this.validations);
    }

    validate(state) {

        let validation = this.valiationInit();
        console.log(validation);
        console.log(state);

        this.validations.forEach(v => {

            if (!validation[v.field].isInvalid) {

                const value = state[v.field].toString();
                console.log(value);

                const args = v.args || [];
                console.log(args);

                const method = typeof v.method === 'string' ? validator[v.method] : v.method;
                console.log(method);

                if (method(value, ...args, state) !== v.validWhen) {
                    validation[v.field] = { isInvalid: true, message: v.message }
                    console.log(validation);
                    validation.isValid = false;
                    console.log(validation);
                }
            }
        });
        return validation;
    }

    valiationInit() {

        const validation = {}

        this.validations.map(v => {
            return validation[v.field] = { isInvalid: false, message: '' }
        })

        console.log({ isValid: true, ...validation });
        return { isValid: true, ...validation }
    }


}
