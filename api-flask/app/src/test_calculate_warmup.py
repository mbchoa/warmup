import unittest
from calculate_warmup import round5, calculate

class TestCalculateWarmupMethods(unittest.TestCase):

    def test_round5(self):
        self.assertEqual(round5(24.23), 25)

    def test_calculate(self):
        self.assertEqual(calculate(100), {
            'first_set': 40,
            'second_set': 60,
            'third_set': 80
        })

if __name__ == '__main__':
    unittest.main()
