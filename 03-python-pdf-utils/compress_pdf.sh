if [ "$#" -ne 2 ]; then
  echo "Usage: $0 input.pdf output.pdf"
  exit 1
fi

IN="$1"
OUT="$2"

# Ghostscript compress (medium quality)
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH -sOutputFile="$OUT" "$IN"

echo "Compressed saved to $OUT"
