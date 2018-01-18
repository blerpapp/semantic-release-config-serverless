module.exports = {
  verifyConditions: [
    {
      path: "@semantic-release/npm",
      npmPublish: false
    },
    "@semantic-release/gitlab"
  ],
  getLastRelease: "@semantic-release/git",
  publish: [
    {
      path: "@semantic-release/exec",
      cmd: "serverless deploy"
    },
    "@semantic-release/git",
    "@semantic-release/gitlab"
  ]
};
