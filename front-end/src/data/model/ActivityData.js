class ActivityData {
    /**
     * Creates a new ActivityData object.
     *
     * @constructor
     * @param {object} data - An object containing the user's activity data.
     * @param {number} data.userId - The user's ID.
     * @param {object} data.sessions - An object containing the user's session data, including the number of days, kilograms lost, and calories burned.
     */
    constructor(data) {
        
       
      this.id = data.userId; //identifiant de l'utilisateur
      this.sessions = data.sessions; //un objet qui contient les données de session de l'utilisateur, comme le nombre de jours, les kilogrammes perdus et les calories brûlées
    
    }
  }

  export default ActivityData;