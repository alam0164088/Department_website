from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)
    student_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    session = models.CharField(max_length=50, blank=True, null=True)  # New
    image_url = models.URLField(blank=True, null=True)                # New
    is_graduated = models.BooleanField(default=False)                 # New
    cgpa = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)  # New
    profession = models.CharField(max_length=255, blank=True, null=True)               # New
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
