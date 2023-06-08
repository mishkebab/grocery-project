import produceData from "../mockData/produce.json";


export default function produceReducer(state = {}, action) {

    switch (action.type) {
        case POPULATE_PRODUCE:
            const nextState = {}; 
            action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            });
            return nextState;
        default:
            return state;
    };
};

const POPULATE_PRODUCE = 'POPULATE_PRODUCE'

export const populateProduce = (produce) => ({
    type: POPULATE_PRODUCE,
    produce: produceData
});



