# Use echo to append a null byte to the end of the file
echo -n -e '\x00' >> example.txt

echo "Harmless byte added at the end of the file."
