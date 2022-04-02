export class CreateCategoryDto {
  title: string;
  parent?: string;
  active?: boolean;
  order?: number;
}
