export type IRepository = {
  id: Number;
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
};

export default class Repository {
  id: Number;
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  login: string;

  constructor (repository: any) {
    this.id = repository.id;
    this.url = repository.url;
    this.contributorsUrl = repository.contributors_url;
    this.createdAt = repository.created_at;
    this.updatedAt = repository.updated_at;
    this.name = repository.name;
    this.description = repository.description;
    this.login = repository.owner.login;
  }
}