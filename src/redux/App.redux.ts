interface InitialState {
  IS_INIT_RENDER: boolean;
};

const IS_INIT_RENDER = "app/IS_INIT_RENDER" as const;

export const initializeApp = () => ({
  type: IS_INIT_RENDER
});

type AppActionType = 
  | ReturnType<typeof initializeApp>
;

const initialState: InitialState = {
  IS_INIT_RENDER: true,
};

export const setInitializeApp = (state: InitialState) => {

  return {
    ...state,
    IS_INIT_RENDER: false,
  }
};

export const AppReducer = (
  state: InitialState = initialState, 
  action: AppActionType
) => {
  switch(action.type) {
    case IS_INIT_RENDER: return setInitializeApp(state);
    default: return state;
  }
};