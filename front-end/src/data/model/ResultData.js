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
  constructor(userId, userInfos, todayScore, keyData, score) {
    this.userId = userId; //identifiant de l'utilisateur
    this.todayScore = todayScore;
    this.userInfos = userInfos;
    this.keyData = keyData;
    this.score = score;

    if (typeof this.todayScore === "undefined") {
      if (typeof this.score === "undefined") {
        this.todayScore = 0;
      } else {
        this.todayScore = this.score;
      }
    }
  }
}

export default ResultData;
