package com.optima.inventory.controller;

import com.optima.inventory.dto.request.ProductCreationRequest;
import com.optima.inventory.dto.request.ProductUpdateRequest;
import com.optima.inventory.dto.response.ProductResponse;
import com.optima.inventory.entity.ProductEntity;
import com.optima.inventory.reponsitory.ProductRepository;
import com.optima.inventory.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public ProductEntity createProduct(@RequestBody @Valid ProductCreationRequest request) {
        return productService.createProduct(request);
    }

    @GetMapping
    public List<ProductEntity> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/{productId}")
    public ProductResponse getProduct(@PathVariable("productId") long productId) {
        return productService.getProduct(productId);
    }

    @PutMapping("/{productId}")
    public ProductResponse updateProduct(@PathVariable long productId, @RequestBody ProductUpdateRequest request) {
        return productService.updateProduct(productId, request);
    }

    @DeleteMapping("/{productId}")
    public String deleteProduct(@PathVariable("productId") long productId) {
        productService.deleteProduct(productId);
        return "Product has been deleted";
    }
}
