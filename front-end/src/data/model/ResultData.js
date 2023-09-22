class ResultData {
    /**
     * Creates a new ResultDataobject.
     *
     * @constructor
     * @param {object} data - An object containing the user's activity data.
     * @param {number} data.userId - The user's ID.
     *  @param {number} data.userInfos
     * @param {number} data.todayScore
     * @param {number} data.keyData
     */
    constructor(data) {
        
       
      this.id = data.userId; //identifiant de l'utilisateur
      this.todayScore = data.todayScore;
      this.userInfos = data.userInfos 
      this.keyData = data.keyData; 
      }
  }

  export default ResultData;