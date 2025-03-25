

const config = {

  project_uuid: '47d510e0-8d5f-4d73-af73-e3e578492b22',
  flHost: process.env.NODE_ENV === 'production' ? 'https://flatlogic.com/projects' : 'http://localhost:3000/projects',

    gitea_domain: process.env.GITEA_DOMAIN || 'gitea.flatlogic.app',
    gitea_username: process.env.GITEA_USERNAME || 'admin',
    gitea_api_token: process.env.GITEA_API_TOKEN || null,
    github_repo_url: process.env.GITHUB_REPO_URL || null,
    github_token: process.env.GITHUB_TOKEN || null,
};

module.exports = config;
