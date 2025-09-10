package com.pos.Elasticsearch.document;

import com.pos.Elasticsearch.helper.Indices;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Setting;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = Indices.PRODUCT_INDEX)
@Setting(settingPath = "static/es-settings.json")
public class Product {
    @Id
    @Field(type = FieldType.Keyword)
    Long Id;
    @Field(type = FieldType.Text)
    String Name;
    @Field(type = FieldType.Integer)
    Integer Sales;
}
