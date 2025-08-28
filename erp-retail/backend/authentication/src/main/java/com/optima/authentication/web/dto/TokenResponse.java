package com.optima.authentication.web.dto;

public record TokenResponse(
        String accessToken,
        String refreshToken,
        long expiresInSec
) {}