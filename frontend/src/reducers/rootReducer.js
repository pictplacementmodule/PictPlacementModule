import React from 'react'
import { combineReducers } from 'redux'
import PersonalReducer from './Personal'
import AcademicReducer from './Academic'

const rootReducer = combineReducers({
    personal: PersonalReducer,
    academic: AcademicReducer,
});

export default rootReducer;