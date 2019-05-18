export function normalizeData(data = []) {
    return data.map(({created_at, owner, name, stargazers_count}) => [
        name,
        owner.login,
        stargazers_count,
        created_at,
    ])
}

export function pushQueryToHistory(query) {
    window.history.pushState({}, "Super Duper Search", `?query=${query}`);
}

export const GITHUB_URL_BASE = 'https://api.github.com/search/repositories';
