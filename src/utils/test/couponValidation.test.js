import { describe, expect, it } from 'vitest'
import { validateCoupon } from '../couponValidation'

describe('Coupon Validation', () => {
  it('should validate correct coupon code', () => {
    expect(validateCoupon('WEB3BRIDGECOHORTx')).toBe(true)
  })

  it('should reject incorrect coupon codes', () => {
    expect(validateCoupon('WEB3BRIDGECOHORT')).toBe(false)
    expect(validateCoupon('web3bridgecohortx')).toBe(false)
    expect(validateCoupon('WEB3BRIDGECOHORTX')).toBe(false)
    expect(validateCoupon('')).toBe(false)
    expect(validateCoupon('123')).toBe(false)
  })
})
