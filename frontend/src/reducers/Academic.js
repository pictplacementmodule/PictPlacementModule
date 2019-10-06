import * as actionTypes from '../actions/Student'

const initialState = {
    branch: '',
    collegeId: '',
    prnNumber: '',
    diploma: false,
    percentage: {
        tenth: '',
        twelfth: '',
        diploma: '',
        engineering: '',
    },
    boardOfEducation: {
        tenth: '',
        twelfth: '',
        diploma: '',
    },
    yearOfPassing: {
        tenth: new Date(),
        twelfth: new Date(),
        diploma: new Date(),
    },
    educationGap: {
        tenth: '',
        twelfth: '',
        diploma: '',
    },
    reasonOfGap: {
        tenth: '',
        twelfth: '',
        diploma: '',
    },
    engineeringStartYear: new Date(),
    sgpa: {
        fefs: '',
        fess: '',
        sefs: '',
        sess: '',
        tefs: '',
        tess: '',
        aggregate: '',
    },
    marks: {
        fefs: '',
        fess: '',
        sefs: '',
        sess: '',
        tefs: '',
        tess: '',
    },
    activeBacklogs: '',
    passiveBacklogs: '',
    yeardowns: '',
    skill:[],
    valid: false,
    formErrors: {
        percentage: {
            tenth: '',
            twelfth: '',
            diploma: '',
            engineering: '',
        },
        sgpa: {
            fefs: '',
            fess: '',
            sefs: '',
            sess: '',
            tefs: '',
            tess: '',
            aggregate: '',
        },
    }
}

const reducer = (state = initialState, action) => {
    let value = action.value == undefined ? '' : action.value
    switch (action.type) {
        case actionTypes.CHANGE:
            return {
                ...state,
                [action.parName]: action.value,
            }
        case actionTypes.CHANGE2:
            let par = [action.par1Name]
            let par2 = [action.par2Name]
            let errors = {
                ...state.formErrors,
            }
            let error = ''
            console.log(par);
            switch (action.par1Name) {
                case 'percentage':
                    console.log(Number(value))
                    error = (Number(value) <= 100) ? '' : 'Percentage cannot be > 100';
                    console.log(error);
                    break;
                case 'sgpa':
                    error = (Number(value) <= 10) ? '' : 'SGPA cannot be >10';
                    console.log(error);
                    break;
            }
            errors = {
                ...errors,
                [par]: {
                    ...errors[par],
                    [par2]: error,
                }
            }
            let v = true;
            if (Object.values(errors['percentage']).concat(Object.values(errors['sgpa'])).some((error) => error.length > 0)) {
                v = false;
            }
            return {
                ...state,
                [par]: {
                    ...state[par],
                    [par2]: action.value
                },
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
        case actionTypes.CHANGE_YEAR_OF_PASSING:
            return {
                ...state,
                yearOfPassing: { ...state.yearOfPassing, [action.parName]: action.value }
            }
        case actionTypes.CHANGE_SWITCH:
            console.log(action.value);
            return {
                ...state,
                [action.parName]: !action.value,
            }
    }
    return state;
}

export default reducer;
