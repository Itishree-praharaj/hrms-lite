import uuid
from django.db import models

class Employee(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    employee_id = models.CharField(max_length=20, unique=True, db_index=True)
    full_name = models.CharField(max_length=120)
    email = models.EmailField(unique=True, db_index=True)
    department = models.CharField(max_length=120)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['employee_id']),
            models.Index(fields=['email']),
        ]

    def __str__(self):
        return f"{self.employee_id} - {self.full_name}"
