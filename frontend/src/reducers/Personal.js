import * as actionTypes from '../actions/Student'

const initialState = {
    rollNo: '',
    aadharNumber: '',
    pancardNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber1: '',
    mobileNumber2: '',
    email: '',
    alternateEmail: '',
    dateOfBirth: new Date(),
    gender: '',
    currentAddress: '',
    permanentAddress: '',
    valid: false,
    formErrors: {
        rollNo: '',
        aadharNumber: '',
        //pancardNumber:'',
        email:'',
        alternateEmail:'',
        mobileNumber1:'',
        mobileNumber2:'',
    }
}

const reducer = (state = initialState, action) => {
    
    let value = action.value == undefined ? '': action.value
    switch (action.type) {
        case actionTypes.CHANGE:
            let errors = {
                ...state.formErrors,
            }
            let error = ''
            switch (action.parName) {
                case 'rollNo':
                    error = (value.length ===5 && value[0]==='3') ? '': 'TE roll number should be 5 digits and start with 3'
                    break;
                case 'aadharNumber':
                    error = (value.length === 12)? '' : 'Aadhar number should be 12 digits'
                    break;
                case 'mobileNumber1':
                case 'mobileNumber2':
                    const reg2 = /^\d{10}$/
                    error = ( reg2.test(value)) ? '' : 'Mobile number should be 10 digits';
                    break;
                case 'email':
                case 'alternateEmail':
                    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                    error = reg.test(value)? '':'Invalid email'
            }
            errors = {
                ...errors,
                [action.parName]: error,
            }
            let v = true;
            if (Object.values(errors).some((error) => error.length > 0)) {
                v = false;
            }
            return {
                ...state,
                [action.parName]: action.value,
                formErrors: {
                    ...errors,
                },
                valid: v,
            }
        case actionTypes.CHANGE_DATE:
            return {
                ...state,
                [action.parName]: action.value,
            }
        case actionTypes.HANDLE_NEXT_PERSONAL:
            return {
                ...state,
            }
    }
    return state;
}

export default reducer;
