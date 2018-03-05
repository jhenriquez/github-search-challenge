import Organization from './organization.model';
import organization_mocks from 'mocks/organizations';

const mockOrganization = organization_mocks[0];

describe('Model: Repository', () => {

  describe('#()', () => {

    test('Provided a github API organization object it creates a valid Organization model.', () => {
      const organization = new Organization(mockOrganization);
      expect(organization.id).toEqual(mockOrganization.id);
      expect(organization.url).toEqual(mockOrganization.url);
      expect(organization.login).toEqual(mockOrganization.login);
      expect(organization.avatarUrl).toEqual(mockOrganization.avatar_url);
      expect(organization.description).toEqual(mockOrganization.description);
    });

  });
});