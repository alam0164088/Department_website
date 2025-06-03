from rest_framework import serializers
from .models import Teacher

class TeacherSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Teacher
        fields = [
            'id', 'name', 'designation', 'department', 
            'email', 'photo_url', 'phone', 'blood_group',
            'address', 'research_topic', 'bio'
        ]

    def get_photo_url(self, obj):
        if obj.photo_url:
            return obj.photo_url
        elif obj.photo:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.photo.url)
            return obj.photo.url
        return None
