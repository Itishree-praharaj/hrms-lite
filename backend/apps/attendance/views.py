from rest_framework.views import APIView
from .models import Attendance
from .serializers import AttendanceSerializer
from common.responses import success_response, error_response
from apps.employees.models import Employee

class MarkAttendanceAPI(APIView):

    def post(self, request):
        serializer = AttendanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return success_response(serializer.data, "Attendance marked", 201)
        return error_response("Validation failed", 400, serializer.errors)


class EmployeeAttendanceAPI(APIView):

    def get(self, request, employee_id):
        try:
            employee = Employee.objects.get(pk=employee_id)
        except Employee.DoesNotExist:
            return error_response("Employee not found", 404)

        records = Attendance.objects.filter(employee=employee)
        serializer = AttendanceSerializer(records, many=True)

        return success_response(serializer.data)
