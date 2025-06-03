# serializers.py
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'  # অথবা fields = ['id', 'name', 'student_id', 'department', 'email', 'image_url', 'created_at']
