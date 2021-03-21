from django.contrib import admin
from .models import UPC

class UPCAdmin(admin.ModelAdmin):
    list_display = ('upc', 'name', 'brand')

# Register your models here.

admin.site.register(UPC, UPCAdmin)