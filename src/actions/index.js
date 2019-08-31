export const CHANGE_INPUT = "CHANGE_INPUT";

export const changeInputText = text => {
  return {
    type: CHANGE_INPUT,
    text: text
  };
};
