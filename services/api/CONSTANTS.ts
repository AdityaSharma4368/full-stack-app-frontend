export const API = {
  FAKE_DATA: {
    INDEX: "/api/user/fake-data",
  },
  USER:{
    LOGIN: "/api/user/auth",
    SIGNUP:"/api/user/register",
    TOKEN: {
      CREATE: "/api/security/token/create",
      VALIDATE: "/api/security/token/validate" //takes a param ?candidateToken={token}
    },
  }
};
