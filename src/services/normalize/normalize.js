import { camelizeKeys } from 'humps';

const camelizeJSON = json =>
  camelizeKeys(json, (key, convert) => {
    return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
  });

const normalizeItem = item => {
  const camelizedItem = camelizeJSON(item);
  const data = camelizedItem.data[0];
  const { dateCreated, description, nasaId, secondaryCreator, title } = data;

  const link = camelizedItem.links[0];
  const { href: image } = link;

  return { dateCreated, description, nasaId, secondaryCreator, title, image };
};

const normalize = {
  asset: ({ collection }) => {
    return normalizeItem(collection.items[0]);
  },
  search: ({ collection }) => {
    return collection.items.map(item => normalizeItem(item));
  }
};

export default normalize;
