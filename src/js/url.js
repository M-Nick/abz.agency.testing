export const url = {
  get: {
    positions:
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    token: 'https://frontend-test-assignment-api.abz.agency/api/v1/token',
    user: ({ id }) =>
      `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`,
    users: ({ page, count }) =>
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`,
  },
  post: {
    users: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
  },
}
