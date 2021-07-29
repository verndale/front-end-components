module.exports = {
  repositoryUrl: 'https://github.com/verndale/front-end-components',
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['lib/**', 'docs', 'package.json'],
        message: 'chore: ${nextRelease.version} FEE Build [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};
