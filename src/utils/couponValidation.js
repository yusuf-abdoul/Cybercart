export const validateCoupon = (code) => {
  const couponRegex = /^WEB3BRIDGECOHORTx$/
  return couponRegex.test(code)
}