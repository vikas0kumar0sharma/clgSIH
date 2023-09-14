const pdfViewer = document.getElementById('pdf-viewer');
const scrollButton = document.getElementById('scroll-button');

const pdfs = ['constitution_ebgkish.pdf', 'Constitution_hindi.pdf']; // Replace with your PDF file paths
let currentIndex = 0;

scrollButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pdfs.length;
    const nextPdf = pdfs[currentIndex];
    pdfViewer.src = nextPdf;
});

// Preload the second PDF to improve loading speed when switching
const secondPdf = new Image();
secondPdf.src = pdfs[1];
