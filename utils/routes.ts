import { slugify } from './slugify';

export const Routes = {
  services: (parent: string, child: string) =>
    `/services/${slugify(parent)}/${slugify(child)}`,
};
