#!/usr/bin/env python3
# merge_with_pagenums.py
# usage: python merge_with_pagenums.py out.pdf in1.pdf in2.pdf ...

import sys
import tempfile
from pathlib import Path
from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO

def make_page_number_pdf(page_width, page_height, page_num, total, footer_y=20):
    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(page_width, page_height))
    text = f"{page_num} / {total}"
    # small, centered footer
    c.setFont("Helvetica", 9)
    c.drawCentredString(page_width / 2, footer_y, text)
    c.save()
    packet.seek(0)
    return PdfReader(packet)

def overlay_page(base_page, overlay_reader):
    overlay_page = overlay_reader.pages[0]
    base_page.merge_page(overlay_page)
    return base_page

def merge_with_pagenums(output_path, input_paths):
    writers = PdfWriter()
    readers = [PdfReader(str(p)) for p in input_paths]
    # compute total pages
    total_pages = sum(len(r.pages) for r in readers)
    cur = 1
    for r in readers:
        for p in r.pages:
            # create overlay with same size
            media = p.mediabox
            w = float(media.width)
            h = float(media.height)
            overlay = make_page_number_pdf(w, h, cur, total_pages)
            p = overlay_page(p, overlay)
            writers.add_page(p)
            cur += 1
    with open(output_path, "wb") as f:
        writers.write(f)
    print(f"Saved merged file: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python merge_with_pagenums.py out.pdf in1.pdf in2.pdf ...")
        sys.exit(1)
    out = sys.argv[1]
    inputs = [Path(p) for p in sys.argv[2:]]
    merge_with_pagenums(out, inputs)

