import React, { createContext, useCallback, useMemo, useReducer } from "react";

export interface State {
  displaySidebar: boolean;
  displayModal: boolean;
  sidebarView: string;
  modalView: string;
}

export const UIInitialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: "LOGIN_VIEW",
  sidebarView: "CART_VIEW",
};
export const Context = createContext<State | any>(UIInitialState);
Context.displayName = "UIContext";

type Action =
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_DROPDOWN";
    }
  | {
      type: "CLOSE_DROPDOWN";
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: ModelViews;
    }
  | {
      type: "SET_SIDEBAR_VIEW";
      view: SidebarViews;
    };

type ModelViews =
  | "SIGNUP_VIEW"
  | "LOGIN_VIEW"
  | "FORGOT_VIEW"
  | "NEW_SHIPPING_ADDRESS"
  | "NEW_PAYMENT_METHOD";

type SidebarViews = "CART_VIEW" | "CHECKOUT_VIEW" | "PAYMENT_METHOD_VIEW";

export const UIProvider = (props: any) => {
  const [state, dispatch] = useReducer(uiReducer, UIInitialState);

  const openSidebar = useCallback(
    () => dispatch({ type: "OPEN_SIDEBAR" }),
    [dispatch]
  );
  const closeSidebar = useCallback(
    () => dispatch({ type: "CLOSE_SIDEBAR" }),
    [dispatch]
  );
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: "CLOSE_SIDEBAR" })
        : dispatch({ type: "OPEN_SIDEBAR" }),
    [dispatch, state.displaySidebar]
  );
  const closeSidebarIfPresent = useCallback(
    () => state.displaySidebar && dispatch({ type: "CLOSE_SIDEBAR" }),
    [dispatch, state.displaySidebar]
  );

  const openModal = useCallback(
    () => dispatch({ type: "OPEN_MODAL" }),
    [dispatch]
  );
  const closeModal = useCallback(
    () => dispatch({ type: "CLOSE_MODAL" }),
    [dispatch]
  );

  const setModalView = useCallback(
    (view: ModelViews) => dispatch({ type: "SET_MODAL_VIEW", view }),
    [dispatch]
  );

  const setSidebarView = useCallback(
    (view: SidebarViews) => dispatch({ type: "SET_SIDEBAR_VIEW", view }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openModal,
      closeModal,
      setModalView,
      setSidebarView,
    }),
    [
      state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openModal,
      closeModal,
      setModalView,
      setSidebarView,
    ]
  );

  return <Context.Provider value={value} {...props} />;
};

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    case "OPEN_DROPDOWN": {
      return {
        ...state,
        displayDropdown: true,
      };
    }
    case "CLOSE_DROPDOWN": {
      return {
        ...state,
        displayDropdown: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_SIDEBAR_VIEW": {
      return {
        ...state,
        sidebarView: action.view,
      };
    }
  }
}

export const UIContext = ({ children }: { children: React.ReactNode }) => (
  <UIProvider>{children}</UIProvider>
);

export const useUI = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
