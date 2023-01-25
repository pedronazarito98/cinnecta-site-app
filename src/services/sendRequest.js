import { api } from "./api";

export const sendRequest = {
  sendEmail: async (portalId, formGuid, body) => {
    try {
      const response = await api.post(`${portalId}/${formGuid}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
