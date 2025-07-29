/* API Endpoints */
export const API_ENDPOINTS = {
  // reports
  REPORTS: {
    STORE: "/reports",
  },

  // Dvision
  DIVISION: {
    INDEX: "/division",
    SHOW: (type: "division" | "subdivision") => `/division?type=${type}`,
  },

  // major or "prodi"
  MAJOR: {
    INDEX: "/major",
    SHOW: (type: "division" | "subdivision") => `/division?type=${type}`,
  },

  // check NRP
  NEW_MEMBERS: {
    CREATE: "/new_members",
    CHECK_NRP: (nrp: string) => `new_members/check-nrp/${nrp}`,
    CREATE_RESUME_PDF: (nrp: string) => `/new_members/${nrp}`,
  },
} as const;

/* API Configuration */
export const API_CONFIG = {
  BASE_URL: "http://127.0.0.1:8000/api/v1",
  TIMEOUT: 10_000,
  RETRY_ATTEMPTS: 3,
};
