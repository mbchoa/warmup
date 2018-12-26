def round5(num):
    return round(num * .2) * 5;

def calculate(target):
    return {
        'first_set': round5(target * 0.4),
        'second_set': round5(target * 0.6),
        'third_set': round5(target * 0.8)
    }

