import sys
from pathlib import Path
from PyPDF2 import PdfReader, PdfWriter

def split_pdf(src_path, out_dir):
    reader = PdfReader(str(src_path))
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    for i, page in enumerate(reader.pages, start=1):
        writer = PdfWriter()
        writer.add_page(page)
        out_file = out_dir / f"{src_path.stem}_page_{i:03d}.pdf"
        with open(out_file, "wb") as f:
            writer.write(f)
    print("Split complete, files in:", out_dir)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python split_pdf.py input.pdf out_dir")
        sys.exit(1)
    split_pdf(Path(sys.argv[1]), sys.argv[2])
