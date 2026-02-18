from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = "__all__"

    def validate_employee_id(self, value):
        if not value:
            raise serializers.ValidationError("Employee ID is required")
        return value

    def validate_full_name(self, value):
        if not value or len(value.strip()) < 3:
            raise serializers.ValidationError("Full name must be at least 3 characters")
        return value

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError("Email is required")
        return value

    def validate_department(self, value):
        if not value:
            raise serializers.ValidationError("Department is required")
        return value
