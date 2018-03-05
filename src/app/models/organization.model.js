export type IOrganization = {
  id: Number;
  url: string;
  login: string;
  avatarUrl: string;
  description: string;
};

export default class Organization {
  id: Number;
  url: string;
  login: string;
  avatarUrl: string;
  description: string;

  constructor (org: any) {
    this.id = org.id;
    this.url = org.url;
    this.login = org.login;
    this.avatarUrl = org.avatar_url;
    this.description = org.description;
  }
}