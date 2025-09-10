package com.optima.backend.POS_Service.search.web.controller;

import com.optima.backend.POS_Service.common.dto.ApiResponse;
import com.optima.backend.POS_Service.search.dto.reponse.ProductSearchResponse;
import com.optima.backend.POS_Service.search.service.SearchService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
@RequestMapping("/api/search")
@CrossOrigin(origins = "http://localhost:5173")
public class SearchController {
    SearchService searchService;
    @GetMapping
    public ApiResponse<List<ProductSearchResponse>> search(@RequestParam String query) {
        ApiResponse<List<ProductSearchResponse>> apiResponse = new ApiResponse<>();
        apiResponse.setData(searchService.search(query));
        return apiResponse;
    }
}
