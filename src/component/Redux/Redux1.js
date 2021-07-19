import { createStore, combineReducers } from "redux";
console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return {
    // Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

// Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }

  // we don't care the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

createPolicy("Alex", 20);
console.log(store.getState());
createClaim("Alex", 120);
console.log(store.getState());
deletePolicy("Alex");
console.log(store.getState());

store.dispatch(createPolicy("Alex", 20));
console.log(store.getState());
store.dispatch(createPolicy("Jim", 30));
console.log(store.getState());
store.dispatch(createPolicy("Bob", 40));
console.log(store.getState());
store.dispatch(createClaim("Bob", 40));
console.log(store.getState());
store.dispatch(createClaim("Jim", 40));
console.log(store.getState());
// store.dispatch(createClaim('Alex', 120));
// store.dispatch(createClaim('Jim', 50));

// store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
