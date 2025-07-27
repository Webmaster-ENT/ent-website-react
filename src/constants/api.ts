/* API Endpoints */
export const API_ENDPOINTS = {
  // reports
  REPORTS: {
    CREATE: "/reports",
  },

  // check NRP
  NEW_MEMBERS: {
    CREATE: "/new_members",
    CHECK_NRP: (nrp: string) => `/check-nrp/${nrp}`,
    CREATE_RESUME_PDF: (nrp: string) => `/new_members/${nrp}`,
  },
} as const;

/* API Configuration */
export const API_CONFIG = {
  BASE_URL: "http://localhost:8000/api/v1",
  TIMEOUT: 10_000,
  RETRY_ATTEMPTS: 3,
};
