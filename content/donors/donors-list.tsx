/**
 * @description Person
 * @param {name} string
 * @param {role} string
 * @param {filename} string // brian-armstrong -> must include .png and .webm files aswell as @2x versions for each
 * @example: {
 *  name: 'Brian Armstrong',
 *  role: 'CEO, Coinbase',
 *  filename: 'brian-armstrong'
 * }
 */

export default {
  /**
   * @param {person[]} Person
   */
  '$100M+': [],
  '$10M+': [],
  '$1M+': [
    {
      name: 'Brian Armstrong',
      role: 'CEO, Coinbase',
      filename: 'brian-armstrong'
    }
  ],

  /** ----------------------------
   * @param {name[]} string
   * @example: 'Brian Armstrong',
   */
  '$100k+': [],
  '$25k+': ['Christopher Conway', 'Linda Xie', 'Roger Ver']
};
