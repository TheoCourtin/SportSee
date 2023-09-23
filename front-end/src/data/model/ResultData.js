class ResultData {
  /**
   * Creates a new ResultDataobject.
   *
   * @constructor
   * @param {number} userId - The user's ID.
   * @param {number} userInfos
   * @param {number} todayScore
   * @param {number} keyData
   */
  constructor(userId, userInfos, todayScore, keyData) {
    this.userId = userId; //identifiant de l'utilisateur
    this.todayScore = todayScore;
    this.userInfos = userInfos;
    this.keyData = keyData;
  }
}

export default ResultData;
