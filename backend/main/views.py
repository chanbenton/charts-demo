from django.http import JsonResponse
from typing import List, Union
from django.db.models import Sum, Q
from .models import EmployeeRelation, SalesLines, User
from datetime import datetime
from backend.helpers import date_range_intersect

def rep_revenue(user_id):
    user = User.objects.get(id=user_id)
    total = SalesLines.objects.filter(rep__id=user_id).aggregate(total=Sum('revenue'))['total']
    return {
        'name': f'{user.first_name} {user.last_name}',
        'revenue': float(total)
    }

def get_revenue_by_user(request, role, user_id):
    if role == 'Sales Rep':
        return JsonResponse([repRevenue(user_id)], safe=False)

    if role == 'Manager':
        reps = EmployeeRelation.objects.filter(reporting_to_id=user_id)
        result = []
        for rep in reps:
            result.append(rep_revenue(rep.employee.id))
        return JsonResponse(result, safe=False)

    if role == 'Director':
        managers = EmployeeRelation.objects.filter(reporting_to_id=user_id)
        result = []
        for manager in managers:
            total = 0
            curManager = manager.employee.id
            reps = EmployeeRelation.objects.filter(reporting_to_id=curManager)
            for rep in reps:
                total += repRevenue(rep.employee.id)['revenue']
            user = User.objects.get(id=curManager)    
            result.append({
                'name': f'{user.first_name} {user.last_name}',
                'revenue': float(total)
            })
        return JsonResponse(result, safe=False)
    else:
        return JsonResponse([], safe=False)
    