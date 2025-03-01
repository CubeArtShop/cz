import { Category } from './../../../entities/product/product.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../entities/product/product.model';
import { ProductService } from '../../../entities/product/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [CommonModule, FormsModule, ProductCardComponent, RouterLink],
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  isLoading = true;
  errorMessage = '';

  newProduct: Omit<IProduct, 'id' | 'rating'> = {
    name: '',
    description: '',
    category: 'OTHER',
    price: 0,
    imageUrl: '',
    stock: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Помилка завантаження продуктів';
        this.isLoading = false;
        console.error(error);
      },
    });
  }

  async addProduct() {
    if (
      !this.newProduct.name ||
      !this.newProduct.price ||
      !this.newProduct.imageUrl ||
      !this.newProduct.category
    ) {
      this.errorMessage = 'Будь ласка, заповніть всі обов’язкові поля!';
      return;
    }

    try {
      await this.productService.addProduct({ ...this.newProduct, rating: 0 }); // Нові продукти мають рейтинг 0
      this.newProduct = {
        name: '',
        description: '',
        category: 'OTHER',
        price: 0,
        imageUrl: '',
        stock: 0,
      }; // Очистка форми
      this.loadProducts(); // Перезавантаження каталогу
    } catch (error) {
      this.errorMessage = 'Не вдалося додати продукт';
      console.error(error);
    }
  }
}
