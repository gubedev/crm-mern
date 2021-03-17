export const SIGNIN = "SIGNIN"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_ERROR = "SIGNIN_ERROR"

export function signin(data) {
  return {
    type: SIGNIN,
    payload: data,
  }
}
