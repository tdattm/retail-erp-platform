package com.pos.Elasticsearch.repository;

import com.pos.Elasticsearch.document.Product;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ProductRepository extends ElasticsearchRepository<Product, Long> {
}
