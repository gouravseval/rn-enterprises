import os
import glob
import subprocess
import shutil

# Source and Dest
SRC_DIR = 'src/assets/gallery'
TEMP_DIR = 'src/assets/gallery_temp'

# Ensure source exists
if not os.path.exists(SRC_DIR):
    print(f"Directory {SRC_DIR} not found.")
    exit(1)

# Create temp dir
if not os.path.exists(TEMP_DIR):
    os.makedirs(TEMP_DIR)

# Get files
files = glob.glob(os.path.join(SRC_DIR, '*.jpg'))
files.sort() # Sort by name (timestamp mostly)

print(f"Found {len(files)} images.")

# Move files to temp to avoid conflicts
for f in files:
    shutil.move(f, TEMP_DIR)

# Re-read from temp
files = glob.glob(os.path.join(TEMP_DIR, '*.jpg'))
files.sort()

# Process
for i, f in enumerate(files):
    new_name = f"{i+1}.jpg"
    dest_path = os.path.join(SRC_DIR, new_name)
    
    print(f"Processing {f} -> {dest_path}")
    
    # Resize using sips
    # -Z 1920 : Resample height and width, max 1920
    cmd = ['sips', '-Z', '1920', f, '--out', dest_path]
    
    try:
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL)
    except subprocess.CalledProcessError as e:
        print(f"Error processing {f}: {e}")

# Cleanup temp
try:
    shutil.rmtree(TEMP_DIR)
except Exception as e:
    print(f"Error removing temp dir: {e}")

print("Done.")
