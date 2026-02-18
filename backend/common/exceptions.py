from rest_framework.views import exception_handler
from rest_framework import status
from rest_framework.response import Response
from django.db import IntegrityError

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, IntegrityError):
        return Response({
            "success": False,
            "message": "Duplicate record detected",
        }, status=status.HTTP_409_CONFLICT)

    if response is not None:
        return Response({
            "success": False,
            "message": "Validation failed",
            "errors": response.data
        }, status=response.status_code)

    return Response({
        "success": False,
        "message": "Internal server error"
    }, status=500)
