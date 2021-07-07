import { types } from "../types/types";

const initialState = {
  loading: false,
  isShowItemFormModal: false,
  isShowTaxFormModal: false,
  isLoadActive: false,
  isShowSideBar: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showLoading:
      return {
        ...state,
        loading: true,
      };
    case types.hideLoading:
      return {
        ...state,
        loading: false,
      };
    case types.showItemFormModal:
      return {
        ...state,
        isShowItemFormModal: true,
      };
    case types.hideItemFormModal:
      return {
        ...state,
        isShowItemFormModal: false,
      };
    case types.showTaxFormModal:
      return {
        ...state,
        isShowTaxFormModal: true,
      };
    case types.hideTaxFormModal:
      return {
        ...state,
        isShowTaxFormModal: false,
      };
    case types.showSidebar:
      return {
        ...state,
        isShowSideBar: true,
      };
    case types.hideSidebar:
      return {
        ...state,
        isShowSideBar: false,
      };
    default:
      return state;
  }
};
