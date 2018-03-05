import Repository from 'models/repository.model';
import Organization from 'models/organization.model';

export default class GithubService {

  toJSON (response: Response) : any {
    return response.json();
  }

  toRepository (repository: any) : Repository {
    return new Repository(repository);
  }

  toOrganization (organization: any) : Organization {
    return new Organization(organization);
  }

  searchRepositories (query: string) : Promise<Repository[]> {
    return query ?
          fetch(`https://api.github.com/search/repositories?q=${query}`)
            .then(this.toJSON)
            .then(repositories => repositories.items.map(this.toRepository))
          : Promise.resolve([]);
  }

  searchOrganizations (query: string) : Promise<Organization[]> {
    return query ?
          fetch(`https://api.github.com/search/users?type=org&q=${query}`)
            .then(this.toJSON)
            .then(orgs => orgs.items.map(this.toOrganization))
          : Promise.resolve([]);
  }

  search (query: string) : Promise<Array<Repository | Organization>> {
    return query ?
          Promise.all([
            this.searchRepositories(query),
            this.searchOrganizations(query)
          ]).then((results) => [].concat.apply([], results))
           : Promise.resolve([]);
  }
}