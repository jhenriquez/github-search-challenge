import Repository from './repository.model';
import repository_mocks from 'mocks/repositories';

const mockRepository = repository_mocks[0];

describe('Model: Repository', () => {

  describe('#()', () => {

    test('Provided a github API repository object it creates a valid Repository model.', () => {
      const repository = new Repository(mockRepository);
      expect(repository.id).toEqual(mockRepository.id);
      expect(repository.url).toEqual(mockRepository.url);
      expect(repository.contributorsUrl).toEqual(mockRepository.contributors_url);
      expect(repository.createdAt).toEqual(mockRepository.created_at);
      expect(repository.updatedAt).toEqual(mockRepository.updated_at);
      expect(repository.name).toEqual(mockRepository.name);
      expect(repository.description).toEqual(mockRepository.description);
      expect(repository.login).toEqual(mockRepository.owner.login);
    });

  });
});