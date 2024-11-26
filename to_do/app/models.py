from django.db import models

# Create your models here.

class Todo(models.Model):
    Task = models.TextField()
    description = models.TextField()