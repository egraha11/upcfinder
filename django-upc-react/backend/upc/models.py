from django.db import models

# Create your models here.

class UPC(models.Model):
    upc = models.CharField(max_length=12)
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)

    def _str_(self):
        return self.upc


