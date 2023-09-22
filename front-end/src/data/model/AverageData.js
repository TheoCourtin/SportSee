class AverageData {
    /**
     * Creates a new AverageData object.
     *
     * @constructor
     * @param {object} data - An object containing the user's activity data.
     * @param {number} data.userId - The user's ID.
     * @param {object} data.sessions 
     */
    constructor(data) {
        
       
      this.id = data.userId; //identifiant de l'utilisateur
      this.sessions = data.sessions; 
      }
  }

  export default AverageData;