import { describe, test, expect } from "vitest"
import { checkCashRegister, ERR_INVALID_ARGUMENTS, ERR_INVALID_CID_FORMAT } from "./ex"

describe("cash register - Argument Validation", () => {
  test("should throw an error if no arguments are provided", () => {
    expect(() => checkCashRegister()).toThrow(ERR_INVALID_ARGUMENTS)
  })

  test("should throw an error if arguments are missing or invalid", () => {
    expect(() => checkCashRegister(19.5)).toThrow(ERR_INVALID_ARGUMENTS)
    expect(() => checkCashRegister(19.5, 20)).toThrow(ERR_INVALID_ARGUMENTS)
    expect(() => checkCashRegister("price", 20, [])).toThrow(ERR_INVALID_ARGUMENTS)
    expect(() => checkCashRegister(19.5, "cash", [])).toThrow(ERR_INVALID_ARGUMENTS)
  })

  test("should throw an error if `cid` is not a valid 2D array", () => {
    expect(() => checkCashRegister(19.5, 20, [["PENNY"]])).toThrow(ERR_INVALID_CID_FORMAT)
  })
})

describe('cash register - Results', () => {
  test("should return {status: 'INSUFFICIENT_FUNDS', change: []} when cid is less than change due", () => {
    const result = checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ])
    expect(result).toStrictEqual({ status: "INSUFFICIENT_FUNDS", change: [] })
  })

  test("should return {status: 'CLOSED', change: [...]} when cid is exactly equal to change due", () => {
    const result = checkCashRegister(19.5, 20, [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ])
    expect(result).toStrictEqual({
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    })
  })

  test("should return {status: 'OPEN', change: [...]} when exact change can be provided", () => {
    const result = checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
    expect(result).toStrictEqual({
      status: "OPEN",
      change: [["QUARTER", 0.5]],
    })
  })

  test("should return {status: 'OPEN', change: [...]}, sorted from highest to lowest denomination", () => {
    const result = checkCashRegister(3.26, 100, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
    expect(result).toStrictEqual({
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    })
  })
})
