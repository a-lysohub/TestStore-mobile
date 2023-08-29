import type { FullProductType } from '@app/services';

export type AddProductType = Omit<FullProductType, 'image'| 'category'>;
export type ShowProductType = Omit<AddProductType, 'description' | 'id'> & { image?: string };
