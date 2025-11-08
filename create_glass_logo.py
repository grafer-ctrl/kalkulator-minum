#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a 100x100 image with white background
img = Image.new('RGB', (100, 100), 'white')
draw = ImageDraw.Draw(img)

# Draw a glass outline (rounded rectangle)
glass_top = 20
glass_bottom = 80
glass_left = 30
glass_right = 70

# Glass outline
draw.rounded_rectangle([glass_left, glass_top, glass_right, glass_bottom], 
                      radius=8, outline='#007BFF', width=3)

# Draw water inside the glass
water_top = 60
water_bottom = glass_bottom - 5
draw.rectangle([glass_left + 3, water_top, glass_right - 3, water_bottom], 
               fill='#007BFF')

# Water wave effect
import math
wave_points = []
for x in range(glass_left + 5, glass_right - 5, 2):
    y = water_top + 2 * math.sin(x * 0.3)
    wave_points.append((x, y + water_top))

if wave_points:
    draw.line(wave_points, fill='#0056B3', width=2)

# Glass highlights
draw.rounded_rectangle([glass_left + 5, glass_top + 10, glass_left + 8, glass_bottom - 5], 
                      radius=2, fill='white')

draw.rounded_rectangle([glass_right - 8, glass_top + 15, glass_right - 5, glass_bottom - 10], 
                      radius=2, fill='#AAAAAA')

# Add water drops effect
draw.ellipse([25, 15, 30, 20], fill='#007BFF', outline='#0056B3', width=1)
draw.ellipse([75, 12, 80, 17], fill='#007BFF', outline='#0056B3', width=1)
draw.ellipse([85, 25, 90, 30], fill='#7B7BFF', outline='#0056B3', width=1)

# Save the image
img.save('logo.png', 'PNG')
print("New water glass logo created successfully!")
