<?php

namespace App\Services;

use Dompdf\Dompdf;
use Dompdf\Options;

class PdfServices 
{
    private $domPdf;

    public function __construct()
    {
        $this->domPdf = new Dompdf();
        $pdfOption = new Options();
        $pdfOption->set('defaultFony', 'Garamond');
        $this->domPdf->setOptions($pdfOption);
    }

    public function showPdfFile($html) {
        $this->domPdf->loadHtml($html);
        $this->domPdf->render();
        $this->domPdf->stream("details.pdf", [
            'Attachement' => true
        ]);
    }

    public function generateBinaryPDF($html) {
        $this->domPdf->loadHtml($html);
        $this->domPdf->render();
        $this->domPdf->output();
    }
}