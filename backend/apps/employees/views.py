from django.shortcuts import render
from rest_framework.views import APIView
from .models import Employee
from .serializers import EmployeeSerializer
from common.responses import success_response, error_response
from datetime import date
from apps.attendance.models import Attendance
from django.db.models import Count

class EmployeeListCreateAPI(APIView):

    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return success_response(serializer.data)

    def post(self, request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return success_response(serializer.data, "Employee created", 201)
        return error_response("Validation failed", 400, serializer.errors)


class EmployeeDeleteAPI(APIView):

    def delete(self, request, pk):
        try:
            employee = Employee.objects.get(pk=pk)
            employee.delete()
            return success_response(message="Employee deleted")
        except Employee.DoesNotExist:
            return error_response("Employee not found", 404)


class DashboardSummaryAPI(APIView):

    def get(self, request):
        today = date.today()

        total_employees = Employee.objects.count()

        present = Attendance.objects.filter(date=today, status="PRESENT").count()
        absent = Attendance.objects.filter(date=today, status="ABSENT").count()

        return success_response({
            "total_employees": total_employees,
            "today_present": present,
            "today_absent": absent
        })