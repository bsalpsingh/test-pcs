import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeeReducer from "./employee/employee.reducer";
// import vendorReducer from "./vendors/vendor.reducer";
// import productReducer from "./products/product.reducer";
// import userReducer from "./users/user.reducer";
// import cartReducer from "./cart/cart.reducer";
// import orderReducer from "./order/order.reducer";
// import categoryReducer from "./category/category.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["employee"], // persits user here
};

const rootReducer = combineReducers({
  employee: employeeReducer,
});

//creating the persisited version of the store
export default persistReducer(persistConfig, rootReducer);
