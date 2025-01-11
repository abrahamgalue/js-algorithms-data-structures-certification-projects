/**
 * Design a cash register drawer function checkCashRegister(
 * that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer
 * (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an
 * object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if  *
 * cash-in-drawer is less than the change due, or if you
 * cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer
 * as the value for the key change if it is equal to the change
 * due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the  * change due in coins and bills, sorted in highest to lowest  * order, as the value of the change key.
 * 
 * Currency Unit	Amount
 * 
 * Penny	$0.01 (PENNY)
 * Nickel	$0.05 (NICKEL)
 * Dime	$0.1 (DIME)
 * Quarter	$0.25 (QUARTER)
 * Dollar	$1 (ONE)
 * Five Dollars	$5 (FIVE)
 * Ten Dollars	$10 (TEN)
 * Twenty Dollars	$20 (TWENTY)
 * One-hundred Dollars	$100 (ONE HUNDRED)
 * 
 * See below for an example of a cash-in-drawer array:
 * 
 * [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
 * ]
*/

export const ERR_INVALID_ARGUMENTS = "Invalid arguments provided"
export const ERR_INVALID_CID_FORMAT = "Invalid cid format provided"

const validate2DArr = (arr) => {
  return arr.some(
    (unit) =>
      !(unit instanceof Array) ||
      unit.length !== 2 ||
      typeof unit[0] !== "string" ||
      typeof unit[1] !== "number"
  )
}

export function checkCashRegister(price, cash, cid) {
  if (arguments.length !== 3) throw new Error(ERR_INVALID_ARGUMENTS)

  if (typeof price !== 'number' || typeof cash !== 'number' || !(cid instanceof Array)) throw new Error(ERR_INVALID_ARGUMENTS)

  if (validate2DArr(cid)) throw new Error(ERR_INVALID_CID_FORMAT)

  const changeArray = []
  let changeToGive = cash - price

  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  let totalCID = cid
    .reduce((sum, [, amount]) => sum + amount, 0)
    .toFixed(2)

  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray }
  } else if (changeToGive.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid }
  } else {
    cid = cid.reverse()

    for (let elem of cid) {
      let temp = [elem[0], 0]
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        elem[1] -= UNIT_AMOUNT[elem[0]]
        temp[1] += UNIT_AMOUNT[elem[0]]

        changeToGive -= UNIT_AMOUNT[elem[0]]
        changeToGive = changeToGive.toFixed(2)
      }
      if (temp[1] > 0) {
        changeArray.push(temp)
      }
    }
  }

  return changeToGive > 0 ?
    { status: "INSUFFICIENT_FUNDS", change: [] } :
    { status: "OPEN", change: changeArray }
}

// test here
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// → {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// → {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// → {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// → {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// → {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}