export default class PerformanceData {
  /**
   * Creates a new PerformanceData object.
   *
   * @constructor     *
   * @param {number} userId - The user's ID.
   *  @param {object} data
   * @param {object} kind
   */
  constructor(userId, data, kind) {
    this.userId = userId; //identifiant de l'utilisateur
    this.kind = kind;
    this.data = data;
    this.kind.sort((a, b) => a.kind - b.kind).reverse();
  }
}
