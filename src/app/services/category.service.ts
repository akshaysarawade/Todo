export class CategoryService {
  category = [
    { id: 999, name: 'Home' },
    { id: 998, name: 'Office' },
    { id: 997, name: 'Family' }
  ];

  getCategories() {
    return this.category;
  }

  getCategoryById(categoryId) {
    return this.category.filter((category) => category.id === +categoryId);
  }
}
