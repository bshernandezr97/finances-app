import { types } from "../types/types";

export const showLoading = () => ({
  type: types.showLoading,
});

export const hideLoading = () => ({
  type: types.hideLoading,
});

export const showItemFormModal = () => ({
  type: types.showItemFormModal,
});

export const hideItemFormModal = () => ({
  type: types.hideItemFormModal,
});

export const showTaxFormModal = () => ({
  type: types.showTaxFormModal,
});

export const hideTaxFormModal = () => ({
  type: types.hideTaxFormModal,
});

export const showSideBar = () => ({
  type: types.showSidebar,
});

export const hideSideBar = () => ({
  type: types.hideSidebar,
});
