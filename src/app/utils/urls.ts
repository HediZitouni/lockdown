//export const back = 'https://lockdown-server.herokuapp.com/';
export const back = 'http://localhost:3000/';
export const questions = `${back}questions/`;
export const suggestions = `${back}suggestions/`;

const numberOfSuggestionToGet = 1;
export const getSuggestionsByNumber = `${suggestions}random/${numberOfSuggestionToGet}`;

export const validateSuggestionById = `${suggestions}validate/`;
export const rejectSuggestionById = `${suggestions}`;

export const urls = {
    back,
    questions,
    suggestions,
    getSuggestionsByNumber,
    validateSuggestionById,
    rejectSuggestionById
}
