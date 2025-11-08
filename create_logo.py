#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a 100x100 image with a blue background
img = Image.new('RGB', (100, 100), '#007BFF')
draw = ImageDraw.Draw(img)

# Draw a water drop shape
# Top point
top = (50, 20)
# Left and right sides
left = (30, 40)
right = (70, 40)
# Bottom
bottom = (50, 80)

# Draw the water drop
drop_points = [top, right, bottom, left]
draw.polygon(drop_points, fill='#0056B3', outline='#003d82')

# Draw water waves
draw.arc([35, 45, 65, 55], 0, 180, fill='#EBF5FF', width=3)
draw.arc([40, 55, 60, 65], 0, 180, fill='#EBF5FF', width=2)

# Add small droplets
draw.ellipse([15, 25, 20, 30], fill='#EBF5FF', outline='#0056B3')
draw.ellipse([80, 30, 85, 35], fill='#EBF5FF', outline='#0056B3')

# Save the image
img.save('logo.png', 'PNG')
print("Logo created successfully!")
