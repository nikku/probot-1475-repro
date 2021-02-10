export type PullRequest = {
  url: string;
  id: number;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: {
    login: string;
  } | null;
  body: string | null;
  labels: {
    name: string;
  }[];
  created_at: string;
  updated_at: string;
  closed_at: string;
  merged_at: string;
  requested_reviewers: {
    login: string;
  }[];
  requested_teams: {
    name: string;
    slug: string;
  }[];
  head: {
    ref: string;
    sha: string;
    user: {
      login: string;
    };
    repo: {
      name: string;
      full_name: string;
      owner: {
        login: string;
      };
    };
  };
  base: {
    ref: string;
    sha: string;
    user: {
      login: string;
    };
    repo: {
      name: string;
      full_name: string;
      owner: {
        login: string;
      };
    };
  };
  draft: boolean;
  merged: boolean;
  mergeable: boolean;
  rebaseable: boolean;
};
