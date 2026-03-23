import { GITHUB_USERNAME } from '../constants/portfolio';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
}

export const fetchGitHubRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=6`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const data = await response.json();
    
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};
