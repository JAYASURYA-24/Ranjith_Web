from PIL import Image, ImageDraw

def remove_background_flood(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Start flood fill from corners with a higher threshold to catch near-white edges
    for x, y in [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]:
        ImageDraw.floodfill(img, (x, y), (0, 0, 0, 0), thresh=30)
    
    # Optional: also remove pure white pixels that might be near the edge but not connected 
    # (risky if app has pure white, but let's try just the flood fill first with better execution)
    
    img.save(output_path, "PNG")
    print(f"Processed {input_path} -> {output_path}")
    print(f"Alpha channel extrema: {img.getextrema()[3]}")

if __name__ == "__main__":
    remove_background_flood('src/assets/mobile_app.png', 'src/assets/mobile_app_no_bg.png')
