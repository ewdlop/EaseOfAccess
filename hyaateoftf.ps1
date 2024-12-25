# Open the file in binary mode and append a single null byte
$filePath = "example.txt"
$nullByte = [byte]0

# Append the null byte to the file
Add-Content -Path $filePath -Value ([System.Text.Encoding]::ASCII.GetString([byte[]]($nullByte)))

Write-Output "Harmless byte added at the end of the file."
