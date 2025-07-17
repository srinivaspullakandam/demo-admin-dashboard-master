export const MOBILE_NUMBER_REGEX = /^\d{6,10}$/;
export const USERNAME_REGEX = /^(?!.\.\.)(?!.\.$)@?[^\W][\w.@]{0,29}$/;
export const NAME_REGEX = /^[A-Za-z\s]*$/;
export const WHITE_SPACES_REGEX_PASSWORD = /^(\S+$)/g;
export const NEW_PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[*.!@#$^&_+-])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
