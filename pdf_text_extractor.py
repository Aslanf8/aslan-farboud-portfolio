#!/usr/bin/env python3
"""
PDF Text Extractor using PyMuPDF
Extracts all text from SAA_STD_DS.pdf and saves it to a text file.
"""

import fitz  # PyMuPDF
import os
import sys

def extract_text_from_pdf(pdf_path, output_path=None):
    """
    Extract text from a PDF file using PyMuPDF.
    
    Args:
        pdf_path (str): Path to the PDF file
        output_path (str, optional): Path to save the extracted text. 
                                   If None, saves as pdf_name_extracted.txt
    
    Returns:
        str: Extracted text from the PDF
    """
    
    # Check if PDF file exists
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file '{pdf_path}' not found!")
        return None
    
    try:
        # Open the PDF file
        pdf_document = fitz.open(pdf_path)
        
        # Initialize text container
        full_text = ""
        
        print(f"Processing PDF: {pdf_path}")
        print(f"Total pages: {len(pdf_document)}")
        
        # Extract text from each page
        for page_num in range(len(pdf_document)):
            page = pdf_document.load_page(page_num)
            text = page.get_text()
            
            # Add page separator
            full_text += f"\n--- Page {page_num + 1} ---\n"
            full_text += text
            
            print(f"Processed page {page_num + 1}/{len(pdf_document)}")
        
        # Close the PDF document
        pdf_document.close()
        
        # Determine output file path
        if output_path is None:
            base_name = os.path.splitext(os.path.basename(pdf_path))[0]
            output_path = f"{base_name}_extracted.txt"
        
        # Save extracted text to file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(full_text)
        
        print(f"\nText extraction completed!")
        print(f"Extracted text saved to: {output_path}")
        print(f"Total characters extracted: {len(full_text)}")
        
        return full_text
        
    except Exception as e:
        print(f"Error extracting text from PDF: {str(e)}")
        return None

def main():
    """Main function to run the PDF text extractor."""
    
    # PDF file path
    pdf_file = "SAA_STD_DS.pdf"
    
    # Extract text from PDF
    extracted_text = extract_text_from_pdf(pdf_file)
    
    if extracted_text:
        print("\nFirst 500 characters of extracted text:")
        print("-" * 50)
        print(extracted_text[:500])
        print("-" * 50)
        
        # Optionally, you can also print all text to console
        # Uncomment the next line if you want to see all text in console
        # print(extracted_text)
    
    else:
        print("Failed to extract text from PDF.")
        sys.exit(1)

if __name__ == "__main__":
    main() 