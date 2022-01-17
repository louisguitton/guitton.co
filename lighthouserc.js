// https://css-tricks.com/continuous-performance-analysis-with-lighthouse-ci-and-github-actions/
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
