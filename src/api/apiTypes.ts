export interface ApiTypes {
  login: string
  avatar_url: string
  location: string
  bio: string
  repos_url: string
  public_repos: number
  followers: number
  following: number
}

export interface ApiReposTypes {
  name: string
  language: string
  git_url: string
  forks: number
  stargazers_count: number
}
