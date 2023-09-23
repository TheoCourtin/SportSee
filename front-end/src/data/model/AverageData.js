class AverageData {
  /**
   * Creates a new AverageData object.
   *
   * @constructor *
   * @param {number} userId - The user's ID.
   * @param {object} sessions
   */
  constructor(userId, sessions) {
    this.userId = userId; //identifiant de l'utilisateur
    this.sessions = sessions;
  }
}

export default AverageData;
