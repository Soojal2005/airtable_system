const axios = require('axios');

class AirtableService {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.baseURL = 'https://api.airtable.com/v0';
    this.api = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getBases() {
    try {
      const response = await this.api.get('/meta/bases');
      return response.data.bases;
    } catch (error) {
      throw new Error(`Failed to fetch bases: ${error.message}`);
    }
  }

  async getBaseSchema(baseId) {
    try {
      const response = await this.api.get(`/meta/bases/${baseId}/tables`);
      return response.data.tables;
    } catch (error) {
      throw new Error(`Failed to fetch base schema: ${error.message}`);
    }
  }

  async createRecord(baseId, tableId, data) {
    try {
      const response = await this.api.post(`/${baseId}/${tableId}`, {
        fields: data
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create record: ${error.message}`);
    }
  }
}

module.exports = AirtableService;