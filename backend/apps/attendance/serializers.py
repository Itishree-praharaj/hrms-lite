from rest_framework import serializers
from .models import Attendance
from apps.employees.models import Employee

class AttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendance
        fields = "__all__"

    def validate_employee(self, value):
        if not Employee.objects.filter(id=value.id).exists():
            raise serializers.ValidationError("Employee not found")
        return value

    def validate(self, attrs):
        employee = attrs.get('employee')
        date = attrs.get('date')

        if Attendance.objects.filter(employee=employee, date=date).exists():
            raise serializers.ValidationError({
                "attendance": "Attendance already marked for this employee on this date"
            })

        return attrs
