class ActivityData {
  /**
   * Creates a new ActivityData object.
   *
   * @constructor
   * * @param {number} userId - The user's ID.
   * @param {object} sessions - An object containing the user's session data, including the number of days, kilograms lost, and calories burned.
   */

  constructor(userId, sessions) {
    this.userId = userId; //identifiant de l'utilisateur
    this.sessions = sessions; //un objet qui contient les données de session de l'utilisateur, comme le nombre de jours, les kilogrammes perdus et les calories brûlées
  }
}

export default ActivityData;
