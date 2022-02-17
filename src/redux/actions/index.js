import * as ActionTypes from './actionTypes';

// **Loader/
export const hideLoader = () => ({
  type: ActionTypes.HIDE_LOADER,
});

/************ For Session  ************/

export const registerNumber = body => ({
  type: ActionTypes.REGISTER_NUMBER,
  body,
});

export const otpVerify = status => ({
  type: ActionTypes.OTP_VERIFY,
  status,
});

/*  User */

export const setUserNumber = data => ({
  type: ActionTypes.SET_USER_NUMBER,
  data,
});

/* Profile Detail */
export const getProfileDetail = data => ({
  type: ActionTypes.GET_PROFILE_DETAIL,
  data,
});

/* Send Message */
export const sendMessage = data => ({
  type: ActionTypes.SEND_MESSAGE,
  data,
});

/* Send Attachment */
export const sendAttachment = data => ({
  type: ActionTypes.SEND_ATTACHMENT,
  data,
});

/* Save Message */
export const saveMessage = data => ({
  type: ActionTypes.SAVE_MESSAGE,
  data,
});
