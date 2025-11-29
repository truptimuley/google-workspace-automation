from PyPDF2 import PdfMerger
import sys
import os

folder = sys.argv[1] if len(sys.argv) > 1 else "."

files = sorted([
    f for f in os.listdir(folder)
    if f.lower().endswith(".pdf")
])

merger = PdfMerger()

for f in files:
    merger.append(os.path.join(folder, f))

out = "merged_output.pdf"
merger.write(out)
merger.close()
print("Saved:", out)
