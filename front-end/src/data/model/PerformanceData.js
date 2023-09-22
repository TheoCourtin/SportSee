class PerformanceData {
    /**
     * Creates a new PerformanceData object.
     *
     * @constructor
     * @param {object} data - An object containing the user's activity data.
     * @param {number} data.userId - The user's ID.
     *  @param {object} data.data
     * @param {object} data.kind 
     */
    constructor(data) {
        
       
      this.id = data.userId; //identifiant de l'utilisateur
      this.kind = data.kind; 
      this.data = data.data; 
      }
  }

  export default PerformanceData;