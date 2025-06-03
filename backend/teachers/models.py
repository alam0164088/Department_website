from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    photo = models.ImageField(upload_to='teachers_photos/', null=True, blank=True)
    photo_url = models.URLField(blank=True, null=True, help_text="External URL for teacher's photo")
    bio = models.TextField(null=True, blank=True)  # For more details
    created_at = models.DateTimeField(auto_now_add=True)
    


    phone = models.CharField(max_length=20, blank=True, null=True)
    blood_group = models.CharField(max_length=5, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    research_topic = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def get_photo_url(self):
        if self.photo_url:
            return self.photo_url
        elif self.photo:
            return self.photo.url
        return None
